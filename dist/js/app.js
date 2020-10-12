//local reviews data
const reviews = [
  {
    id: 1,
    name: "Birdy",
    job: "Fly",
    img: "./img/cat-5337501_640.jpg",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur obcaecati voluptatum, quod tempore minus eos hic facere, optio odit cum saepe nulla ducimus, laborum error perspiciatis architecto distinctio aliquam doloremque.",
  },
  {
    id: 2,
    name: "Pelican",
    job: "Hunt",
    img: "./img/pelican-5218855_640.jpg",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur obcaecati voluptatum, quod tempore minus eos hic facere, optio odit cum saepe nulla ducimus, laborum error perspiciatis architecto distinctio aliquam doloremque.",
  },
  {
    id: 3,
    name: "Kitty Kat",
    job: "Look Pretty",
    img: "./img/cat-5625168_640.jpg",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur obcaecati voluptatum, quod tempore minus eos hic facere, optio odit cum saepe nulla ducimus, laborum error perspiciatis architecto distinctio aliquam doloremque.",
  },

  {
    id: 4,
    name: "Heron",
    job: "Model",
    img: "./img/heron-5394026_640.jpg",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur obcaecati voluptatum, quod tempore minus eos hic facere, optio odit cum saepe nulla ducimus, laborum error perspiciatis architecto distinctio aliquam doloremque.",
  },
];

// select items
const img = document.getElementById("animal-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  showAnimal();
});

//show animal based on item
function showAnimal() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

//show next animal

nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showAnimal();
});

//show prev animal

prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showAnimal();
});

// show random animal

randomBtn.addEventListener('click', function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  console.log(currentItem);
  showAnimal();
})
