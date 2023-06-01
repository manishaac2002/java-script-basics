/*
// no constant variable ,it can be declared as of now( version es6)
// object=>{
    // "key":"pair"
// }
user={
    "name":"john",
    "age":"23"
}
console.log(user);
// to cal object key --> dot(.) notation
console.log(user.name);
console.log(user.age);


//when passing the parameter as name it returns undefined
// by default setting as name =user it returns without any callback function as eg: "hello user!"
function welcome(name="user!") {
    const result =name?name:"NO name"
    console.log("hello",result);
}

welcome("manisha")
welcome()   

// arrow function
const greeting=(user)=>{
console.log(user);
}

console.log(welcome.toString());

*/

/*
// ---------------nullish coalescing operator----------------//
const a=null??"No value"
console.log(a);

const b=25??45
console.log(b);

// when null pass through it (??) nullish operator it return next to the null operator
const c=null??45
console.log(c);

// using object
const users = {"name":"manisha"}
console.log(users);
console.log(users.name);
// nullish coalescing assignment operator
users.city??="chennai"
console.log(users.city);
*/

