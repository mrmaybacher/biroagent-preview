(function () {
  'use strict';
  function daysLeft() {
    var end = new Date('2026-09-25T23:59:59+03:00');
    return Math.max(0, Math.ceil((end - new Date()) / 86400000));
  }
  function setDays() {
    var el = document.getElementById('ba-days');
    if (el) el.textContent = String(daysLeft());
  }
  function nextStepCopy(prefix, checked, total) {
    if (!total) return '';
    if (checked === 0) return 'Incepe cu actul care expira cel mai repede.';
    if (checked < total) return 'Iti lipsesc ' + (total - checked) + ' acte.';
    return 'Dosarul pare complet. Urmatorul pas: portalul oficial.';
  }
  function enhanceChecklists() {
    document.querySelectorAll('.checklist-list').forEach(function (list) {
      if (list.dataset.baEnhanced) return;
      list.dataset.baEnhanced = '1';
      var box = document.createElement('div');
      box.className = 'ba-next';
      box.innerHTML = '<strong>Ce faci acum</strong><span class="ba-next-text"></span>';
      list.parentElement.appendChild(box);
      function refresh() {
        var boxes = list.querySelectorAll('.checklist-checkbox');
        var checked = 0;
        boxes.forEach(function (cb) { if (cb.checked) checked += 1; });
        box.querySelector('.ba-next-text').textContent = nextStepCopy('', checked, boxes.length);
      }
      list.addEventListener('change', refresh);
      refresh();
    });
  }
  document.addEventListener('DOMContentLoaded', function () {
    setDays();
    enhanceChecklists();
  });
})();
