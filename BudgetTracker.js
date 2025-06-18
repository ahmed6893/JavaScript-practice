
// function to save data in localstorage
function saveBudgetToLocal(){
    localStorage.setItem('userBudget',JSON.stringify(userBudget));
}

// function to retrieve data in localstorage
function getBudgetToLocal(){
    const savedBudget =localStorage.getItem('userBudget');
    return savedBudget ? JSON.parse(savedBudget): null;
}
// function to clear data in localstorage
function clearBudgetToLocal(){
    localStorage.removeItem('userBudget');
    console.log("Data Removed")
}

function runBudgetTracker(){
    let userBudget=getBudgetToLocal();

    if(userBudget){
        console.log('Data loaded from previos')
        getFinalResult(userBudget);
    }
    else{
        getBudgetTracker();
    }
}

    let userBudget = {
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

function getFinalResult(userBudget)
{
        let overSpending = '';
    if(userBudget.totalExpenses>userBudget.salary)
    {
        overSpending = 'Warning ! Your Spanding Too much';
    }

    document.write("User"+userBudget.user +"<br>");
    document.write("Total Income"+userBudget.salary+"<br>");
    document.write("Total Expenses"+userBudget.totalExpenses+"<br>");
    document.write("Tax 10%"+userBudget.tax+"<br>");
    document.write("Net Income After Tax"+userBudget.netIncome+"<br>");
    document.write("Remaining Balance"+userBudget.balance+"<br>");
    document.write("SAving 20% "+userBudget.saving+"<br>");
    document.write(userBudget.finalStatus+"<br>");
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

    userBudget.arrayExpenses = getExpenses(userBudget.expenses);
    userBudget.totalExpenses = calculateTotalExpenses(userBudget.arrayExpenses);
    userBudget.tax = userBudget.salary * 0.1;
    userBudget.netIncome = userBudget.salary - userBudget.tax ;
    userBudget.balance = userBudget.netIncome - userBudget.totalExpenses ;
    userBudget.saving = userBudget.balance * 0.2;
    
    let finalStatus = getFinancialStatus(userBudget.saving);

     getFinalResult(userBudget);
}

   
}

getBudgetTracker()


//next day for tracker