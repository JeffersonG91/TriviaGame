var panel = $("#quiz-area");

var questions = [{
	question: "Who directed the Star Wars movies?",
	answers: ["Mark Hamill", "Tim Burton", "George Lucas", "Steven Spielberg"],
	correctAnswer: "George Lucas"
}, {
	question: "Who did Dooku captured and imprisoned?",
	answers:["Anakin Skywalker", "Obi-Wan Kenobi", "Master Yoda", "Jango Fett"],
	correctAnswer:"Obi-Wan Kenobi"
}, {
	question: "Who were the apprentices of Darth Sidious?",
	answers:["Maul, Plagueis, Vader", "Venamis, Plagueis, Vader", "Maul, Tyranus, Vader", "Maul, Caedus, Vader"],
	correctAnswer: "Maul, Tyranus, Vader"
}, {
	question: "How many Death Stars were built?",
	answers: ["none", " 1 ", " 2 ", "one in every movie"],
	correctAnswer: "2"
}, {
	question: "Which major battle did the Rebel Alliance lose?",
	answers: ["Battle of Hoth", "Battle of Endor", "Battle of Death Star III", "Battle of Yavin IV"],
	correctAnswer: "Battle of Hoth"
}, {
	question: "Luke Skywalker is the son of whom?",
	answers: ["Anakin and Padme", "Han and Leia", "Vader and Shmi", "Tarzan and Jane"],
	correctAnswer: "Anakin and Padme"
}, {
	question: 'Who said the following:"I am your Father!"',
	answers: ["Luke Skywalker", "Donald Duck", "Emperor Palpatine", "Darth Vader/Anakin"],
	correctAnswer: "Darth Vader/Anakin"
}, {
	question: 'Who said the following:"Fluent in over 6,000,000 forms of communication"',
	answers: ["C-3PO", "R2-D2", "R4-P17", "Jar Jar"],
	correctAnswer: "C-3PO"
}];

var timer;

var game = {

	correct: 0,
	incorrect: 0,
	counter: 120,

	countdown: function() {
		game.counter--;
		$("#counter-number").html(game.counter);
		if (game.counter === 0) {
			console.log("TIME UP");
			game.done();
		}
	},

	start: function() {
		timer = setInterval(game.countdown, 1000);
		$("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");
		$("#start").remove();

		for (var i = 0; i < questions.length; i++) {
			panel.append("<h2>" + questions[i].question + "</h2>");
			for (var j = 0; j < questions[i].answers.length; j++) {
				panel.append("<input type='radio' name='question-'" + i + 
				"' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
			}
		}

		panel.append("<button id='done'>Done</button>");
	},

	done: function() {
		$.each($("input[name='question']:checked"), function() {
			if ($(this).val() === questions[0].correctAnswer) {
				game.correct++;
			}
			else {
				game.incorrect++;
			}
		});

		$.each($("input[name='question-1']:checked"), function() {
			if ($(this).val() === questions[1].correctAnswer) {
				game.correct++;
			}
			else{
				game.incorrect++;
			}
		});

		$.each($("input[name='question-2']:checked"), function() {
			if ($(this).val() === questions[2].correctAnswer) {
				game.correct++;
			}
			else{
				game.incorrect++;
			}
		});

		$.each($("input[name='question-3']:checked"), function() {
			if ($(this).val() === questions[3].correctAnswer) {
				game.correct++;
			}
			else{
				game.incorrect++;
			}
		});

		$.each($("input[name='question-4']:checked"), function() {
			if ($(this).val() === questions[4].correctAnswer) {
				game.correct++;
			}
			else{
				game.incorrect++;
			}
		});

		$.each($("input[name='question-5']:checked"), function() {
			if ($(this).val() === questions[5].correctAnswer) {
				game.correct++;
			}
			else{
				game.incorrect++;
			}
		});

		$.each($("input[name='question-6']:checked"), function() {
			if ($(this).val() === questions[6].correctAnswer) {
				game.correct++;
			}
			else{
				game.incorrect++;
			}
		});

		$.each($("input[name='question-7']:checked"), function() {
			if ($(this).val() === questions[7].correctAnswer) {
				game.correct++;
			}
			else{
				game.incorrect++;
			}
		});

		this.result();

	},

	result: function() {
		clearInterval(timer);

		$("sub-wrapper h2").remove();

		panel.html("<h2>All Done!</h2>");
		panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
		panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
		panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
	}
};

$(document).on("click", "#start", function(){
	game.start();
});

$(document).on("click", "#done", function(){
	game.done();
});
