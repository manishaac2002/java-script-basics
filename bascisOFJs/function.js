// function

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

// thrown or return 
// error handling

// this function throw an error using throw key
// instead of throw keyword
// function errorFunction() {
//     throw new Error("There was an error")
// }

function errorFunction() {
    throw new Error("There was an error")
}

try {
     errorFunction()
} catch (error) {
    console.log(error);
}
console.log("That was a strange error");

// promise 
let myPromise = new Promise((resolve,reject)=>{
    resolve ('The promise was successful')//then
    reject('There was an error')//catch
})

myPromise.then((data)=>{
console.log(data);
}).catch((error)=>{
console.log(error);
})