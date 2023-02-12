// Generics - used to write generic reusable code
// e.g.

function logString(arg: string) : string{
    console.log(arg)
    return arg
}

logString("Hello")

// Now the requirement came to write a function which logs a number
function logNumber(arg: number) : number{
    console.log(arg)
    return arg
}

logNumber(12)

// Now the requirement came to write a function which logs an Array
function logArray(arg: any[]) : any[]{
    console.log(arg)
    return arg
}

logArray([1,2,34])
logArray([{name: "Pankaj"}, {name: "Kumar"}])

// We can see that the code inside each functions is getting repeated again and again

// To avoid this we use generics

// Generic syntax for functions

// function function_name<Generic_Type_name>(arguments: arg_type) : return type{}

// e.g.

function logAnything<T>(arg: T) : T{
    console.log(arg)
    return arg
}

// In the above function we have specified a generic type as T, and trhe argument as well as the return type is for this case

// So if we are passing number to the function-> then T will be reolved to number type
// If we pass string to the function, then T will be reolved to string type.. and so on.. 

logAnything("Hello!") 
logAnything(123)
logAnything([1,2,3,4,5])
logAnything([{name: "Pankaj"}, {name: "Kumar"}])


console.log("************************************")


// Another example of Generics

interface HasAge{
    age: number;
}

// define a function to get the person who is oldest

// function getOldest(people: HasAge[]): HasAge{
//     let maxAgePerson: HasAge = people[0];
    
//     for(let i=0;i<people.length; i++)
//     {
//         if(people[i].age > maxAgePerson.age)
//             maxAgePerson = people[i]
//     }

//     return maxAgePerson
// }

// const people = [{age: 34}, {age: 19}, {age: 39}, {age: 30}]

// console.log(getOldest(people).age)

// // Now suppose we do like this:

// interface Player {
//     age: number,
//     name: string
// }

// const player1: Player= {
//     name: "Pankaj",
//     age: 19
// }
// const player2: Player= {
//     name: "Kumar",
//     age: 29
// }
// const player3: Player= {
//     name: "Pankaj",
//     age: 16
// }
// const players = [player1, player2, player3]

// console.log(getOldest(players).name) // as the getOldest return HasAge type, it gives error: Property 'name' does not exist on type 'HasAge'

// Basically what we want is the above function getOldest should apply to all the arguments type arrays of Objects which has age as one of the properties

// To solve this we use Generics as below

// define a function to get the person who is oldest

function getOldest<T extends HasAge>(people: T[]): T{  // The generic <T extends HasAge> will ensure that it has atleast 'age' property existing in it
    let maxAgePerson: T = people[0];
    
    for(let i=0;i<people.length; i++)
    {
        if(people[i].age > maxAgePerson.age)
            maxAgePerson = people[i]
    }

    return maxAgePerson
}


const people = [{age: 34}, {age: 19}, {age: 39}, {age: 30}]

console.log(getOldest(people).age)

// Now suppose we do like this:

interface Player {
    age: number,
    name: string
}

const player1: Player= {
    name: "Pankaj",
    age: 19
}
const player2: Player= {
    name: "Kumar",
    age: 29
}
const player3: Player= {
    name: "Pankaj",
    age: 16
}
const players = [player1, player2, player3]

console.log(getOldest(players).name) // So we can see that now we can acces the name property as well 

