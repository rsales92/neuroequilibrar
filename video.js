const mobile = window.matchMedia('(max-width: 650px)');
const video = document.querySelector('#intro-video');
const cover = document.querySelector('#video-cover');
const playButton = document.querySelector('#play-video');

playButton.addEventListener('click', () => {
  video.src = mobile.matches ? 'media/vertical.mp4' : 'media/horizontal.mp4';
  cover.hidden = true;
  playButton.hidden = true;
  video.hidden = false;
  video.focus();
  video.play().catch(() => {
    // Native controls remain available if the browser blocks playback.
  });
});

mobile.addEventListener('change', () => {
  if (video.hidden) return;
  video.pause();
  video.removeAttribute('src');
  video.load();
  video.hidden = true;
  cover.hidden = false;
  playButton.hidden = false;
});
