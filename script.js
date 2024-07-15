document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const navItems = document.querySelectorAll('.nav-item a');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#555';
        } else {
            navbar.style.backgroundColor = '#333';
        }
    });

    navItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.color = '#ff6347';
        });
        item.addEventListener('mouseout', function() {
            this.style.color = 'white';
        });
    });
});
