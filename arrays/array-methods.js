//-----------------forEach method-------------------

const arrayLoop =[1,2,3,4,5,6]
//loop statement
// passing three parameter 
//value,index,array --> here value is compulsory argument
arrayLoop.forEach((value)=>{
    console.log(value);
});
arrayLoop.forEach((value,index)=>{
    console.log("Index :"+index+"--->"+"Value : "+value);
});

const users =[
    {"f_name":"manisha","age":"21"},
    {"f_name":"nisha","age":"11"}
]
users.forEach((value)=>{
    console.log(value.f_name)
})

//-----------------map() method-------------------
