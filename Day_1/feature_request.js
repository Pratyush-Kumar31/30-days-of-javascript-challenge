// ---------------------------------------------------------Feature Request--------------------------------------------------------------
// -----------------------------------------------------Variable Types Console Log:-----------------------------------------------

// Write a script that declares variables of different data types and logs both the value and type of each variable to the console.
                        let number=70;
                        let string="Harsh";
                        let sahiHai=false;
                        let object={"name":"harsh","roll_no":35};
                        let array=["mai","chai","aur 30 days js challenge"];
                        console.log("Number is : " + number +" and type of the number is : " + typeof number);
                        console.log("String is : " + string +" and type of the string is : " + typeof string);
                        console.log("Boolean value is : " + sahiHai +" and type of the boolean value is : " + typeof sahiHai);
                        console.log("Object is : " + object +" and type of the object is : " + typeof object);
                        console.log("Array value is : " + array +" and type of the array is : " + typeof array);
                        
                        

// ------------------------------------------------ Reassignment Demo: -------------------------------------------------------

// Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.

// -------------------------------------- Variable declaration using let ----------------------------------------------------

                let anyNumber=10;          
                console.log(anyNumber);
                
                anyNumber=20;
                console.log(anyNumber);

                anyNumber=55;
                console.log(anyNumber);

                anyNumber=8524;
                console.log(anyNumber);

                anyNumber=155;
                console.log(anyNumber);

// -------------------------------------- Variable declaration using const ----------------------------------------------------

                // const name;  // This line of code will generate error  " const declarations must be initialized"
                // name="Pratyush"

                const pi=3.14;
                console.log(pi);
                //pi=3.15; // This will throw an error

 // As you can see above that if we assign any variable using let keyword then
                //  we can change that variable value as many times as I want.
                // But when we declare any variable with const keyword it become constant
                //  and I won't be able to change the value, and also we have to declare 
                // value for const variable at the time of variable creation if we don't 
                // do that compiler will throw an console.error
