import { createElement, appendElements } from "./createElements.js";
import { createContainerHead, createContainerWithTextOnly } from "./createContainers.js";
import { text2innerHTML } from "./text2innerHTML.js";

/**
 * 
 * @param {*} id 
 * @param {*} title 
 * @param {*} imageSrc 
 * @param {*} imageHref 
 * @param {*} whatIsItText 
 * @param {*} learningsText 
 * @returns 
 */
export const createSlideContainer = (id, title, imageSrc,imageHref, whatIsItText, learningsText) => {
    const slideContainer = createContainerHead("h2", "slide-container", title);
    
    const imageElement = createElement("img", {className: "img-flex", src:imageSrc});
    const textContainer = createContainerWithTextOnly("h5", "img-flex", 'What is it?', [whatIsItText]);
    const learningsContainer = createContainerWithTextOnly("h5", "img-flex", 'Key Learnings', [learningsText]);
    const linksContainer = createContainerWithTextOnly("h5", "img-flex", 'Links', [text2innerHTML(imageHref)]);
    appendElements(slideContainer, [imageElement,textContainer,learningsContainer,linksContainer])

    const targetElement = document.getElementById(id);
    targetElement.appendChild(slideContainer);
    return targetElement
}