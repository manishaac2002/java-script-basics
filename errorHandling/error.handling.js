// function errorFunction() {
//     return new Error("There was an error")
// }

// try {
//      errorFunction()
// } catch (error) {
//     console.log(error);
// }
// console.log("That was a strange error");

// // promise 
// let myPromise = new Promise((resolve,reject)=>{
//     resolve ('The promise was successful')//then
//     reject('There was an error')//catch
// })

// myPromise.then((data)=>{
// console.log(data);
// }).catch((error)=>{
// console.log(error);
// })


// exception handling
try {
    num = prompt("Enter a number")
    if(num=== '')
      throw "Cannot be empty"
    if (isNaN(num)) 
        throw "Enter a valid Number"
    console.log(num**2); 
} catch (error) {
    console.log(error);
}
