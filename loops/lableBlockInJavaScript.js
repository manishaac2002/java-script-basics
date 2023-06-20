let groups=[
    ["Nisha","Mala","Gowsi"],
    ["Tina","Meena","Abinya"],
    ["Sara","Ram","Ravi"]
]

for(let group of groups){
    inner:
    for(let member in groups){
        if(member.startsWith(R) ){
            console.log("Found one starting with R:",
            member );
            break inner
        }
    }
}
