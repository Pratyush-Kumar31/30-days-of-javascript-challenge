let string="Chai code";
const bool=true;
const number=22;


function greeting() {
    console.log("Hello, I am from multiple function and multiple variable module");
}

function sayName(name){
    console.log("Hy "+name);
}

function sayAge(age){
    console.log("Your age is "+age);
}

export default {string,bool,number,sayAge,sayName,greeting}