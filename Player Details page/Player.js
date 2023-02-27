// extracting searchParams value

let urlData = location.href;
let newUrl = new URL(urlData);
let teamFull = newUrl.searchParams.get("name");

var playerSection = document.getElementById("player-container");
    
// // geting data from local storage

teamsDetails = JSON.parse(localStorage.getItem("teamArray"));
playersDetails = JSON.parse(localStorage.getItem("playerArray"));

//Player detail 

    for(var i =0; i<playersDetails.length; i++) {
        var player = playersDetails[i];
        if(player.playerName == teamFull){
        var pCard = document.createElement("div");
        pCard.classList.add("card");
        var a = document.createElement("a");
        var pImg1 = document.createElement("img");
        pImg1.src = player.photo;
        pImg1.classList.add("img");
        var span = document.createElement("div");
        span.classList.add("pSpan");
var Pname = document.createElement("h3");
Pname.classList.add("h3")
Pname.innerText = player.playerName;
var team = document.createElement("h4");
team.innerText = "Team Name: " + player.from;
team.classList.add("h4");
var price = document.createElement("h4");
price.innerText = "Price: " + player.price;
price.classList.add("h4");
var Pstatus = document.createElement("h4");
if(player.isPlaying==true){
    Pstatus.innerText = "Playing Status: Playing";
  }
  else{
    Pstatus.innerText = "Playing Status: On Bench ";
  }
Pstatus.classList.add("h4");
var desc = document.createElement("h4");
desc.innerText = "Role: " + player.description;
desc.classList.add("h4");
span.append(Pname, team, price, Pstatus, desc);
pCard.append(pImg1, span);
playerSection.append(pCard);
    }}


   