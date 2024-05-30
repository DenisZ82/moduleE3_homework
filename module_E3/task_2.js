function checkPrimeNum(num) {
    if (num > 1 && num <= 1000) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return 'составное число.';
            }
        }
        return 'простое число.';
    } else {
        return 'число должно быть больше 1 и не больше 1000.';
    }
}

let setNum = 11;

console.log(`Число ${setNum} - ${checkPrimeNum(setNum)}`);