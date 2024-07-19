// ------------------------------------------------- Day 7: Objects  ----------------------------------


// -----------------------------------------------  Tasks/Activities: ----------------------------------------


//--------------------------------------- Activity 1: Object Creation and Access---------------------------------


// ------------------------------ Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.-------------------

            const book={
                title : "30 days of javascript challenge",
                author : "Hitesh Choudhary",
                year : 2024
            }

            // console.log(book);

// ------------------------------ Task 2: Access and log the title and author properties of the book object.-------------------

            console.log("Book title is : "+book.title);
            console.log("Book author is : "+book.author);

// ------------------------------------  Activity 2: Object Methods---------------------------------------------

// ------------------------------ Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.-------------------

            book.getDetails=function (){
                return "Title of the book is : "+book.title+" and auther is : "+book.author;
            }

        // console.log(book.getDetails());
        // console.log(book);

// ------------------------------ Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.-------------------

            book.setYear=function (year){
                book.year=year;
            }

            book.setYear(2000);
            // console.log(book);

//------------------------------------------- Activity 3: Nested Objects----------------------------------------

// ------------------------------ Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.-------------------

                book.library={
                    name : "Pratyush Library",
                    books :[
                        {
                            title:"Math",
                            author:"Pratyush",
                            year:2024
                        },
                        {
                            title : "C++",
                            author : "Hitesh Choudhary",
                            year : 2015

                        },
                        {
                            title : "Javascript",
                            author :"Chai code",
                            year : 2015

                        },
                        {
                            title : "java",
                            author : "Harsh",
                            year : 2015

                        }
                    ]

                }

                // console.log(book.library)

// ------------------------------ Task 6: Access and log the name of the library and the titles of all the books in the library.-------------------
                
                // console.log(book.library.name);
                // book.library.books.forEach((element) => {
                //     console.log(element.title);
                // });

//-------------------------------------------------  Activity 4: The this Keyword-------------------------------

// ------------------------------ Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.-------------------

                book.this=function(){
                    return this.title+" "+this.author+" "+this.year;
                }

                // console.log(book.this());

// --------------------------------------  Activity 5: Object Iteration ------------------------------------

// ------------------------------ Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.-------------------
                

for (const items in book) {
    typeof book[items] == "function" ? console.log(`${items} : ${book[items]()}`)
    : typeof book[items] == "object" ? console.log(`${items} : ${JSON.stringify(book[items])}`) 
    : console.log(`${items} : ${book[items]}`);

    
        
    }



// ------------------------------ Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.-------------------


console.log(Object.keys(book));
// console.log(Object.values(book));
