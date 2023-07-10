
// no constant variable ,it can be declared as of now( version es6)
// object=>{
// "key":"pair"
// }
user = {
    "name": "john",
    "age": "23"
}
console.log(user);
// to cal object key --> dot(.) notation
console.log(user.name);
console.log(user.age);


//when passing the parameter as name it returns undefined
// by default setting as name =user it returns without any callback function as eg: "hello user!"
function welcome(name = "user!") {
    const result = name ? name : "NO name"
    console.log("hello", result);
}

welcome("manisha")
welcome()

// arrow function
const greeting = (user) => {
    console.log(user);
}

console.log(welcome.toString());



