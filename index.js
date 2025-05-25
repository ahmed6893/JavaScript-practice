// let user = prompt("Enter Your Name");
// let salary =prompt("Enter Your Salary");

// let expenses = prompt("Enter your Expenses");

// let tax = salary * 0.1 ;
// let netIncome = salary - tax ;
// let balance = netIncome - expenses;
// let savings = balance * 0.2 ;

// if (savings>= 1000)
// {
//     console.log(user + "Excelent Your saving well ->" + savings)
// }
// else if(savings>=500)
// {
//     console.log(user +"Your saving is decent ->" + savings)
// }
// else if(savings>=100)
// {
//     console.log(user +"Oh no Your saving arent very well ->" + savings) 
// }



// let y=10 ;
// do{
//     document.write("I love You");
//     y++;
// }while(y<=100);

// for(let i=1;i<=100;i++)
//     {
    
//         if(i==10)
//         {
//             continue;
//         }
//         document.write(" "+i)
//     }
//     document.write('End')


// for(let i=1;i<=100;i++)
//         {
        
//             if(i==10)
//             {
//                 break;
//             }
//             document.write(" "+i)
//         }




// let user = prompt("Enter Your name");
// let salary = prompt(parseInt("Enter Your salary"));
// let expenses =prompt(parseInt("How many expenses You have ?"))
//     if(isNaN(salary) || isNaN(expenses) || salary<=0 || expenses<=0)
//     {
//         document.write('Enter valid Enput')
//     }
//     else{
//         let totalExpenses = 0;

//         for(let number = 1; number<=expenses ; number++ )
//         {
//             let newExpenses =parseFloat(prompt(`Enter Your Expenes ${number}`));
//         }
//         totalExpenses += newExpenses ;
//     }

//     const tax = salary * 0.1;
//     const netIncome = salary - tax ;
//     const balance = netIncome - totalExpenses ;
//     const saving = balance * 0.2;
    
//     let finalStatus = '';

//     if(finalStatus >= 1000)
//     {
//         finalStatus = 'Amazing . Saving well ';
//     }
//     else if(finalStatus>=500)
//     {
//         finalStatus = 'Good . in condtion';
//     }
//     else if (finalStatus>= 100)
//     {
//         finalStatus = "Need improvment";
//     }
//     else{
//         finalStatus = "Critical condition";
//     }

//     let overSpending = '';
//     if(totalExpenses>salary)
//     {
//         overSpending = 'Warning ! Your Spanding Too much';
//     }

//     document.write("User"+user);
//     document.write("Total Income"+salary);
//     document.write("Total Expenses"+totalExpenses);
//     document.write("Tax 10%"+ tax);
//     document.write("Net Income After Tax"+netIncome);
//     document.write("Remaining Balance"+balance);
//     document.write("SAving 20% "+saving);
//     document.write(finalStatus);
//     if(overSpending)
//     {
//         document.write(overSpending);
//     }


// function tryPlus(num1,num2)
// {
//     var result = num1 + num2 ;
//     document.write("Result"+ result+ "<br>")
// }

// tryPlus(parseInt(prompt("Enter First number for Sub")),parseInt(prompt("Enter second for Sub")))


// (function display(number){
//     console.log("Result:" + number )
// })(6+7);


// let num = new Array();
// for (let i=0; i<5; i++)
// {
//     num[i] =parseInt(prompt("Enter Your Number"))
// }

// let sum=0 ;
// for( let i=1 ; i<5 ;i++)
// {
//     console.log(num[i]);
// sum = sum + num[i];
// }
// console.log("SUM ="+ sum);

// var names =["Anis" ,"Raad", "jibon"]
// names.shift()
// console.log(names);

// names.unshift("Sagor")
// console.log(names)


// task
// var scores = [40 , 50, 60,20,30,70,80];
// let mark=heightestScores(scores);

