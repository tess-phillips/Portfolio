import { createElement } from "./createElements.js";

/**
 * THIS COULD BE EXPANDED TO WORK FOR OTHER IMAGES
 * @param {*} the_href 
 * @param {*} the_alt 
 * @param {*} the_src 
 * @returns 
 */
export const createImageWithLink = (the_href, the_alt, the_src) => {
  const link = createElement('a', { href: the_href, target: '_blank', rel: 'noreferrer' });
  const image = createElement('img', { src: the_src, alt:the_alt, width: '40', height: '40' });
  link.appendChild(image);
  return link;
};