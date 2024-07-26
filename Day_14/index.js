// Day 14: Classes
// Tasks/Activities:
// Activity 1: Class Definition



// Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.

        class Person{
            static greeting(){
               return "Hello Person this is static method of person class";
            }
            constructor(name,age){
                this.name=name;
                this.age=age;

            }
            
             greeting(){
                return "Hello "+this.name;
            }

            updateAge(age){
                this.age=age;
            }

        }

        const person1=new Person("Pratyush",22);
        console.log(person1.greeting());
        const person2=new Person("Harsh",20);
        console.log(person2.greeting());



// Task 2: Add a method to the Person class that updates the age property and logs the updated age.
        console.log("Before updating, age value is : "+person1.age);
        person1.updateAge(30);
        console.log("After updating, age value is : "+person1.age);

// Activity 2: Class Inheritance



// Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID. 

            class Student extends Person{

                static studentCount=0;

                constructor(name,age,studentId){
                   
                    super(name,age);
                    this.studentId=studentId;
                    Student.studentCount++;
                }

                getStudentId(){
                    return "Student "+this.name+" ID is "+this.studentId;
                }

                greeting(){
                    return `Name : ${this.name},Age : ${this.age}, and ID : ${this.studentId}`
                }
            }

            const student1=new Student("Pratyush",22,1);
            console.log(student1.getStudentId());
           



//  Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.

        console.log(student1.greeting());
      
        

// Activity 3: Static Methods and Properties



// Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.


            console.log(Person.greeting());


// Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.

            console.log("Total number of Student Objects is : "+Student.studentCount);
            const student2=new Student("a",2,3);
            console.log("Total number of Student Objects is : "+Student.studentCount);


//  Activity 4: Getters and Setters



// Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter. 

    class PersonGS{
        
        constructor(fName,lName,age){
            this.fName=fName;
            this.lName=lName;
            this.age=age;

        }
        
        greeting(){
            return "Hello "+this.fName +" "+this.lName;
        }

        
        setfName(fname){
            this.fName=fname;
        }

        setlName(lname){
            this.lName=lname;
        }

        getFullName(){
            return "Your Full Name Is : "+this.fName+" "+this.lName;
        }

    }


    const personGet=new PersonGS("Pratyush","Kumar",22);
    console.log((personGet.getFullName()));



// Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name.

                console.log("Bofore appling setter method : "+personGet.getFullName());

                personGet.setfName("Harsh");
                personGet.setlName("Kumar");
                console.log("After appling setter method  : "+personGet.getFullName());

//  Activity 5: Private Fields (Optional)



// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods. 

            class Account{
                #balance=0;

                depositeMoney(balance){
                    this.#balance+=balance;
                    console.log("Deposit of "+balance+" is successful!");
                }

                withdrawMoney(balance){
                    if(this.#balance < balance ){
                        console.log("You have not enough money for withdraw");
                        return;
                    }
                    this.#balance-=balance;
                    console.log("Withdraw of "+balance+" is successful!");
                }

                checkMoney(){
                    return "Your current balance is "+this.#balance;
                }


            }

            const account1=new Account();
            // console.log(account1.checkMoney())
            // account1.balance=50;
            // account1.#balance=50;
            // console.log(account1.checkMoney())

//             console.log(account1.checkMoney());
//             account1.depositeMoney(1000);
//             console.log(account1.checkMoney());
//             account1.withdrawMoney(200);
//             console.log(account1.checkMoney());
//             account1.withdrawMoney(900);
//             console.log(account1.checkMoney());



// Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.

            console.log(account1.checkMoney());
            account1.depositeMoney(1000);
            console.log(account1.checkMoney());
            account1.withdrawMoney(200);
            console.log(account1.checkMoney());
            account1.withdrawMoney(900);
            console.log(account1.checkMoney());
            account1.depositeMoney(1075);
            console.log(account1.checkMoney());
            account1.withdrawMoney(150);
            console.log(account1.checkMoney());
            account1.withdrawMoney(235);
            console.log(account1.checkMoney());
