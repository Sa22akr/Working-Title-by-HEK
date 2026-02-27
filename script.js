const elements = document.querySelectorAll(".fade-up");

function revealOnScroll() {
  const screenHeight = window.innerHeight;

  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;

    if (position < screenHeight - 100) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);