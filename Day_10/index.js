// Day 10: Event Handling
// Tasks/Activities:
// Activity 1: Basic Event Handling
//  Task 1: Add a click event listener to a button that changes the text content of a paragraph.

        document.getElementById("changeContent1").addEventListener("click",()=>{
            document.getElementById("content1").textContent="Do you know you can change any of the text content via Javascript...."
        })


// Task 2: Add a double-click event listener to an image that toggles its visibility.


        // document.getElementById("taskToggle").addEventListener("dblclick",()=>{
        //    if(document.getElementById("task2").style.visibility==="visible"){
        //         document.getElementById("task2").style.visibility="hidden";
        //    }else{
        //         document.getElementById("task2").style.visibility="visible";
        //    }
            
        // })
        document.getElementById("taskToggle").addEventListener("dblclick",()=>{
                document.getElementById("task2").classList.toggle("imageToggle")
            
        })

       




// Activity 2: Mouse Events
//  Task 3: Add a mouseover event listener to an element that changes its background color.

                document.getElementById("task3&4").addEventListener("mouseenter",()=>{
                        document.getElementById("task3&4").style.backgroundColor="red";
                        document.getElementById("task3&4").style.color="white";
                })
                

// Task 4: Add a mouseout event listener to an element that resets its background color.



document.getElementById("task3&4").addEventListener("mouseout",()=>{
        document.getElementById("task3&4").style.backgroundColor="white";
        document.getElementById("task3&4").style.color="black";
})

// Activity 3: Keyboard Events
//  Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.

        document.getElementById("task5").addEventListener("keydown",(e)=>{
                console.log(e.key);
                
        })


//  Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.

document.getElementById("task6").addEventListener("keyup",(e)=>{
        document.getElementById("typed").textContent+=e.key;
})




// Activity 4: Form Events
//  Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.

      
        // document.addEventListener("submit", function () {
        //         let myForm = document.getElementById("myForm");
          
        //         myForm.addEventListener("submit", function (e) {
        //            e.preventDefault()
          
        //            let formData = new formData(myForm)
          
        //            for (let pair of formData.entries()) {
        //               console.log(pair[0] + ": " + pair[1]);
        //            }
        //         })
        //      })


        const myForm = document.getElementById('myForm');

        
        myForm.addEventListener('submit', (e) => {
            
            e.preventDefault();

             const formData = new FormData(myForm);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });

            console.log('Form data:', formObject);
        });




// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.

        document.getElementById("task8").addEventListener('change',(e)=>{
                document.getElementById("showContent").innerText=e.target.value;
        })



// Activity 5: Event Delegation
//  Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.

        document.getElementById("task9").addEventListener('click',(e)=>{
                if(e.target.tagName==="LI"){
                        console.log(e.target.textContent);
                }
        })




// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.

        document.getElementById("task10").addEventListener('click',(e)=>{
                console.log("Your item is "+e.target.innerText)
        })

        
        document.getElementById("addItem").addEventListener('click',()=>{
                if(document.getElementById("itembox").value==""){
                        return;
                }
                let li=document.createElement('li');
                li.textContent=document.getElementById("itembox").value;
                document.getElementById("task10").appendChild(li);
                document.getElementById("itembox").value="";
        })
