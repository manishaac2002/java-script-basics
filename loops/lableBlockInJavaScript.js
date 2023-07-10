// labeled block in java script


let groups = [
    ["Nisha", "Mala", "Gowsi"],
    ["Tina", "Meena", "Abinya"],
    ["Sara", "Ram", "Ravi"]
]


// to find the letter R starting in group of array
for (let group of groups) {
    inner:
    for (let member of group) {
        if (member.startsWith('R')) {
            console.log("Found one starting with R:",
                member);
            break inner//for ex -r it return first word of r (not everything iin the member)
        }
    }
}
