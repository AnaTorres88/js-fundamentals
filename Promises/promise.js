

const testMyPromise = (val) => {
    const myPromise = new Promise ((resolve, reject) => {
        setTimeout(() => {
            if(val > 10) {
                resolve(`THE VALUE IS MORE THAN 10: IS ${val}`)
            } else {
                reject('THE VALUE IS LESS THAN 10')
            }
        });
    });
    return myPromise;
}

/* Change the number. It'll fulfill or reject the promise depending on conditionals inside the function*/
testMyPromise(5).then(res => {
    // a callback function can be triggered
   console.log(res); // Fulfilled
}).catch(err => {
    console.log(err); // Rejected
});



