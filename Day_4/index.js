// -------------------------------------------- Day 4: Loops Tasks/Activities: ----------------------------------------

// --------------------------------------------  Activity 1: For Loop -------------------------------------------------


//-------------------------------------------- • Task 1: Write a program to print numbers from 1 to
// --------------------------------------------------- 10 using a for loop.--------------------------------------------

    console.log("Printing 1 to 10 below... \n");
    for(var i=1;i<11;i++){
        console.log(i);
    }


// ------------------------------------- Task 2: Write a program to print the multiplication -----------------------
// -----------------------------------------  table of 5 using a for loop.  ----------------------------------

    console.log("Printing Table of 5 ... \n");
    for(var i=1;i<11;i++){
        console.log("5 * "+i+" = "+i*5);
    }

//-------------------------------------------- Activity 2: While Loop --------------------------------------------

// ------------------------------- Task 3: Write a program to calculate the sum of ----------------------------
// ----------------------------------   numbers from 1 to 10 using a while loop. --------------------------------

console.log("Printing 1 to 10 sum using while loop below... \n");
let sum=0,count=1;

while(count<=10){
    sum+=count;
    count++;
}

console.log("Sum of 1 to 10 is = "+sum);


// ---------------------------------  Task 4: Write a program to print numbers from ---------------------------
// --------------------------------------    10 to 1 using a while loop. -------------------------------------------


console.log("Printing reverse counting 10 to 1 using a while loop below... \n");
// let count1=1;

// while(count1<=10){
//     console.log(11-count1);
//     count1++;
// }

//another varient

let count2=10;

while(count2>0){
    console.log(count2);
    count2--;
}


//-------------------------------------- Activity 3: Do...While Loop  -----------------------------------------

// ----------------------------------- Task 5: Write a program to print numbers from --------------------
// ----------------------------------------   1 to 5 using a do...while loop.  -----------------------------------

console.log("Printing number 1 to 5 using do while loop below... \n");

let count3=1;
    do{
        console.log(count3);
        count3++;
    }while(count3<6);


// ------------------------------- Task 6: Write a program to calculate the factorial --------------------------
// ---------------------------------------------------of a number using a do...while loop.---------------------------

console.log("Printing factorial of 5 using do while below... \n");

    let factorial=1,number=num1=5;
        do{
            factorial*=number;
            number--;
        }while(number > 0);

        console.log("Factorial of "+num1+" is = "+factorial);



//-------------------------------------------  Activity 4: Nested Loops  ------------------------------------


// --------------------------------------- Task 7: Write a program to print a pattern -----------------------
// --------------------------------------------------- using nested for loops: -----------------------------------

// *
// * *
// * * *
// * * * *
// * * * * *


console.log("Printing star pattern using nested loop below... \n");


for(var k=0;k<5;k++){
    let str=""
    for(var l=0;l<k+1;l++){
        str+="* ";
    }
    console.log(str);
}


//--------------------------------- Activity 5: Loop Control Statements  -----------------------------------------

// -------------------------------- Task 8: Write a program to print numbers from -----------------------------
// ---------------------------- 1 to 10, but skip the number 5 using the continue statement.----------------------


console.log("Printing 1 to 10 but skip 5 ... \n");

for(var x=1;x<11;x++){
    if(x==5) continue;
    console.log(x);
}

// --------------------------- Task 9: Write a program to print numbers from 1 to 10,  ------------------------
// ------------------------- but stop the loop when the number is 7 using the break statement.-----------------

console.log("Printing 1 to 10 but breaks the loop when it reaches 7 below... \n");

    for(var x=1;x<11;x++){
        if(x==7) break;
        console.log(x);
    }
