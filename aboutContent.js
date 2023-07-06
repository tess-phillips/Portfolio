import { createElement, appendElements } from './helpers/createElements.js';
import { createContainerWithTextOnly, createContainerWithImages, createContainerWithOther } from "./helpers/createContainers.js";
// import { text2innerHTML } from './helpers/text2innerHTML.js';

// Create the first half
const firstHalf = createElement('div', { className: 'half' });
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


appendElements(firstHalf, [box1, box2]);

// Create the second half
const secondHalf = createElement('div', { className: 'half' });

// ADD A CLASS TO THIS BUTTON SO ITS ON SAME LINE

{/* <div class="quarter box3">
<h3>
    Resume
</h3>
<p> 
    Click <button class="navChild home" id="myResBtn"> here </button> to see my resume.
</p> 
    <div id="myResModal" class="modal">
        <div class="modal-content res">
            <span id="myResClose" class="close">&times;</span>
            <h3>Resume</h3>
            <embed id="resume" src="imgFiles/TessPhillipsResume310523.pdf" width="500" height="375" 
            type="application/pdf">
        </div>
        <p> Click <a onclick=""> here </a> to download my resume.</p>
    </div>
</div> */}

// const btn = text2innerHTML([
//   ["","p","Click <button class=`navChild home` id=`myResBtn`> here </button> to see my resume."]
// ])
const btntext = createElement('p',{innerHTML: 'Click '});
const btntext2 = createElement('p',{innerHTML: ' to see resume'});
const resBtn = createElement('button', { className: 'navChild home', id: 'myResBtn',textContent:'here' });
btntext.appendChild(resBtn)
btntext.appendChild(btntext2)
const resumeModal = createElement('div', { id: 'myResModal', className: 'modal' });
const modalContent = createElement('div', { className: 'modal-content res' });
const spanContent = createElement('span', {  id: 'myResClose', className: 'close',innerHTML: '&times;'});
const title = createElement('h3',{textContent: "Resume"})
const embedContent = createElement('embed',{id: "resume", src: "imgFiles/TessPhillipsResume310523.pdf", width: "500", height: "375", type: "application/pdf"})
const downloadtext = createElement('p',{textContent: 'Click to download resume (not working yet)'});
appendElements(resumeModal,[modalContent,downloadtext])
appendElements(modalContent,[spanContent,title,embedContent])

const box3 = createContainerWithOther('h3','quarter box3', 'Resume', [
    btntext, resumeModal
]);

// const box3content = "<h3>Resume</h3><p> Click <button class=`navChild home` id=`myResBtn`> here </button> to see my resume.</p> <div id=`myResModal` class=`modal`><div class=`modal-content res`><span id=`myResClose` class=`close`>&times;</span><h3>Resume</h3><embed id=`resume` src=`imgFiles/TessPhillipsResume310523.pdf` width=`500` height=`375` type=`application/pdf`></div><p> Click <a onclick=``> here </a> to download my resume.</p></div>"
// const box3 = createElement('p',{innerHTML: box3content});

const box4 = createContainerWithTextOnly('h3','quarter box4', 'Strengths & Passions', [
  "I'm a passionate and <b>curious learner</b> who thrives in collaborative environments",
  "I believe in the power of technology to create <b>positive change</b>.",
  "I have a deep love for the <b>environment </b>and a strong commitment to sustainability",
  "I enjoy tackling challenging problems and finding <b>creative</b> solutions."
]);

appendElements(secondHalf, [box3, box4]);

// Append the halves to the section
const section = document.getElementById('about-placeholder');
appendElements(section, [firstHalf, secondHalf]);
