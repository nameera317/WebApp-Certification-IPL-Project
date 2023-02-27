//getting the data from the local storage

teamsDetails = JSON.parse(localStorage.getItem("teamArray"));
playersDetails = JSON.parse(localStorage.getItem("playerArray"));
var teamMainBox=document.getElementById("container_teams")
var tableTeam=document.getElementById("table-team")

//extracting searchParams value

var queryParams = location.search;
var params = new URLSearchParams(queryParams);
var productId = params.get('productId');
console.log(productId);

// Team detail

var section = document.getElementById("container");
for(var i =0; i<teamsDetails.length; i++) {
    if(i == productId){
    var data = teamsDetails[i];
    var div1 = document.createElement("div");
    div1.classList.add("div1");
    var div2 = document.createElement("div");
    div2.classList.add("div2");
    var img1 = document.createElement("img");
    img1.src = data.teamIcon;
    img1.classList.add("img");
var Tname = document.createElement("h3");
Tname.classList.add("h3")
Tname.innerText = data.teamName;
var count = document.createElement("h4");
count.innerText = "Player Count:" + " " + data.playerCount;
count.classList.add("h4");
var bats = document.createElement("h4");
bats.innerText = "Top Batsman:" + " " + data.topBatsman;
bats.classList.add("h4");
var bowl = document.createElement("h4");
bowl.innerText ="Top Bowler" + " " + data.topBowler;
bowl.classList.add("h4");
var win = document.createElement("h4");
win.innerText = "Win Count: " + data.winCount;
win.classList.add("h4");
div1.append(img1);
div2.append(Tname, count, bats, bowl, win);
    section.append(div1,div2);

}
}

//Players Card grid

var playerSection = document.getElementById("player-container");
    console.log()
    for(var i =0; i<playersDetails.length; i++) {
        var player = playersDetails[i];
        if(player.from == teamsDetails[productId].teamName ){
            
        var pCard = document.createElement("div");
        pCard.classList.add("card");
        var a = document.createElement("a");
        a.href = "/Player Details Page/player.html?name=" + player.playerName;
        a.classList.add("a");
        var pImg1 = document.createElement("img");
        pImg1.src = player.photo;
        pImg1.classList.add("pImg1");
var Pname = document.createElement("h3");
Pname.classList.add("p3")
Pname.innerText = "Name:" + " " + player.playerName;
var team = document.createElement("h4");
team.innerText = "Team:" + " " + player.from;
team.classList.add("p4");
var price = document.createElement("h4");
price.innerText = "Price:" + " " + player.price;
price.classList.add("p4");
var Pstatus = document.createElement("h4");
if(playersDetails[i].isPlaying==true){
    Pstatus.innerText = "Playing Status: Playing";
  }
  else{
    Pstatus.innerText = "Playing Status: On Bench ";
  }
Pstatus.classList.add("p4");
var desc = document.createElement("h4");
desc.innerText = "Role:" + " " +  player.description;
desc.classList.add("p4");
a.append(pImg1, Pname, team, price, Pstatus, desc);
pCard.append(a);
    playerSection.append(pCard);


    }}

    