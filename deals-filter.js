const pills = document.querySelectorAll('.filter-pill');
  const items = document.querySelectorAll('.deal-item');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const filter = pill.dataset.filter;
      items.forEach(item => {
        item.style.display = (filter === 'all' || item.dataset.cat === filter) ? '' : 'none';
      });
    });
  });

  // Support deep links like deals.html#produce
  const hash = window.location.hash.replace('#','');
  if (hash) {
    const match = document.querySelector(`.filter-pill[data-filter="${hash}"]`);
    if (match) match.click();
  }
