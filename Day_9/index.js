// Day 9: DOM Manipulation
// Tasks/Activities:
// Activity 1: Selecting and Manipulating Elements
//  Task 1: Select an HTML element by its ID and change its text content.

        let task1=document.getElementById("task1");
        
        task1.innerText="Welcome to 30 days JS challenge";


//  Task 2: Select an HTML element by its class and change its background color.

        document.getElementsByClassName("task2")[0].style.backgroundColor="red"
        
       

// Activity 2: Creating and Appending Elements
//  Task 3: Create a new div element with some text content and append it to the body.
    
    let task3=document.createElement("div");
    let task31=document.createElement("h1");
    task31.innerText="Creating new element using JS and appending it to the body";
    task3.appendChild(task31)
    document.body.appendChild(task3)

//  Task 4: Create a new li element and add it to an existing ul list.

        let task4=document.createElement("li");
        task4.innerText="List 1"
        let task41=document.createElement("li");
        task41.innerText="List 2"
        let task42=document.getElementById("task4");
        task42.appendChild(task4);
        task42.appendChild(task41);
// Activity 3: Removing Elements
//  Task 5: Select an HTML element and remove it from the DOM.


    

        document.getElementById("task51").remove()


//  Task 6: Remove the last child of a specific HTML element.

    let task6=document.getElementById("task6");   
    //    task6.removeChild(task6?.lastChild)
    //    task6.lastChild.remove();
      console.log(task6.lastElementChild)
      task6.lastElementChild.remove()
       


// Activity 4: Modifying Attributes and Classes
//  Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).

    let task7=document.getElementById("task7");
    task7.getElementsByTagName("img")[0].setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm0Igi2XXIjdzSo-FnnizMNQMghm9AKi0dYQ&s")
   



//  Task 8: Add and remove a CSS class to/from an HTML element.

        console.log(document.getElementById("task8").classList.remove("task81"));

// Activity 5: Event Handling
//  Task 9: Add a click event listener to a button that changes the text content of a paragraph.

    document.getElementById("task9Change").addEventListener('click',()=>{
            document.getElementById("task9").getElementsByTagName("p")[0].innerText="Do yo know ? you can change content of your html by using java script"
    });

//Task 10: Add a mouseover event listener to an element that changes its border color.

document.getElementById("task10").addEventListener('mouseover',(e)=>{
    
    document.getElementById("task10").style.background="blue";
   
        
    
})
document.getElementById("task10").addEventListener('mouseout',(e)=>{
   
        document.getElementById("task10").style.background="white";
    
})
