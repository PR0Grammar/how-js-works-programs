/**
 * 
 * Zeros
 * 
 * There are two zeros (0 and -0). JS hides them well, except for two cases.
 * You shouldn't divide by 0 OR use Object.is regardless
 */

console.log("Zeros division by zeros: ", (1/0) === (1/-0)); // false
console.log("Zeros Object.is(): ", Object.is(0, -0)); // false
console.log("________________")


/**
 * Number literals
 * 
 * There are (1.8 * 10^19)+ immutable number objects in JS
 * 
 * Number literals produce a ref to one of those number objects. Sometimes
 * they are exact, other times they are off by error
 * 
 * Example of the number object for "2018"
 */

console.log("Number literals binary ", 0b11111100010) // 2018
console.log("Number literals octal ", 0o3742) // 2018
console.log("Number literals decimal: ", 0b11111100010) // 2018
console.log("Number literals hex: ", 0x7E2) // 2018
console.log("________________")



/**
 * Number (function)
 * 
 * Do not use "new" for the Number function - it produces an "object" type, not "number"
 * 
 */

console.log("Number function w/o new: ",  Number("1") === Number("1")); // true
console.log("Number function w new and w/o new: ",  new Number("1") === Number("1")); // false
console.log("Number function w new: ",  new Number("1") === new Number("1")); // false
console.log("Number function typeof using new: ", typeof new Number('1')); // object
console.log("Number function typeof w/o using new: ", typeof Number('1')); // number
console.log("________________")




