const secretKey = Symbol ("secret")
const firstname = Symbol ("adi");
const lastname = Symbol ("soyadi")


const obj  = {
    [secretKey]: "Bu alani alacaq",
    [firstname] :"Gulnar",
    [lastname] : "Hagverdiyeva",

}

console.log(obj[secretKey]);
console.log(obj[firstname]);
console.log(obj[lastname]);
obj[firstname] = "1.Gulnar"
console.log(obj[firstname]);