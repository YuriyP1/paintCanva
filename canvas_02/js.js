

let canvas = document.getElementById('c1');
let ctx = canvas.getContext('2d');

ctx.beginPath(); //РАЗДЕЛЯЕТ ЭЛЕМЕНТЫ КАНВАС
ctx.moveTo(100, 100); //Рисуем перо, начальная точко координат
ctx.lineTo(200, 200); //Точка в которую идет линия
ctx.lineWidth = '5';//Ширина линии
ctx.strokeStyle = 'red'; // Цвет задаем перед отрисовкой
ctx.stroke();//Отрисовывем линию

ctx.beginPath(); //РАЗДЕЛЯЕТ ЭЛЕМЕНТЫ КАНВАС
ctx.strokeStyle = 'blue';
ctx.moveTo(100, 100);
ctx.lineTo(0,200);
ctx.lineTo(300,50);
ctx.lineTo(300, 100);
ctx.lineCap = 'round' //Округляет края. Так же есть sqare, - добавлет прямоугольник с краев
ctx.stroke();
//Все стираем
ctx.clearRect(0,0,400,200);
//Рисуем равнобедренный треугольник

ctx.beginPath(); 
ctx.moveTo(100, 150);
ctx.lineTo(200,50);
ctx.lineTo(300,150);
ctx.closePath();//Замыкает контур
ctx.fill();
ctx.stroke();


