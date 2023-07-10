// ---------------nullish coalescing operator----------------//
const a = null ?? "No value"
console.log(a);

const b = 25 ?? 45
console.log(b);

// when null pass through it (??) nullish operator it return next to the null operator
const c = null ?? 45
console.log(c);

// using object
const users = { "name": "manisha" }
console.log(users);

console.log(users.name);
// nullish coalescing assignment operator
users.city ??= "chennai"
console.log(users.city);