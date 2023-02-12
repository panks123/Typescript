// An 'enum' is a special "class" that represents a group of constants (unchangeable variables).

// Enums commonly come in two flavors string and numeric

// Numeric Enums - (Enums are Numeric by default)


enum CardinalDirections {
    North, // 0 // by default starts with 0
    East, // 1
    South, // 2
    West  // 3
  }

let currentDiretion = CardinalDirections.North
console.log(currentDiretion)
// currentDiretion = CardinalDirections // Error : Type 'typeof CardinalDirections' is not assignable to type 'CardinalDirections'.

let currentDirection1 = CardinalDirections.East
console.log(currentDirection1)



// Numeric Enums - Initialized

enum Constants {
    firstConstant = 4,
    secondConstant, // 5
    thirdConstant // 6
}

let myFirstConstant = Constants.firstConstant
let mySecondConstant = Constants.secondConstant
let myThirdConstant = Constants.thirdConstant

console.log(myFirstConstant, mySecondConstant, myThirdConstant)


// Numeric Enums - Fully Initialized
enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  }
  // logs 404
  console.log(StatusCodes.NotFound);
  // logs 200
  console.log(StatusCodes.Success);


//   String Enums

// Enums can also contain strings
// This is more common than numeric enums, because of their readability and intent.

enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
  }

  console.log(Direction.Up, Direction.Down, Direction.Left, Direction.Right)



  // We can mix the numeric and string enums as well -> Hetrogenous enums
  
  enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
  }

  console.log(BooleanLikeHeterogeneousEnum.No, BooleanLikeHeterogeneousEnum.Yes)