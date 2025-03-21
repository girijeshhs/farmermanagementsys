document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero-section');
    
    if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        const currentPage = window.location.pathname;
        
        if (currentPage.includes('/farmer/register') || 
            currentPage.includes('/farmer/details') || 
            currentPage.includes('/add/farming')) {
            window.scrollTo({
                top: heroHeight,
                behavior: 'smooth'
            });
        }
    }
});