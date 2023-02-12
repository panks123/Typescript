// TypeScript has a specific syntax for typing function parameters and return values.

// Return Type

function getANumber() : number{
    return Math.PI
}

console.log(getANumber())

function greet(): string{
    return 'Good Morning'
}

console.log(greet())

// void return type

function greetMe(): void{
    console.log("Hello, Good evening")
}

greetMe()


// Prameters -  Specifyng parameters in function

function add(a: number, b: number) : number
{
    return a+b
}

console.log(add(11, 22))

// Optional parameters

function multiply(a: number, b: number, c?: number): number
{
    // return a*b*c // It will show warning:'c' is possibly undefined

    return a * b * (c || 1)
}

console.log(multiply(4,3,2))
console.log(multiply(4,3))



// type alias for arraow functions or function expressions

type Negate = (n: number) => number // number after arrow specifies the return type

const negateNumber: Negate = (num)=>{
    return num*-1
}

console.log(negateNumber(9))