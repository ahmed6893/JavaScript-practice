document.getElementById("heading1").innerText =" hello";
document.getElementsByClassName("header").innerHTML="HI";
document.getElementsByTagName("h1")[0].innerHTML="by"

document.querySelector("#changeColorBtn").addEventListener("click",function(){
    document.querySelector("#title").style.color="red"
});