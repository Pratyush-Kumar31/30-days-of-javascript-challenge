// ------------------------------------------------Day 1----------------------------------------------------

//   -------------------------------------Activity 1: Variable Declaration-------------------------------------------------

// Task 1: Declare a variable using var, assign it a number, and log the value to the console.
    var pratyush;
    pratyush=4;
    console.log(pratyush);


// Task 2: Declare a variable using let, assign it a string, and log the value to the console.
    
    let name;
    name="pratyush";
    console.log(name);
// --------------------------------------------------Activity 2: Constant Declaration--------------------------------------------

// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.

    const sahiYaGalat=true;
    console.log(sahiYaGalat);

// ---------------------------------------------------Activity 3: Data Types------------------------------------------------------------


// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable’s type using the typeof operator.
        let number=40;
        let string="Pratyush";
        let sahiHai=true;
        let object={"name":"pratyush","roll_no":1234};
        let array=["mai","chai","aur 30 days js challenge"];
        console.log(typeof number);
        console.log(typeof string);
        console.log(typeof sahiHai);
        console.log(typeof object);
        console.log(typeof array);

// ------------------------------------------Activity 4: Reassigning Variables-----------------------------------------------

// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.

            let initialValue=100;
            console.log(initialValue);
            initialValue=404;
            console.log(initialValue);


// ------------------------------------------------ Activity 5: Understanding const--------------------------------------------

// Task 6: Try reassigning a variable declared with const and observe the error.

            const youCantChangeMe="Pratyush";
            console.log(youCantChangeMe);
           // youCantChangeMe="Harsh"; // If we assign another value to a const variable it will give
                                        // "TypeError:" with message Assignment to constant variable.
