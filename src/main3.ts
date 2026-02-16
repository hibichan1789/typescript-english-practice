type Score = number|null

const sampleScores:Score[] = [80, null, 90, 70, null]

function calculateTotal(scores:Score[]):number{
    const numberArray = scores.filter(score => score !== null);
    return numberArray.reduce((sum, score)=> sum+score, 0);
}

console.log(calculateTotal(sampleScores));

/*
The Score type has options number or null.
The calculateTotal function receives scores (The array of Score) as an argument.
It returns the total sum of the scores.
The process is shown bellow.
1. Make an array of only numbers  using the filter method to exclude null values. 
2. Calculate the sum of the filtered array  using reduce method.
*/