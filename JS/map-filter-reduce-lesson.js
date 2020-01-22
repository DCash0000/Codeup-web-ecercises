let reindeer = [
    {
        name: 'dot',
        age: 5,
        isGold: false

    },
    {
        name: 'naked',
        age: 2,
        isGold: true

    },
    {
        name: 'aquafina',
        age: 6,
        isGold: true

    },
    {
        name: 'bose',
        age: 3,
        isGold: false

    },
    {
        name: 'apple',
        age: 3,
        isGold: true

    },
    {
        name: 'mango',
        age: 7,
        isGold: false

    },

];

let hamsters = [
    {
        name: 'hamster1',
        age: 5,
        fur: ['red', 'white'],
        heightInMM: 25



    },
    {
        name: 'hamster2',
        age: 5,
        fur: ['red', 'white'],
        heightInMM: 20


    },
    {
        name: 'hamster3',
        age: 5,
        fur: ['red', 'white'],
        heightInMM: 45


    },
    {
        name: 'hamster4',
        age: 5,
        fur: ['red', 'white'],
        heightInMM: 30


    },
];

//extract reindeer names
let reindeerNames = reindeer.map((deer) =>{
    return deer.name;
});
console.log(reindeerNames);

//extract fur color of hamserts

let furColor = hamsters.map(hamster => hamster.fur);
console.log(furColor);

let furColors = [];
hamsters.map(hamster => {
    hamster.fur.map(color => furColors.push(color));
});
console.log(furColors);

//filter reindeer if gold
//filter reindeer by name
//filter reindeer if gold and by name
let goldReindeer = reindeer.filter(deer => deer.isGold);
let goldReindeerNames = reindeer.filter(deer => deer.isGold).map(deer => deer.name);
let reindeerNamesAndGold = reindeer.map(deer => {
    return {
        name: deer.name,
        isGold: deer.isGold
    }
})
    .filter(deer => deer.isGold);
console.log(reindeerNamesAndGold);
console.log(goldReindeer);
console.log(goldReindeerNames);


//reduce hamster height to average
let totalHamsterHeight = hamsters.reduce(((totalHeight, hamster) =>
    totalHeight + hamster.heightInMM), 0);
console.log(totalHamsterHeight / hamsters.length);

const salesPeople = [
    {name: 'John', sales: 100},
    {name: 'Harry', sales: 200},
    {name: 'Tim', sales: 300}
];

const totalSales = salesPeople.reduce((total, person) => {
    return total + person.sales;
}, 200);
console.log(totalSales);

//word count of string
function countWords(sentence, counts ={}) {
    const words = sentence.split(' '); // transform a sentence into an array of words
    const wordCountObject = words.reduce((wordCounts, word) => {
        if (typeof wordCounts[word] === 'undefined') {
            // if the word is not yet present in our object, set it's value to 1
            wordCounts[word] = 1;
        } else {
            // otherwise increment the existing count
            wordCounts[word] += 1;
        }
        return wordCounts;
    }, counts ); // start with an empty object
    return wordCountObject;
}
let wordCounts = countWords('Mary had a little lamb little lamb little lamb banana');
console.log(countWords('the little monkey had a banana', wordCounts));
// {Mary: 1, had: 1, a: 1, little: 3, lamb: 3}