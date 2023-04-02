const buttons = document.getElementById('buttons');
const num1 = document.getElementById('num1');
const totalbox = document.getElementById('total');
const equalsBut = document.getElementById('enter');
const addBut = document.getElementById('add');
const subtractBut = document.getElementById('subtract');
const multiplyBut = document.getElementById('multiply');
const divideBut = document.getElementById('divide');

var op = null; 

buttonFunction();

function add(a,b){
    return (a + b);
}

function subtract(a,b){
    return (a - b);
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b; 
}

/*Function adds all event listeners to buttons*/
function buttonFunction(){
    for(i = 0; i < 10;i++){
        const button = document.getElementById(i);
        button.addEventListener("mouseup" , function(){
            num1.textContent = num1.textContent + button.innerHTML;
            console.log(button.innerHTML);
        })
    }
    addBut.addEventListener("mouseup" , () => op = "+")
    subtractBut.addEventListener("mouseup" , () => op = "-")
    addBut.addEventListener("mouseup" , () => op = "+")
    addBut.addEventListener("mouseup" , () => op = "+")
    equalsBut.addEventListener("mouseup" , () => console.log(op));
}

function operate(a,b,op){

}
