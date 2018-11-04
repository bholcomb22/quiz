

var quizList = [
{
	question: "Who was Pam engaged to in the first two seasons?",
	choices: ["roy", "jim", "michael", "Stanley"],
	answer: "roy"
},
{
	question: "Who is Dunder Mifflin’s temp worker?",
	choices: ["creed", "Dwight", "ryan", "stanley"],
	answer: "ryan"
},
{
	question: "What it the name of the award show that Michael hosts every year?",
	choices: ["michael awards", "the dundies", "dunder grammys", "the dundie show"],
	answer: "the dundies"
},
{
	question: "Who does Dwight have a secret romantic relationship with for a large portion of the series?",
	choices: ["pam", "kelly", "meredith", "angela"], 
	answer: "angela"
},
{
	question: "What branch does Jim transfer to so he doesn’t have to see Pam?",
	choices: ["utica", "boston", "new york", "stamford"],
	answer: "stamford"
},
{
	question: "Which two Stamford employees stay at the Scranton branch when the two merge together?",
	choices: ["karen and andy", "karen and kathy", "andy and kathy", "andy and tom"],
	answer: "karen and andy"
},
{
	question: "Whose job at corporate do Michael, Karen, and Jim apply for in Season 3?",
	choices: ["holly's", "jo's", "jan's", "amy's"],
	answer: "jan's"
},
{
	question: "What was the name of Jan’s young assistant?",
	choices: ["peter", "stewart", "jonathon", "hunter"],
	answer: "hunter"
}];

	var title = document.createElement('h1');
	title.innerHTML = 'The Office Quiz';
	title.className = 'quizName';
	document.body.appendChild(title);

	var press = document.createElement('button');
	press.innerHTML = 'Start Quiz!';
	press.className = 'begin';
	press.setAttribute('onClick', 'createQuiz()');
	document.body.appendChild(press);
	var container = document.createElement('div');
	container.className = 'conatain';



function createQuiz() {
	press.remove();

	
	document.body.appendChild(container);
	container.innerHTML = '';

	
	

	 for (var i = 0; i < 1; i++) {
		var quest = document.createElement('p');
		container.appendChild(quest);
	
	
	//create question text
	var qText = document.createTextNode(quizList[i].question);
	quest.appendChild(qText);

	for(var b = 0; b < quizList[i].choices.length; b++){
	let myForm = document.createElement('form');
	container.appendChild(myForm);
	let option1 = document.createElement('button');
	option1.className = "answerButton";
	option1.setAttribute('onClick', 'checkAnswer()');
	
	myForm.appendChild(option1);
	option1.type = "button";
	let choices = document.createTextNode(quizList[i].choices[b]);
	option1.appendChild(choices); 
	option1.setAttribute("onClick", "checkIt()");

	};

	};
	


};

function checkIt() {
	var submitted = document.getElementsByTagName('button');
	console.log(event.target.innerHTML);
	var wow = event.target.innerHTML;
	var yikes = event.target;
	var option1 = document.createElement('button');
	
	for(var i = 0; i < quizList.length; i++) {
	if (wow == quizList[i].answer) {
		console.log('yes!');
		quizList.shift();
		option1.innerHTML = "";
		createQuiz();
		return;


		
		
		
		
	} else {
		console.log('nooooo');
		yikes.className = 'wrong';
		
	}

	if (quizList.length == 0) {
		container.innerHTML = '';
		var complete = document.createElement('h1');
		complete.innerHTML = 'You have completed the quiz!';

		return;
	}

	

	


};
};






