

// let obj = {
//     name: "nilu",
//     class: "B Tech",  // Added missing comma
//     myFunction: function () {
//         console.log(this)



//         console.log('I am a method inside object');
//     },
//     subject: ["DBMS", "CN", "AI", "ML", "DL"],
//     newObj: {
//         1: 80,
//         nestedFunction: function () {
//             console.log(this)

//             nestedNewObj:function()
//             {}
//             console.log("I am nested");
//         }

//     }
// }

// // Correct function invocation
// obj.myFunction();

// let num1 = 10,num2=20;


// if(nu1<num2){
//     console.log(`${num1}  is less then${num2}`);
// }else(nu1==num2){
//     console.log(`${num1}  is equal to${num2}`);
// }else{
    
//     console.log(`${num1}  is not less then${num2}`);


// }

// function checkNumber(num) {
//     if (num % 3 === 0 && num % 5 === 0) {
//         console.log("Fizz Buzz");
//     } else if (num % 3 === 0) {
//         console.log("Fizz");
//     } else if (num % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(num);
//     }
// }

// // Example usage
// // Output: Fizz Buzz
// checkNumber(15); 

// // Output: Fizz
// checkNumber(9); 

// // Output: Buzz
// checkNumber(10);

// // Output: 7
// checkNumber(7);  



// find the elemennt a odd or  even
let arr = [1, 2, 3, 4, 5, 6, 7, 9, 10];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        console.log(`${arr[i]} is Even`);
    } else {
        console.log(`${arr[i]} is Odd`);
    }
}

