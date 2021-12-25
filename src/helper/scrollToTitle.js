const scrollToTitle = (event, idTitle, isDefaultPrevented = true) => {
  if (isDefaultPrevented) event.preventDefault();
  const titleTopDistance = document.getElementById(idTitle).offsetTop;
  const headerHeight = document.getElementById("main-header").clientHeight;
  const adicionalSpace = 8;
  window.scrollTo(0, titleTopDistance - headerHeight + adicionalSpace);
};

export default scrollToTitle;
