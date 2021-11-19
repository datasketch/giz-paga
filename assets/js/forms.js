import { Formio } from 'formiojs';
import { normalizeCoreGroup, normalizeCounterparts, normalizeEntities } from './utils/normalize';

async function save(data, slug) {
  const url = `https://giz.datasketch.co/nc/paga_u6ms/api/v1/${slug}`;
  const body = Array.isArray(data) ? data : [data];
  const response = await fetch(url, {
    method: 'post',
    headers: {
      'xc-auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhdmlkQGRhdGFza2V0Y2guY28iLCJmaXJzdG5hbWUiOm51bGwsImxhc3RuYW1lIjpudWxsLCJpZCI6MSwicm9sZXMiOiJ1c2VyIiwiaWF0IjoxNjM2NjY2MTI2fQ.4gkh6aNybTZITaFJS2tdDZm7--wveS1LzWcxCeAivXg',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
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
    const form = await Formio.createForm(document.getElementById('form'), formUrl);
    form.on('submit', async (submission) => {
      console.log(submission.data);
      console.log('---');
      const data = getNormalizedData(submission.data, formType);
      console.log(data);
      // save(data, formSlug).then(() => {
      //   form.resetValue();
      // }).catch(console.error);
    });
  } catch (error) {
    console.error(error);
  }
})();
