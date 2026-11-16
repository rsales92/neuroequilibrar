const sections = document.querySelectorAll('.audience-grid, .services, .about-grid, .contact-grid');
const revealInset = 72;

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;

      entry.target.classList.remove('section-pending');
      if (!entry.target.matches(':focus-within')) {
        entry.target.classList.add('section-entered');
      }
      observer.unobserve(entry.target);
    }
  }, { rootMargin: `0px 0px -${revealInset}px 0px` });

  for (const section of sections) {
    if (section.getBoundingClientRect().top >= window.innerHeight) {
      section.classList.add('section-pending');
      observer.observe(section);
    }
  }
}
