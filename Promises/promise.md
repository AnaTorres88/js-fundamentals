## Promise
A Promise is a proxy for a value that not necessarily known when the promise is created. It allows you to associate handlers with asynchronous action's eventual success value or failure reason
This means:
* A Promise can or can't get data.
* We don't know it this data can or can't be get.
* What can be done in case of rejected/resolved.

It has 3 stages
* pending: Initial state
* fulfilled: Resolved
* rejected: failure