ymaps.ready(init);//вызов init когда страница готова
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", { 	//id блока
        center: [54.989342, 73.368212],	//координаты
        zoom: 7,						//уровень зума
        controls:[]						//добавление элементов управления
    });
}
//Создание WebSocket
let socket = new WebSocket("ws://192.168.43.195:12345");
//Отправка запроса на сервер
socket.onopen = function() {
	socket.send(`["PointRequest"]`)
};
//Получение ответа от сервера
socket.onmessage = function (reply) {
	    $.getJSON(reply.data)
        .done(function (geoJson) {
            objectManager.add(geoJson);// Добавляем описание объектов в формате JSON в менеджер объектов
            myMap.geoObjects.add(objectManager);// Добавляем объекты на карту
        });
}