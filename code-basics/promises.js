

// JavaScript Promises were created to make asynchronous JavaScript easier to use.

// A Promise object represents the completion or failure of an asynchronous operation.

// A Promise can be in one of three exclusive states


// +------------+------------------------------------------------------------------------+
// |   states   |                                                                        |
// +------------+------------------------------------------------------------------------+
// | Pending    | The initial state; the operation has started but is not yet finished.  |
// | Fulfilled  | The operation completed successfully, and a result value is available. |
// | Rejected   | The operation failed, and a reason (error) is available.               |
// +------------+------------------------------------------------------------------------+


// Promise Object Properties
// A JavaScript Promise object can be:

// Pending
// Fulfilled
// Rejected
// The Promise object supports two properties: state and result.

// While a Promise object is "pending" (working), the result is undefined.

// When a Promise object is "fulfilled", the result is a value.

// When a Promise object is "rejected", the result is an error object.

// +-----------------+------------------+
// | myPromise.state | myPromise.result |
// +-----------------+------------------+
// | "pending"       | undefined        |
// | "fulfilled"     | a result value   |
// | "rejected"      | an error object  |
// +-----------------+------------------+
const myPromise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve("Operation successful!"); // Transitions to Fulfilled
    } else {
        reject("Operation failed."); // Transitions to Rejected
    }
});


getUser(userId)
    .then(user => getOrders(user.id))
    .then(orders => getOrderDetails(orders[0]))
    .then(details => processPayment(details))
    .then(result => console.log(result))
    .catch(err => console.log(err));