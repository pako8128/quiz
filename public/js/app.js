const categoryImage = document.querySelector(".category img");
const categoryTitle = document.querySelector(".category h2");

const question = document.querySelector("h1");
const options = document.querySelectorAll(".option > h3");

const body = document.querySelector("body");

let questions = [
	{
		question: "Was ist ein Neutrino?",
		options: ["Elementarteilchen", "Falsch 1", "Falsch 2", "Falsch 3"]
	},
	{
		question: "Was ist ein Neutronenstern?",
		options: ["Überreste eines Sterns", "Falsch 1", "Falsch 2", "Falsch 3"]
	}
];

const setQuestion = (q) => {
	question.textContent = q.question;
	options.forEach((opt, i) => {
		opt.textContent = q.options[i];	
	});
};

