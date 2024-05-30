// Вариант 1
function numSum1(num1) {
    return function (num2) {
        console.log(num1 + num2);
    }
}

let resultSum1 = numSum1(5);

resultSum1(2);

// Вариант 2
function numSum2(num1) {
    return function (num2) {
       return num1 + num2;
    }
}

let resultSum2 = numSum2(5);

console.log(resultSum2(5));