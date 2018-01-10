// JavaScript Document
(function() {
	"use strict";
	console.log ("SEAF fired");
	
//Variables

	var text = document.querySelector("#scenerio");
	var Leftbutton = document.querySelector("#option1");
	var Rightbutton = document.querySelector("#option2");
	var startOver = document.querySelector("#restart");
	var doYou = document.querySelector("#prompt");
	var answer = document.querySelector("#input");
	var submit = document.querySelector("#submit");
	var input = document.querySelector("#questionForm");
	var hint1 = document.querySelector("#hint1");
	var hint2 = document.querySelector("#hint2");
	var hint3 = document.querySelector("#hint3");
	var stage = 1;
	
//Functions
	function redo(){
		window.location.reload();
	}
	
	
	function start(){
		if(event.target === Leftbutton && stage === 1){
			text.innerHTML = "<p>" + "You hear footsteps moving towards you, the faces of two alien like creatues apear infront of you." + "</p>";
			Leftbutton.innerHTML = "<p>" + "Stay" + "</p>";
			Rightbutton.innerHTML = "<p>" + "Try to attack" + "</p>";
			stage = 2;
			console.log('Fired from Left');
		}else if(event.target === Rightbutton && stage === 1){
			text.innerHTML = "<p>" + "You hear footsteps from the mysterious beings walking away into another room." + "</p>";
			Leftbutton.innerHTML = "<p>" + "Stay" + "</p>";
			Rightbutton.innerHTML = "<p>" + "Try to get up" + "</p>";
			stage = 3;
			console.log('Fired from right');
		}else if(event.target === Leftbutton && stage === 2){
			text.innerHTML = "<p>" + "To determine if they let you live or not, the beings want to play a game." + "</p>";
			Leftbutton.innerHTML = "<p>" + "You do not answer" + "</p>";
			Rightbutton.innerHTML = "<p>" + "Play along" + "</p>";
			stage = 4;
			console.log('Fired from left');
		}else if(event.target === Rightbutton && stage === 2){
			text.innerHTML = "<p>" + "You run at the beings and give one a punch in the gut, they did not like that. You die a horribly painful death." + "</p>";
			Leftbutton.style.display = "none";
			Rightbutton.style.display = "none";
			doYou.style.display = "none";
			stage = 10;
			console.log('Fired from right');
		}else if(event.target === Leftbutton && stage === 3){
			text.innerHTML = "<p>" + "You did not move and got trapped in this dark room until you eventually starved to death." + "</p>";
			Leftbutton.style.display = "none";
			Rightbutton.style.display = "none";
			doYou.style.display = "none";
			stage = 10;
			console.log('Fired from left');
		}else if(event.target === Rightbutton && stage === 3){
			text.innerHTML = "<p>" + "As you stand the room becomes illuminated, you must act fast." + "</p>";
			Leftbutton.innerHTML = "<p>" + "Make a run for the door" + "</p>";
			Rightbutton.innerHTML = "<p>" + "Explore the room" + "</p>";
			stage = 5;
			console.log('Fired from right');
		}else if(event.target === Leftbutton && stage === 4){
			text.innerHTML = "<p>" + "You did not play along with their game and they did not like that, so they decide to torture you by removing your internal organs one by one until you are dead." + "</p>";
			Leftbutton.style.display = "none";
			Rightbutton.style.display = "none";
			doYou.style.display = "none";
			stage = 10;
			console.log('Fired from left');	
		}else if(event.target === Rightbutton && stage === 4){
			text.innerHTML = "<p>" + "Pick a number between 1 and 10!" + "</p>";
			Leftbutton.style.display = "none";
			Rightbutton.style.display = "none";
			doYou.style.display = "none";
			input.style.display = "block";
			submit.addEventListener("click", start, false);
			stage = 8;
			console.log('Fired from Question');	
			
		//I am not sure why this else if statment below is not working.
		}else if(event.target === submit && answer === 3 && stage === 8){
			text.innerHTML = "<p>" + "The mysterious beings liked your answer and set you free with no memory of anything that happened. How nice of them." + "</p>";
			Leftbutton.style.display = "none";
			Rightbutton.style.display = "none";
			doYou.style.display = "none";
			input.style.display = "none";
			stage = 10;
			console.log('Fired from correct guess');
		}else if(event.target === submit && answer !== 3 && stage === 8){
			text.innerHTML = "<p>" + "They did not like your answer and before you know it you are DEAD." + "</p>";
			Leftbutton.style.display = "none";
			Rightbutton.style.display = "none";
			doYou.style.display = "none";
			input.style.display = "none";
			stage = 11;
			console.log('Fired from wrong guess');	
		}else if(event.target === Leftbutton && stage === 5){
			text.innerHTML = "<p>" + "You make a dash out the first exit in sight and run straight into two large alien looking creatues. They Kill you. You are very dead." + "</p>";
			Leftbutton.style.display = "none";
			Rightbutton.style.display = "none";
			doYou.style.display = "none";
			stage = 10;
			console.log('fired from left button');
		}else if(event.target === Rightbutton && stage === 5){
			text.innerHTML = "<p>" + "You take a look around the room, you notice a bright light in one of the corners. You approach to find a glistening long sword." + "</p>";
			Leftbutton.innerHTML = "<p>" + "Take the sword to attack the beings" + "</p>";
			Rightbutton.innerHTML = "<p>" + "Continue exploring the room" + "</p>";
			stage = 6;
			console.log('Fired from right');
		}else if(event.target === Leftbutton && stage === 6){
			text.innerHTML = "<p>" + "You take the sword and run through the exit to find the beings standing waiting for you. With a confident attack you somehow manage to kill both of them. You got lucky and escaped" + "</p>";
			Leftbutton.style.display = "none";
			Rightbutton.style.display = "none";
			doYou.style.display = "none";
			stage = 11;
			console.log('fired from left button');	
		}else if(event.target === Rightbutton && stage === 6){
			text.innerHTML = "<p>" + "As you are exploring the beings come back, they ask for the sword in exchange for your freedom" + "</p>";
			Leftbutton.innerHTML = "<p>" + "Attack with the sword" + "</p>";
			Rightbutton.innerHTML = "<p>" + "Give them the sword" + "</p>";
			stage = 7;
			console.log('fired from right button');
		}else if(event.target === Leftbutton && stage === 7){
			text.innerHTML = "<p>" + "You run at the beings, sword in hand and slay them! YOU WIN" + "</p>";
			Leftbutton.style.display = "none";
			Rightbutton.style.display = "none";
			doYou.style.display = "none";
			stage = 11;
			console.log('fired from left button');
		}else if(event.target === Rightbutton && stage === 7){
			text.innerHTML = "<p>" + "You give them the sword and they use it to kill you. Don't trust strangers. YOU DEAD." + "</p>";
			Leftbutton.style.display = "none";
			Rightbutton.style.display = "none";
			doYou.style.display = "none";
			stage = 10;
			console.log('fired from right button');
		}
	}
	function hover1(){
		if(stage === 3){
			hint1.style.opacity = '100';
			console.log('Fired from hover hint1');
		}else{
			hint1.style.opacity = '0';
		}
	}
	function hover2(){
		if(stage === 3){
			hint2.style.opacity = '100';
			console.log('Fired from hover hint2');
		}else{
			hint2.style.opacity = '0';
		}
	}
	function hover3(){
		if(stage === 3){
			hint3.style.opacity = '100';
			console.log('Fired from hover hint3');
		}else{
			hint3.style.opacity = '0';
		}
	}
	
//Listeners
	
	hint1.addEventListener("mouseover", hover1, false);
	hint2.addEventListener("mouseover", hover2, false);
	hint3.addEventListener("mouseover", hover3, false);
	
	Leftbutton.addEventListener("click", start, false);
	Rightbutton.addEventListener("click", start, false);
	startOver.addEventListener("click", redo, false);

})();
