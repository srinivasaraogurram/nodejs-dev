var ages = [23, 19, 32, 44];

var olderThan18 = ages.every(function(element) {
    return element > 18;
});

console.log('olderThan18: ', olderThan18);

// every element should pass the condition
var ages = [19, 23, 19, 32, 44];

var olderThan18 = ages.every(function(element) {
    return element > 18;
});

console.log('olderThan18: ', olderThan18);