// function generateRandomNumbers() {
//     var randomNumbers = [];
//     for (var i = 0; i <= 6; i++) {
//       var randomNumber = Math.floor(Math.random() * 49) + 1;
//       if(!randomNumbers.includes(randomNumber)){
//         randomNumbers.push(randomNumber);
//       }
//     }
  
//     return randomNumbers;
//   }
//   var result = generateRandomNumbers();
//   console.log(result.sort((a , b) => a-b));
  


// function generateRandomNumberV1(){
//     const numbers = new Set();
//     while (numbers.size < 6){
//         const number = Math.floor(Math.random() * 49) + 1;
//         numbers.add(number);
//         if(numbers.size === 6)
//         break 
//     }

//     return [...numbers].sort((a, b) => a-b)
// }

// const randomNumbers1 = generateRandomNumberV1()
// console.log(randomNumbers1);

