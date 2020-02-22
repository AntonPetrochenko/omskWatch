ymaps.ready(init);//вызов init когда страница готова
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", { 	//id блока
        center: [54.989342, 73.368212],	//координаты
        zoom: 7,						//уровень зума
        controls:[]						//добавление элементов управления
    });
    // Создание менеджера объектов
    objectManager = new ymaps.ObjectManager();
    // Загружаем GeoJSON файл с описанием объектов
    $.getJSON('data.json')
        .done(function (geoJson) {
            objectManager.add(geoJson);// Добавляем описание объектов в формате JSON в менеджер объектов
            map.geoObjects.add(objectManager);// Добавляем объекты на карту
        });
}