// function heightestScores(scores)
// {
//     let max = scores[0];
//     for(let x=1 ; x<scores.length ; x++)
//     {
//         if(max<scores[x])
//         {
//             max = scores[x];
//         }
//     }
//     return max;
// }
// console.log(mark)


// let playersInfo =[ 
//     ["Ashraful",5],
//     ["Samiul",10],
//     ["Lojim",50],
//     ["Ajim",80],
//     ["Karim",100]
//  ];

//  function heightestRunScores(playersInfo)
//  {
//     let heightestScorerName = playersInfo[0][0];
//     let heightestScores = playersInfo[0][1];
//     for(let x=1; x<playersInfo.length;x++)
//     {
//         if (heightestScores<playersInfo[x][1])
//         {
//             heightestScores = playersInfo[x][1];
//             heightestScorerName = playersInfo[x][0];
//         }
//     }
    
//     return heightestScorerName; 
//  }

//  let name = heightestRunScores(playersInfo)
//  console.log(name);


//  let user = prompt("Enter Your name");
// let salary = parseFloat(prompt("Enter Your salary"));
// let expenses =parseInt(prompt("How many expenses You have ?"));
//     if(isNaN(salary) || isNaN(expenses) || salary<=0 || expenses<=0)
//     {
//         document.write('Enter valid Enput')
//     }
//     else{
//         let totalExpenses = 0;
//         const arrayExpenses = [] ;
//         for(let number = 1; number<=expenses ; number++ )
//         {
           
//             let newExpenses =parseFloat(prompt(`Enter Your Expenes ${number}`));
//             arrayExpenses.push(newExpenses);
//         }
//         for( let array= 0; array<arrayExpenses.length; array++)
//         {
//             totalExpenses += arrayExpenses[array] ;
//         }
//     }

//     const tax = salary * 0.1;
//     const netIncome = salary - tax ;
//     const balance = netIncome - totalExpenses ;
//     const saving = balance * 0.2;
    
//     let finalStatus = '';

//     if(saving >= 1000)
//     {
//         finalStatus = 'Amazing . Saving well ';
//     }
//     else if(saving>=500)
//     {
//         finalStatus = 'Good . in condtion';
//     }
//     else if (saving>= 100)
//     {
//         finalStatus = "Need improvment";
//     }
//     else{
//         finalStatus = "Critical condition";
//     }

//     let overSpending = '';
//     if(totalExpenses>salary)
//     {
//         overSpending = 'Warning ! Your Spanding Too much';
//     }

//     document.write("User"+user);
//     document.write("Total Income"+salary);
//     document.write("Total Expenses"+totalExpenses);
//     document.write("Tax 10%"+ tax);
//     document.write("Net Income After Tax"+netIncome);
//     document.write("Remaining Balance"+balance);
//     document.write("SAving 20% "+saving);
//     document.write(finalStatus);
//     if(overSpending)
//     {
//         document.write(overSpending);
//     }
    

// function createStudent(name,age,cgpa,lang)
// {
//     this.name = name;
//     this.age  = age;
//     this.cgpa = cgpa;
//     this.lang = lang;

//     this.display = function()
//     {
//         console.log(this.name);
//         console.log(this.age);
//         console.log(this.cgpa);
//         console.log(this.lang);
//     }
// }

// let student1 = new createStudent("Rifat","22",3.80,["Bangla","English","Hindi"]);

// student1.display();

// let numberOfWin = 0;
// let numberOflos = 0;

// for(let i=0; i<5 ; i++)
// {
//     let gusssNumber = parseInt( prompt("Enter The Gussing random Number"));

//     let randomNumber = Math.floor( Math.random() * 5) + 1;

//     if(gusssNumber == randomNumber)
//     {
//         console.log("You have Won The random Number Was:"+randomNumber);
//         numberOfWin++;
//     }
//     else
//     {
//         console.log("You have lost The random Number was:"+randomNumber);
//         numberOflos++;
//     }
// }
// document.write("YOu have won total"+numberOfWin+"</br>");
// document.write("You have lost total"+numberOflos);

