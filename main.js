let scrollContainer = document.querySelector(".nav-cont");
const scrollContent = document.querySelector(".scroll-bar");
const leftScroll = document.querySelector(".left-scroll");
const rightScroll = document.querySelector(".right-scroll");
document.addEventListener("DOMContentLoaded", function () {
  // Scroll to the left
  leftScroll.addEventListener("click", function () {
    scrollContainer.scrollBy({
      left: -200, // Adjust the scroll distance as needed
      behavior: "smooth",
    });
  });

  // Scroll to the right
  rightScroll.addEventListener("click", function () {
    scrollContainer.scrollBy({
      left: 200, // Adjust the scroll distance as needed
      behavior: "smooth",
    });
  });
});

// Toggle arrow visibility based on scroll position
scrollContainer.addEventListener("scroll", function () {
  leftScroll.style.display = scrollContainer.scrollLeft > 0 ? "block" : "none";
  rightScroll.style.display =
    scrollContainer.scrollLeft <
    scrollContent.scrollWidth - scrollContainer.clientWidth
      ? "block"
      : "none";
});
