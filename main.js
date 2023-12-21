const cards = document.querySelectorAll(".group");

cards.forEach((card, index) => {
  // Check if the current card is not the last one

  if (index !== cards.length - 1) {
    card.addEventListener("mouseover", () => {
      const nextCard = cards[(index + 1) % cards.length];
      const overlay = nextCard.querySelector(".overlay");
      overlay.classList.remove("hidden");
      console.log(overlay);
    });

    card.addEventListener("mouseout", () => {
      const nextCard = cards[(index + 1) % cards.length];
      const overlay = nextCard.querySelector(".overlay");
      overlay.classList.add("hidden");
    });
  }
  if (index === cards.length - 1) {
    card.addEventListener("mouseover", () => {
      const prevCard = cards[(index - 1 + cards.length) % cards.length];
      const overlay = prevCard.querySelector(".overlay");
      overlay.classList.remove("hidden");
    });
    card.addEventListener("mouseout", () => {
      const prevCard = cards[(index - 1 + cards.length) % cards.length];
      const overlay = prevCard.querySelector(".overlay");
      overlay.classList.add("hidden");

      const firstCard = cards[0];
      const firstCardOverlay = firstCard.querySelector(".overlay");
      firstCardOverlay.classList.add("hidden");
    });
  }
});
