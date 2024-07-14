// ------------------------------------------------- DAY 2 --------------------------------------------------

// -------------------------------------Activity 1: Arithmetic Operations----------------------------------------

// --------------- Task 1: Write a program to add two numbers and log the result to the console.-------------------

let num1 = 10;
let num2 = 20;
let addition = num1 + num2;
console.log("Addition of "+num1+" + "+num2+"  = "+addition);

// ------------------------------------- Task 2: Write a program to subtract two numbers and---------------------
// ------------------------------------------- log the result to the console.-------------------------------------

let num3 = 45;
let num4 = 33;
let substraction = num3 - num4;
console.log(`Substraction of ${num3} - ${num4}  = ${substraction}`);

// ------------------------------------- Task 3: Write a program to multiply two numbers and -----------------------
// -------------------------------------------log the result to the console. ----------------------------------

let num5 = 27;
let num6 = 15;
let multiplication = num5 * num6;
console.log(`Multiplication of ${num5} * ${num6} = ${multiplication} `);

// ------------------------------------- Task 4: Write a program for dividing two numbers and -------------------
// ----------------------------------------log the result to the console.-----------------------------------

let num7 = 7986;
let num8 = 11;
let division = num7 / num8;
console.log(`Division of ${num7} / ${num8} = ${division} `);

// ------------------ Task 5: Write a program to find the remainder when one numberis divided -----------------
// ------------------------------- by another and logs the result to the console.----------------------------

let num9 = 3990;
let num10 = 12;
let modulo = num9 % num10;
console.log(`Remainder of ${num9} % ${num10} = ${modulo} `);

// ------------------------------------- Activity 2: Assignment Operators-------------------------------------------

// ------------------------------------- Task 6: Use the += operator to add a number to a -------------------------
// ---------------------------------------variable and log the result to the console.---------------------------

let num11 = 110;
// num11 += 20;
console.log(`${num11} += ${20} = ${num11+=20} `);

// -------------------------- Task 7: Use the -= operator to subtract a number from a variable---------------------
// ------------------------------------- and log the result to the console.-------------------------------------------

let num12 = 55;
// num12 -= 20;
console.log(`${num12} -= ${20} = ${num12-=20} `);

// ------------------------------------- Activity 3: Comparison Operators------------------------------------------

// ------------------------------------- Task 8: Write a program to compare two numbers --------------------------
// -------------------------------------- using > and < and log the result to the console.------------------------
let num15 = 57,
  num16 = 29;
  let res1=num15>num16;
  let res2=num15<num16;
console.log(`${num15} > ${num16} = ${res1} `);
console.log(`${num15} < ${num16} = ${res2} `);

// ------------------------------------- Task 9: Write a program to compare two numbers using------------------------
// -----------------------------------------  >= and <= and log the result to the console.--------------------------

let num17 = 17,
  num18 = 30;
console.log(num17 >= num18);
console.log(num17 <= num18);

//-------------------------------------- Task 10: Write a program to compare two numbers--------------------------
// ---------------------------------- using == and === and log the result to the console.---------------------------

let num19 = 34,
  num20 = "34";
console.log(num19 == num20);
console.log(num19 === num20);

//-------------------------------------------- Activity 4: Logical Operators--------------------------------------

// ---------------------------------Task 11: Write a program that uses the && operator to ----------------------
// ----------------------------------combine conditions and log the result to the console.---------------------------

let num21 = 17,
  num22 = 31;
console.log(num21 < num22 && num21 > num22);

// -------------------------- Task 12: Write a program that uses the ||  operator-------------------------------
// --------------------------- to combine conditions and log the result to the console.------------------------

console.log(num21 < num22 || num21 > num22);

//----------------------------------- Task 13: Write a program that uses the ! operator-------------------------
// -------------------------------------- to negate a condition and log the result to the console.----------------

let isTrue = true;
console.log(!isTrue);

// ----------------------------------------Activity 5: Ternary Operator------------------------------------------
// ------------------------------------Task 14: Write a program that uses the ternary---------------------------
// ----------------------------------------- operator to check if a number is positive------------------------------
//  or negative and log the result to the console.

        let num23 = 41;

        let positiveOrNegative1 =
        num23 >= 0 ? console.log("Positive number") : console.log("Negative number");

        let num24 = -21;

        let positiveOrNegative2 =
        num24 >= 0 ? console.log("Positive number") : console.log("Negative number");
