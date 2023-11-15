
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


let person ={
    name :'Manisha',
    age:'21'
}
console.log(person);

//{
//  key value pairs 
// } -> object literal
// property also know as a key of the person object

// work with property
// 1 - Dot Notation
// to call property of keys
person.name ='John';
console.log(person.name);



// 2 - Bracket Notation
person['name']='Nisha'
console.log(person.name);

// dynamic
let some = 'name'
person[some]='mala'
console.log(person.name);