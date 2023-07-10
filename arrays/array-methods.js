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
console.log(myArray1.splice(2));//(start,end)
console.log(myArray1.splice(2, 5));

//----------------splice method-----------------


