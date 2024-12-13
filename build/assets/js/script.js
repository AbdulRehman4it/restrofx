// nav js
   // Toggle mobile menu visibility
   document.getElementById("burger-menu").addEventListener("click", function() {
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.toggle("hidden");
  });
// nav js

// aos 
AOS.init({
    duration: 1200, // Adjust the duration of the animation
  });
//   

// Tab functionality
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContent = document.querySelectorAll('#tab-content > div');

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Update tab button styles
    tabButtons.forEach((btn) => {
      btn.classList.remove('bg-[#BB0000]', 'text-white');
      btn.classList.add('bg-gray-200', 'text-[#BB0000]');
    });
    button.classList.remove('bg-gray-200', 'text-[#BB0000]');
    button.classList.add('bg-[#BB0000]', 'text-white');

    // Show/Hide tab content
    const targetTab = button.getAttribute('data-tab');
    tabContent.forEach((content) => {
      if (content.getAttribute('data-tab') === targetTab) {
        content.classList.remove('hidden');
      } else {
        content.classList.add('hidden');
      }
    });
  });
});
// 