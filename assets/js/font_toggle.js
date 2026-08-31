// Toggle between serif (EB Garamond) and sans (Figtree).
(function () {
  const STORAGE_KEY = 'fontPref'; // 'serif' | 'sans'

  function readStoredPref() {
    try {
      const pref = localStorage.getItem(STORAGE_KEY);
      return pref === 'sans' || pref === 'serif' ? pref : null;
    } catch (e) {
      return null;
    }
  }

  function writeStoredPref(pref) {
    try {
      localStorage.setItem(STORAGE_KEY, pref);
    } catch (e) {}
  }

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
        // - serif (EB Garamond) -> Taro
        // - sans (Figtree)     -> Yolk
        const src = pref === 'sans'
          ? `${base}/assets/img/logo_yolk_nav.png`
          : `${base}/assets/img/logo_taro_nav.png`;
        if (img.getAttribute('src') !== src) {
          img.setAttribute('src', src);
        }
      }
    }
  }

  function getPref() {
    return readStoredPref() || 'sans';
  }

  function setPref(p) {
    writeStoredPref(p);
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
    btn.addEventListener('click', function () {
      const next = getPref() === 'serif' ? 'sans' : 'serif';
      setPref(next);
    });
  });
})();
