const addContactsMap = () => {
  let ymaps;
  if (document.querySelector('#map')) {
    document.querySelector('#map').querySelector('picture').remove();
    ymaps.ready(function () {
      let myMap = new ymaps.Map('map', {
        center: [55.775748, 37.628541],
        zoom: 9,
      }, {
        searchControlProvider: 'yandex#search',
      });

      let myPlacemark = new ymaps.Placemark([55.774888415546656, 37.632586886490785], {
        hintContent: 'LifeTour - организация походов в горы',
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: './img/svg/map-pin.svg',
        // Размеры метки.
        iconImageSize: [48, 48],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38],
      });

      myMap.geoObjects
          .add(myPlacemark);
    });
  }
}
;

export {addContactsMap};
