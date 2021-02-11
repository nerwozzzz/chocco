let myMap;

const init = () => {
    myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 11
    });

    const coords = [
        [55.749726, 37.584359]
        [55.722543, 37.566889]

    ];

    const myCollection = new ymaps.GeoObjectCollection({}, {
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref: "./img/rrr.svg",
        iconImageSize: [46, 57],
        iconImageOffset: [-35, -52]
    });

    coords.forEach(coord => {
        myCollection.add(new ymaps.Placemark(coord));
    });

    myMap.geoObjects.add(myCollection);
}

ymaps.ready(init);