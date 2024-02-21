const the_animation = document.querySelectorAll('.title section, .banner-content');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); 
        }
    });
}, { threshold: 0.8 });

the_animation.forEach(element => {
    observer.observe(element);
});
