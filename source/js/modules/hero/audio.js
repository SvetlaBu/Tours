const addAudioPlayer = () => {
  if (document.querySelector('.audio')) {
    const root = document.querySelector('.audio');
    const button = document.getElementById('audio__play');
    const iframe = `
    <iframe seamless id='iframe' frameborder="0" style="border:none;width:340px;height:220px;" width="340" height="220" src="${button.dataset.src}?autoplay=0">Слушайте <a href='${button.dataset.src}'>Про код</a> на Яндекс Музыке</iframe>
  `;

    button.addEventListener('click', () => {
      root.classList.add('audio--play');
      root.innerHTML = iframe;
    }, {once: true});
  }
  return null;
};

export {addAudioPlayer};
