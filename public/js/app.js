const categoryIcon = document.querySelector(".category img");
const categoryTitle = document.querySelector(".category h2");

const question = document.querySelector("h1");
const options = document.querySelectorAll(".option");
const optionsText = document.querySelectorAll(".option > h3");

const body = document.querySelector("body");
const main = document.querySelector("main");

const categories = [
	{
		name: "Science",
		img: "images/science.svg"
	},
	{
		name: "Movies",
		img: "images/movie.svg"
	},
	{
		name: "TV",
		img: "images/tv.svg"
	}
];

let questions = [];

let currentQuestion = 0;

const fetchQuestions = async () => {
	await fetch("https://opentdb.com/api.php?amount=30&category=11&difficulty=medium&type=multiple")
		.then(raw => raw.json())
		.then(data => {
			data.results.forEach((q) => parseQuestion(q));
		});
};

const parseQuestion = (q) => {
	let n = Math.floor(Math.random() * 4);
	let question = {
		question: q.question,
		answer: n,
		options: [],
		category: 1
	};
	for (let i = 0; i < 4; i++) {
		if (i == n) {
			question.options[i] = q.correct_answer;
		} else if (i > n) {
			question.options[i] = q.incorrect_answers[i - 1];
		} else {
			question.options[i] = q.incorrect_answers[i];
		}
	}
	questions.push(question);
};

const setQuestion = (n) => {
	let q = questions[n];

	categoryIcon.src = categories[q.category].img;
	categoryTitle.textContent = categories[q.category].name;

	question.innerHTML = q.question;
	optionsText.forEach((opt, i) => {
		opt.innerHTML = q.options[i];
	});
};

const startup = async () => {
	await fetchQuestions();
	setQuestion(0);
	main.style.transform = "translateX(0%)";
};

main.addEventListener("transitionend", () => {
	setQuestion(currentQuestion);
	main.style.transform = "translateX(0%)";
	main.style.pointerEvents = "all";
});

options.forEach((opt, i) => {
	opt.addEventListener("animationend", () => {
		if (opt.classList.contains("correct")) {
			currentQuestion += 1;
			opt.classList.remove("correct");
			main.style.transform = "translateX(150%)";
			if (currentQuestion == questions.length) {
				questions = [];
				fetchQuestions();
				currentQuestion = 0;
			}
		} else {
			opt.classList.remove("wrong");
		}
	});

	opt.addEventListener("click", () => {
		main.style.pointerEvents = "none";
		let answer = questions[currentQuestion].answer;
		if (answer == i) {
			opt.classList.add("correct");
		} else {
			opt.classList.add("wrong");
			options[answer].classList.add("correct");
		}
	});
});
