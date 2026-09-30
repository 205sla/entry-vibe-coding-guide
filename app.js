// Copy buttons: copy the text of the <pre> named by data-target.
// navigator.clipboard needs a secure context (https or localhost); the
// textarea fallback covers file:// previews and older browsers.
(function () {
  var toast = document.querySelector('.toast');
  var toastTimer;

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('show'); }, 1800);
  }

  function fallbackCopy(text) {
    var area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
    document.body.removeChild(area);
    return ok;
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).then(
        function () { return true; },
        function () { return fallbackCopy(text); }
      );
    }
    return Promise.resolve(fallbackCopy(text));
  }

  document.querySelectorAll('.copy').forEach(function (button) {
    var label = button.textContent;
    button.addEventListener('click', function () {
      var source = document.getElementById(button.dataset.target);
      copyText(source.textContent).then(function (ok) {
        if (ok) {
          button.textContent = '복사됨';
          button.classList.add('done');
          showToast('프롬프트를 복사했어요. AI 대화창에 붙여 넣으세요.');
          setTimeout(function () {
            button.textContent = label;
            button.classList.remove('done');
          }, 1800);
        } else {
          showToast('복사하지 못했어요. 글자를 직접 선택해 복사해 주세요.');
        }
      });
    });
  });
})();
