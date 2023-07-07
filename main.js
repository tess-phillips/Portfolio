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

// const articles = [
//   {
//     title: "my nice article",
//     summary:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, omnis!",
//     image: "https://source.unsplash.com/400x300?0",
//   },
//   {
//     title: "another article",
//     summary:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, omnis!",
//     image: "https://source.unsplash.com/400x300?1",
//   }]
const articles = []
  
  const containerElement2 = document.querySelector("#container2");
  
  function createCardUsingTemplate(article) {
    const { title, summary, image } = article;
    const template = document.querySelector("#articleTemplate");
    const domFragment = template.content.cloneNode(true);
    domFragment.querySelector("h3").textContent = title;
    domFragment.querySelector("img").src = image;
    domFragment.querySelector("p").textContent = summary;
    containerElement2.appendChild(domFragment);
  }
  
articles.forEach(createCardUsingTemplate);