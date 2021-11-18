
function getscore() {
	let score = 0;
	let question1 = document.getElementById("home").value;
	let question2 = document.getElementById("name").value;
	let question3 = document.querySelector("#correct").checked;
	let question4 = document.querySelector("#yes").checked;
	
	let Owner =  document.querySelector("#wrong1").checked;
	let Mascot =  document.querySelector("#wrong2").checked;
	let maker =  document.querySelector("#wrong3").checked;
	let no = document.querySelector("#no").checked;

	if (question1.includes("Inazuma")==true){
		score +=1; 
	}
	if (question2.includes("Taroumaru")==true) {
		score +=1; 
	}
	if (question3 == true && Owner == false && Mascot == false && maker == false) {
		score +=1; 
	}	
	if (question4 == true && no == false) {
		score +=1;
	}
	return score;
} 



function buttonFunction() {

	score = getscore()  

	document.getElementsByTagName("p")[0].innerHTML = "Here are the answers:"
	document.getElementsByClassName("paragraph")[0].innerHTML = "Where does the dog live?  Inazuma"
	document.getElementsByClassName("paragraph")[1].innerHTML = "Who is the dog?  Taroumaru"
	document.getElementsByClassName("paragraph")[2].innerHTML = "What does it work as?  All of the above"
    document.getElementsByClassName("paragraph")[3].innerHTML = "Does it like money?  Yes"	
	document.getElementsByClassName("paragraph")[4].innerHTML = "your score is " + score
	if (score == 3 ) {
	document.getElementsByClassName("paragraph")[5].innerHTML = "Good job you passed"	
	}
	else if (score == 4 ) { 
	document.getElementsByClassName("paragraph")[5].innerHTML = "Perfect, you got everything correct"	
	}
	else {
	document.getElementsByClassName("paragraph")[5].innerHTML = "You failed"
	}



}
