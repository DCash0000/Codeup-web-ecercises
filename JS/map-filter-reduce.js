const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//*************Step 1***************//
 let userLanguages = users.filter(user => user.languages.length >= 3);
// console.log(userLanguages);


//***************Step 2***************//
let threeLanguages = users.filter(user => user.languages.length >= 3);
// console.log(threeLanguages);


//****************Step 3***************//
let userEmail = [];
users.map(user => {
    userEmail.push(user.email)
});
// console.log(userEmail);


//****************Step 4***************//
const totalExperience = users.reduce(((totalExperience, person) =>
    totalExperience + person.yearsOfExperience), 0);
// console.log(totalExperience / users.length);


//****************Step 5***************//
let longestEmail = '';
users.reduce(((letterCount, user) => {
    if(user.email.length > letterCount){
        letterCount = user.email.length
        longestEmail = user.email;
    }
    return letterCount;
}), 0);
// console.log(longestEmail);


//***************Step 6***************//
const instructorsNames = users.reduce((nameCount, nameList) => {
    return nameCount + " " + nameList.name
}, 'your instructors are: ');

console.log(instructorsNames);


//***************Bonus**************//
const knownLanguages = users.reduce(((lang, user) =>
lang + user.languages), '');
console.log(knownLanguages);






