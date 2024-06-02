var scores = [3, 12, 5, 23, 19, 7];

var topScores = scores.filter(function(item){
    if (item > 10){
        return true;
    } else {
        return false;
    }
});

console.log('topScores: ', topScores);


// filer the items greater than 10
// short form

var scoresGreterThanTen = scores.filter((x) => x > 10)
console.log("scoresGreterThanTen", scoresGreterThanTen);