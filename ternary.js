// let number = Number(prompt("Enter Your Number"));
// if(number>0){
//     console.log("Positive")
// }
// else{
//     console.log("Negative")
// }

// let result = number > 0 ? "Positive" : "Negative"
// console.log(result);

// let result = number>0 ? "Positive": number<0 ? "Negative" : "zero";
// console.log(result);

// switch (number)
// {
//     case "0":
//         console.log("Zero");
//         break
//     case "1":
//         console.log("One");
//         break
//     case "2":
//         console.log("two");
//         break
//     case "3":
//         console.log("three");
//         break
//     case "4":
//         console.log("Four");
//         break
//     case "1":
//         console.log("Five");
//         break
//     default:
//         console.log("NOt a digit")
// }





// let number = prompt("Enter Your Letter");

// switch(number)
// {
//         case "a":
//             console.log("Letter is vowel");
//             break
//         case "e":
//             console.log("Letter is vowel");
//             break
//         case "i":
//             console.log("Letter is vowel");
//             break
//         case "o":
//             console.log("Letter is vowel");
//             break
//         case "u":
//             console.log("Letter is vowel");
//             break
//             default:
//                 console.log("Letter is Consonant")
// }



//     let y= 1;
//     let sum=0
//     while( y <= 100 ){

//         if(y % 3 == 0 && y % 5 ==0)
// {
//             sum =sum + y;
//         }

//         y = y + 1;
// }
// document.write(sum);
document.write("practice")
for(i=1;i<=100;i++)
{
    document.write(' '+i);
    if(i%3== 0 && i%5 == 0)
    {
        document.write('FizzBuzz')
    }
    else if(i%5 == 0)
    {
        document.write("BUzz")
    }
    else if( i%3 == 0)
    {
        document.write("Fizz")
    }
 
}