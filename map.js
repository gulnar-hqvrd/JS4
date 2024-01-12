 const myMap  = new Map();
 myMap.set("firstname" , "Gulnaz") 
 myMap.set("firstname" , "Gulnar") 
 myMap.set("lastname" , "Hagverdiyeva") 
 myMap.set("age" , 21) 
 myMap.set("isFemale" , true) 
 myMap.set("isFat" , true) 
 myMap.set("isSad" , true) 
 myMap.set("isSleepy" , true) 
 myMap.set("isThin" , false) 

//  let firstname = myMap.get("firstname")
// console.log(firstname);


for(const [key , value] of myMap){
    console.log(`${key} = ${value}`);
}


const urlMap = new Map()
urlMap.set("")