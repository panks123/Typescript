// Type aliases

// Type Aliases allow defining types with a custom name
// Type Aliases can be used for primitives like string or more complex types such as objects and arrays

// e.g. 

// Object

type User ={
    name: string,
    age: number
    address?: string // if any property in an object type we want to be optional(may be or may be not present), we use '?'
                    // It means -> address acn be a string OR undefined
}

// Note: It is a convention that the Type alias name should start with a Capital letter

const user1: User = {
    name: "Pankaj",
    age: 12,
    address: "MG road"
}
console.log(user1)

const user2: User = {
    name: "Pankaj Kumar",
    age: 12,
}
console.log(user2)


type CarYear = number // primitive type alias
type CarBrand = string
type CarModel = string
type Car = {
  year: CarYear,
  brand: CarBrand,
  model: CarModel
}

const carYear: CarYear = 2001
const carBrand: CarBrand = "Toyota"
const carModel: CarModel = "Corolla"
const car: Car = {
  year: carYear,
  brand: carBrand,
  model: carModel
};

console.log(car)


// We can also use unions or OR(|)

type ID = number | string // this specifies that the ID type can be a number OR string

const id1: ID = 1
console.log(id1)

const id2: ID = 'gfdfwh#22@'
console.log(id2)