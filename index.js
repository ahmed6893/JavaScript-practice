let user = prompt("Enter Your Name");
let salary =prompt("Enter Your Salary");

let expenses = prompt("Enter your Expenses");

let tax = salary * 0.1 ;
let netIncome = salary - tax ;
let balance = netIncome - expenses;
let savings = balance * 0.2 ;

if (savings>= 1000)
{
    console.log(user + "Excelent Your saving well ->" + savings)
}
else if(savings>=500)
{
    console.log(user +"Your saving is decent ->" + savings)
}
else if(savings>=100)
{
    console.log(user +"Oh no Your saving arent very well ->" + savings) 
}
