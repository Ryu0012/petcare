const flexContainer = document.querySelector(".flex-container");
let scrollSpeed = 0.3; // 스크롤 속도 조절값

window.addEventListener("wheel", (e) => {
  e.preventDefault();
  flexContainer.scrollLeft += e.deltaY * scrollSpeed;
});

const container = document.querySelector(".container");
