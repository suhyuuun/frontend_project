//visual
setInterval(function () {
  let pic = document.querySelector(".slide");
  pic.style.top = "-100%";
  pic.style.transition = "0.6s";

  setTimeout(function () {
    let first = pic.querySelectorAll("li")[0];
    pic.appendChild(first);
    pic.style.top = "0";
    pic.style.transition = "none";
  }, 1000);
}, 5000);

//content
let newsList = document.querySelectorAll(".news_cont ul");

newsList.forEach((element, index) => {
  element.style.display = "none";
});
newsList[0].style.display = "block";

let menuList = document.querySelectorAll(".news_menu li a");
menuList.forEach((element, index) => {
  console.log(element);
  element.onclick = function (e) {
    let newsCtList = document.querySelectorAll(".news_cont ul");
    newsCtList.forEach((element) => {
      element.style.display = "none";
    });
    const parent = e.target.parentElement.parentElement;
    const target = parent.children;
    Array.from(target).forEach((el) => el.classList.remove("active"));
    newsCtList[index].style.display = "block";
    e.target.parentElement.classList.add("active");
    newsbtn = element;
  };
});

//banner
let slides = document.querySelector(".slides");
let slide = document.querySelectorAll(".slides li");
let currentIdx = 0;
let slideCount = slide.length;
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");
let slideWidth = 170;
let slideMargin = 5;

slides.style.width =
  (slideWidth + slideMargin) * slideCount - slideMargin + "px";

function moveSlide(num) {
  slides.style.left = -num * 175 + "px";
  currentIdx = num;
}

nextBtn.addEventListener("click", function () {
  if (currentIdx < slideCount - 7) {
    moveSlide(currentIdx + 1);
  } else {
    moveSlide(0);
  }
  moveSlide(currentIdx + 1);
});

prevBtn.addEventListener("click", function () {
  if (currentIdx > 0) {
    moveSlide(currentIdx - 1);
  } else {
    moveSlide(slideCount - 7);
  }
});
