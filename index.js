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

let user = prompt("Enter Your name");
let salary = prompt(parseInt("Enter Your salary"));
let expenses =prompt(parseInt("How many expenses You have ?"))
    if(isNaN(salary) || isNaN(expenses) || salary<=0 || expenses<=0)
    {
        document.write('Enter valid Enput')
    }
    else{
        let totalExpenses = 0;

        for(number = 1; number<=expenses ; number++ )
        {
            let newExpenses =parseFloat(prompt(`Enter Your Expenes ${number}`));
        }
        totalExpenses += newExpenses ;
    }

    const tax = salary * 0.1;
    const netIncome = salary - tax ;
    const balance = netIncome - totalExpenses ;
    const saving = balance * 0.2;
    
    let finalStatus = '';

    if(finalStatus >= 1000)
    {
        finalStatus = 'Amazing . Saving well ';
    }
    else if(finalStatus>=500)
    {
        finalStatus = 'Good . in condtion';
    }
    else if (finalStatus>= 100)
    {
        finalStatus = "Need improvment";
    }
    else{
        finalStatus = "Critical condition";
    }

    let overSpending = '';
    if(totalExpenses>salary)
    {
        overSpending = 'Warning ! Your Spanding Too much';
    }

    document.write("User"+user);
    document.write("Total Income"+salary);
    document.write("Total Expenses"+totalExpenses);
    document.write("Tax 10%"+ tax);
    document.write("Net Income After Tax"+netIncome);
    document.write("Remaining Balance"+balance);
    document.write("SAving 20% "+saving);
    document.write(finalStatus);
    if(overSpending)
    {
        document.write(overSpending);
    }