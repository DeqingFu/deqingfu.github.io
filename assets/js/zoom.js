// Initialize medium zoom.
$(document).ready(function () {
  // Update src to data-zoom-src for zoomable images to show original quality
  $("[data-zoomable][data-zoom-src]").each(function() {
    $(this).attr("src", $(this).attr("data-zoom-src"));
  });
  
  medium_zoom = mediumZoom("[data-zoomable]", {
    background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee", // + 'ee' for trasparency.
  });
});
