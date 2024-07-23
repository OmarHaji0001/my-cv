document.addEventListener("DOMContentLoaded", function () {
    fetch('../HTMLs/top-bar.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('HTTP error! Status: ' + response.status);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('topbar-placeholder').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading top bar:', error);
        });
});
