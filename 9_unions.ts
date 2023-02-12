// Unions

type Identifier = string | number // Means identifier

function printIdentifier(id: Identifier){
    // console.log(id.toUpperCase()) // This will give error
    // To resolve this we use the concept of
    
    // narrowing

    if(typeof id === 'string')
        console.log(id.toUpperCase())
    
    else
    // after the above if, typescript will automatically understand that now the id is going to be a number only
        console.log(id)
}

printIdentifier("Hello")
printIdentifier(123)


function getFirstThree(x: string | number[])
{
    return x.slice(0, 3) // As slice method works for both string and array so it will work for
}

console.log(getFirstThree("Pankaj"))
console.log(getFirstThree([1, 2, 3, 4, 5, 6]))