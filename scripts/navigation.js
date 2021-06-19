const _ = (selector) => {
  return document.querySelector(selector);
};

const menuButton = _("#menu-icon");

menuButton.addEventListener("click", function () {
  this.classList.toggle("menu-active");
  _("#header-nav").classList.toggle("nav-active");
});
_("#header-nav").addEventListener("click", function (event) {
  if (this.classList.contains("nav-active")) {
    menuButton.classList.remove("menu-active");
    _("#header-nav").classList.remove("nav-active");
  }
});
