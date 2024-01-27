function flipCard(card) {
  card.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function () {
  const flipCards = document.querySelectorAll(".flip-card");

  flipCards.forEach(function (card) {
      card.addEventListener("click", function () {
          flipCard(this); // Pass the clicked card to the flipCard function
      });
  });
});