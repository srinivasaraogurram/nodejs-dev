// 1 1 2 3 5 8 13 21

function generateFibonacci(howMany){
    let x = 1;
    let y = 1;
    let sequence = [x, y];

    Array(howMany).fill().forEach(() => {
        let sum = x + y;
        sequence.push(sum);
        x = y;
        y = sum;
});
return sequence;

}

console.log("fibonacci" , generateFibonacci(10))
