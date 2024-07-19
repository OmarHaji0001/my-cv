function initializeStickyAndSmooth() {
    const nav = document.querySelector('.main-nav');
    if (!nav) {
        console.error('Main navigation element not found');
        return;
    }

    const stickyPoint = nav.offsetTop;
    let mybutton = document.getElementById("scrollToTopBtn");

    window.addEventListener('scroll', handleScroll);

    function handleScroll() {
        const scrollTop = window.scrollY;

        if (scrollTop >= stickyPoint) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }

        const alpha = Math.min(1, scrollTop / 400);
        nav.style.backgroundColor = `rgba(0, 0, 0, ${alpha})`;

        if (scrollTop > 200) {
            mybutton.style.display = "flex";
        } else {
            mybutton.style.display = "none";
        }
    }

    mybutton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    handleScroll(); // Initialize the scroll position
}

document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.main-nav')) {
        initializeStickyAndSmooth();
    }
});