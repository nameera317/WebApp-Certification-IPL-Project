// // Getting data from local storage

let localTeam = JSON.parse(localStorage.getItem("teamArray"));
let localPlayers = JSON.parse(localStorage.getItem("playerArray"));

// getting the values of teams from the local storage to the select input's option
var selectTeam=document.getElementById("inp6")
for(var i=0;i<localTeam.length;i++){
    selectTeam.innerHTML+=`
    <option value="${localTeam[i].teamName}">${localTeam[i].teamName}</option>
               
    `
}

 // forms submission (extracting the input values)

$("#addteamform").submit(function (e) {
  
    e.preventDefault();


 // saving all the input values inside an obj 

let addPlayer={
    
    "id": localPlayers.length,
    "photo":"https://www.freeiconspng.com/thumbs/color-icons/colors-icon-4.png",
    "playerName": $("#inp1").val(),
    "from":  $("#inp6").val(),
    "price":  $("#inp2").val()+"Cr",
    "isPlaying": $("#inp3").val(),
    "description": $("#inp4").val(),

}

// now setting them to local storage

localPlayers.push(addPlayer)
localStorage.setItem('playerArray',JSON.stringify(localPlayers))
 
 // redirect back to the home page on player button click after successfully adding the player details

location.href = '/Home Page/Home.html';
});

