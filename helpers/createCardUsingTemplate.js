export function createCardUsingTemplate(article) {
  const containerElement2 = document.querySelector("#container2");
  const { title, summary, image ,href } = article;
  const template = document.querySelector("#articleTemplate");
  const domFragment = template.content.cloneNode(true);
  domFragment.querySelector("h3").textContent = title;
  domFragment.querySelector("img").src = image;
  domFragment.querySelector("p").textContent = summary;
  domFragment.querySelector("a").href = href;
  containerElement2.appendChild(domFragment);
}