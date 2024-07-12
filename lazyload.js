document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.nav-link');
    const mainContent = document.querySelector('main');
    const spinner = document.getElementById('loading-spinner');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const url = this.href;

            spinner.classList.remove('d-none'); // Show the loading spinner

            fetch(url)
                .then(response => response.text())
                .then(html => {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, 'text/html');
                    const newContent = doc.querySelector('main').innerHTML;

                    mainContent.innerHTML = newContent; // Replace the content
                    window.history.pushState(null, null, url); // Update the URL
                })
                .finally(() => {
                    spinner.classList.add('d-none'); // Hide the loading spinner
                });
        });
    });

    // Handle back/forward browser navigation
    window.addEventListener('popstate', function () {
        location.reload();
    });
});
