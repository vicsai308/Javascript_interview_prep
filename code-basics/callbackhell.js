// Pitfalls of Callbacks (Callback Hell) 😵‍💫

// When callbacks are nested, code becomes hard to read, debug, and maintain.

getUser(userId, function (user) {
    getOrders(user.id, function (orders) {
        getOrderDetails(orders[0], function (details) {
            processPayment(details, function (result) {
                console.log(result);
            });
        });
    });
});


// 😵 Deep nesting (pyramid of doom)
// 🐞 Hard error handling
// 🔁 Hard to reuse logic
// 🧠 Difficult to understand flow
// ❌ Callback fired multiple times (sometimes)
// ❌ Inversion of control (you lose control)