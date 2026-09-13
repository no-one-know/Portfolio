// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const el = document.querySelector(a.getAttribute('href'));
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Interactive Toolkit Domain Filtering
document.addEventListener('DOMContentLoaded', () => {
  const toolkitTabs = document.querySelectorAll('.toolkit-tab');
  const toolkitChips = document.querySelectorAll('.toolkit-chip');
  const toolkitCounter = document.getElementById('toolkitCounter');

  if (toolkitTabs.length && toolkitChips.length) {
    toolkitTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const filter = tab.dataset.filter;

        // Update active state on tabs
        toolkitTabs.forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');

        // Filter chips with smooth fade animation
        let visibleCount = 0;
        toolkitChips.forEach(chip => {
          const category = chip.dataset.category;
          const isMatch = (filter === 'all' || category === filter);

          if (isMatch) {
            chip.classList.remove('filtered-out');
            chip.classList.remove('fade-in');
            // Force DOM reflow to re-trigger the CSS animation
            void chip.offsetWidth;
            chip.classList.add('fade-in');
            visibleCount++;
          } else {
            chip.classList.add('filtered-out');
            chip.classList.remove('fade-in');
          }
        });

        // Update counter label
        if (toolkitCounter) {
          if (filter === 'all') {
            toolkitCounter.textContent = `${visibleCount} technologies`;
          } else {
            toolkitCounter.textContent = `Showing ${visibleCount} of ${toolkitChips.length} technologies`;
          }
        }
      });
    });
  }
});