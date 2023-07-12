import { getModal } from './helpers/getModal.js';

//modal for resume
document.addEventListener('DOMContentLoaded', function() {
  getModal("myResModal", "myResBtn", "myResClose");
});


//website page transitions
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

//form transitions
const form = document.getElementById("form")
const formReply = document.getElementById("formReply")
const submitBtn = document.getElementById("submit")
submitBtn.addEventListener('click', () => {
  form.style.display = "none";
  formReply.style.display = "block";
});