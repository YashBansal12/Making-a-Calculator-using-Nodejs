/**
 * This Function will accept details about addition
 * @example
 * add(1,2)===3
 * add(1.4, 6.8)===8.2
 * add("", 12)===Throw error
 * add(-4, 2)===-2
 * add(-8, -8)===16
 * @param {number} n1 This is First number
 * @param {number} n2 This is second number
 * @returns {number}
 * @description The addition is taking two or more numbers and adding them together,
 * that is, it is the total sum of 2 or more numbers.
 */

function add(n1, n2) {
  try {
    if ((!n1 && typeof n1 === "string") || (!n2 && typeof n2 === "string"))
      throw new Error("Input values can not be empty");
    if (isNaN(n1) || isNaN(n2))
      throw new Error("Input values should be numbers");
    return n1 + n2;
  } catch (error) {
    throw error;
  }
}

/**
 * This Function will accept details about Subtraction
 * @example
 * subtraction(11, 2)===9
 * subtraction(10, 10)===0
 * subtraction("", 10)===Throw error
 * subtraction(3, 7)===-4
 * subtraction(-65, 65)===130
 * @param {number} n1 This is First number
 * @param {number} n2 This is second number
 * @returns {number}
 * @description subtraction is when you take one number away from another number,
 * the operation of deducting one number from another.
 */

function subtraction(n1, n2) {
  try {
    if ((!n1 && typeof n1 === "string") || (!n2 && typeof n2 === "string"))
      throw new Error("Input values can not be empty");
    if (isNaN(n1) || isNaN(n2))
      throw new Error("Input values should be numbers");
    return n1 - n2;
  } catch (error) {
    throw error;
  }
}

module.exports = { add, subtraction };
