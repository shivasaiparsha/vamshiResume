document.addEventListener("DOMContentLoaded", function() {
    // Intersection Observer for animations
    const sections = document.querySelectorAll('.content-section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.classList.add('hidden');
        observer.observe(section);
    });

    // Smooth scrolling for navigation
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


document.getElementById('download-resume').addEventListener('click', function() {
    window.location.href = 'https://drive.google.com/file/d/17Ii5E9YFAP0fgYC8lKE5yfs82E_YzPqO/view?usp=sharing';
});




