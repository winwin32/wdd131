const menuToggle = document.querySelector('.menu-toggle');
const viewerPopout = document.querySelector(".viewer")
const xButton = document.querySelector(".viewer button")

menuToggle.addEventListener('click', () => {
  const navLinks = document.querySelector("nav")
  navLinks.classList.toggle('show');
});

document.querySelectorAll(".gallery img").forEach(img => {
  img.classList.add("view-toggle")
})

document.querySelectorAll('.view-toggle').forEach(toggle => {
  toggle.addEventListener('click', () => {
    viewerPopout.classList.toggle('show');
  });
});

xButton.addEventListener('click', () => {
  viewerPopout.classList.remove('show');
});