function toggleDescription(card) {
    card.classList.toggle('active');
    const cards = document.querySelectorAll('.game-card');
    cards.forEach((c) => {
      if (c !== card && c.classList.contains('active')) {
        c.classList.remove('active');
      }
    });
  }