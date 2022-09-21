

let canvas = document.getElementById('c1');

//
let ctx = canvas.getContext('2d');

ctx.fillStyle = 'red';
//Рисуем, заливаем прямоугольник
ctx.fillRect(100, 50, 150, 75); //Создает прямоугольник залитым цветом    // -- имеет 4 атрибута
ctx.fillStyle = 'blue';

ctx.fillRect(150, 100, 140, 75);

//Как все очистить ? 
ctx.clearRect(0,0,400,200);

//Сосздать просто прямоугольник
ctx.rect(150, 100, 140, 75);
ctx.strokeStyle ='green'; //Заливка, нужно делать перед созданием отрисовки
ctx.lineWidth = '20';
ctx.fillStyle = 'red'; // переопределили заливку
ctx.fill(); // Заливка, цвет заливки последний который указывали
ctx.stroke(); // Даем команду на отрисовку
