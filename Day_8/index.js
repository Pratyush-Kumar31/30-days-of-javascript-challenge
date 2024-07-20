// Day 8: ES6+ Features
// Tasks/Activities:
// Activity 1: Template Literals
// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

    let personName="Pratyush",personAge=22;

    let stringUsingTemplateLiteral=`Hello, my name is ${personName} and I am ${personAge} year's old`;
    console.log(stringUsingTemplateLiteral);



// Task 2: Create a multi-line string using template literals and log it to the console.

    let multiLineString=`This is a multiline of string by using template literal where you can write all
    your string under double backtick and if you want to insert any variable to this string you have to use
    $ symbol with {}`

    console.log(multiLineString);

// Activity 2: Destructuring
//  Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

let arr=[4,5,8,5,2,4];
let [first,second]=arr;

console.log(first);
console.log(second);

//  Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.


const book={
    title:"JS challenge",
    author:"Hitesh choudhary"
}

let {title,author}=book;
console.log(title);
console.log(author);


// Activity 3: Spread and Rest Operators
//  Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

let arr1=[1,5,8,2,5,6,27,5,52];

let newArr=[...arr1,3,5,21,33,14,17];

console.log(newArr);

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.


function restDemo(...arg){
    var sum=0;
    for(var i=0;i<arg.length;i++){
        sum+=arg[i];
    }
    return sum;
}

console.log(restDemo(5,6,6,6,5,4,4));


// Activity 4: Default Parameters
//  Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

        function defaultParameter(num1,num2=1){
            return num1*num2;
        }

        console.log(defaultParameter(11,5));
        console.log(defaultParameter(14));

//Activity 5: Enhanced Object Literals
// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console. 
            let name="Pratyush",age=22,occupation="Student";

            const deatails={
                name,
                age,
                occupation,
                displayDetails(){
                    return "Name : "+name+" age : "+age+" occupation : "+occupation;
                },
                
            }
            console.log(deatails.displayDetails());
            
//Task 9: Create an object with computed property names based on variables and log the object to the console.

                let name1="name",age1="age"
                let obj={
                    [name1]:"Harsh",
                    [age1]:24,
                }

                console.log(obj);
                
