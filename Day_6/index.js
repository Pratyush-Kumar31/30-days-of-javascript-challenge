//-----------------------------------------------------  Day 6: Arrays -------------------------------------------------
// -----------------------------------------------   Tasks/Activities:  -------------------------------------------
//------------------------------------------ Activity 1: Array Creation and Access----------------------------------
// ------------------------ Task 1: Create an array of numbers from 1 to 5 and log the array to the console.-----------------------

    const arrayOfInteger=[1,2,3,4,5];
    console.log("Array is "+arrayOfInteger);

// -------------------------- Task 2: Access the first and last elements of the array and log them to the console.------------------

    console.log("First element of the array is : "+arrayOfInteger[0]);
    console.log("Last element of the array is : "+arrayOfInteger[arrayOfInteger.length-1]);


//-------------------------------------- Activity 2: Array Methods (Basic)  --------------------------------------------
//  -------------------------- Task 3: Use the push method to add a new number to the end of the array and log the updated array. ---------------------------------------------

    
    console.log("Initial array is "+arrayOfInteger);
    console.log("Adding number 10 at the end of the array");
    arrayOfInteger.push(10);
    console.log("After pushing 10 the array is : "+arrayOfInteger);

// --------------------------- Task 4: Use the pop method to remove the last element from the array and log the updated array. ---------------------------------------------



    console.log("Initial array is "+arrayOfInteger);
    console.log("Removing last element from the array");
    arrayOfInteger.pop();
    console.log("After removing last element from the array is : "+arrayOfInteger);

// ---------------------------- Task 5: Use the shift method to remove the first element from the array and log the updated array. ---------------------------------------------


    console.log("Initial array is "+arrayOfInteger);
    console.log("Removing first element from the array");
    arrayOfInteger.shift();
    console.log("After removing first element from the array is : "+arrayOfInteger);


// ---------------------------- Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array. ---------------------------------------------


console.log("Initial array is "+arrayOfInteger);
console.log("Adding number 7 at the beginning of the array");
arrayOfInteger.unshift(7);
console.log("After adding 7, the array is : "+arrayOfInteger);

// ----------------------------------------------- Activity 3: Array Methods (Intermediate) ---------------------------------------------

 // ---------------------------- Task 7: Use the map method to create a new array where each number is doubled and log the new array. ---------------------------------------------


        
    console.log("Initial Array is : "+arrayOfInteger);
const newArray=arrayOfInteger.map((num)=>{
            return num*2;
        })
        console.log("After using map method and doubled each element value");
        console.log("Initial Array is : "+arrayOfInteger);
        console.log("New array with doubled value is : "+newArray);

        

// ----------------------------- Task 8: Use the filter method to create a new array with only even numbers and log the new array. ---------------------------------------------



        console.log("Initial Array is : "+arrayOfInteger);
        const filteredArray=[];
        arrayOfInteger.forEach((num)=>{
            
            if(num%2==0){
                filteredArray.push(num);
            }
            
        })
        console.log("After using filter method and filterd only even number");
        console.log("Initial Array is : "+arrayOfInteger);
        console.log("New array with only even values is : "+filteredArray);

// --------------------------------  Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result. ---------------------------------------------


console.log("Initial Array is : "+arrayOfInteger);

let result = arrayOfInteger.reduce((acc,curr)=>{
        return acc+curr;
    
})
console.log("After using reduce method onto array to find out the overall sum");
console.log("Initial Array is : "+arrayOfInteger);
console.log("Total sum of the array : "+result);


//-------------------------------------------------- Activity 4: Array Iteration -------------------------------------------
// ------------------------------- Task 10: Use a for loop to iterate over the array and log each element to the console. ---------------------------------------------


        console.log("Printing all element of the array using for loop");
        for(var i=0;i<arrayOfInteger.length;i++){
            console.log(arrayOfInteger[i]);
        }

// ------------------------------- Task 11: Use the forEach method to iterate over the array and log each element to the console. ---------------------------------------------


console.log("Printing all element of the array using foreach loop");
        
arrayOfInteger.forEach((number)=>{
    console.log(number)
})


//----------------------------------------- Activity 5: Multi-dimensional Arrays  ---------------------------------------------
// ------------------------------- Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.  ---------------------------------------------


console.log("Creating a two dimentional array and log into the console");
    const matrix=[[1,2,3],[10,1,4],[5,8,5],[7,9,33]];
    console.log(matrix);

//-------------------------------- Task 13: Access and log a specific element from the two-dimensional array.  ---------------------------------------------


console.log("Access the specific element from the two-dimensional array");
console.log("Accessing 2nd element of 3rd row is : "+matrix[2][1]);
console.log("Accessing 1st element of 2rd row is : "+matrix[1][0]);

