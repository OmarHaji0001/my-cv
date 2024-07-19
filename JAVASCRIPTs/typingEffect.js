document.addEventListener('DOMContentLoaded', function () {
    const introSection = document.querySelector('.intro-section');
    const paragraphs = introSection.querySelectorAll('.typing');
    let currentParagraph = 0;

    function typeWriter(element, text, delay = 22, callback) {
        let index = 0;
        element.style.borderRight = "0.15em solid orange";

        function type() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, delay);
            } else {
                element.style.borderRight = "none";
                if (callback) callback();
            }
        }

        type();
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        if (isElementInViewport(introSection)) {
            introSection.classList.add('typing-active');
            window.removeEventListener('scroll', handleScroll);
            startTyping();
        }
    }

    function startTyping() {
        if (currentParagraph < paragraphs.length) {
            const paragraph = paragraphs[currentParagraph];
            const text = paragraph.getAttribute('data-text');
            typeWriter(paragraph, text, 22, function () {
                currentParagraph++;
                startTyping();
            });
        }
    }

    paragraphs.forEach((p) => {
        p.setAttribute('data-text', p.textContent);
        p.textContent = '';
    });

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on load in case the element is already in view
});