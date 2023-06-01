// conditional chains

/*
marks avg >=90 A grade
avg >= 80 B grade 
other than c grade

*/

const  avg=44;
// ternary operator
const grade = avg>= 90?"A Grade" :avg>= 80?"A Grade" :"C Grade"
console.log(grade);