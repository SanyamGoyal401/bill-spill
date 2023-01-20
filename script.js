const input = document.getElementById('input')
const button = document.querySelectorAll('.btn')
const errorBill = document.getElementById('errorBill')
const errorPerson = document.getElementById('errorPerson')
const people = document.getElementById('people')
const tip = document.getElementById('tipValue')
const total = document.getElementById('total')
const reset = document.querySelector('.reset')

let billVal = 0;
let peopleVal = 1;
let tipVal = 0;


input.addEventListener('input', setBillVal)
people.addEventListener('input',setPeopleVal)
reset.addEventListener('click',handleReset);



button.forEach(btn => {
    btn.addEventListener('click',handleClick)
});



function handleClick(event){
    button.forEach(btn => {
        if(event.target.innerHTML === btn.innerHTML){
            tipVal = parseFloat(btn.innerHTML)/100;
            console.log(tipVal)
        }
    })
}


function setPeopleVal(){
    peopleVal = parseFloat(people.value)
    if(peopleVal <= 0 || peopleVal == NaN) {
        errorPerson.innerHTML = `People can't be zero`;
        setTimeout(function(){
            errorPerson.innerHTML = '';
            people.value = 1;
        },2000)   
    }
    else{
        console.log(peopleVal);
        reset.textContent = 'GENERATE';
    }
}
function setBillVal(){
    billVal = parseFloat(input.value);
    if(billVal < 0 || billVal == NaN){
        errorBill.innerHTML = `Bill value can't be negative`;
        setTimeout(function(){
            errorBill.innerHTML = '';
            input.value = 0;
        },2000)
        billVal = 0;
    }
    else{
        console.log(billVal);
        reset.textContent = 'GENERATE';
    }
}

function calculate() {
    if(peopleVal >= 1 ) {
        let tipperson = billVal * tipVal / peopleVal;
        let totalAmount = (billVal + (billVal * tipVal)) / peopleVal;
        //console.log('tip = ' + tip);
        //console.log('total = ' + totalAmount);
        tip.innerHTML = '&#8377 ' + tipperson.toFixed(2);
        total.innerHTML = '&#8377  ' + totalAmount.toFixed(2);
    }
}

function doReset(){
    billVal = 0;
    tipVal = 0;
    peopleVal = 1;
    input.value = input.defaultValue;
    people.value = 1;
    tip.innerHTML = '&#8377 ' + '0.00';
    total.innerHTML = '&#8377 0.00'; 
}


function handleReset(){
    if(reset.textContent == 'RESET'){
        doReset();
        reset.textContent = 'GENERATE';
    }
    else{
        calculate();
        reset.textContent = 'RESET';
    }
    
}