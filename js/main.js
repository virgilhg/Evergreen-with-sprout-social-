// Small progressive enhancement: current year
document.getElementById('yr').textContent = new Date().getFullYear();

// Respect reduced motion (example: could disable future animations)
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReduced) {
  document.documentElement.classList.add('reduce-motion');
}

tailwind.config = {
      theme: {
        extend: {
          colors: {
            brand: { DEFAULT: '#2B7A77', 600: '#2B7A77', 700: '#236664' },
            ink: '#0B1F2A',
            mute: '#4A5B68',
            surf: '#F6F8FA'
          },
          boxShadow: { soft: '0 6px 20px rgba(2,12,27,.06)' }
        }
    }
}
