// Team & Player data

var teamData = [ 
    {
        "id":"0",
        "teamName": "Chennai Super Kings",
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Roundbig/CSKroundbig.png",
        "playerCount": "24",
        "topBatsman": "SK Raina",
        "topBowler": "Dwayne Bravo",
        "trophyIcon": "https://www.iplt20.com/assets/images/vishal/ico-trophy.png",
        "winCount": "2010, 2011, 2018, 2021",

    },
    {
        "id":"1",
        "teamName": "Delhi Capitals",
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Logos/Roundbig/DCroundbig.png",
        "playerCount": "24",
        "topBatsman": "David Capitals",
        "topBowler": "Kuldeep Yadav",
        "trophyIcon": "https://www.iplt20.com/assets/images/vishal/ico-trophy.png",
        "winCount": "--------"

    },
    {
        "id":"2",
        "teamName": "Gujarat Titans",
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/GT/Logos/Roundbig/GTroundbig.png",
        "playerCount": "23",
        "topBatsman": "Hardik Pandya",
        "topBowler": "Rashid Khan",
        "trophyIcon": "https://www.iplt20.com/assets/images/vishal/ico-trophy.png",
        "winCount": "2022"

    },
    {
        "id":"3",
        "teamName": "Kolkata Knight Riders",
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Logos/Roundbig/KKRroundbig.png",
        "playerCount": "25",
        "topBatsman":"Shreyas Iyer",
        "topBowler": "Umesh Yadav",
        "trophyIcon": "https://www.iplt20.com/assets/images/vishal/ico-trophy.png",
        "winCount": "2012, 2014",

    },
    {
        "id":"4",
        "teamName": "Lucknow Super Giants",
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/LSG/Logos/Roundbig/LSGroundbig.png",
        "playerCount": "21",
        "topBatsman": "KL Rahul",
        "topBowler": "Avesh Khan",
        "trophyIcon": "https://www.iplt20.com/assets/images/vishal/ico-trophy.png",
        "winCount":"--------"

    },
    {
        "id":"5",
        "teamName": "Mumbai Indians",
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Roundbig/MIroundbig.png",
        "playerCount": "25",
        "topBatsman": "Ishan Kishan",
        "topBowler": "SL Malinga",
        "trophyIcon": "https://www.iplt20.com/assets/images/vishal/ico-trophy.png",
        "winCount": "2013, 2015, 2017, 2019"

    },
    {
        "id":"6",
        "teamName": "Punjab Kings",
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/PBKS/Logos/Roundbig/PBKSroundbig.png",
        "playerCount": "25",
        "topBatsman": "Shikhar Dhawan",
        "topBowler": "Kagiso Rabada",
        "trophyIcon": "https://www.iplt20.com/assets/images/vishal/ico-trophy.png",
        "winCount": "--------"

    },
    {
        "id":"7",
        "teamName": "Rajasthan Royals",
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RR/Logos/Roundbig/RRroundbig.png",
        "playerCount": "23",
        "topBatsman": "Jos Buttler",
        "topBowler": "Yuzvendra Chahal",
        "trophyIcon": "https://www.iplt20.com/assets/images/vishal/ico-trophy.png",
        "winCount": "2008"

    },
    {
        "id":"8",
        "teamName": "Royal Challengers Bangalore",
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Roundbig/RCBroundbig.png",
        "playerCount": "22",
        "topBatsman": "Faf du Plessis",
        "topBowler": "Wanindu Hasaranga",
        "trophyIcon": "https://www.iplt20.com/assets/images/vishal/ico-trophy.png",
        "winCount": "--------"

    },
    {
        "id":"9",
        "teamName": "Sunrisers Hyderabad",
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Roundbig/SRHroundbig.png",
        "playerCount": "23",
        "TtopBatsman": "Abhishek Sharma",
        "topBowler": "Umran Malik",
        "trophyIcon": "https://www.iplt20.com/assets/images/vishal/ico-trophy.png",
        "winCount": "2016"

    }
    
]

