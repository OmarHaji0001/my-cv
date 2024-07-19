function initializeStickyAndSmooth() {
    const nav = document.querySelector('.main-nav');
    if (!nav) {
        console.error('Main navigation element not found');
        return;
    }

    const stickyPoint = nav.offsetTop; // Get the offset position of the navbar
    let mybutton = document.getElementById("scrollToTopBtn");

    window.onscroll = function () {
        handleScroll();
    };

    function handleScroll() {
        const scrollTop = document.documentElement.scrollTop;

        // Handle sticky navigation
        if (scrollTop >= stickyPoint) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }

        const alpha = Math.min(1, scrollTop / 400); // Increase alpha with more scroll, max value 1
        nav.style.backgroundColor = `rgba(0, 0, 0, ${alpha})`;

        // Handle scroll-to-top button
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

        // Gradually reset the background color to transparent
        let alpha = parseFloat(getComputedStyle(nav).backgroundColor.split(',')[3]);
        const interval = setInterval(() => {
            alpha -= 0.05;
            if (alpha <= 0) {
                alpha = 0;
                clearInterval(interval);
                nav.style.backgroundColor = `rgba(0, 0, 0, 0)`;
            } else {
                nav.style.backgroundColor = `rgba(0, 0, 0, ${alpha})`;
            }
        }, 30); // Decrease alpha every 30ms for a smooth transition
    });
}

document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.main-nav')) {
        initializeStickyAndSmooth();
    }
});
