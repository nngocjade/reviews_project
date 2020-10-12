//local reviews data
const reviews = [
  {
    id: 1,
    name: "Birdy",
    job: "Fly",
    img: "dist/img/bird-1045954_640.jpg",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur obcaecati voluptatum, quod tempore minus eos hic facere, optio odit cum saepe nulla ducimus, laborum error perspiciatis architecto distinctio aliquam doloremque.",
  },
  {
    id: 2,
    name: "Pelican",
    job: "Hunt",
    img: "dist/img/pelican-5218855_640.jpg",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur obcaecati voluptatum, quod tempore minus eos hic facere, optio odit cum saepe nulla ducimus, laborum error perspiciatis architecto distinctio aliquam doloremque.",
  },
  {
    id: 3,
    name: "Kitty Kat",
    job: "Purr",
    img: "dist/img/cat-5625168_640.jpg",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur obcaecati voluptatum, quod tempore minus eos hic facere, optio odit cum saepe nulla ducimus, laborum error perspiciatis architecto distinctio aliquam doloremque.",
  },

  {
    id: 4,
    name: "Migratory Birds",
    job: "Dance in the Sky",
    img: "dist/img/migratory-birds-5242969_640.jpg",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur obcaecati voluptatum, quod tempore minus eos hic facere, optio odit cum saepe nulla ducimus, laborum error perspiciatis architecto distinctio aliquam doloremque.",
  },
];

// select items
const img = document.getElementById("person-img");
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
 showPerson();
});

//show person based on item
function showPerson(){
   const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

//show next person

nextBtn.addEventListener('click', function(){
  currentItem++;
  if(currentItem > reviews.length - 1){
    currentItem = 0;
  }
showPerson();
});

//show prev person

prevBtn.addEventListener('click', function(){
  currentItem--;
  if(currentItem < 0){
    currentItem = reviews.length - 1;
  }
  showPerson();
});
