/**
 * async_await.js
 *
 * JavaScript async/await tutorial with examples.
 * Covers: async functions, await, error handling, sequential vs parallel,
 * and converting Promise-based code.
 */

// 1. async function returns a Promise
async function fetchData() {
    return 'Hello from async function!';
}

fetchData().then(value => console.log('1:', value));

// 2. await pauses execution until a Promise resolves
async function waitAndPrint() {
    const promise = new Promise((resolve) => {
        setTimeout(() => resolve('2: Waited 1 second'), 1000);
    });

    const result = await promise;
    console.log(result);
}

waitAndPrint();

// 3. error handling with try/catch
async function fetchWithError() {
    const promise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Request failed')), 500);
    });

    try {
        const result = await promise;
        console.log('3:', result);
    } catch (error) {
        console.error('3:', error.message);
    }
}

fetchWithError();

// 4. sequential vs parallel awaits
async function sequentialRequests() {
    const a = await new Promise((resolve) => setTimeout(() => resolve('4a'), 1000));
    const b = await new Promise((resolve) => setTimeout(() => resolve('4b'), 1000));
    console.log('4 sequential:', a, b);
}

async function parallelRequests() {
    const promiseA = new Promise((resolve) => setTimeout(() => resolve('4a'), 1000));
    const promiseB = new Promise((resolve) => setTimeout(() => resolve('4b'), 1000));

    const [a, b] = await Promise.all([promiseA, promiseB]);
    console.log('4 parallel:', a, b);
}

sequentialRequests();
parallelRequests();

// 5. converting Promise chains to async/await
function fetchNumber() {
    return new Promise((resolve) => setTimeout(() => resolve(42), 300));
}

async function getNumberPlusOne() {
    const number = await fetchNumber();
    return number + 1;
}

getNumberPlusOne().then(value => console.log('5:', value));

// 6. top-level await in modern environments
// Note: top-level await works in modules (ESM). In regular scripts, use an async wrapper.

async function main() {
    console.log('6: Starting tutorial');

    try {
        const data = await fetchData();
        console.log('6:', data);
    } catch (error) {
        console.error('6:', error);
    }
}

main();
