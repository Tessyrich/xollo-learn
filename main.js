document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.querySelector("nav");
  const scrollContent = document.querySelector(".scroll-bar");
  const leftScroll = document.querySelector(".left-scroll");
  const rightScroll = document.querySelector(".right-scroll");

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
