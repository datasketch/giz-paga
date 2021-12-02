import { normalizeCoreGroup, normalizeCounterparts, normalizeEntities } from './utils/normalize';

const apiTokenInput = document.getElementById('api-token');
const apiHostInput = document.getElementById('api-host');

const apiToken = apiTokenInput.value;
const apiHost = apiHostInput.value.endsWith('/') ? apiHostInput.value.slice(0, -1) : apiHostInput.value;

apiTokenInput.remove();
apiHostInput.remove();

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

(async () => {
  if (!apiToken && !apiHost) {
    // eslint-disable-next-line no-alert
    alert('Se ha producido un error. Contacte al administrador del sitio web');
    return;
  }

  const formUrlInput = document.getElementById('form-url');
  const formTypeInput = document.getElementById('form-type');
  const formSlugInput = document.getElementById('form-slug');
  const formUrl = formUrlInput.value;
  const formType = formTypeInput.value;
  const formSlug = formSlugInput.value;

  formTypeInput.remove();
  formUrlInput.remove();
  formSlugInput.remove();

  try {
    const form = await window.Formio.createForm(document.getElementById('form'), formUrl);
    form.on('submit', async (submission) => {
      const data = getNormalizedData(submission.data, formType);
      save(data, formSlug).then(() => {
        document.location.reload();
      }).catch((err) => {
        // eslint-disable-next-line no-alert
        alert('Se ha presentado un error');
        // eslint-disable-next-line no-console
        console.error(err);
      });
    });
  } catch (error) {
    // eslint-disable-next-line no-alert
    alert('Se ha presentado un error');
    // eslint-disable-next-line no-console
    console.error(error);
  }
})();
