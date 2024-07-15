
//---------------------------------------  Day 3: Control Structures--------------------------------------------


// ----------------------------------------------- Tasks/Activities: ----------------------------------------------


//---------------------------------------  Activity 1: If-Else Statements---------------------------------------


//---------------------------------------  • Task 1: Write a program to check if a number is----------------------
// ----------------------------------- positive, negative, or zero, and log the result to the console.--------------


    let num=47;
    //  num=-47;
    //  num=0;

    if(num>0){
        console.log("Number "+num+" is a positive number");
    }
    if(num<0){
        console.log("Number "+num+" is a negative number");
    }
    if(num==0){
        console.log("Number is zero");
    }


//---------------------------------------  • Task 2: Write a program to check if a person is ---------------------
// --------------------------------- eligible to vote (age >= 18) and log the result to the console.-----------------


    let age=22;
    if(age >= 18){
        console.log("You are eligible to vote....");
    }else{
        console.log("You are not eligible to vote.... Because your age is smaller than 18");
    }


// ---------------------------------------  Activity 2: Nested If-Else Statements --------------------------------

//---------------------------------------  • Task 3: Write a program to find the largest of three ------------------
// --------------------------------------------- numbers using nested if-else statements.--------------------------


    let num1=15,num2=5,num3=27;
    // let num1=15,num2=25,num3=23;
    // let num1=35,num2=11,num3=27;
    // let num1=115,num2=115,num3=27;

    // console.log("Number 1 = "+num1);
    // console.log("Number 2 = "+num2);
    // console.log("Number 3 = "+num3);

    if(num1 > num2){
        if(num1 > num3){
            console.log(num1 + " is greater than "+num2 +" and "+num3);
        }else{
            console.log(num3 + " is greater than "+num1 +" and "+num2);
        }
    }else if(num2 > num1){
        if(num2 > num3){
            console.log(num2 + " is greater than "+num1 +" and "+num3);
        }else{
            console.log(num3 + " is greater than "+num1 +" and "+num2);
        }
    }else{
        console.log("Any of two numbers are equal");
    }


// ---------------------------------------  Activity 3: Switch Case ----------------------------------------------

//---------------------------------------  • Task 4: Write a program that uses a switch case -----------------------
// --------------------------------------  to determine the day of the week based on a ----------------------------
// --------------------------------------  number (1-7) and log the day name to the console.-----------------------


        let dayOfWeek=1;
        // dayOfWeek=5;
        // dayOfWeek=2;
        // dayOfWeek=7;
        // dayOfWeek=8;
        switch(dayOfWeek){
            case 1:
                console.log("Today is Sunday");
                break;
            case 2:
                console.log("Today is Monday");
                break;
            case 3:
                console.log("Today is Tuesday");
                break;
            case 4:
                console.log("Today is Wednesday");
                break;
            case 5:
                console.log("Today is Thursday");
                break;
            case 6:
                console.log("Today is Friday");
                break;
            case 7:
                console.log("Today is Saturday");
                break;
            default:
                console.log("Invalid Number");
        }




//---------------------------------------  • Task 5: Write a program that uses a switch ------------------------------
// -------------------------------------------  case to assign a grade ('A', 'B', 'C', 'D', 'F) -------------------
// ------------------------------------------based on a score and log the grade to the console.-------------------
        

        var marks=60;

        switch(true){
            case marks >= 70 && marks <=100 :
                    console.log("You got 'A' grade");
                break;
            case marks >= 60 && marks <70:
                console.log("You got 'B' grade");
                break;
            case marks >= 50 && marks <60:
                console.log("You got 'C' grade");
                break;
            case marks >= 40 && marks <50:
                console.log("You got 'D' grade");
                break;
            case marks < 40 && marks > 0:
                console.log("You got 'F' grade");
                break;
            default:
                console.log("Enter valid Marks for evaluation");
        }


//---------------------------------------  Activity 4: Conditional (Ternary) Operator----------------------------
//---------------------------------------  • Task 6: Write a program that uses the ternary-----------------------
// -------------------------------------- operator to check if a number is even or odd and -------------------------
// ------------------------------------------log the result to the console.---------------------------------------


        let evenOrOdd=51;
        // evenOrOdd=20;
        evenOrOdd%2==0?console.log("Even number"):console.log("Odd number");


//---------------------------------------  Activity 5: Combining Conditions -------------------------------------

//---------------------------------------  • Task 7: Write a program to check if a year is ----------------------
// ------------------------------------------ a leap year using multiple conditions-------------------------------
// ----------------------------------------- (divisible by 4, but not 100 unless also divisible by 400)-------------
// ----------------------------------------- and log the result to the console. ----------------------------------


        let year=2024;
        // year=2000;
        // year=1900;
        // year=2025;
        // year=2028;
        // year=3000;
        // year=4000;

        if(year % 4 == 0 && year % 100 != 0){
            console.log(year+" is Leap Year");
        }else if(year % 4 == 0 && year % 100 == 0){
            if(year % 400 == 0){
                console.log(year+" is Leap Year");
            }else{
                console.log(year+" is not a Leap Year");
            }
        }else{
            console.log(year+" is not a Leap Year");
        }
