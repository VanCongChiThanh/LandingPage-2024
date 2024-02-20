document.addEventListener('DOMContentLoaded', function() {
    const demos = document.querySelectorAll('.demo');
    let currentIndex = 0;

    function showNextDemo() {
        if (currentIndex < demos.length) {
            demos[currentIndex].style.opacity = '1';
            currentIndex++;
        }
    }

    function handleScroll() {
        const demoSection = document.querySelector('.demo-section-inner');
        const rect = demoSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight) {
            showNextDemo();
        }
    }

    demos.forEach(demo => {
        demo.style.opacity = '0';
    });
    window.addEventListener('scroll', handleScroll);
});
