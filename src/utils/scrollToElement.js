function scrollToElement(event, targetElement, adicionalSpace = 8) {
  event.preventDefault();

  const elementTopDistance = document.querySelector(targetElement).offsetTop;
  const headerHeight = document.querySelector("#root > header").clientHeight;

  window.scrollTo(0, elementTopDistance - headerHeight - adicionalSpace);
}

export default scrollToElement;
