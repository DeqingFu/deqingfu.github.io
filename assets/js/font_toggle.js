// Toggle between serif (EB Garamond) and sans (Montserrat) and persist preference
(function () {
  const STORAGE_KEY = 'fontPref'; // 'serif' | 'sans'

  function applyFont(pref) {
    const html = document.documentElement;
    if (pref === 'sans') {
      html.classList.add('font-sans');
    } else {
      html.classList.remove('font-sans');
    }

    // Update tooltip title to reflect the next action
    const btn = document.getElementById('font-toggle');
    if (btn) {
      btn.title = pref === 'sans' ? 'Switch to serif' : 'Switch to sans';
      btn.setAttribute('aria-label', btn.title);

      // Swap the toggle icon based on current state
      const img = document.getElementById('font-toggle-img');
      if (img) {
        const baseurl = btn.getAttribute('data-baseurl') || '';
        const base = baseurl.replace(/\/$/, '');
        // In current state "pref", show the icon representing the ACTIVE mode
        // - serif (EB Garamond) -> yolk
        // - sans (Montserrat)   -> taro
        const src = pref === 'sans'
          ? `${base}/assets/img/logo_yolk.png`
          : `${base}/assets/img/logo_taro.png`;
        if (img.getAttribute('src') !== src) {
          img.setAttribute('src', src);
        }
        img.setAttribute('alt', pref === 'sans' ? 'Sans font (Montserrat)' : 'Serif font (EB Garamond)');
      }
    }
  }

  function getPref() {
    const p = localStorage.getItem(STORAGE_KEY);
    if (p === 'sans' || p === 'serif') return p;
  return 'sans';
  }

  function setPref(p) {
    localStorage.setItem(STORAGE_KEY, p);
    applyFont(p);
  }

  // Initialize
  const initial = getPref();
  applyFont(initial);

  document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('font-toggle');
    if (!btn) return;
  // Ensure icon is correct after DOM is ready
  applyFont(getPref());
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const next = getPref() === 'serif' ? 'sans' : 'serif';
      setPref(next);
    });
  });
})();
