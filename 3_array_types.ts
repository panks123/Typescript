// Array types

// String array types

const arr1: string[]= [] // no error

arr1.push("Hello") // no error

// arr1.push(123) //Error: Argument of type 'number' is not assignable to parameter of type 'string'
console.log(arr1)

// number array type

const arr2 : number[] = [1,2,3]
arr2.push(23) // no error

// arr2.push("Hello") // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(arr2)

// 'readonly' keyword - 
// 'redonly'  keyword can prevent arrays from being changed.

const arr3: readonly number[] = [2, 3,4]
// arr3.push(23) // Error: Property 'push' does not exist on type 'readonly number[]'