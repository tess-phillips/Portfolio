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

aboutBtn.addEventListener('click', () => {
  aboutStuff.style.display = "block";
  contactStuff.style.display = "none";
  projectsStuff.style.display = "none";
});

contactBtn.addEventListener('click', () => {
  aboutStuff.style.display = "none";
  contactStuff.style.display = "block";
  projectsStuff.style.display = "none";
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

// functionality for the enter button when using tab to navigate the page
const buttons = document.querySelectorAll('button:not(input#submit)');
// Add event listener to each button
buttons.forEach(button => {
  button.addEventListener('keydown', function(event) {
    // Check if the pressed key is Enter
    if (event.key === 13) {
      button.click();
    }
  });
});

// //functionlity for the enter button when used on a text input in the form
// const inputs = form.querySelectorAll(":not(text):not(input#submit):not(br)");
// console.log(inputs)
// inputs.addEventListener('keydown', function(event) {
//   if (event.key === 'Enter') {
//     console.log(event)
//     // document.getElementById('addPush').click();
//   }
// });

const textTitle = document.getElementById("title-text");
const titleToType = "Tess Phillips";
const underline = document.getElementById("underline");
let index = 0;
function type() {
    textTitle.textContent += titleToType.charAt(index);
    index++;
    setTimeout(type, 150);
    setTimeout(drawUnderline, 1950);

}

function drawUnderline() {
  const textWidth = textTitle.offsetWidth;
  underline.style.width = `${textWidth}px`;
}

type();