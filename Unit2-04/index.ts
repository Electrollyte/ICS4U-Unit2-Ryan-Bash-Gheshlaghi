/**
*THIS PROGRAM IS MADE FOR THE MrCoxallStack
*by: Ryan Bash Gheshalghi
*on: 26/03/2024
*/
import { sha } from 'bun'
import { MrCoxallStack } from './MrCoxallStack'

let fruits = new MrCoxallStack()
let fruitStackEmpty = fruits.stack
console.log("The size of the stack is: " + fruitStackEmpty)
fruits.push("apple")
fruits.push("banana")
fruits.push("cherry")
console.log("fruits: " + fruits.showStack)
let poppedFruit = fruits.popItem()
console.log("popped: " + poppedFruit)
let fruitStackLength = fruits.stackSize
console.log("The size of the stack is: " + fruitStackLength)
console.log("fruits: " + fruits.showStack)

let colours = new MrCoxallStack()
let coloursStackEmpty = colours.stackSize
console.log("The size of the stack is: " + coloursStackEmpty)
colours.push("red")
colours.push("light teal")
colours.push("purple")
console.log("colours: " + colours.showStack)
let poppedColour = colours.popItem()
let coloursStackLength = colours.stackSize
console.log("popped: " + poppedColour)
console.log("The size of the stack is: " + coloursStackLength)
console.log("colours: " + colours.showStack)

let shapes = new MrCoxallStack()
let shapesStackEmpty = shapes.stackSize
console.log("The size of the stack is: " + shapesStackEmpty)
shapes.push("triangle")
shapes.push("cube")
shapes.push("sphere")
console.log("shapes: " + shapes.showStack)
let poppedShape = shapes.popItem()
console.log("popped: " + poppedShape)
let shapesStackLength = shapes.stackSize
console.log("The size of the stack is: " + shapesStackLength)
console.log("shapes: " + shapes.showStack)                                                                                                                                                                              
                                                                                                                                                                                                                       
console.log("\nDone")   