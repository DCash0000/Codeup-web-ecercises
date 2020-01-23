//**************Step 2**************//
const wait = (num) => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve();
        }, num)

    })
};

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


//******************Step 3**************//
function getGithubUsernames(name) {
    return fetch(`https://api.github.com/search/commits?q=sort:committer-date+committer:${name}`,
        {headers: {
                'Authorization': gitHub,
                'Accept': 'application/vnd.github.cloak-preview'
            }})
        .then(response => response.json())
        .then(response => {
            let commit = response.items[0].commit;
            let name = commit.author.name;
            let date = commit.author.date;
            console.log(`Last commit was on ${date} by ${name}`)
        });
}


// const lastCommit = (name) => {
//     return fetch(`https://api.github.com/search/commits?q=sort:committer-date+committer:${name}`,
//         {headers: {
//                 'Authorization': gitHub,
//                 'Accept': 'application/vnd.github.cloak-preview'
//             }})
//         .then(response => response.json())
//         .then(response => {
//             let commit = response.items[0].commit;
//             let name = commit.author.name;
//             let date = commit.author.date;
//             console.log(`Last commit was on ${date} by ${name}`)
//         });
//
// };
//
// console.log(lastCommit('DCash0000'));






