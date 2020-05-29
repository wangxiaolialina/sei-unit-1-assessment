
/*----- constants -----*/
const INITIALPOINT = 0;
const INITIALINPUT = 1;
/*----- app's state (variables) -----*/
let pointNum = INITIALPOINT;
let inputNum = INITIALINPUT;
/*----- cached element references -----*/
let pointEl = document.querySelector('.points');
let inputEl = document.querySelector('.input');
let plusButton = document.querySelector('.plus-sign')
let minusButton = document.querySelector('.minus-sign')

/*----- event listeners -----*/

plusButton.addEventListener('click',plusCal);
minusButton.addEventListener('click',minusCal);




/*----- functions -----*/

function initiallize(){
pointEl.innerHTML = pointNum;
inputEl.value= inputNum;
}
initiallize();

function plusCal(){
    if (isNaN(inputEl.value)){
        return;
    } else{pointNum = parseInt(inputEl.value) + pointNum;
     pointEl.innerHTML = pointNum;
     colorChange();
     }
}

function minusCal(){
    if (isNaN(inputEl.value)){
        return;
    } else{ pointNum = pointNum - parseInt(inputEl.value);
     pointEl.innerHTML = pointNum;
     colorChange();
    }
}

function colorChange(){
    if (pointNum<0){
        pointEl.style.color='red';
    }else{
        pointEl.style.color='black'
    }
}


