// Video zoom functionality
$(document).ready(function () {
  // Create video modal HTML
  const videoModalHTML = `
    <div id="video-zoom-modal" class="video-zoom-modal" style="display: none;">
      <div class="video-zoom-backdrop" onclick="closeVideoModal()"></div>
      <div class="video-zoom-content">
        <button class="video-zoom-close" onclick="closeVideoModal()">&times;</button>
        <video id="video-zoom-player" controls preload="metadata" style="max-width: 90vw; max-height: 90vh;">
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  `;

  // Add modal to body
  $("body").append(videoModalHTML);

  // Add CSS styles
  const videoModalCSS = `
    <style>
      .video-zoom-modal {
        position: fixed;
        z-index: 9999;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      
      .video-zoom-modal.show {
        opacity: 1;
      }
      
      .video-zoom-backdrop {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
      }
      
      .video-zoom-content {
        position: relative;
        z-index: 2;
        max-width: 90vw;
        max-height: 90vh;
      }
      
      .video-zoom-close {
        position: absolute;
        top: -40px;
        right: 0;
        background: none;
        border: none;
        color: white;
        font-size: 30px;
        font-weight: bold;
        cursor: pointer;
        z-index: 3;
        padding: 5px 10px;
        border-radius: 3px;
        transition: background-color 0.2s;
      }
      
      .video-zoom-close:hover {
        background-color: rgba(255, 255, 255, 0.2);
      }
      
      .video-preview-container {
        position: relative;
        display: inline-block;
        cursor: pointer;
        transition: transform 0.2s ease;
      }
      
      .video-preview-container:hover {
        transform: scale(1.05);
      }
      
      .video-preview-play-button {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(255, 255, 255, 0.9);
        border: none;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 16px;
        transition: all 0.2s ease;
        pointer-events: none;
      }
      
      .video-preview-container:hover .video-preview-play-button {
        background: rgba(255, 255, 255, 1);
        transform: translate(-50%, -50%) scale(1.1);
      }
      
      .video-preview {
        pointer-events: none;
      }
    </style>
  `;

  $("head").append(videoModalCSS);

  // Handle video preview clicks
  $(document).on("click", ".video-preview-container", function (e) {
    e.preventDefault();
    const videoSrc = $(this).find("video").attr("src");
    openVideoModal(videoSrc);
  });

  // Close modal with Escape key
  $(document).keydown(function (e) {
    if (e.keyCode === 27) {
      // Escape key
      closeVideoModal();
    }
  });
});

function openVideoModal(videoSrc) {
  const modal = $("#video-zoom-modal");
  const player = $("#video-zoom-player");

  player.attr("src", videoSrc);
  modal.css("display", "flex");

  // Trigger animation after display is set
  setTimeout(() => {
    modal.addClass("show");
  }, 10);

  // Prevent body scroll
  $("body").css("overflow", "hidden");
}

function closeVideoModal() {
  const modal = $("#video-zoom-modal");
  const player = $("#video-zoom-player");

  modal.removeClass("show");

  setTimeout(() => {
    modal.hide();
    player.attr("src", "");
    player[0].load(); // Reset video
  }, 300);

  // Restore body scroll
  $("body").css("overflow", "auto");
}
