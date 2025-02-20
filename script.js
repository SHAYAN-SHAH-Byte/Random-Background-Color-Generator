let heading = document.querySelector('#heading');
let btn = document.querySelector('#next');
let colorCode = document.querySelector('#para');
let body = document.querySelector('body');

//rgb values are between 0 and 255

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
    }//safety check
})

//Code for hex values

let hex = document.querySelector('#hex');

const changeHexColor = function (){
    // let hexColor = Math.floor(Math.random()*16777215).toString(16);//method 1
    let hexCode = "0123456789ABCDEF";
    let hexColor = "#";
     for (i = 0 ; i < 6;i++){
            hexColor += hexCode[Math.floor(Math.random()*16)];//method 2
     }
    return hexColor;
}

hex.addEventListener("click", (e)=>{
    let color = changeHexColor();
    
    body.style.backgroundColor = color;
    if (colorCode) {
        colorCode.innerText = `${color}`;
    }//safety check
    
})

