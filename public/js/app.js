const categoryImage = document.querySelector(".category img");
const categoryTitle = document.querySelector(".category h2");

const question = document.querySelector("h1");
const options = document.querySelectorAll(".option");
const optionsText = document.querySelectorAll(".option > h3");

const body = document.querySelector("body");
const main = document.querySelector("main");

let questions = [
	{
		question: "Was ist ein Neutrino?",
		answer: 0,
		options: ["Elementarteilchen", "Falsch 1", "Falsch 2", "Falsch 3"]
	},
	{
		question: "Was ist ein Neutronenstern?",
		answer: 2,
		options: ["Falsch 1", "Falsch 2", "Überreste eines Sterns", "Falsch 3"]
	}
];
let currentQuestion = 0;

const setQuestion = (n) => {
	let q = questions[n];
	question.textContent = q.question;
	optionsText.forEach((opt, i) => {
		opt.textContent = q.options[i];	
	});
};

options.forEach((opt, i) => {
	opt.addEventListener("animationend", () => {
		currentQuestion += 1;
		opt.classList.remove("correct");
		opt.classList.remove("wrong");

		main.classList.remove("fade");
		void main.offsetWidth;
		main.classList.add("fade");
		setQuestion(currentQuestion);
	});

	opt.addEventListener("click", () => {
		if (questions[currentQuestion].answer == i) {
			opt.classList.add("correct");
		} else {
			opt.classList.add("wrong");
		}
	});
});
