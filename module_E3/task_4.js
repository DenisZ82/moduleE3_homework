function seriesNums(a, b) {
    let intervalId = setInterval(function (){
        console.log(a++);
        if (a > b) {
            clearInterval(intervalId);
        }
    }, 1000);
}

seriesNums(1, 10);