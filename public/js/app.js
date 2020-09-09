const categoryIcon = document.querySelector(".category img");
const categoryTitle = document.querySelector(".category h2");

const question = document.querySelector("h1");
const options = document.querySelectorAll(".option");
const optionsText = document.querySelectorAll(".option > h3");

const body = document.querySelector("body");
const main = document.querySelector("main");

const categories = [
	{
		name: "Wissenschaft",
		img: "images/science.svg"
	},
	{
		name: "Filme",
		img: "images/movie.svg"
	},
	{
		name: "Fernsehen",
		img: "images/tv.svg"
	}
];

let questions = [
	{
		question: "Was ist ein Neutrino?",
		answer: 0,
		options: ["Elementarteilchen", "Atomkern", "Licht", "Zentrifuge"],
		category: 0
	},
	{
		question: "Was ist ein Neutronenstern?",
		answer: 2,
		options: ["kleinste Sternklasse", "größte Sternklasse", "Überreste eines Sterns", "Atomkernkonfiguration"],
		category: 1
	},
	{
		question: "Was ist Element Nummer 10?",
		answer: 3,
		options: ["Sauerstoff", "Helium", "Schwefel", "Neon"],
		category: 2
	},
	{
		question: "Wie ist die Summenformel für Wasserstoffperoxid?",
		answer: 1,
		options: ["H20", "H2O2", "H4O2", "H2O3"],
		category: 0
	},
	{
		question: "Wie lang ist ein Jahr auf Merkur?",
		answer: 2,
		options: ["53 Tage", "156 Tage", "88 Tage", "12 Jahre"],
		category: 1
	}
];

let currentQuestion = 0;

const setQuestion = (n) => {
	let q = questions[n];

	categoryIcon.src = categories[q.category].img;
	categoryTitle.textContent = categories[q.category].name;

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
