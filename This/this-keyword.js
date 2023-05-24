/* THIS */

// Will point to the global Window
console.log(this);

// Will point to the global Window

function a () {
    console.log(this);
}

a();

// Will point to the Object. A new execution context was created when the function was called
const c = {
    name: "Some object",
    log: function () {
        console.log(this);
    }
}
c.log();

/* CASE 1 */
const case1 = {
    name: "some other object",
    log: function () {
        this.name = "START";

        const setName = (newName) => {
            this.name = newName
        }
        setName("READY SET GO");
        console.log(this)
        console.log(this.name)
    }
}

/*
EXPECTED:
{ name: 'READY SET GO', log: [Function: log] }
READY SET GO
*/
case1.log(); 


/* CASE 2 */
const case2 = {
    name: "some other object",
    log: function () {
        this.name = "START";

        var setName = function (newName) {
            this.name = newName
        }
        setName("READY SET GO");
        console.log(this.name, this)
    }
}

case2.log()

/* 
EXPECTED
{ name: 'START', log: [Function: log] }
START
 */
/**
// Why was the result different?
We're using ARROW FUNCTION in the first case.S
In arrow functions This keyword always represents the object that defined the arrow function.
**/