function isBigEnough(element) {
    return element >= 15;
} 

// out would be 130
var found = [12, 5, 8, 130, 44].find(isBigEnough);

console.log('found1: ', found);

// out would be 44
var found = [12, 5, 8, 44, 130].find(isBigEnough);

console.log('found2: ', found);

var found = [12, 5, 8, 44, 130].find(element => element >= 15 );

console.log('found3 - using arrow method: ', found);

