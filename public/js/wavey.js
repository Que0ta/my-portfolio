const okeey = document.querySelector(".okeey");
const offAnimation = document.querySelector(".neutral");

const animationWindow = document.querySelector(".message");
const wavesAnimation = document.querySelector(".waves");

function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function getCookie(name) {
  const cname = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookies = decodedCookie.split(";");
  for (let c of cookies) {
    c = c.trim();
    if (c.indexOf(cname) === 0) {
      return c.substring(cname.length, c.length);
    }
  }
  return null;
}

window.addEventListener("DOMContentLoaded", () => {
  const saved = getCookie("animations");
  // console.log(saved);
  if (saved === 'false') {
    wavesAnimation.setAttribute("hidden", "");
  } else if( saved === null ){
    animationWindow.removeAttribute("hidden");
  }
});

function offAnimationBlock() {
  wavesAnimation.setAttribute("hidden", "");
  animationWindow.setAttribute("hidden", "");
  setCookie("animations", false, 30);
}
function onAnimationBlock() {
  wavesAnimation.removeAttribute("hidden");
  animationWindow.setAttribute("hidden", "");
  setCookie("animations", true, 30);
}
