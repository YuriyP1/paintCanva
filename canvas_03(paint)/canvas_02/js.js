
//Canvas
let canvas = document.getElementById('c1');
let canvasCleaner = document.getElementById('c2');
let ctx = canvas.getContext('2d');
let ctx2 = canvasCleaner.getContext('2d');
//Canvas 
let myColor = 'black';
let btn = '';
let sizeCleaner = 10;
let sizePaint = 10;

let color = document.getElementById('color').oninput = function(){
    myColor = this.value;
}

let cleaner = document.getElementById('cleaner').onclick = function(){
    btn = 'cleaner';
}
let paint = document.getElementById('paint').onclick = function(){
    btn = 'paint';
}

canvas.onmousedown = function(event){

    switch (btn){
        case 'paint':
            canvas.onmousemove = function(event){
            var x = event.offsetX;
            var y = event.offsetY;

            ctx.fillStyle = myColor;
            ctx.fillRect(x-(sizePaint/2), y-(sizePaint/2), sizePaint, sizePaint);

            canvas.onmouseup = function(){
                canvas.onmousemove = null;
            }
        }
        break;

        case 'cleaner':
        canvas.onmousemove = function(event){
            var x = event.offsetX;
            var y = event.offsetY;

            ctx.clearRect(x-(sizeCleaner/2), y-(sizeCleaner/2), sizeCleaner, sizeCleaner);

            canvas.onmouseup = function(){
                canvas.onmousemove = null;
            }
        }
        break;
    
}
}

//--------
const body = document.body;

let cleanerDiv = document.createElement('div');
cleanerDiv.classList.add('wrapperCleaner');
let progressBarElement = `
<p>Размер ластика</p>
<input type="range" min="1" max="100" value="50" class="slider" id="myRange">
<canvas id="c2" width="100" height="100"></canvas>
`;

//поместить элемент бра пррогресс в див c слассом wrapperCleaner
// cleanerDiv.innerHTML = progressBarElement;





let sizeCleanerBtn = document.getElementById('sizeCleaner').onclick = function(){
    
    // let ctxCleaner = canvasCleaner.getContext('2d');
    
    if(document.getElementById('myRange')){
        console.log('элемент существует')
        document.querySelector('.wrapperCleaner').remove();
    }else{
        console.log('элемент создается')
        body.insertAdjacentElement('beforebegin',cleanerDiv );
    cleanerDiv.innerHTML = progressBarElement;
    }


    let setSizeCleanerBtn = document.getElementById('myRange').onmouseover = function(){
        document.getElementById("myRange").addEventListener("change", function() {
            console.log(this.value);
            sizeCleaner = this.value;
            ctx2.clearRect(0, 0, 100, 100)
            ctx2.fillRect(10, 10, sizeCleaner, sizeCleaner)
          });
    }
    
   

}




console.log(cleanerDiv);
