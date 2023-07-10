// ----------------------------------Basics of java script---------------------------//

var array = [1, 2, 3, 4, 5]
// find 10 in this array
var ans = array.find(x => x == 10)
if (ans) {
    console.log(ans);
} else {
    console.log("No number");
}
// ----------------------------Java script--------------------------------------
if (true) {
    var msg = 'hi'
}
console.log(msg);

// -------------------------------------------------------------------------------
var js = 23
console.log(js);
var js = 24
console.log(js);
// ---------------------------------------------------------------------------------

var array = ["a", "b", "c", "d"]

var res = array.indexOf("d")

console.log(res);

// -------------------------------Bitwise operator----------------------------

// -> &&, |, <<,>> ^

// --------------------------Increment & Decrement------------------------------
// -> ++ &--

// postfix increment a++
// prefix increment ++a

// ---------------Type Coercion-------------------


let a1 = "24"//it consider as string
let b1 = 12
console.log(a1 + b1);

a1 = Number(a1)//if need addition result..convert into number and then add 
console.log(a1 + b1);
