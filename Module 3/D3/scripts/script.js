window.addEventListener(`DOMContentLoaded`, () => {
  document.querySelectorAll(`nav a`).forEach(link => {
    if (link.href === window.location.href) {
      link.setAttribute(`aria-current`, `page`);
    }
  })
});

