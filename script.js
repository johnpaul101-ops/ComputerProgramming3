const typingEff = document.querySelector(".typing");
let firstTyping = "we are cp3";
let secondTyping = "we are programmers";
let i = 0;
let j = 0;

function typeFirst() {
  if (i < firstTyping.length) {
    typingEff.textContent += firstTyping[i];
    i++;
    setTimeout(typeFirst, 150);
  } else {
    setTimeout(() => {
      typingEff.textContent = "";
      i = 0;
      typeSecond();
    }, 1500);
  }
}

function typeSecond() {
  if (j < secondTyping.length) {
    typingEff.textContent += secondTyping[j];
    j++;
    setTimeout(typeSecond, 150);
  } else {
    setTimeout(() => {
      typingEff.textContent = "";
      j = 0;
      typeFirst();
    }, 1500);
  }
}
typeFirst();
const aboutSection = document.querySelector(".about-us__section");
const scrollBtn = document
  .querySelector(".meet-our-section")
  .addEventListener("click", () => {
    aboutSection.scrollIntoView({ behavior: "smooth" });
  });

const menu = document.querySelector(".links");
const toggleMenu = document.querySelector(".hamburger-menu");
const menuLink = document.querySelectorAll(".link");

function mobileMenu() {
  function showMenu() {
    toggleMenu.classList.add("active");
    menu.classList.add("show");
  }
  function removeMenu() {
    toggleMenu.classList.remove("active");
    menu.classList.remove("show");
  }

  toggleMenu.addEventListener("click", () => {
    if (!menu.classList.contains("show")) {
      showMenu();
    } else {
      removeMenu();
    }
  });
  menuLink.forEach((link) => {
    link.addEventListener("click", () => {
      removeMenu();
    });
  });
}
mobileMenu();

const imageContainer = document.querySelector(".images");
const loadBtn = document.getElementById("load-more");
const images = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg",
  "image5.jpg",
  "image6.jpg",
  "image7.jpg",
  "image8.jpg",
  "image9.jpg",
  "image10.jpg",
  "image11.jpg",
  "image12.jpg",
  "image13.jpg",
];
let currentNum = 0;
let imgRenderPerBatch = 8;
function galleryImageRendering() {
  const end = Math.min(currentNum + imgRenderPerBatch, images.length);
  console.log(end);
  for (let i = currentNum; i < end; i++) {
    const img = document.createElement("img");
    img.src = `./assets/gallery/${images[i]}`;
    imageContainer.appendChild(img);
  }
  currentNum = end;

  if (currentNum >= images.length) {
    loadBtn.style.display = "none";
  }
}
galleryImageRendering();

loadBtn.addEventListener("click", galleryImageRendering);
