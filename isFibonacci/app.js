function checkFibonacci(number) {
    let f0 = 0;
    let f1 = 1;
    let fn = 1;
    if (number < 0) {
        return -1;
    } else if ((number === 0) || (number === 1)) {
        return number;
    } else {
        for (let i = 2; i < number; i++) {
            f0 = f1;
            f1 = fn;
            fn = f0 + f1;
        }
    }
    return fn
}

function inputNumberChecked() {
    Number = +prompt("Nhập vào số cần kiểm tra");
    return Number;
}

function isFibonacci() {
    let FiboArray = [];
    let index = 0;
    let numberChecked = inputNumberChecked();
    while (index < 100) {
        index++;
        FiboArray.push(checkFibonacci(index));
        for (let i = 0; i <= FiboArray.length - 1; i++) {
            if (FiboArray[i] === numberChecked) {
                return true;
            }
        }
    }
    return false;
}

function displayResult() {
    if (isFibonacci()) {
        alert("NUMBER IN  Fibonaci");
    } else {
        alert("NUMBER OUT  Fibonaci");
    }
}

displayResult();