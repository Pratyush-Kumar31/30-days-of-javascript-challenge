// Day 15: Closures
// Tasks/Activities:
// Activity 1: Understanding Closures
//



//  Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.


        function outer(){
            let outerVar="hello";
            return function inner(){
                console.log(outerVar);
            }
        }

        let outer1=outer();
        outer1();
        // outer()();


//  Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.

            function pCounter(){
                let count=0;
                return function countPlus(){
                    count++;
                    console.log("Count is : "+count);
                }
            }

            let count=pCounter();
            count();
            count();
            count();
            count();
            



// Activity 2: Practical Closures




//  Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

            function idGenerator(){
                let Id=0;
                return function generate(){
                    return "ID : "+ ++Id;
                }
            }

            let idGenerator1=idGenerator();
            console.log(idGenerator1());
            console.log(idGenerator1());
            console.log(idGenerator1());
            console.log(idGenerator1());

            let idGenerator2=idGenerator();
            console.log(idGenerator2());
            console.log(idGenerator2());
            console.log(idGenerator2());
            console.log(idGenerator2());


//  Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.

                function userCapture(name){
                    this.userName=name;
                    return ()=>{
                        return "Hello user : "+userName;
                    }

                }

                let userCapture1=userCapture("Pratyush");
                console.log(userCapture1());
                let userCapture2=userCapture("Harsh");
                console.log(userCapture2());
                


// Activity 3: Closures in Loops




//  Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index. 

                    function arrayOfFunction(){
                        let index=0;
                        return function(){
                            return "Index of the array is : "+index++;
                        }
                    }

                    let arr=[];
                    let arrayOfFunction1=arrayOfFunction();
                    for(let i=0;i<6;i++){
                        arr.push(arrayOfFunction1);
                    }

                    console.log(arr[0]());
                    console.log(arr[1]());
                    console.log(arr[2]());

                    

// Activity 4: Module Pattern







// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items. 

                    function itemCollection(){
                        let items=[];
                        return{
                            addItem(item){
                                items.push(item);
                                return "Item : "+item+" added successfully";
                            },

                            

                            removeItem(item) {
                                if(items.length <=0){
                                    return "No Item available in collection";
                                }
                                if(!(items.includes(item))){
                                    return "No such item present"
                                }
                                const index = items.indexOf(item);
                                if (index !== -1) {
                                    items.splice(index, 1);
                                    return "Item : "+item+" deleted successfully";

                                }
                            },

                            listItem(){
                                return items.slice();
                            }
                        }

                    }

                    let itemCollection1=itemCollection();
                    console.log(itemCollection1.listItem());
                    console.log(itemCollection1.removeItem());
                    console.log(itemCollection1.addItem("Pratyush"));
                    console.log(itemCollection1.addItem("Pratyush1"));
                    console.log(itemCollection1.addItem("Pratyush2"));
                    console.log(itemCollection1.listItem());
                    console.log(itemCollection1.removeItem("Pratyush"));
                    console.log(itemCollection1.listItem());
                    console.log(itemCollection1.removeItem("Pratyush"));



                    

// Activity 5: Memoization




//  Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations. 
                
function memoize(fn) {
    const cache = {};

    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key] !== undefined) {
            return cache[key];
        } else {
            const result = fn(...args);
            cache[key] = result;
            return result;
        }
    };
}
function myFunction(num) {
    console.log('Computing...');
    return num * num;
}

const memoizedFunction = memoize(myFunction);

console.log(memoizedFunction(5));
console.log(memoizedFunction(10));
console.log(memoizedFunction(5));
console.log(memoizedFunction(15));
console.log(memoizedFunction(10));

// Task 8: Create a memoized version of a function that calculates the factorial of a number

function factorial(n) {
    if (n < 0) {
        throw new Error("Negative numbers are not allowed.");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);


console.log(memoizedFactorial(5)); 
console.log(memoizedFactorial(5)); 
console.log(memoizedFactorial(6)); 
console.log(memoizedFactorial(6));
