// second 4 methods
//----------------------concat------------------------------------- 
const a = [10, 20, 30]
const b = [40, 50, 60]
const c = [70, 80, 90]

let d = a.concat(b)
let d1 = a.concat(b, c)
let d2 = a.concat(b, c, 34, 43)
let d3 = a.concat(b, c, 34, 43, ['a', 'b', 'c'])//also array
console.log("concat : " + d);
console.log("concat : " + d1);
console.log("concat : " + d2);
console.log("concat : " + d3);

console.log("----------------------------------------------------");

//--------------------------sort method---------------------------
const names = ['manisha', 'nisha', 'sha', 'mala']
console.log(names.sort());
//--doubt in sorting numbers--

//-----------fill method--------------------------
//three arg(value,start,end)(changing value,index,element)
console.log("----------------------------------------------------");
let fill = [1, 2, 3, 4, 5, 6, 7]

console.log("Before fill :" + fill);
fill.fill("5")
console.log("After fill :" + fill);

//two arg
console.log("----------------------------------------------------");
let fill2 = [1, 2, 3, 4, 5, 6, 7]
console.log("Before fill :" + fill2);
fill2.fill("44", 3)
console.log("After fill : " + fill2);

console.log("----------------------------------------------------");
//three arg
let fill3 = [1, 2, 3, 4, 5, 6, 7]
console.log("Before fill :" + fill3);
fill3.fill("44", 3, 5)
console.log("After fill :" + fill3);

//--------------------------includes-----------------------------------
//includes(value,start_index)
const things = ["waterBottle", "phone", "wire","book"]
const result = things.includes("waterBottle")
console.log(result);

//passing two args
const things1 = ["waterBottle", "phone", "wire","book"]
const result1 = things1.includes("waterBottle",2)
console.log(result1);

//after passing index value it consider as staring index
//so it returns false 

//array join