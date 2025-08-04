document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(
    ".about-card1, .about-card2, .about-card3, .about-card4"
  );

    const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.about-grid > div').forEach(card => {
    observer.observe(card);
  });

  cards.forEach((card) => observer.observe(card));
});
