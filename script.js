const buttons = document.getElementById('buttons');
const num1Box = document.getElementById('num1');
const totalBox = document.getElementById('total');
const equalsBut = document.getElementById('enter');
const addBut = document.getElementById('add');
const subtractBut = document.getElementById('subtract');
const multiplyBut = document.getElementById('multiply');
const divideBut = document.getElementById('divide');

var op = null; 
var num2 = 0;

buttonFunction();

/*All mathmatical operations*/
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
            num1Box.textContent = num1Box.textContent + button.innerHTML;
            console.log(button.innerHTML);
        })
    }
    addBut.addEventListener("mouseup", function(){
        op = "+"
        totalBox.textContent = totalBox.textContent + ' ' + num1Box.textContent + ' ' + op;
        num2 = num1Box.textContent
        num1Box.textContent = ""
    })
    subtractBut.addEventListener("mouseup", function(){
        op = "-"
        totalBox.textContent = totalBox.textContent + ' ' + num1Box.textContent + ' ' + op;
        num2 = num1Box.textContent
        num1Box.textContent = ""
    })
    multiplyBut.addEventListener("mouseup", function(){
        op = "*"
        totalBox.textContent = totalBox.textContent + ' ' + num1Box.textContent + ' ' + op;
        num2 = num1Box.textContent
        num1Box.textContent = ""
    })
    divideBut.addEventListener("mouseup", function(){
        op = "/"
        totalBox.textContent = totalBox.textContent + ' ' + num1Box.textContent + ' ' + op;
        num2 = num1Box.textContent
        num1Box.textContent = ""
    })
    equalsBut.addEventListener("mouseup" , () => num1Box.textContent = operate(num2, num1Box.textContent,op));
}

/* Chooses which operation to use and returns it*/
function operate(a,b,op){
    a = parseInt(a);
    b = parseInt(b);
    if(op == "+"){
        return add(a,b);
    }else if(op =="-"){
        return subtract(a,b);
    }else if(op == "*"){
        return multiply(a,b);
    }else if (op == "/"){
        return divide(a,b);
    }else{
        return null;
    }
}
