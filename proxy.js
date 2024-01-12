const target = {
    name : "Gulnar",
    surname : "Hagverdiyeva",
    mail : "gulnar.hagverdiyeva@idda.az"
}

const handler = {
    get (target,property){
        console.log(`property tapildi : ${property}`);
        return target[property]
    },
    // set(target,property,value){
    //     if(property === "mail" && typeof value ==="number"){
    //         throw new Error ("mail bele olmaz")
    //     }
    //     console.log(`property deyeri deyisdirildi : ${property} = ${value}`);
    //     target[property] = value;
    // }

    set(target,property,value){
        if(property === "mail" && !value.includes('@idda.az')){
            throw new Error ("Sexsi email yaza bilmersen")
        }
        console.log(`property deyeri deyisdirildi : ${property} = ${value}`);
        target[property] = value;
    }

}

const proxy = new Proxy(target,handler);
console.log(proxy.name);
proxy.name = "1.Gulnar";
proxy.surname = "1.Hagverdiyeva";
proxy.mail = "1.gulnar.hagverdiyeva@idda.az";