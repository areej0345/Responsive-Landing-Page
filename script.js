// ── Mobile Menu Toggle ──────────────────────────
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

// ── Close mobile menu on link click ─────────────
function closeMobile() {
  mobileMenu.classList.remove('open');
}

// ── Smooth scroll for CTA button ────────────────
document.querySelector('.btn-primary').addEventListener('click', () => {
  document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
});
