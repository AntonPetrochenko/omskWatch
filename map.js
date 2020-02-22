ymaps.ready(init);//вызов init когда страница готова
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", { 	//id блока
        center: [54.989342, 73.368212],	//координаты
        zoom: 7							//уровень зума
    });
}