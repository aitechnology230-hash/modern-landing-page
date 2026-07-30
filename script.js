// =========================
// Modern Landing Page Script
// =========================

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Header shadow on scroll
window.addEventListener("scroll", function () {

  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";
  } else {
    header.style.boxShadow = "none";
  }

});

// Button click animation
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {

  btn.addEventListener("click", function(){

    this.style.transform="scale(.96)";

    setTimeout(()=>{
      this.style.transform="scale(1)";
    },150);

  });

});

// Fade animation when page loads
window.addEventListener("load",()=>{

  document.body.style.opacity="1";

});

document.body.style.opacity="0";
document.body.style.transition=".6s";

// Simple FAQ toggle
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

  item.addEventListener("click",()=>{

    item.classList.toggle("active");

  });

});
