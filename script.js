const navBar = document.querySelector('.navColumn');
const mainContent = document.querySelector('main');

window.addEventListener('scroll', function() {
  const scrollTop = window.scrollY; // Get the current scroll position

  if (scrollTop > 0) {
    navBar.classList.add('sticky');
    mainContent.style.marginLeft = navBar.offsetWidth + 'px'; // Adjust content margin for sticky nav
  } else {
    navBar.classList.remove('sticky');
    mainContent.style.marginLeft = null; // Reset content margin when not sticky
  }
});
