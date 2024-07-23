// Day 11: Promises and Async/Await
// Tasks/Activities:
// Activity 1: Understanding Promises



// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.


           let promise=new Promise((resolve,reject)=>{
            console.log("Promise will resolve after 2 seconds");
            setTimeout(()=>{
                resolve("Promise resolve after 2 seconds");
            },2000)
                
           })

           promise.then((message)=>{
                console.log(message);
           }).catch((err)=>{
            console.log(err);
           })

// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().

let promise1=new Promise((resolve,reject)=>{
    // console.log("Promise will resolve after 2 seconds");
    setTimeout(()=>{
        reject(new Error("Promise with error after 2 seconds"));
    },2000)
        
   })

   promise1
  .catch(error => {
    console.error("Promise rejected:", error.message);
  });

// Activity 2: Chaining Promises



// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.


function fetchData(id, delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Data from server ${id}`);
      }, delay);
    });
  }


  fetchData(1,2000).then((data)=>{
    console.log(data);
    return fetchData(2,1000);
  }).then((data)=>{
    console.log(data);
    console.log("data2");
    return fetchData(3,3000);
  }).then((data)=>{
    console.log(data);
  }).catch((err)=>{
    console.log("Error in fetching data"+err.message);
  })

// Activity 3: Using Async/Await




Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.

  function fetchdata(data,delay){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(data+" came after "+delay+" miliseconds");
    },delay);
    });

  }

  async function show(){
    try{
    let result=await fetchdata("data1",5000);
    console.log(result);

    let result1=await fetchdata("data2",1000);
    console.log(result1);

    let result2=await fetchdata("data2",500);
    console.log(result1);

    let result3=await fetchdata("data2",3000);
    console.log(result1);
    }catch (error) {
        console.error("Error:", error);
      }
  }

  show();

  
  
  


Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.

function fetchdataRejected(data,delay){
  return new Promise((resolve,reject)=>{
    
    try{
      if(delay < 1000){
      reject(new Error("Please enter delay value > 1000"));
      
    }else{
          setTimeout(()=>{
              resolve(data+" came after "+delay+" miliseconds");
      },delay);
    }
  }catch(err){
    console.log(err.message);
  }
  });

}

async function showData(){
  try{
  let result=await fetchdataRejected("data1",2000);
  console.log(result);

  let result2=await fetchdataRejected("data2",500);
  console.log(result2);

  let result1=await fetchdataRejected("data2",1000);
  console.log(result1);

  

  let result3=await fetchdataRejected("data2",3000);
  console.log(result3);
  }
  catch (error) {
      console.error("Error:", error.message);
    }
}

showData();




//Activity 4: Fetching Data from an API



//Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.

      let data=  fetch("https://api.restful-api.dev/objects").then((data)=>{
        console.log(data);
      })

//Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.

   const fetchDataPublic= async ()=>{
        let response= await fetch("https://api.restful-api.dev/objects");
        // let response= await fetch("https://api.restful-api.dev/objects?id=3&id=5&id=10");
        let data1=await response.json();
        console.log(data1);
      }

      fetchDataPublic();


//  Activity 5: Concurrent Promises

// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.

      function multiplePromise(msg,delay){
        return new Promise((resolve)=>{
          setTimeout(()=>{
            resolve(msg+" "+delay);
          },delay)}
        )
      }

     
      async function promiseAll(){
        let promise1 =multiplePromise("promise1",1000);
        let promise2=multiplePromise("promise2",5000);
        let promise3=multiplePromise("promise3",3000);
       let promise4= multiplePromise("promise4",500);
        
       let result=await Promise.all([promise1,promise2,promise3,promise4]);
       console.log("all promise done");
       console.log(result);
      }
      // promiseAll();

// Task 9: Use Promise. race to log the value of the first promise that resolves among multiple promises.

async function promiseRace(){
  let promise1 =multiplePromise("promise1",1000);
  let promise2=multiplePromise("promise2",5000);
  let promise3=multiplePromise("promise3",3000);
 let promise4= multiplePromise("promise4",4000);
  
 let result=await Promise.race([promise1,promise2,promise3,promise4]);
 console.log("Promise which resolved very first "+result);
//  console.log(result);
}
promiseRace();
