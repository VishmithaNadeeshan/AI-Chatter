
function send(){
    let userInput=document.getElementById("txtF").value;
    alert(userInput);
    document.getElementById("user1").innerHTML=`<h3 id="user1">${userInput}</h3>`
    document.getElementById("user2").innerHTML=`<h3 id="user2">${userInput}</h3>`
}