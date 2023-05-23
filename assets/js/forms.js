import { normalizeCoreGroup, normalizeCounterparts, normalizeEntities } from './utils/normalize';

const container = document.getElementById('container');
const loginForm = document.getElementById('login-form');
const loggedIn = document.getElementById('logged-in');
const loginError = document.getElementById('login-error');
const apiTokenInput = document.getElementById('api-token');
const apiHostInput = document.getElementById('api-host');
const formComponents = document.getElementById('form-components');

const apiToken = apiTokenInput.value;
const apiHost = apiHostInput.value.endsWith('/') ? apiHostInput.value.slice(0, -1) : apiHostInput.value;
const components = JSON.parse(formComponents.value);

apiTokenInput.remove();
apiHostInput.remove();
formComponents.remove();

const loggedInRef = loggedIn;

loggedIn.remove();

function showLoginError() {
  const emailInput = loginForm.elements.namedItem('email');
  const passwordInput = loginForm.elements.namedItem('password');
  passwordInput.value = '';
  emailInput.focus();
  loginError.classList.remove('hidden');
}

async function save(data, slug) {
  const url = `${apiHost}/${slug}`;
  const response = await fetch(url, {
    method: 'post',
    headers: {
      'xc-auth': apiToken,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response;
}

async function login(data) {
  loginError.classList.add('hidden');
  const url = `${apiHost}/Usuarios`;
  const response = await fetch(url, { headers: { 'xc-auth': apiToken } });
  if (!response.ok) {
    return showLoginError();
  }
  const formSlugInput = document.getElementById('form-slug');
  const formSlug = formSlugInput.value;
  const users = await response.json();
  const user = users.find((u) => u.email === data.email
    && u.password === data.password
    && u.grupo.toLowerCase() === formSlug.toLowerCase() && !u.inactivo);
  if (!user) {
    return showLoginError();
  }
  return true;
}

function getNormalizedData(submission, type) {
  let data;
  switch (type) {
    case 'entities':
      data = normalizeEntities(submission);
      break;
    case 'counterparts':
      data = normalizeCounterparts(submission);
      break;
    case 'core':
      data = normalizeCoreGroup(submission);
      break;
    default:
      break;
  }
  return data;
}

async function onLoggedIn() {
  loginForm.remove();
  container.appendChild(loggedInRef);
  loggedInRef.classList.remove('hidden');

  const formTypeInput = document.getElementById('form-type');
  const formSlugInput = document.getElementById('form-slug');
  const formType = formTypeInput.value;
  const formSlug = formSlugInput.value;

  formTypeInput.remove();
  formSlugInput.remove();

  try {
    const form = await window.Formio.createForm(document.getElementById('form'), {
      components,
    });
    form.on('submit', async (submission) => {
      const data = getNormalizedData(submission.data, formType);
      save(data, formSlug).then(() => {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
        form.resetValue();
        alert('Los datos han sido guardados');
        // document.location.reload();
      }).catch((err) => {
        alert('Se ha presentado un error');
        console.error(err);
      });
    });
  } catch (error) {
    alert('Se ha presentado un error');
    console.error(error);
  }
}

(() => {
  if (!apiToken && !apiHost) {
    alert('Se ha producido un error. Contacte al administrador del sitio web');
    return;
  }

  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = loginForm.elements.namedItem('email').value;
    const password = loginForm.elements.namedItem('password').value;
    const success = await login({ email, password });
    if (success) onLoggedIn();
  });
})();
