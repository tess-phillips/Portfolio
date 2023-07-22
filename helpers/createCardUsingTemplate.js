export function createCardUsingTemplate(article) {
  const containerElement2 = document.querySelector("#container2");
  const { title,subheading, summary, image ,href,favourite } = article;
  const template = document.querySelector("#articleTemplate");
  const domFragment = template.content.cloneNode(true);
  domFragment.querySelector("h3").textContent = title;
  domFragment.querySelector("h6").textContent = subheading;
  domFragment.querySelector("img").src = image;
  domFragment.querySelector(".card__summary").textContent = summary;
  domFragment.querySelector("a").href = href;
  if (favourite==true){
    domFragment.querySelector(".card__tag").style.display = "inline-block";
  }
  containerElement2.appendChild(domFragment);
}
//used