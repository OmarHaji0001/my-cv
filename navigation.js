document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');
    const spinner = document.getElementById('loading-spinner');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);

            // Show the spinner
            spinner.style.display = 'flex';

            // Hide all sections
            sections.forEach(section => section.style.display = 'none');

            // Simulate loading time
            setTimeout(() => {
                // Hide the spinner
                spinner.style.display = 'none';

                // Show the target section
                document.getElementById(targetId).style.display = 'block';
            }, 500); // Adjust the timeout duration to your needs
        });
    });
});
