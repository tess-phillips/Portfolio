import {createCardUsingTemplate} from "../helpers/createCardUsingTemplate.js"

const articles = [
  {
    title: "My Hobby Page",
    subheading: "FAC Application",
    summary:
      "This site is an informative page about bouldering and other types of climbing. It is also the first site I ever made in HTML.",
    image: "./imgFiles/hobbyLanding.jpg",
    href: "https://tess-phillips.github.io/boulderingPage/",
  },
  {
    title: "Project Gallery",
    subheading: "FAC Application",
    summary:
      "This website is a portal to each of the other projects I made for the FAC Application. \
      These include a Movie Data Site, a website about me and a game called Slidey.",
    image: "./imgFiles/galleryLanding.jpg",
    href: "https://tess-phillips.github.io/FAC2/",
  },
  {
    title: "Slidey Game",
    subheading: "FAC Application",
    summary:
      "This website is for a game called Slidey. I made it for the Application but have since improved it with newfound knowledge.",
    image: "./imgFiles/slideyLanding.jpg",
    href: "https://tess-phillips.github.io/slideyGame/",
  },
  {
    title: "TD Weather App",
    favourite: true,
    subheading: "FAC Foundation, with Deepashri Dali",
    summary: 
      "This app uses a postcode to generate relevant weather and location data using three APIs: open-meteo.com, postcodes.io, and thunderforest.com.\
     ",
      image: "./imgFiles/TDWeather.png",
      href: "https://deepsdali.github.io/Weather-Forecast-Project/",
},
{
  title: "To Do List",
  subheading: "FAC Foundation, with Tommaso Orlandi",
  summary: 
    "This is an interactive and accessible site where you can add your daily tasks that can be updated, edited and sorted as required.\
   ",
    image: "./imgFiles/toDoListLanding.jpg",
    href: "https://tess-phillips.github.io/ToDoList/",
},
{
  title: "Wordle",
  favourite:true,
  summary: "This is a version of the famous wordle game. It has a range of different features though so go and check it out. ",
    image: "./imgFiles/wordle.jpg",
    href: "https://tess-phillips.github.io/Wordle/",
}
]
articles.reverse()

articles.forEach(createCardUsingTemplate);