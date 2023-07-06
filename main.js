import { getModal } from './helpers/getModal.js';

document.addEventListener('DOMContentLoaded', function() {
  // Load modal.js
  getModal("myResModal", "myResBtn", "myResClose");
  // getModal("myWhenModal", "myWhenBtn", "myWhenClose");
  // getModal("myAppModal", "myAppBtn", "myAppClose");
  // getModal("myWeatherModal", "myWeatherBtn", "myWeatherClose");
  // I FINALLY GOT WINDOW TO WORK FOR EACH BUTTTT
  // I CANT GET SPAN TO WORK ON EACH
});

const aboutBtn = document.getElementById("aboutBtn")
const contactBtn = document.getElementById("contactBtn")
const projectsBtn = document.getElementById("projectsBtn")


const aboutStuff = document.getElementById("about-stuff")
const contactStuff = document.getElementById("contact-stuff")
const projectsStuff = document.getElementById("projects-stuff")

const navBar = document.getElementById("nav")

aboutBtn.addEventListener('click', () => {
  aboutStuff.style.display = "block";
  contactStuff.style.display = "none";
  projectsStuff.style.display = "none";
  navBar.style.backgroundColor = "var(--col1)"
});

contactBtn.addEventListener('click', () => {
  aboutStuff.style.display = "none";
  contactStuff.style.display = "block";
  projectsStuff.style.display = "none";

  navBar.style.backgroundColor = "transparent"
});

projectsBtn.addEventListener('click', () => {
  aboutStuff.style.display = "none";
  contactStuff.style.display = "none";
  projectsStuff.style.display = "block";
});