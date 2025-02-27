// foreach

// let arr =[1,2,3,4,5,,7,8,9,10,12,13,15,16,17,18]

// let ans = arr.forEach((el,index)=>{
//     return el
// });
// console.log(ans)

// let output = arr.filter((el,i)=>{
//     return el=="string" || el%5==0;

// })
// console.log(output);


// REDUCE
// let output = arr.reduce((acc,el)=>{
//     //return acc+el
//     return acc*el
// }); 
// console.log(output)

// let ans = arr.filter((el)=>{
//     return el%5==0;
// }).map((el,index)=>{
//     return el*2
// }).reduce((acc,el)=>{
//     return acc+el;
// })
// console.log(ans);




// let arr =[3,5,1,8,34,90,67,45,34,89,100,45,12,65]

// let ans = arr.sort((a,b)=>{
//     return a-b });

// console.log(arr)    

let data = [
    { name: "watch", price: 2000, desc: "Good watch", rating: 4 },
    { name: "shoe", price: 1200, desc: "Good shoe", rating: 4.5 },
    { name: "car", price: 100000, desc: "Good car", rating: 5 },
    { name: "phone", price: 19999, desc: "Good phone", rating: 4.2 },
    { name: "laptop", price: 70000, desc: "Good laptop", rating: 4.8 },
    { name: "headphone", price: 6000, desc: "Good headphone", rating: 3 },
    { name: "laptop bag", price: 3000, desc: "Good bag", rating: 5 }
  ];
  
  // Corrected sorting function
  data.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  
  console.log(data);
  
  