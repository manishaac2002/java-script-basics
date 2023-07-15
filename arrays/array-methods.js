//array_methods
/* 
array methods - 25 methods
foreach map slice splice 
concat sort fill includes join 
reverse push pop shift 
unshift indexOf lastIndexOf every 
some find findIndex from 
isArray filter flat reduce

*/
 //first 4 methods
//-----------------forEach method-------------------

const arrayLoop = [1, 2, 3, 4, 5, 6]
//loop statement
// passing three parameter 
//value,index,array --> here value is compulsory argument
arrayLoop.forEach((value) => {
    console.log(value);
});
arrayLoop.forEach((value, index) => {
    console.log("Index :" + index + "--->" + "Value : " + value);
});

const users = [
    { "f_name": "manisha", "age": "21" },
    { "f_name": "nisha", "age": "11" }
]
users.forEach((value) => {
    console.log(value.f_name)
})

//-----------------map() method-------------------
//square the value (in the array)
let myArray = [1, 2, 3, 4, 5, 6, 7];
const returnValue = myArray.map((element) => {
    return element * element;
})
console.log(returnValue);

// ----------------slice method---------------------
let myArray1 = [1, 2, 3, 4, 5, 6, 7];
console.log("Slice : " + myArray1.slice(2));//(start,end)
console.log("Slice : " + myArray1.slice(2, 5));

//----------------splice method-----------------
//(start,length,new element)
//return function -->which return the remove elements

let a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Before Splice : " + a1);
let removedElements = a1.splice(2)
console.log("Removed Splice : " + removedElements);
console.log("After Splice : " + a1);

console.log("----------------------------------------------------");
//passing two arg
let a2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Before Splice : " + a2);
removedElements = a2.splice(2, 2)
console.log("Removed Splice : " + removedElements);
console.log("After Splice : " + a2);

console.log("----------------------------------------------------");
//three arg(new element)
//removing the element and inserting the new element by passing third element
let a3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Before Splice : " + a3);
removedElements = a3.splice(2, 2, 35, 89)
console.log("Removed Splice : " + removedElements);
console.log("After Splice : " + a3);

console.log("----------------------------------------------------");
//three arg(new element) in array format...
let a31 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Before Splice : " + a31);
removedElements = a31.splice(2, 2, [35, 89])
console.log("Removed Splice : " + removedElements);
console.log(a31);

console.log("----------------------------------------------------");

//without removing element in array inserting a element
const a4 =[1,2,3,4,5,6,7,8,9,10]
console.log("Before Splice : " + a4);
//start length
a4.splice(2,0,100,67)
console.log("After splice : "+a4);

console.log("----------------------------------------------------");
