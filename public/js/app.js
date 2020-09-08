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
		options: ["Elementarteilchen", "Atomkern", "Licht", "Zentrifuge"]
	},
	{
		question: "Was ist ein Neutronenstern?",
		answer: 2,
		options: ["kleinste Sternklasse", "größte Sternklasse", "Überreste eines Sterns", "Atomkernkonfiguration"]
	},
	{
		question: "Was ist Element Nummer 10?",
		answer: 3,
		options: ["Sauerstoff", "Helium", "Schwefel", "Neon"]
	},
	{
		question: "Wie ist die Summenformel für Wasserstoffperoxid?",
		answer: 1,
		options: ["H20", "H2O2", "H4O2", "H2O3"]
	},
	{
		question: "Wie lang ist ein Jahr auf Merkur?",
		answer: 2,
		options: ["53 Tage", "156 Tage", "88 Tage", "12 Jahre"]
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

const startup = () => {
	setQuestion(0);
	main.style.transform = "translateX(0%)";
};

main.addEventListener("transitionend", () => {
	setQuestion(currentQuestion);
	main.style.transform = "translateX(0%)";
});

options.forEach((opt, i) => {
	opt.addEventListener("animationend", () => {
		currentQuestion = (currentQuestion + 1) % questions.length;
		opt.classList.remove("correct");
		opt.classList.remove("wrong");
		main.style.transform = "translateX(150%)";
	});

	opt.addEventListener("click", () => {
		if (questions[currentQuestion].answer == i) {
			opt.classList.add("correct");
		} else {
			opt.classList.add("wrong");
		}
	});
});
