console.log(location.href);
const messageSent = document.querySelector(".message-sent");

messageSent.style.display = "none";
function getCookie(name) {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(name + "="))
    ?.split("=")[1];
}

const statusMessage = getCookie("formStatus");
console.log(statusMessage);

if (statusMessage === "success") {
  //   messageSent.style.display = "flex";
  document.addEventListener("DOMContentLoaded", () => {
    const element = document.querySelector(".message-sent");
    if (window.innerWidth >= 900) {
      const animationKeyFrames1 = new KeyframeEffect(
        element,
        [
          {
            display: "flex",
            opacity: 0,
            transform: "translate(-50%, -50%) translateX(50%)",
          },
          {
            opacity: 1,
            transform: "translateX(0%)",
          },
          {
            opacity: 1,
          },
          {
            opacity: 0,
            display: "none",
          },
        ],
        {
          duration: 4000,
          delay: 500,
          fill: "both",
          iterations: 1,
          easing: "cubic-bezier(0,.63,1,.18)",
        }
    );
    const animation1 = new Animation(animationKeyFrames1, document.timeline);
    animation1.play();
    } else{
        const animationKeyFrames2 = new KeyframeEffect(
        element,
        [
          {
            display: "flex",
            opacity: 0,
          },
          {
            opacity: 1,
          },
          {
            opacity: 1,
          },
          {
            opacity: 0,
            display: "none",
          },
        ],
        {
          duration: 4000,
          delay: 1000,
          iterations: 1,
          easing: "cubic-bezier(0,.63,1,.18)",
        }
      );
      const animation2 = new Animation(animationKeyFrames2, document.timeline);
      animation2.play();
    }
  });
}
