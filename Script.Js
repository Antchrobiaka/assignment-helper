document.addEventListener("DOMContentLoaded", function () {

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Hamburger toggle for mobile
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("header nav");
  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

  // Q&A toggle example
  const qaCard = document.getElementById("qa");
  if (qaCard) {
    const question = document.createElement("p");
    question.textContent = "What if I don’t understand an example?";
    question.style.cursor = "pointer";
    question.style.fontWeight = "bold";

    const answer = document.createElement("p");
    answer.textContent = "You can post your question in the Q&A section and get step-by-step guidance.";
    answer.style.display = "none";
    answer.style.marginTop = "5px";

    question.addEventListener("click", () => {
      answer.style.display = answer.style.display === "none" ? "block" : "none";
    });

    qaCard.appendChild(question);
    qaCard.appendChild(answer);
  }

});
