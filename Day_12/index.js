// Day 12: Error Handling
// Tasks/Activities:
// Activity 1: Basic Error Handling with Try-Catch
// ⚫ Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

        function throwError(){
            throw new Error("This is an intentional error for test purpose");
        }

        try {
            throwError();
        } catch (error) {
            console.log(error.message);
        }

// • Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

            function divide(a,b){
                if(b==0){
                    throw new Error("Error : Division by 0 is not possible");
                }

                
                return `${a}/${b} = ${a/b}`
            }


            try {
                console.log(divide(10,5));
                console.log(divide(10,0));
            } catch (error) {
                console.log(error.message);
            }

// Activity 2: Finally Block



// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
                    try {
                        console.log(divide(10,5));
                        // console.log(divide(10,0));
                    } catch (error) {
                        console.log(error.message);
                    }finally{
                        console.log("Inside the finally block");
                        console.log("It does not matter you get a valid result or error your code of finally block will always excute ");
                    }


// Activity 3: Custom Error Objects



// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.

                class CustomError extends Error{
                    constructor(){
                        throw new Error("This is a custom error from cutomError class");
                    }
                    
                }

                try {
                    var customerror=new CustomError();
                } catch (error) {
                    console.log(error.message);
                }
// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block. 

                    function validate(input){
                        try{
                        if(input==""){
                            return new CustomError();
                        }else{
                            console.log("Your string is : "+input);
                        }
                    }catch(err){
                        console.log("Please Enter a valid string");
                        console.log(err.message);
                    }
                    }

                    validate("");
                    validate("hello")
                    

//Activity 4: Error Handling in Promises



// • Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console. 

                    function randomPromise(){
                        return new Promise((resolve,reject)=>{
                        var random=Math.floor(Math.random()*10);
                            if(random > 5){
                                resolve("Promise resolved succesfully");
                            }else{
                              
                                reject("Promise can't be resoved this time");
                            }
                        
                    })
                }

                   randomPromise().then((data)=>{
                    console.log(data);
                   }).catch((err)=>{
                    console.log(err);
                   })
                    

//Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message. 

                   async function randomPromiseAsync(){
                    try {
                        let data1=await randomPromise();
                        console.log(data1);
                        let data2=await randomPromise();
                        console.log(data2);
                        let data3=await randomPromise();
                        console.log(data3)
                    } catch (error) {
                        console.log(error);
                    }    
                    
                   }

                   randomPromiseAsync();



//Activity 5: Graceful Error Handling in Fetch



// Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.


                function fetchDataByThen(url){
                    try {
                        fetch(url).then((data)=>{
                            return data.json();
                        }).then((data)=>{
                            console.log(data);
                        }).catch((error)=>{
                            console.log(error.message);
                        });
                    } catch (error) {
                        console.log(error.message);
                    }
                    
                }

                fetchDataByThen("https://api.restfu-api.dev/objects");
                fetchDataByThen("https://api.restful-api.dev/objects");



// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.


            async function fetchData(url){
                try {
                    let response=await fetch(url);
                    let data=await response.json();
                    console.log(data);
                } catch (error) {
                    console.log("Error while fetching data please check the url correctly");
                    console.log(error.message);
                }
                    
            }

            //    fetchData("https://api.restful-api.dev/objects");
            // fetchData("https://api.restfu-api.dev/objects");
            // fetchData("https://api.restful-api.dev/objects");
