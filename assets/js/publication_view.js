(function () {
  const STORAGE_KEY = 'publicationView';
  const DEFAULT_VIEW = 'compact';
  const root = document.documentElement;

  function readView() {
    try {
      const storedView = localStorage.getItem(STORAGE_KEY);
      return storedView === 'compact' || storedView === 'images' ? storedView : DEFAULT_VIEW;
    } catch (_) {
      return DEFAULT_VIEW;
    }
  }

  function storeView(view) {
    try {
      localStorage.setItem(STORAGE_KEY, view);
    } catch (_) {
      // The toggle still works for this page when storage is unavailable.
    }
  }

  function applyView(view) {
    const compact = view === 'compact';
    root.dataset.publicationView = compact ? 'compact' : 'images';
    document.querySelectorAll('[data-publication-view-toggle]').forEach(function (button) {
      button.setAttribute('aria-pressed', String(compact));
      const label = button.querySelector('.publication-view-label');
      if (label) label.textContent = compact ? 'Show images' : 'Hide images';
    });
  }

  const initialView = readView();
  root.dataset.publicationView = initialView;

  function init() {
    applyView(readView());
    document.querySelectorAll('[data-publication-view-toggle]').forEach(function (button) {
      button.addEventListener('click', function () {
        const nextView = root.dataset.publicationView === 'compact' ? 'images' : 'compact';
        applyView(nextView);
        storeView(nextView);
      });
    });
    root.classList.add('publication-view-js');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.addEventListener('storage', function (event) {
    if (event.key === STORAGE_KEY) {
      applyView(event.newValue === 'compact' || event.newValue === 'images' ? event.newValue : DEFAULT_VIEW);
    }
  });
})();
