import { createElement } from "./createElements.js";
import { createImageWithLink } from "./createImageWithLink.js";

/**
 * 
 * @param {*} headType e.g h2
 * @param {*} the_className 
 * @param {*} title content of the h1/h2...
 * @returns 
 */
export const createContainerHead = (headType, the_className, title) => {
    const container = createElement('div',{ className: the_className});
    const containerTitle = createElement(headType,{textContent: title});
    container.appendChild(containerTitle)
    return container
}

/**
 * 
 * @param {*} headType 
 * @param {*} the_className 
 * @param {*} title title content
 * @param {*} paragraphs container content
 * @returns 
 */
export const createContainerWithTextOnly = (headType, the_className, title, paragraphs) => {
    const container = createContainerHead(headType, the_className, title);
    paragraphs.forEach((text) => {
        const paragraph = createElement("p", {innerHTML: text}) 
        container.appendChild(paragraph);
    });
    return container;
}

/**
 * 
 * @param {*} headType 
 * @param {*} the_className 
 * @param {*} title title content
 * @param {*} image_array [[href,alt text, src],[href,...],...]
 * @returns 
 */
export const createContainerWithImages = (headType, the_className, title, image_array) => {
    const container = createContainerHead(headType, the_className, title);
    const image_container = createElement("div")
    image_array.forEach((link) => {
        link = createImageWithLink(link[0],link[1],link[2])
        image_container.appendChild(link);
    });
    container.appendChild(image_container)
    return container;
}

/**
 * THIS SHOULD BE A CREATE CONTAINER WITH MODAL // JUST A CREATE MODAL FUNCTION
 * @param {*} headType 
 * @param {*} the_className 
 * @param {*} title title content
 * @param {*} content_array container content in array form
 * @returns 
 */
export const createContainerWithOther = (headType, the_className, title, content_array) => {
    const container = createContainerHead(headType, the_className, title);
    content_array.forEach((link) => {
        container.appendChild(link);
    });
    return container;
}