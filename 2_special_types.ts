// Special types in typescript

// ******** Type: 'any' *********

// 'any' is a type that disables type checking and effectively allows all types to be used

// Withot 'any'
let flag1 = false
// flag = 1 // Error : Type 'number' is not assignable to type 'boolean'
// So typechecking was happening above

// With 'any'
let flag2: any = false // here we have assigned type 'any'

flag2 = 1 // So this is not showing any error now
console.log(flag2)

// Remember: 'any' should be avoided



// // ******** Type: 'unknown' *********

// 'unknown' is a similar, but safer alternative to any

let w: unknown = "Hello"
w = 22 // No error shown by typescript
console.log(w)


// Type: undefined & null

// 'undefined' and 'null' are types that refer to the JavaScript primitives undefined and null respectively.

let y: undefined = undefined;

// y = 1 // Type '1' is not assignable to type 'undefined'.
console.log(y)

let z: null = null
// z = "hello" // Type '"hello"' is not assignable to type 'null'.
console.log(z)
