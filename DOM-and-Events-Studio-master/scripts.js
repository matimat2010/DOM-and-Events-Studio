
let takeoff = null;
let flightStatus = null;
let shuttleBackground = null; 
let spaceShuttleHeight = null;
let landing = null;
let missionAbort = null;
let up = null;
let down = null;
let left = null;
let right = null;
let rocket = null;
let position = null;

function init () {

takeoff = document.getElementById("takeoff")
flightStatus = document.getElementById("flightStatus")
shuttleBackground =  document.getElementById("shuttleBackground")
spaceShuttleHeight = document.getElementById("spaceShuttleHeight")
landing = document.getElementById("landing")
missionAbort = document.getElementById("missionAbort")
up = document.getElementById("up")
down = document.getElementById("down")
left = document.getElementById("left")
right = document.getElementById("right")
rocket = document.getElementById("rocket")
position = 0;

takeoff.addEventListener("click", function(){
	 	let takeoffResponse = window.confirm("Confirm that the shuttle is ready for takeoff");
        
if(takeoffResponse === true){
        flightStatus.innerHTML = "Houston, we have lift off!";
        shuttleBackground.style.backgroundColor = "blue";
        spaceShuttleHeight.innerHTML  = Number(spaceShuttleHeight.innerHTML) +  10000;
}

});

landing.addEventListener("click", function (){
         let landingResponse = window.alert("The shuttle is landing. Landing gear engaged");
         flightStatus.innerHTML = "The shuttle has landed.";
         shuttleBackground.style.backgroundColor = "green"; 
         spaceShuttleHeight.innerHTML  = Number(0);
});      

missionAbort.addEventListener("click", function (){
 let missionAbortResponse = window.confirm("Confirm that you want to abort the mission.");
        
if(missionAbortResponse === true){
        flightStatus.innerHTML = "Mission aborted";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML  = Number(0);        
  } 
});

up.addEventListener("click", function (){
rocket.style.position = "relative";
position += -10;
rocket.style.top =  position + "px"; 
spaceShuttleHeight.innerHTML  = Number(spaceShuttleHeight.innerHTML) +  10000;
})




down.addEventListener("click", function (){
rocket.style.position = "relative";
position += +10;
rocket.style.top =  position + "px"; 
spaceShuttleHeight.innerHTML  = Number(spaceShuttleHeight.innerHTML) -  10000;
})




left.addEventListener("click", function (){
rocket.style.position = "relative";
position += -10;
rocket.style.left =  position + "px"; 

})




right.addEventListener("click", function (){
rocket.style.position = "relative";
position += 10;
rocket.style.left =  position + "px"; 
})





}
window.onload = init;