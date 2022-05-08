const buttonDownload = document.querySelector('.button-download');
const buttonDownloadLink = document.querySelector('.button-download--link');
const modalTrigger = Array.from(document.querySelectorAll('[data-modal]'));

/**
 *
 * @param {HTMLElement} el
 */
const fadeIn = (el) => {
  // eslint-disable-next-line no-param-reassign
  el.style.opacity = 0;

  const tick = () => {
    // eslint-disable-next-line no-param-reassign
    el.style.opacity = +el.style.opacity + 0.1;
    if (+el.style.opacity < 1) {
      if (window.requestAnimationFrame) requestAnimationFrame(tick);
      else setTimeout(tick, 16);
    }
  };

  tick();
};

const escapeHandler = (event, container) => {
  if (event.key === 'Escape' || event.keyCode === 27) {
    container.classList.add('hidden');
    window.removeEventListener('keyup', escapeHandler);
  }
};

buttonDownload.addEventListener('click', () => {
  buttonDownloadLink.classList.toggle('hidden');
});

modalTrigger.forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const id = trigger.dataset.modal;
    const container = document.getElementById(id);
    const dismiss = container.querySelector('[data-dismiss]');
    container.addEventListener('click', (event) => {
      if (event.target === this) container.classList.add('hidden');
    });
    dismiss.addEventListener('click', () => {
      container.classList.add('hidden');
    });
    container.classList.remove('hidden');
    fadeIn(container);
    window.addEventListener('keyup', (e) => {
      escapeHandler(e, container);
    });
  });
});
