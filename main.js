// function toggleMenu() {
//   const menu = document.querySelector(".menu-links");
//   const icon = document.querySelector(".hamburger-icon");
//   menu.classList.toggle("open");
//   icon.classList.toggle("open");
// }

const navMenu = document.querySelector('.nav-menu')
const close = document.querySelector('.close')
const mobileMenu = document.querySelector('.mobile-menubar')

navMenu.addEventListener('click',()=>{
	mobileMenu.style.display = "block"
})

close.addEventListener('click',()=>{
	mobileMenu.style.display = "none"
})