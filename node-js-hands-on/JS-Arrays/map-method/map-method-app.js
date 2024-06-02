var numbers = [2, 4, 6, 8];

var doubleNums = numbers.map(function(element) {
    return element * 2;
});
console.log('doubleNums: ', doubleNums)

// using the arrow function
var doubleNums = numbers.map(element => element * 3 )
console.log('doubleNums: ', doubleNums)
