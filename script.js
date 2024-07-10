// custom carousel
document.addEventListener('DOMContentLoaded', () => {

  let prevBtn = document.querySelector(".previous-btn");
  let nextBtn = document.querySelector(".next-btn");
  let gallery = document.querySelector(".gallery");
  let category = document.querySelector('.category');
  let categorySLider = document.querySelector('.category-slider');
  let nextCategory = document.querySelector('.next-category');
  let previousCategory = document.querySelector('.prev-category');
  let galleryWidth = gallery.clientWidth;
  

  // next carousel 
  nextBtn.addEventListener('click', () => {
    gallery.scrollBy({
      right:0,
      left:galleryWidth + 30,
      behavior:"smooth"
    });
  });
// previous carousel 
  prevBtn.addEventListener('click', () => {
    gallery.scrollBy({
      left:-galleryWidth + (-30),
      behavior:"smooth"
    });

  });

document.getElementById('nextCategory').addEventListener('click', function() {
  document.getElementById('categorySlider').scrollBy({ left: 200, behavior: 'smooth' });
});

document.getElementById('prevCategory').addEventListener('click', function() {
  document.getElementById('categorySlider').scrollBy({ left: -200, behavior: 'smooth' });
});
// accordian section
let accordianItems = document.querySelectorAll(".accordian-item");

accordianItems.forEach((item) => {
  let accordianTitle = item.querySelector('.accordian-title');
  let accordianContent = item.querySelector('.accordian-content');

  accordianTitle.addEventListener('click', () => {
    for (let i = 0; i < accordianItems.length; i++) {
      if (accordianItems[i] != item) {
        accordianItems[i].classList.remove('accordian-active');
      }
    }
    item.classList.toggle('accordian-active');
  });
});



});