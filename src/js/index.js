import '../scss/style.scss'

console.log('It works!')
// --- SHOW / HIDE TOGGLE ---
const grid = document.querySelector(".brands-grid");
const toggle = document.querySelector(".toggle");
const text = document.querySelector(".toggle-text");
const arrow = document.querySelector(".arrow");

toggle.addEventListener("click", () => {
  const expanded = grid.classList.toggle("expanded");

  if (expanded) {
    text.textContent = "Hide";
    arrow.classList.add("rotated");
    

  } else {
    text.textContent = "Show all";
    arrow.classList.remove("rotated");
  }
});


// --- MOBILE SWIPER ---
if (window.innerWidth >=320 && window.innerWidth <=768) {
  new Swiper(".brands-swiper", {
    slidesPerView: 1.2,
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

