const btnsNumberContainer = document.getElementById('btnsNumber');

const btnsNumber = document.querySelectorAll('#buttonsNumber');
const btnsOperationContainer = document.querySelectorAll('.operations');
const input = document.getElementById('input');
const memoryCurrentNumber = 0;//первое число
const memoryNewNumber = false;//второе число 
const memoryPendingOperations = '';//операция в ожидании, будущая, следующая

for (let index = 0; index <  btnsNumber.length; index++) {
    const whatIsNumberBtn =  btnsNumber [index];
    whatIsNumberBtn.addEventListener('click', function (e) {
        numberPress (e.target.textContent);//нашли 
    });
    }

for (let index = 0; index < btnsOperationContainer.length; index++) {
    const operationBtn = btnsOperationContainer [index];
    console.log ( operationBtn);
    operationBtn.addEventListener('click', function (e) {
        operation (e.target.textContent);//нашли знаки]
    });
    }

function numberPress(whatIsNumberBtn) {
    console.log ("rlrrlrlrlr" + whatIsNumberBtn);}

function operation(op) {
    let localOperationMemory = input.textContent;//єто число біло введено когда воодим
    if(memoryNewNumber){
        input.value = memoryCurrentNumber;
    }else {
        memoryNewNumber = 'true';
        if (op === '+') {
            memoryCurrentNumber+=localOperationMemory;
        }else if (op === '-') {
            memoryCurrentNumber-=localOperationMemory;
        }else if (op === '*') {
            memoryCurrentNumber*=localOperationMemory;
        }else if (op === '/') {
            memoryCurrentNumber/=localOperationMemory;
        }else {
            memoryCurrentNumber = localOperationMemory;
        };
        input.value = memoryCurrentNumber;
        memoryPendingOperations = op;
    };
    console.log('клик по кнопке с операц '+ symbol);
}


pressOnBtn();//работа с кнопками ввода
function pressOnBtn() {
    btnsNumberContainer.childNodes.forEach(button => {
        if (isClearBtn(button)) {
            setClearBtnClickEvent(button);
        } else {
            setDotOrNumberBtnClickEvent(button);
        }
    });
}

function isClearBtn(button) {
    return button.innerText === "C";
}

function setClearBtnClickEvent(button) {
    button.addEventListener("click", () => {
        const input = getInput();
        input.value = '';

    });
}

function setDotOrNumberBtnClickEvent(button) {
    button.addEventListener("click", () => {
        const input = getInput();
        input.value += button.innerText;
    });
}

function getInput() {
    return document.querySelector('input');
}

