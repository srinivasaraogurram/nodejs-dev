var scores = [3, 12, 5, 31, 23, 19, 7];

//  12
//3 + 5 + 31 + 23 + 19 + 7
// 8+ 31+23+19+7
//39+23+19+7
//62+ 19+ 7
//81+7 = 88

var reduced = scores.reduce((acc, item) => acc + item, 0);

console.log("reduced", reduced)

// get even count and odd count 



console.log("sum of evennumbers and sum of odd numbers",

scores.reduce( ({even, odd}, currentValue) => currentValue % 2 === 0 ? {even : even + currentValue, odd} : {even, odd : odd + currentValue}, { even :0, odd : 0 })


)