let firstName = "I'm Manisha"
let lastName = "A C"

// Concatenation
let concatenation = firstName+" "+ lastName
console.log("Concatenation : "+ concatenation);

// concat
concatenation = firstName.concat(' '+ lastName)
console.log("concat : "+ concatenation);

// append
c="manisha"
c+="A C"//append
console.log("Append : "+c);

// Escaping
// c ='she can't run'//this is a problem which gives error
 
// solution
// ----------------method_1--------------
a="she can't run "
console.log(a);
// ----------------method_2------------
c='she can\'t run'//->here \'it consider as character (\)
console.log(c);

//Length
c=firstName.length//which finds the length of the string
console.log("Length : "+c);

// String Upper Case and Lower Case
// --->.toUpperCase//case sensitivity(u,c)
// --->.toLowerCase
c=firstName.toUpperCase()
console.log("Uppercase : "+ c );
c=firstName.toLowerCase()
console.log("Lowercase : "+ c );

// String index of -->indexOf
// which find the index of string
// index start from 0(for counting)
c=firstName.indexOf('M')
console.log("Index of: "+ c );

// String lastIndexOf
c=firstName.lastIndexOf('a')
console.log("Lastindexof a: "+ c);

//charAt ..which finds the character in string according to the index value
c=firstName.charAt(6)//does't consider spaces in string     
console.log("CharAt : "+c);

// charCodeAt
c=firstName.charCodeAt(6)    
console.log("CharCodeAt : "+c);//returns a ascii values of a character 

// substr 
c=firstName.substr(0,4) 
console.log(" substr: "+c);
