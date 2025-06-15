
function runBUdgetTracker()
{
    let userBudget= {
        user :'',
        salary:0,
        expenses:[],
        arrayExpenses : [],
        newExpenses :'',
        tax:0,
        netIncome:0,
        balance:0,
        saving:0,
        finalStatus:0,
    };
}


function getUserInput(promptMessage , isNumber = false)
{
let userInput = prompt(promptMessage);
return isNumber ? parseFloat(userInput) : userInput ;
}

function getExpenses(expenses)
{
    const arrayExpenses = [] ;
      for(let number = 1; number<=expenses ; number++ )
        {
            let newExpenses =getUserInput(`Enter Your Expenes ${number}`,true);
            arrayExpenses.push(newExpenses);
        }
        return arrayExpenses ;
     
} 

function calculateTotalExpenses(arrayExpenses)
{
    let totalExpenses = 0;
        for( let array= 0; array<arrayExpenses.length; array++)
        {
            totalExpenses += arrayExpenses[array];
        }
        return totalExpenses ;
}

function getFinalResult(user , salary , totalExpenses , tax , netIncome , balance , saving , finalStatus)
{
        let overSpending = '';
    if(totalExpenses>salary)
    {
        overSpending = 'Warning ! Your Spanding Too much';
    }

    document.write("User"+user +"<br>");
    document.write("Total Income"+salary+"<br>");
    document.write("Total Expenses"+totalExpenses+"<br>");
    document.write("Tax 10%"+ tax+"<br>");
    document.write("Net Income After Tax"+netIncome+"<br>");
    document.write("Remaining Balance"+balance+"<br>");
    document.write("SAving 20% "+saving+"<br>");
    document.write(finalStatus+"<br>");
    if(overSpending)
    {
        document.write(overSpending);
    }
}

function getFinancialStatus(saving)
{
    let finalStatus = '';

    if(saving >= 1000)
    {
        finalStatus = 'Amazing . Saving well ';
    }
    else if(saving>=500)
    {
        finalStatus = 'Good . in condtion';
    }
    else if (saving>= 100)
    {
        finalStatus = "Need improvment";
    }
    else{
        finalStatus = "Critical condition";
    }
    return finalStatus;
}

function getBudgetTracker()
{
userBudget.user = getUserInput("Enter Your Name");
userBudget.salary = getUserInput("Enter Your salary" , true);
userBudget.expenses =getUserInput("How many expenses You have ?" , true);



    if(isNaN(userBudget.salary) || isNaN(userBudget.expenses) || userBudget.salary<=0 || userBudget.expenses<=0)
    {
        document.write('Enter valid Enput')
        return; 
    }
    else{

        userBudget.arrayExpenses = getExpenses(expenses);

        userBudget.totalExpenses = calculateTotalExpenses(arrayExpenses);


    userBudget.tax = salary * 0.1;
    userBudget.netIncome = salary - tax ;
    userBudget.balance = netIncome - totalExpenses ;
    userBudget.saving = balance * 0.2;
    
    let finalStatus = getFinancialStatus(saving);

     getFinalResult(user , salary , totalExpenses , tax , netIncome , balance , saving , finalStatus);
}

   
}

getBudgetTracker()


//next day for tracker