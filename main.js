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

const articles = [
  {
    title: "My Hobby Page",
    summary:
      "This site is an informative page about bouldering and other types of climbing. It is also the first site I ever made in HTML.",
    image: "/imgFiles/hobbyLanding.jpg",
    href: "https://tess-phillips.github.io/FAC1/",
  },
  {
    title: "FAC application: Project Gallery",
    summary:
      "This website is a portal to each of the other projects I made for the Founders and Coders Bootcamp Application. \
      These include my Hobby Page, Movie Data Site, a website about me and a game called Slidey.",
    image: "/imgFiles/galleryLanding.jpg",
    href: "https://tess-phillips.github.io/FAC2/",
  },
  {
    title: "TD Weather App",
    summary: 
      "This app is designed to be responsive and uses postcode to generate a map and accurate sunrise-sunset timings, as well as a comprehensive daily and 5-day weather forecast. \
      To gather this information, our app integrates three APIs: open-meteo.com, postcodes.io, and thunderforest.com.\
      I made this with Deepa on the FAC Foundation.",
      image: "/imgFiles/TDWeather.png",
      href: "https://deepsdali.github.io/Weather-Forecast-Project/",
},
// {
//   title: "To Do List",
//   summary: 
//     "",
//     image: "/imgFiles/TDWeather.png",
//     href: "https://tess-phillips.github.io/ToDoList/",
// },
// {
//   title: "Wordle",
//   summary: 
//     "",
//     image: "/imgFiles/TDWeather.png",
//     href: "https://tess-phillips.github.io/Wordle/",
// }
]
articles.reverse()
  
  const containerElement2 = document.querySelector("#container2");
  
  function createCardUsingTemplate(article) {
    const { title, summary, image ,href } = article;
    const template = document.querySelector("#articleTemplate");
    const domFragment = template.content.cloneNode(true);
    domFragment.querySelector("h3").textContent = title;
    domFragment.querySelector("img").src = image;
    domFragment.querySelector("p").textContent = summary;
    domFragment.querySelector("a").href = href;
    containerElement2.appendChild(domFragment);
  }
  
articles.forEach(createCardUsingTemplate);