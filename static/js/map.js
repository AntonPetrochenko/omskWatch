ymaps.ready(init);//вызов init когда страница готова
var myMap;
var objectManager
function init(){
    // Создание карты.
        myMap = new ymaps.Map("map", { 	//id блока
        center: [54.989342, 73.368212],	//координаты
        zoom: 7,						//уровень зума
        controls:[]						//добавление элементов управления
    });

        myMap.events.add(['click'], addObject);
}
//Создание WebSocket
let socket = new WebSocket("ws://192.168.43.195:12345");
//Отправка запроса на сервер
socket.onopen = function() {
	socket.send(`["PointRequest"]`)
};
//Получение ответа от сервера
socket.onmessage = function (reply) {
    console.log(reply.data)
    if (JSON.parse(reply.data).type == "FeatureCollection") {
        //console.log(reply.data);
        objectManager = new ymaps.ObjectManager();
        objectManager.add(JSON.parse(reply.data));// Добавляем описание объектов в формате JSON в менеджер объектов
        setTimeout( () => {myMap.geoObjects.add(objectManager);}, 5000 );// Добавляем объекты на карту
        // Назначаем обработчик событий на коллекцию объектов менеджера.
        objectManager.objects.events.add(['click'], onObjectEvent);
    }
    if (JSON.parse(reply.data).type == "SidebarInfo") {
      //SomethingHandler(reply.data)
      console.log(reply.data);
      printMessage(reply.data)
    }
}

function onObjectEvent (e) {
    objectId = e.get('objectId');
    onClickEvent(objectId);
};

function addObject(e){
    objectCoords = e.get('coords');
    console.log();
};
