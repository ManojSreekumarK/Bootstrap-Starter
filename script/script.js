function isElementInView(elem) {
  var rect = elem.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  var elements = document.querySelectorAll(".fade-in");
  elements.forEach(function (elem) {
    if (isElementInView(elem)) {
      elem.classList.add("visible");
    } else {
      elem.classList.remove("visible");
    }
  });
}

document.addEventListener("scroll", handleScroll);
