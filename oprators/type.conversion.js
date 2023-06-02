//----------------------------------type Conversion-------------------//
var d =new Date()
console.log(d);
console.log(typeof d);


let TypeConversion=23;
console.log(TypeConversion,typeof TypeConversion);
TypeConversion=String(TypeConversion)
console.log(TypeConversion,typeof TypeConversion);

let TypeConversion1=true;
console.log(TypeConversion1,typeof TypeConversion1);
TypeConversion1=String(TypeConversion1)
console.log(TypeConversion1,typeof TypeConversion1)

// ----1method-------//

let TypeConversion2=[1,2,3,4];
console.log(TypeConversion2,typeof TypeConversion2);
TypeConversion2=String(TypeConversion2)
console.log(TypeConversion2,typeof TypeConversion2)

// -----------2method--------- //

let TypeConversion3=[1,2,3,4];
console.log(TypeConversion3,typeof TypeConversion3);
TypeConversion3=TypeConversion3.toString()
console.log(TypeConversion3,typeof TypeConversion3)
