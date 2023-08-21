const findVideos = () => {
  let video = document.getElementById('video');

  if (video) {
    setupVideo(video);
  }
};

const setupVideo = (video) => {
  let link = document.getElementById('video-on');
  let button = document.getElementById('video-button');

  video.addEventListener('click', () => {
    let iframe = createIframe();

    link.remove();
    button.remove();
    video.appendChild(iframe);
    video.classList.add('hero__video--active');
  }, {once: true});

  video.classList.add('hero__video--enabled');
};

const createIframe = () => {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?rel=0&showinfo=0&fs=1&modestbranding=1&color=white&autoplay=1');
  iframe.classList.add('hero__preview');

  return iframe;
};

export {findVideos};
