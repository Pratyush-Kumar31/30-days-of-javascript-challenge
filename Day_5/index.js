// ----------------------------------------------Day 5: Functions----------------------------------------

//----------------------------------------------- Tasks/Activities: -----------------------------------

//------------------------------------- Activity 1: Function Declaration------------------------------------

//  Task 1: Write a function to check if a number is even or odd and log the result to the console.

        function evenOrOdd(num){
            if(num%2==0){
                console.log(num +" is an even number");
            }else{
                console.log(num +" is an odd number");
            }
        }

        evenOrOdd(5);
        evenOrOdd(20);
        evenOrOdd(51);
        evenOrOdd(13);

// Task 2: Write a function to calculate the square of a number and return the result.

        function calculateSquare(number){
            return number*number;
        }

        // let squreOf8=calculateSquare(8);
        // console.log("Square of 8 = "+squreOf8)


//---------------------------------------- Activity 2: Function Expression--------------------------------------


//Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

const maximumOfTwoNumber=function(num1,num2){
    if(num1 > num2){
        return num1;
    }
    return num2;
}

console.log(maximumOfTwoNumber(5,7));

// Task 4: Write a function expression to concatenate two strings and return the result.

const stringConcat=function(str1,str2){
    return str1+str2;
}

//------------------------------------ Activity 3: Arrow Functions--------------------------------------

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

    const sumOfTwoNumbers=(num1,num2)=>{
        return num1+num2;
    }

    // console.log(sumOfTwoNumbers(2,5));


// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.


    const containsCharcter=(str,character)=>{
        for(var i=0;i<str.length;i++){
            if(str[i] == character){
                return true;
            }
        }
        return false;
    }

    // console.log(containsCharcter("abc","c"));
    // console.log(containsCharcter("abc","z"));

//---------------------------------- Activity 4: Function Parameters and Default Values---------------------------


// • Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

            function product(num1,num2=1){
                return num1*num2;
            }

            // console.log(product(5,2));
            // console.log(product(5));


// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

            const greeting=function(name,age=18){
                return `Hello Mr. ${name}. How are you. Your age is ${age}`
            }

            // console.log(greeting("Pratyush",22));
            // console.log(greeting("Pratyush"));

//------------------------------------------ Activity 5: Higher-Order Functions----------------------------------

//  Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

            function HoF(fn,num){
                var count=0;
                while(count<num){
                    fn(count+1);
                    count++;
                }
            }

            function display(num){
                console.log("Function is called " +num+" times");
            }

            // HoF(display,2);
            // HoF(display,12);

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

            function HoF2(fn1,fn2,value){
                let result=fn1(value);
                return fn2(result);
            }
            
            function square(num){
                return num*num;
            }

            function print(num){
                console.log("Square of "+Math.sqrt(num)+" is = "+num);
            }

            HoF2(square,print,4);

