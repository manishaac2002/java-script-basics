// -------------------conditional loop statement------------------------//
/*
->while loop
->do while loop
->for 
--------------------------
for of
eg
*/
let names =['nisha','sathya','mala']
for (let name of names)
console.log(name)
// ---------------------------------
//looping for the use objects
// for in
let user={
    name:"manisha",
    age:"20"
}

for(let prop in user){
    console.log(prop+":"+user[prop]);
}

//----------Looping over objects converting to an arrays---------//
let users1={
    name:"manisha",
    age:"20"
}

let arrayKeys1 =Object.keys(users1)
let arrayKeys =Object.values(users1)
// table format
console.table(arrayKeys1);
console.log(arrayKeys1);
console.log(arrayKeys);