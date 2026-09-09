function closeNav() {
  document.querySelector('.nav-links').classList.remove('open');
}
function closeNavMobile(btn) {
  btn.classList.toggle('active');
  document.querySelector('.nav-links').classList.toggle('open');
}

var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .1, rootMargin: '0px 0px -50px 0px' });
document.querySelectorAll('[data-reveal]').forEach(function(el) { observer.observe(el); });

document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      closeNav();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

var nav = document.querySelector('.navbar');
window.addEventListener('scroll', function() {
  nav.style.background = window.scrollY > 50 ? 'rgba(10,22,40,.98)' : 'rgba(10,22,40,.95)';
});

var form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var honeypot = form.querySelector('input[name="website"]');
    if (honeypot && honeypot.value) return;
    var data = new FormData(form);
    var lineas = [
      'Hola JAimpression, quiero una cotización.',
      'Nombre: ' + (data.get('nombre') || ''),
      'Email: ' + (data.get('email') || ''),
      'Empresa: ' + (data.get('empresa') || '-'),
      'Servicio: ' + (data.get('servicio') || '-'),
      'Mensaje: ' + (data.get('mensaje') || '')
    ];
    window.open('https://wa.me/50762183704?text=' + encodeURIComponent(lineas.join('\n')), '_blank');
  });
}
