let firstName = "I'm Manisha"
let lastName = "A C"

// Concatenation
let concatenation = firstName + " " + lastName
console.log("Concatenation : " + concatenation);

// concat
concatenation = firstName.concat(' ' + lastName)
console.log("concat : " + concatenation);

// append
c = "manisha"
c += "A C"//append
console.log("Append : " + c);

// Escaping
// c ='she can't run'//this is a problem which gives error

// solution
// ----------------method_1--------------
a = "she can't run "
console.log(a);
// ----------------method_2------------
c = 'she can\'t run'//->here \'it consider as character (\)
console.log(c);

//Length
c = firstName.length//which finds the length of the string
console.log("Length : " + c);

// String Upper Case and Lower Case
// --->.toUpperCase//case sensitivity(u,c)
// --->.toLowerCase
c = firstName.toUpperCase()
console.log("Uppercase : " + c);
c = firstName.toLowerCase()
console.log("Lowercase : " + c);

// String index of -->indexOf
// which find the index of string
// index start from 0(for counting)
c = firstName.indexOf('M')
console.log("Index of: " + c);

// String lastIndexOf
c = firstName.lastIndexOf('a')
console.log("Lastindexof a: " + c);

//charAt ..which finds the character in string according to the index value
c = firstName.charAt(6)//does't consider spaces in string     
console.log("CharAt : " + c);

// charCodeAt
c = firstName.charCodeAt(6)
console.log("CharCodeAt : " + c);//returns a ascii values of a character 

// substr 
c = firstName.substr(0, 4) //(0,4)--> staring index, ending index - from which to stop the string )
console.log("substr :" + c);

// SubString
// ---method 1--------
let number = "01123123"
a = number.substring(0, 4)//it returns till the 4th index value && 
// even this also consider it as same(4,0) ending index as first and staring index as last
console.log("Substring: " + a);
// -----method 2---------
let number1 = "01123123"
a = number1.substring(4)//it returns after the 4th index value
console.log("Substring: " + a);

// slice
c = number.slice(3, 5)//first value- index count && ending value - starts at 1
console.log("Slice: " + c);
// if the invalid length is given to the index value ..it returns empty value

c = number.slice(-3)
console.log("Slice -3: " + c);//it returns the last index values

// Split 
a = "Hey this is JavaScript String methods"
c = a.split(" ")//returns as arrays
console.log("Split : " + c);
console.table(c);//to see the correct format array

// replace
a = "Hey this is JavaScript String methods"
d = a.replace('JavaScript', 'js')
console.log("Replace : " + d);

// includes
const food = ['naan', 'panner', 'mutton']
console.log(food.includes('naan'))//if it contains it returns in the boolean datatype true/false
console.log(food.includes('nan'))//it returns false which doesn't containx

// trim 
// which uses for remove unwanted white space
var name1 = " nisha "
console.log("Before trim " + name1.length);
name1 = name1.trim()
console.log("After trim " + name1.length);
name2 = name1.trim()
console.log("After trim :" + name2);

// padStart & padEnd
// which add zero(0) to front and back of the string

// Long string literal
//--> method1 using concatenating
// --> method2 using slash

// String.fromCharCode()
// returns ascii values     