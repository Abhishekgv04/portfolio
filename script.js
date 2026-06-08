const texts = [
  "Aspiring Software Engineer",
  "Full Stack Developer",
  "Java Developer",
  "AI Enthusiast"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

  if(count === texts.length){
    count = 0;
  }

  currentText = texts[count];

  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;

  if(letter.length === currentText.length){

    count++;
    index = 0;

  }

  setTimeout(type,150);

})();


// NAVBAR ACTIVE SCROLL EFFECT

window.addEventListener("scroll", function(){

  const navbar = document.querySelector(".navbar");

  navbar.classList.toggle("sticky", window.scrollY > 50);

});


// SCROLL ANIMATION

const cards = document.querySelectorAll(
  ".project-card, .edu-card, .stat-box, .timeline-item"
);

window.addEventListener("scroll", revealCards);

function revealCards(){

  const triggerBottom = window.innerHeight * 0.8;

  cards.forEach(card => {

    const cardTop = card.getBoundingClientRect().top;

    if(cardTop < triggerBottom){

      card.style.opacity = "1";
      card.style.transform = "translateY(0)";

    }

  });

}


// INITIAL CARD STYLE

cards.forEach(card => {

  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = "all 0.6s ease";

});


// CONSOLE MESSAGE

console.log("Portfolio Loaded Successfully 🚀");