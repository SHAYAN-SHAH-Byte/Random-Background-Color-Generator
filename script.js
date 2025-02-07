let heading = document.querySelector('#heading');
let btn = document.querySelector('#btn');
let colorCode = document.querySelector('#para');
let body = document.querySelector('body');



 const changeColor =  function () {
    let r = Math.floor(Math.random()* 255 + 1);
    let g =  Math.floor(Math.random()* 255 + 1);
    let b =  Math.floor(Math.random()* 255 + 1);
    return `rgb(${r}, ${g}, ${b})`;
    
};



btn.addEventListener('click', ()=>{
    let color = changeColor();
    body.style.backgroundColor = color;
    if (colorCode) {
        colorCode.innerText = `${color}`;
    }
})

