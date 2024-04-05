/**
*THIS PROGRAM IS MADE FOR
*by: Ryan Bash Gheshalghi
*on: 26/03/2024
*/
import { MrCoxallStack } from './MrCoxallStack'

let fruits = new MrCoxallStack()
fruits.push("apple")
fruits.push("bannana")
fruits.push("cherry")
console.log("fruits: " + fruits.showStack())

let colours = new MrCoxallStack()
colours.push("red")
colours.push("light teal")
colours.push("purple")
console.log("colours: " + colours.showStack())

let shapes = new MrCoxallStack()
shapes.push("tiangle")
shapes.push("cube")
shapes.push("sphere")
console.log("shapes: " + shapes.showStack())

console.log("\nDone")
