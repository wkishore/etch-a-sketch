let container = document.querySelector(".container");

function createSquareGrid(side){
    let width = Math.floor(960/side);
    for(let a=0;a<side;a++){
        let rowDiv = document.createElement('div');
        rowDiv.classList.toggle('row'); 
        for(let b=0;b<side;b++){
            let elem = document.createElement('div');
            elem.classList.toggle('element');
            elem.style.cssText=` min-width:${width-2}px;min-height:${width-2}px; `;
            //elem.style.blockSize='5px';
            //elem.style.min
            rowDiv.appendChild(elem);
        }
        container.appendChild(rowDiv);

        rowDiv.addEventListener('mouseover', function(e){
            let div = e.target;
            div.style.backgroundColor = 'aqua';
            div.style.opacity = Number(div.style.opacity) +0.10;
        })
    }
}
createSquareGrid(16);

let button = document.querySelector('.header button');
button.addEventListener('click',function(e){
    let a =Number(prompt('Enter the no of boxes in a row',16));
    if(a>0 && a<=100){
        container.innerHTML='';
        createSquareGrid(a);
    }
    else{
        alert('Enter valid number');
    }
});

