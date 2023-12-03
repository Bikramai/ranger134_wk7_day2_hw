//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

// console.log(Object.keys(person3))
// console.log(Object.values(person3))

for (const value of Object.values(person3)){
    if (Array.isArray(value)) {
        for (const food of value) {
            console.log(food)
        }
    }
}





//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 



// Person Object Prototype ----the OOP ES5
class Person {
    //similar to the __init__ method in python
    
    constructor(name, age){
        this.name = name
        this.age = age
    }

}
    
    // Arrow function for printInfo method
    this.printInfo = () => {
        return `Name: ${this.name} \nAge: ${this.age}`
    };

    // Arrow function for incrementAge method
    this.addAge = () => {
        this.age +=1;
    };


// Creatint two people using the 'new' keyword
// class New extends Person {
//     constructor(name, age, info){
//         person1(name, age,  )
//     }


// } Not sure what to do i need more explain here



const person1 = new Person("Bikram", 35);
const person2 = new Person("Ayusha", 30);

    // Printing both persons info
    console.log(person1.printInfo());
    console.log(person2.printInfo());

    // Incrementing age of one person by 3 years
    console.log(person1.addAge(3)); //inccrement by 3

    // Printing info after incrementing age
    console.log("After incrementing age:");
    person1.printInfo();
    person2.printInfo();



// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

// JavsScript Promises
const isEvenNumber = (num) => {
    return new Promise((resolve, reject) => {
        if (num % 2 == 0) {
            resolve(num)
        } else {
            reject(num)
        }
    })
}

isLengthGreater(10)
.then((result)=> {
    console.log(`Big word: ${result}`)
})
.catch((error) => {
    console.log(`Small Number: ${error}`)
})



async function isLengthGreater(result, error) {
    const newSalary = await slowAddition(base, increase)
    console.log(`New Salary: ${newSalary}`)
    return newSalary
}

asyncSalary(50000, 10000)


// Codewors solution1 - Century From Year
// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript/6563ca119b5588a9be0e18de

const century = (year) =>{
    const century = Math.ceil(year / 100);
    
    return century;
  };



// Codewars solution 2 - Multiply
// https://www.codewars.com/kata/50654ddff44f800200000004/train/javascript/6563b9f587ba18a277adaac2

const multiply = (a, b) => a * b