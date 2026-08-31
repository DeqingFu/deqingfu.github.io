$(document).ready(function () {
  // Toggle publication disclosures and keep their accessible state in sync.
  function setDisclosureState(entry, type, expanded) {
    const panel = entry.children("." + type + ".hidden");
    const button = entry.find("button." + type + ", a." + type).first();

    panel.toggleClass("open", expanded).attr("aria-hidden", String(!expanded));
    if (expanded) {
      panel.removeAttr("inert");
    } else {
      panel.attr("inert", "");
    }
    button.attr("aria-expanded", String(expanded));
  }

  function bindDisclosure(selector, type) {
    $(selector).click(function (event) {
      event.preventDefault();
      const entry = $(this).closest(".publication-content");
      const panel = entry.children("." + type + ".hidden");
      const shouldOpen = !panel.hasClass("open");

      ["abstract", "award", "bibtex"].forEach(function (panelType) {
        setDisclosureState(entry, panelType, panelType === type && shouldOpen);
      });
    });
  }

  bindDisclosure("button.abstract, a.abstract", "abstract");
  bindDisclosure("button.award, a.award", "award");
  bindDisclosure("a.bibtex", "bibtex");
  $("a").removeClass("waves-effect waves-light");

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // remove related publications years from the TOC
    $(".publications h2").each(function () {
      $(this).attr("data-toc-skip", "");
    });
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let jupyterTheme = determineComputedTheme();

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (jupyterTheme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });

  // trigger popovers
  $('[data-toggle="popover"]').popover({
    trigger: "hover",
  });
});
