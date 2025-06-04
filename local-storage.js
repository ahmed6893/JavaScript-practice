// localStorage.setItem("user_name","Harun Khan");
const userName= localStorage.getItem("user_name")
console.log(userName);

localStorage.setItem("user_name","Mia Khan");


const countries = ["Japan","America","Borisal"];
localStorage.setItem("countries",JSON.stringify(countries));

const countriesList =JSON.parse(localStorage.getItem("countries"));
console.log(countriesList);


//sessionStorage 
sessionStorage.setItem("user_name","Alu Khan");

const userNames=sessionStorage.getItem("user_name");

