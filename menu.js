function toggleMenu() {
    const menu = document.getElementById('side-menu');
    menu.classList.toggle('open');
}
let currentScroll = 0;

function scrollCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const itemWidth = document.querySelector('.carousel-item').offsetWidth + 20; // 20px is the gap

    // Update the current scroll position
    currentScroll += direction * itemWidth;

    // Ensure the scroll position doesn't go out of bounds
    const maxScroll = (carousel.children.length - 3) * itemWidth; // Assumes 3 visible items
    currentScroll = Math.max(0, Math.min(currentScroll, maxScroll));

    // Apply the transformation
    carousel.style.transform = `translateX(-${currentScroll}px)`;
}

const userIcon = document.querySelector('.dropdown .user');
const dropdownContent = document.querySelector('.dropdown-content');

userIcon.addEventListener('click', () => {
  const isVisible = dropdownContent.style.display === 'block';
  dropdownContent.style.display = isVisible ? 'none' : 'block';
});

// Cierra el menú si se hace clic fuera
document.addEventListener('click', (event) => {
  if (!dropdownContent.contains(event.target) && !userIcon.contains(event.target)) {
    dropdownContent.style.display = 'none';
  }
});


// 
function registro(){
    let value =  document.querySelector(".input").value;
    if(value != ""){
        window.location.href = "index.html";
    }
}