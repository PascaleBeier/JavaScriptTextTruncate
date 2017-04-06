document.addEventListener('DOMContentLoaded', function () {
  let elements = document.querySelectorAll('[data-text-truncate]');

  for (let element of elements) {
    let length = element.getAttribute('data-text-truncate-after') || 100;
    let seperator = element.getAttribute('data-text-truncate-seperator') || '...';

    if (element.textContent.length > length) {
      element.textContent = element.textContent.substr(0, length) + seperator;
    }
  }
});
