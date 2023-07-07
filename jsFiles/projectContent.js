import {createCardUsingTemplate} from "../helpers/createCardUsingTemplate.js"

const articles = [
  {
    title: "My Hobby Page",
    summary:
      "This site is an informative page about bouldering and other types of climbing. It is also the first site I ever made in HTML.",
    image: "./imgFiles/hobbyLanding.jpg",
    href: "https://tess-phillips.github.io/FAC1/",
  },
  {
    title: "FAC application: Project Gallery",
    summary:
      "This website is a portal to each of the other projects I made for the Founders and Coders Bootcamp Application. \
      These include my Hobby Page, Movie Data Site, a website about me and a game called Slidey.",
    image: "./imgFiles/galleryLanding.jpg",
    href: "https://tess-phillips.github.io/FAC2/",
  },
  {
    title: "TD Weather App",
    summary: 
      "This app is designed to be responsive and uses postcode to generate a map and accurate sunrise-sunset timings, as well as a comprehensive daily and 5-day weather forecast. \
      To gather this information, our app integrates three APIs: open-meteo.com, postcodes.io, and thunderforest.com.\
      I made this with Deepa on the FAC Foundation.",
      image: "../imgFiles/TDWeather.png",
      href: "https://deepsdali.github.io/Weather-Forecast-Project/",
},
// {
//   title: "To Do List",
//   summary: 
//     "",
//     image: "/imgFiles/TDWeather.png",
//     href: "https://tess-phillips.github.io/ToDoList/",
// },
{
  title: "Wordle",
  summary: "This is a copy of the famous wordle game",
    image: "/imgFiles/worlde.jpg",
    href: "https://tess-phillips.github.io/Wordle/",
}
]
articles.reverse()

articles.forEach(createCardUsingTemplate);