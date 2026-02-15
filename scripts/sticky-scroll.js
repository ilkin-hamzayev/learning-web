const rs = document.querySelector(".right-sidebar");
let last = window.scrollY;
let dynamicTop = -300;

window.addEventListener("scroll", () => {
  const current = window.scrollY;
  const deltaScroll = current - last;


  dynamicTop -= deltaScroll;
  dynamicTop = Math.min(dynamicTop, 54);
  dynamicTop = Math.max(dynamicTop, -300);

  rs.style.top = dynamicTop + "px";
  last = current;
});