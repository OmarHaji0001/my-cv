document.addEventListener("DOMContentLoaded", function () {
    fetch('HTMLs/mainnav.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('HTTP error! Status: ' + response.status);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('mainnav-placeholder').innerHTML = data;
            // Ensure the function initializeStickyAndSmooth is called after the navbar is loaded
            if (typeof initializeStickyAndSmooth === 'function') {
                initializeStickyAndSmooth();
            } else {
                console.error('Function initializeStickyAndSmooth is not defined');
            }
        })
        .catch(error => {
            console.error('Error loading mainnav:', error);
        });
});
