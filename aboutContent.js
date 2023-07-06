import { createContainerWithTextOnly } from "./helpers/createContainers.js";
import { createContainerWithImages } from "./helpers/createContainers.js";

const box1 = createContainerWithTextOnly('h3','quarter box1', 'Recent Education & Experience', [
  "I'm currently working on <b>Founders and Coders</b> software development bootcamp",
  "I'm learning: Web development fundamentals, front and back-end development, workflows, databases....",
  "I hold a Bachelor's degree in <b>Mathematics</b> from University of Manchester"
]);
const box2 = createContainerWithImages('h3','quarter box2','Languages and Tools:', [
  ['https://www.w3schools.com/css/', 'css3','https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg'],
  ['https://www.w3.org/html/', 'html5',"https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"],
  ['https://developer.mozilla.org/en-US/docs/Web/JavaScript', 'javascript',"https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"],
  ['https://www.mysql.com/', 'mysql',"https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" ],
  ['https://nodejs.org', 'nodejs',"https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"],
  ['https://www.postgresql.org', 'postgresql',"https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"],
  ['https://www.python.org', 'python',"https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"],
  ['https://reactjs.org/', 'react',"https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"]
]);
const box4 = createContainerWithTextOnly('h3','quarter box4', 'Strengths & Passions', [
  "I'm a passionate and <b>curious learner</b> who thrives in collaborative environments",
  "I believe in the power of technology to create <b>positive change</b>.",
  "I have a deep love for the <b>environment </b>and a strong commitment to sustainability",
  "I enjoy tackling challenging problems and finding <b>creative</b> solutions."
]);
document.querySelector('.box1').append(box1)
document.querySelector('.box2').append(box2)
document.querySelector('.box4').append(box4)