function outputArrayValues() {
    const arr = [null, NaN, 0, 0, 1, 2, 4, 5, "строка_1", "строка_2"]
    let even = 0,
        odd = 0,
        zero = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            if (arr[i] === 0) {
                zero += 1;
            } else if (arr[i] % 2 !== 0) {
                odd += 1;
            } else {
                even += 1;
            }
        }
    }

    console.log('Четных значений: ', even)
    console.log('Нечетных значений: ', odd)
    console.log('Нулей: ', zero)
}

outputArrayValues()