var playerData = [
    {
    "id": 1,
    "photo": "https://assets.iplt20.com/ipl/IPLHeadshot2022/20604.png",
    "playerName": "Bhanuka Rajapaksa",
    "from": "Punjab Kings",
    "price": "6.50 Cr",
    "isPlaying": true,
    "description": "BatsMan"
    },
    {
    "id": 1,
    "photo": "https://m.cricbuzz.com/a/img/v1/192x192/i1/c244980/virat-kohli.jpg",
    "playerName": "Virat Kohli",
    "from": "Royal Challengers Bangalore",
    "price": "8.00 Cr",
    "isPlaying": true,
    "description": "Batsman"
    },
    {
    "id": 2,
    "photo": "https://m.cricbuzz.com/a/img/v1/192x192/i1/c171064/yuvraj-singh.jpg",
    "playerName": "Yuvraj Singh",
    "from": "Mumbai Indians",
    "price": "1.00 Cr",
    "isPlaying": false,
    
    "description": "Batsman"
    },
    {
    "id": 3,
    "photo": "https://imgk.timesnownews.com/story/morris_rr.jpg?tr=w-1200,h-900",
    "playerName": "Chris Morris",
    "from": "Rajasthan Royals",
    "price": "16.25 Cr",
    "isPlaying": true,
    "description": "All-rounder"
    },
    {
    "id": 4,
    "photo":"https://www.cricket.com.au/~/-/media/News/2021/10/12maxwell1.ashx?w=1600",
    "playerName": "Glenn Maxwell",
    "from": "Royal Challengers Bangalore",
    "price": "14.25",
    "isPlaying": true,
    "description": "All-rounder"
    },
    {
    "id": 5,
    "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c244982/rohit-sharma.jpg",
    "playerName": "Rohit Sharma",
    "from": "Mumbai Indians",
    "price": "6.50 Cr",
    "isPlaying": true,
    "description": "BatsMan"
    },
    {
    "id": 6,
    "photo":"https://assets.thehansindia.com/h-upload/2020/09/28/1600x960_1002021-ishan-kishan.jpg",
    "playerName": "Ishan Kishan",
    "from": "Mumbai Indians",
    "price": "2.50 Cr",
    "isPlaying": true,
    "description": "BatsMan"
    },
    {
        "id": 7,
        "photo":"https://assets.iplt20.com/ipl/IPLHeadshot2022/1.png",
        "playerName": "MS Dhoni",
        "from": "Chennai Super Kings",
        "price": "12 Cr",
        "isPlaying": true,
        "description": "BatsMan"
        },
        {
            "id": 8,
            "photo":"https://assets.iplt20.com/ipl/IPLHeadshot2022/20572.png",
            "playerName": "Devon Conway",
            "from": "Chennai Super Kings",
            "price": "1 Cr",
            "isPlaying": true,
            "description": "BatsMan"
            },
            {
                "id": 9,
                "photo":"https://assets.iplt20.com/ipl/IPLHeadshot2022/5443.png",
                "playerName": "Ruturaj Gaikwad",
                "from": "Chennai Super Kings",
                "price": "6 Cr",
                "isPlaying": true,
                "description": "BatsMan"
                },
                {
                    "id": 10,
                    "photo":"https://assets.iplt20.com/ipl/IPLHeadshot2022/9.png",
                    "playerName": "Ravindra Jadeja",
                    "from": "Chennai Super Kings",
                    "price": "4.4 Cr",
                    "isPlaying": true,
                    "description": "All-rounder"
                    },
                    {
                        "id": 11,
                        "photo": "https://assets.iplt20.com/ipl/IPLHeadshot2022/2972.png",
                        "playerName": "Rishabh Pant",
                        "from": "Delhi Capitals",
                        "price": "16 Cr",
                        "isPlaying": true,
                        "description": "BatsMan"
                        }, 
                        {
                            "id": 12,
                            "photo": "https://assets.iplt20.com/ipl/IPLHeadshot2022/20624.png",
                            "playerName": "Vicky Ostwal",
                            "from": "Delhi Capitals",
                            "price": "20 Lac",
                            "isPlaying": true,
                            "description": "Bowler"
                            }, 
                            {
                                "id": 13,
                                "photo": "https://assets.iplt20.com/ipl/IPLHeadshot2022/261.png",
                                "playerName": "Kuldeep Yadav",
                                "from": "Delhi Capitals",
                                "price": "2 Cr",
                                "isPlaying": true,
                                "description": "Bowler"
                                }, 
                                {
                                    "id": 14,
                                    "photo": "https://assets.iplt20.com/ipl/IPLHeadshot2022/2740.png",
                                    "playerName": "Hardik Pandya",
                                    "from": "Gujarat Titans",
                                    "price": "11 Cr",
                                    "isPlaying": true,
                                    "description": 'All-rounder'
                                    }, 
                                    {
                                        "id": 15,
                                        "photo": "https://assets.iplt20.com/ipl/IPLHeadshot2022/16.png",
                                        "playerName": "Wriddhiman Saha",
                                        "from": "Gujarat Titans",
                                        "price": "11 Cr",
                                        "isPlaying": true,
                                        "description": 'BatsMan'
                                        }, 
                                        {
                                            "id": 16,
                                            "photo": "https://assets.iplt20.com/ipl/IPLHeadshot2022/4447.png",
                                            "playerName": "Darshan Nalkande",
                                            "from": "Gujarat Titans",
                                            "price": "19 Cr",
                                            "isPlaying": true,
                                            "description": 'All Rounder'
                                            }, 
                                            {
                                                "id": 17,
                                                "photo": "https://assets.iplt20.com/ipl/IPLHeadshot2022/1563.png",
                                                "playerName": "Shreyas Iyer",
                                                "from": "Kolkata Knight Riders",
                                                "price": "10.50 Cr",
                                                "isPlaying": true,
                                                "description": "Batsman",
                                            },
                                            {
                                                "id": 18,
                                                "photo": "https://assets.iplt20.com/ipl/IPLHeadshot2022/20580.png",
                                                "playerName": "Abhijeet Tomar",
                                                "from": "Kolkata Knight Riders",
                                                "price": "18.50 Cr",
                                                "isPlaying": false,
                                                "description": "Batsman",
                                               
                                            },
                                            {
                                                "id": 19,
                                                "photo": "https://assets.iplt20.com/ipl/IPLHeadshot2022/488.png",
                                                "playerName": "Pat Cummins",
                                                "from": "Kolkata Knight Riders",
                                                "price": "1.50 Cr",
                                                "isPlaying": true,
                                                "description": "Bowler",
                                               
                                                
                                            },
                                            {
                                                "id": 20,
                                                "photo": "https://assets.iplt20.com/ipl/IPLHeadshot2022/1125.png",
                                                "playerName":  "KL Rahul",
                                                "from": "Lucknow Super Giants",
                                                "price": "5 Cr",
                                                "isPlaying": true,
                                                "description": "BatsMan",
                                               
                                                
                                            },
                                            {
                                                "id": 21,
                                                "photo": "https://assets.iplt20.com/ipl/IPLHeadshot2022/3185.png",
                                                "playerName":  "Jitesh Sharma",
                                                "from": "Punjab Kings",
                                                "price": "4 Cr",
                                                "isPlaying": true,
                                                "description": "BatsMan",
                                               
                                                
                                            }
                                           
]

