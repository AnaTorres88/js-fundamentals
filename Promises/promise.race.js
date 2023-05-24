/* Promise.race() */
/* Promise.all takes an array of promises, returns a single Promise.
This promise, is the first one to settle andfullfills or rejects with the value or reason from the Promise.
*/

const resolve1 = new Promise ((resolve, reject) => {
    setTimeout(() => resolve(5), 300);
});
const resolve2 = new Promise ((resolve, reject) => {
    setTimeout(() => resolve(10), 1000);
});


function promiseRace (){
    Promise.race([resolve1,resolve2]).then( (value) => {
        console.log(value)
    }).catch(err => console.log(err));
}
// Uncomment the next lines to test
//promiseRace();


const resolve3 = new Promise ((resolve, reject) => {
    setTimeout(() => reject(new Error('OOPS!!')), 300);
});
const resolve4 = new Promise ((resolve, reject) => {
    setTimeout(() => resolve(10), 1000);
});


function promiseRaceError (){
    Promise.race([resolve3,resolve4]).then( (value) => {
        console.log(value)
    }).catch(err => console.log(err));
}
// Uncomment the next lines to test
//promiseRaceError();