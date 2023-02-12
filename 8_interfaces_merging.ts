// If we create an interface and it has the same name as some already existing interface then, the property of this new 
// interface is merged with the properties of the already existing one

// This concept is helpful in scaling an existing interface, It allows us to add new properties to the existing interface
//e.g.

interface Book{
    name: string;
    price: number
}

// same name interface
interface Book{
    weight: number
}

// Note that, declaring the same interface does not mean overriding, in typescript it will merge the properties with that of existing interface

const book1 : Book= {
    name: "Atomic habbits",
    price: 1200,
    weight: 250
}



// interfaces vs types

// 1. We cannot use the concept of merging in case of types
//e.g.

type Employee = {
    name: string,
    salary: number
}

// type Employee = { // This will give Error : Duplicate identifier 'Employee'
//     age: number
// }


// 2. We cannot create alises of primitives using interfaces, It is possible only with types