// There are times when working with types where it's necessary to override the type of a variable

// e.g we are using some library and from that library we are using some values provided by the library then 
// We need casting



// Casting with 'as'

let x: unknown = "Hello"

console.log((x as string).length )


// casting should be used properly because it may work inappropriately sometimes
// e.g. 
let y: unknown = 4;
console.log((y as string).length); // y's value is a number but we are casting it as string so it will print undefined
                                    // actually in javascript code it is converted like y.length

// actually in javascript code it is converted like 
// y = 4
// console.log(y.length) // which is a valid code in javascript and y.length returns undefined




// Casting using '<>'- It works same as casting using 'as' 

//e.g.

let z: unknown = "Hello!"

console.log((<string>z).length)

// This type of casting using '<>' will not work with TSX while working with React
