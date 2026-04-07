// 1. var (The Legacy Way)
// Before ES6, var was the only way to declare variables. It is globally scoped or function-scoped, which often leads to bugs because it can be redeclared and updated anywhere 
// 03:14
// Opens in a new window.

// Update: Possible.

// Redeclare: Possible (this is why it causes bugs).

// Rule of Thumb: Avoid using var in modern JavaScript

var a = 45;
var a = "p"; // No error! This redeclaration can cause accidental bugs.
console.log(a); // Output: p


// 2. let (The Modern Standard)
// Introduced in ES6, let is block-scoped. This means a variable declared inside a block {} stays inside that block 
// 04:31
// Opens in a new window.

// Update: Possible.

// Redeclare: Not possible within the same scope (throws an error)

let b = "Harry";
{
    let b = "this"; // This 'b' is local to this block
    console.log(b); // Output: this [00:04:40]
}
console.log(b); // Output: Harry (the global 'b' remains unchanged)


// 3. const (For Constants)
// const is used for identifiers that should never change during the program's execution 
// 08:48
// Opens in a new window. Like let, it is also block-scoped.

// Update: Not possible.

// Redeclare: Not possible.

// Requirement: Must be initialized at the time of declaration

const author = "Harry";
// author = "Rohan"; // Throws an error: Assignment to constant variable [00:09:56]
// const price; // Throws an error: Missing initializer in const declaration [00:10:30]


/**
 * +--------------+--------------------------+-----------------+---------------------+
 * | Feature      | var                      | let             | const               |
 * +--------------+--------------------------+-----------------+---------------------+
 * | Scope        | Global / Function        | Block {}        | Block {}            |
 * | Update       | Yes                      | Yes             | No                  |
 * | Redeclare    | Yes                      | No              | No                  |
 * | Initialized  | Initialized as undefined | Not initialized | Must be initialized |
 * +--------------+--------------------------+-----------------+---------------------+
 */

