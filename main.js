import { getModal } from './helpers/getModal.js';
import {simulateTabNavigation} from './helpers/keyboardFunctions.js'
import {simulateReverseTabNavigation} from './helpers/keyboardFunctions.js'

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

//resume download event listener
document.getElementById("myResBtnDownload").addEventListener("click", function() {
  var link = document.createElement("a");
  link.href = "./imgFiles/TessPhillipsResume310523.pdf";
  link.download = "TessPhillipsResume310523.pdf";
  link.click();
});

//form transitions
const form = document.getElementById("form")
const formReply = document.getElementById("formReply")
const submitBtn = document.getElementById("submit")
submitBtn.addEventListener('click', () => {
  form.style.display = "none";
  formReply.style.display = "block";
});

// // functionality for the enter button when using tab to navigate the page
// const buttons = document.querySelectorAll('button');
// // Add event listener to each button
// buttons.forEach(button => {
//   button.addEventListener('keydown', function(event) {
//     // Check if the pressed key is Enter
//     if (event.key === 13) {
//       button.click();
//     }
//   });
// });

// //functionlity for the enter button when used on a text input
// const newTaskInput = document.getElementById('newTaskInput');
// newTaskInput.addEventListener('keydown', function(event) {
//   if (event.key === 'Enter') {
//     document.getElementById('addPush').click();
//   }
// });

//adding event listener for the left and right arrows
document.addEventListener('keydown', function(event) {
  // Get all focusable elements within the document and converts to an array
  const focusableElements = document.querySelectorAll(
    'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const elementsArray = Array.from(focusableElements);
  
  // Gets the currently focused element
  const currentElement = document.activeElement;
  const currentIndex = elementsArray.indexOf(currentElement);

  if (event.key === "ArrowLeft") {
    simulateReverseTabNavigation(currentIndex,elementsArray);
  }
  else if (event.key === "ArrowRight") {
    if (currentElement.id === "myResBtn"){
      simulateTabNavigation(-1,elementsArray);
      console.log("try")
    } 
    else { 
      simulateTabNavigation(currentIndex,elementsArray)};
  }
});