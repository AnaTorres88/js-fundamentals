/* Promise.all()*/
/* Promise.all takes an array of promises, returns a single Promise.
If all resolve, returns an array with resolved promises. It rejects if there's one promise rejected
*/

const resolve1 = Promise.resolve(3);
const resolve2 = Promise.resolve(6);
const resolve3 = Promise.resolve(9);
//const reject1 = Promise.reject('OOPS');

function promiseAll (){
    Promise.all([resolve1,resolve2,resolve3]).then( values => {
        console.log(values)
    }).catch(err => console.log(err));
}
// Uncomment the next lines to test
// promiseAll();