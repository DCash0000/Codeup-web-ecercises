/*
 * Complete the TODO items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];

// TODO: fill in your name and email and add some programming languages you know
// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
<<<<<<< HEAD
// const name = 'Dalvin J. Cash';
// const email = 'cash123';
// const languages = ['html', 'css', 'js', 'jquer', 'bootstrap' ];
//
// // TODO: rewrite the object literal using object property shorthand
// users.push({
//   name,
//   email,
//   languages
// });
//
// // TODO: replace `var` with `let` in the following variable declarations
// let emails = [];
// let names = [];
//
// // TODO: rewrite the following using arrow functions
// users.forEach((user) =>{
//   return emails.push(user.email);
// });
//
//
// // users.forEach(function(user) {
// //   return names.push(user.name);
// // });
//
// users.forEach((user) => {
//   return names.push(user.name)
// });
// //or
// users.forEach(user => names.push(user.name));
//
//
//
// // TODO: replace `var` with `let` in the following declaration
// let developers = [];
// users.forEach(function(user) {
//   // TODO: rewrite the code below to use object destructuring assignment
//   //       note that you can also use destructuring assignment in the function
//   //       parameter definition
=======
// <<<<<<< weather-map
// var name = 'your_name_here';
// var email = '';
// var languages = [];

// // TODO: rewrite the object literal using object property shorthand
// users.push({
//   name: name,
//   email: email,
//   languages: languages
// });

// // TODO: replace `var` with `let` in the following variable declarations
// var emails = [];
// var names = [];

// // TODO: rewrite the following using arrow functions
// users.forEach(function(user) {
//   return emails.push(user.email);
// });
// users.forEach(function(user) {
//   return names.push(user.name);
// });

// // TODO: replace `var` with `let` in the following declaration
// var developers = [];
// =======
// const name = 'Dalvin J. Cash';
// const email = 'cash123';
// const languages = ['html', 'css', 'js', 'jquer', 'bootstrap' ];

// // TODO: rewrite the object literal using object property shorthand
// users.push({
//   name,
//   email,
//   languages
// });

// // TODO: replace `var` with `let` in the following variable declarations
// let emails = [];
// let names = [];

// // TODO: rewrite the following using arrow functions
// users.forEach((user) =>{
//   return emails.push(user.email);
// });


// // users.forEach(function(user) {
// //   return names.push(user.name);
// // });

// users.forEach((user) => {
//   return names.push(user.name)
// });
// //or
// users.forEach(user => names.push(user.name));



// // TODO: replace `var` with `let` in the following declaration
// let developers = [];
// >>>>>>> master
users.forEach(function(user) {
  // TODO: rewrite the code below to use object destructuring assignment
  //       note that you can also use destructuring assignment in the function
  //       parameter definition
// <<<<<<< weather-map
//   const name = user.name;
//   const email = user.email;
//   const languages = user.languages;

//   // TODO: rewrite the assignment below to use template strings
//   developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
// });

// // TODO: Use `let` for the following variable
// var list = '<ul>';

// // TODO: rewrite the following loop to use a for..of loop
// developers.forEach(function (developer) {

//   // TODO: rewrite the assignment below to use template strings
//   list += '<li>' + developer + '</li>';
// });
// list += '</ul>';
// =======
>>>>>>> 1a1200da8edb2f00182904402e63a5a42cf6a00d
//   // const name = user.name;
//   // const email = user.email;
//   // const languages = user.languages;
//   const {name, email, languages} = user;
//   // console.log(user);
<<<<<<< HEAD
//
=======

>>>>>>> 1a1200da8edb2f00182904402e63a5a42cf6a00d
//   // TODO: rewrite the assignment below to use template strings
// //   developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
// // });
//   developers.push(`${name}'s email is ${email}, ${name} knows ${languages.join(', ')}`);
// });
// // console.log(developers);
<<<<<<< HEAD
//
// // TODO: Use `let` for the following variable
// let list = '<ul>';
//
// // TODO: rewrite the following loop to use a for..of loop
// // developers.forEach(function (developer) {
// // }
//
// for(let developer of developers){
//
=======

// // TODO: Use `let` for the following variable
// let list = '<ul>';

// // TODO: rewrite the following loop to use a for..of loop
// // developers.forEach(function (developer) {
// // }

// for(let developer of developers){

>>>>>>> 1a1200da8edb2f00182904402e63a5a42cf6a00d
//   // TODO: rewrite the assignment below to use template strings
//   list += `<li> ${developer}  </li>`
// }
// list += '</ul>';
// console.log(list);
<<<<<<< HEAD
=======
// >>>>>>> master
>>>>>>> 1a1200da8edb2f00182904402e63a5a42cf6a00d
