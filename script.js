const menuBtn = document.querySelector('.menu-btn');
const mobileNav = document.querySelector('.mobile-nav');
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
}
document.querySelectorAll('.mobile-nav a').forEach(a => a.addEventListener('click', () => {
  mobileNav.classList.remove('open');
  menuBtn.setAttribute('aria-expanded','false');
}));

const form = document.getElementById('newsletterForm');
const msg = document.getElementById('formMsg');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    if (!email || !form.reportValidity()) return;
    const subject = encodeURIComponent('TacticMint newsletter subscription');
    const body = encodeURIComponent('Please subscribe me to the TacticMint newsletter.\n\nEmail: ' + email);
    window.location.href = 'mailto:hello@tacticmint.com?subject=' + subject + '&body=' + body;
    msg.textContent = 'Send the subscription request from your email app. If it does not open, email hello@tacticmint.com to subscribe.';
    msg.style.color = '#21d291';
  });
}
