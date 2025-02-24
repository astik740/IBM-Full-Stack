let str="SV University";
console.log(str.length)
console.log(str .length -1)
console.log(str[0])
console.log(str[str.length-1])
// string are not change besause it,s inmutable

let arr=[1,2,3,"","gj","lol"];

console.log(arr[arr.length-2])
console.log(arr[2])
arr.push("jj")
// slice  and slies
arr.pop();
console.log(arr)
let obj={

    jay:{className:"B Tech",rn:315,subject:["CN","DBMS","DSA","RM"]},
    arjun:{className:"B Tech",rn:316,subject:["CN","DBMS","DSA","RM"]},
    1:undefined
}
console.log(obj);
console.log(obj["jay"])
obj.jay="myname"
console.log(obj)
delete obj.jay
console.log(obj)
console.log(obj.joy.subject[1]);


let name="nilu";
let Class="B Tech";
let hobbise=["Game","travle"]

let  newObj = {
    name,Class,hobbise
}

console.log(newObj);


let ans=[1,2,3,[9,4,6,[5,1,9]]];
console.log(ans[3][3][0])


let superHeroes = {
    1: {
        name: 'Batman',
        power: ['intelligence', 'money'],
        health: 45,
        villains: [
            { name: 'Redhood', health: 34 },
            { name: 'Twoface', health: 64 }
        ],
        metadata: { favouriteColor: 'red', age: 15 }
    },
    2: {
        name: 'Ironman',
        power: ['jarvis', 'money'],
        health: 33,
        villains: [
            { name: 'Manderin', health: 44 },
            { name: 'Titanium Man', health: 56 }
        ],
        metadata: { favouriteColor: 'red', age: 13 }
    }
}
console.log(superHeroes[1].villains[1].health)
console.log(superHeroes[2].villains[1].name)

