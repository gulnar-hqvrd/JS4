const person = {
    firstname :"Gulnar",
    lastname : "Hagverdiyeva",
    age : 21,
    getAddress(){
        return "Baki Azerbaijan"
    }
}

// console.log('firstname :' , person.firstname);
// console.log('lastname :' , person.lastname);
// console.log('age :' , person.age);
// console.log('address :' , person.getAddress());


// for (const key in person){
//     console.log(`${key}: ${person[key]}`);
// }


// const propertyNames = Object.keys(person);
// console.log('propertyName : ' , propertyNames);

// const propertyValues = Object.values(person);
// console.log('propertyName : ' , propertyValues);

// const methodName = 'getAddress'
for (const key in person){
if(person.hasOwnProperty(key) && person[key] === 'function'){
    const result = person[key].call(person);
    console.log(`${key} : ${result}`);
}

else{
    console.log(`${key} : ${person[key]}`);
}
}
