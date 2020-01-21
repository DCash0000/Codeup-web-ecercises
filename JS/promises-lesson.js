const myPromise = new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
        resolve();
    } else {
        reject();
    }
});
console.log(myPromise);
myPromise.then(() => console.log('resolved!'));
myPromise.catch(() => console.log('rejected!'));