const card1 = document.querySelector('.card-1-inner');
const card2 = document.querySelector('.card-2-inner');
const card3 = document.querySelector('.card-3-inner');

const cards = [card1, card2, card3];

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
      }
      // entry.target.classList.toggle('appear', entry.isIntersecting);
    });
  },
  {
    threshold: 0.9
  }
);

cards.forEach((card) => observer.observe(card));
