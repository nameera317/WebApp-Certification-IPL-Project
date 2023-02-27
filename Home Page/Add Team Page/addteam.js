// Getting data from local storage

let localTeam = JSON.parse(localStorage.getItem("teamArray"));
let localPlayers = JSON.parse(localStorage.getItem("playerArray"));

// forms submission (extracting the input values)
$("#addteamform").submit(function (e) {


    e.preventDefault();


    // saving all the input values inside an obj 

    let addData = {
        "id": localTeam.length,
        "teamName": $("#inp1").val() ,
        "teamIcon": "https://www.freeiconspng.com/thumbs/color-icons/colors-icon-4.png",
        "playerCount": $("#inp4").val(),
        "topBatsman": $("#inp5").val(),
        "topBowler": $("#inp6").val(),
        "trophyIcon": "https://www.iplt20.com/assets/images/vishal/ico-trophy.png",
        "winCount": $("#inp3").val(),


    }
   
    // now setting them to local storage

   localTeam.push(addData);
   localStorage.setItem("teamArray", JSON.stringify(localTeam)); 
  
    // redirect back to the home page on Team button click after successfully adding the team details 

   location.href = '/Home Page/Home.html';
})