// function createItertor(arr){
// let index = 0;
// return {
//     next : function(){
//         if(index < arr.length){
//             return{
//                 value :arr[index++],
//                 done : false
//             }
//         }
//         else{
//             return{
//                 done:true
//             }
//         }
//     }
// }
// }

// const myArray = ["a" , "b","c" , "d" , "e"]
// const myIteratot =  createItertor(myArray)

// console.log(myIteratot.next());
// console.log(myIteratot.next());
// console.log(myIteratot.next());
// console.log(myIteratot.next());
// console.log(myIteratot.next());
// console.log(myIteratot.next());
// console.log(myIteratot.next());
// console.log(myIteratot.next());
// console.log(myIteratot.next());




function createItertor(arr){
    let index = 0;
    return {
        next : function(){
            if(index < arr.length){
                return{
                    previosItem : arr[index-1],
                    currentItem :arr[index++],
                    nextItem : arr[index],
                    done : false
                }
            }
            else{
                return{
                    done:true
                }
            }
        }
    }
    }
    
    const myArray = ["a" , "b","c" , "d" , "e"]
    const myIteratot =  createItertor(myArray)
    
    console.log(myIteratot.next());
    console.log(myIteratot.next());
    console.log(myIteratot.next());
    console.log(myIteratot.next());
    console.log(myIteratot.next());
    console.log(myIteratot.next());
    console.log(myIteratot.next());
    console.log(myIteratot.next());
    console.log(myIteratot.next());
    
    
