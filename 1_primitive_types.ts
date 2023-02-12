// Using types in typescript we can specify the type for a variable hich will be statically checked during development for the same type
// If any mismatch is there in the type of the variable and the value assigned to it, typescript will show error during development

// TypeScript supports some simple types (primitives):

// - boolean
// - number
// - string

// We can explicitly specify these types for static typechecking in typescript

// Syntax:
// let var_name : type_specifier 
// e.g

let str : string;
str ="Pankaj1"
console.log(str)

// We can assign values while declaration
// e.g.

const num: number =10;
console.log(num)

// Suppose we have a number variable and we try to assign it some different value(some other type- not a number) ->
// Then typescript will show error during development 

// e.g.

let numb : number;



// numb = "123" // This will show error : Type 'string' is not assignable to type 'number'

numb = 121 // This is acceptable
console.log(numb)


let flag: boolean = false

// flag = "true" //Error:  Type 'string' is not assignable to type 'boolean'

flag = true
console.log(flag)