// Local storage
let detailofTeam = [];
let detailOfPlayer = [];
var teamGrid = document.getElementById("container_teams")

if(localStorage.getItem("teamArray") === null)
localStorage.setItem("teamArray", JSON.stringify(teamData));

if(localStorage.getItem("playerArray") === null)
localStorage.setItem("playerArray", JSON.stringify(playerData));

detailofTeam = JSON.parse(localStorage.getItem("teamArray"));
detailOfPlayer = JSON.parse(localStorage.getItem("playerArray"));

// Redirection to Add-Team & Add-Player Page
var section = document.getElementById("card-section");
var addteamclicked=()=>{
    window.open("/Home Page/Add Team Page/addteam.html")
}
var addPlayerClicked=()=>{
    window.open("/Home Page/Add Player Page/addplayer.html")
}
          
     // Team Card grid

    for(var i =0; i<detailofTeam.length; i++) {
        var Data = detailofTeam[i];
        var card = document.createElement("div");
        card.classList.add("card");
        var a = document.createElement("a");
        a.href ="/Team Details Page/Team.html?productId=" + Data.id;
        a.classList.add("a");
        var img1 = document.createElement("img");
        img1.src = Data.teamIcon;
        img1.classList.add("img");
        var Tname = document.createElement("h3");
        Tname.classList.add("h3")
        Tname.innerText = Data.teamName;
var img2 = document.createElement("img");
img2.src = Data.trophyIcon;
img2.classList.add("img2");
var win = document.createElement("h4");
win.innerText = Data.winCount;
win.classList.add("win");
        a.append(img1, Tname,img2, win);
card.append(a);
section.append(card);
    }

    // Search Bar
    var searchBar = document.getElementById("input");
    searchBar.addEventListener('keyup', e => {
    let currentValue = e.target.value.toLowerCase();
    console.log(currentValue);
    let authors = document.querySelectorAll('h3.h3');
    authors.forEach(author =>
        {
            if(author.textContent.toLowerCase().includes(currentValue)) {
                author.parentNode.parentNode.style.display = "block";
            }
            else {
                author.parentNode.parentNode.style.display ="none";
            }
        })

    });