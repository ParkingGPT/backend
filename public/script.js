document.addEventListener('DOMContentLoaded', function () {
    const getTokenLink = document.getElementById('getTokenLink');
    const tokenContainer = document.getElementById('token-container');

    getTokenLink.addEventListener('click', function (event) {
        event.preventDefault();
        tokenContainer.style.display = 'block';

        fetch('/getToken')
            .then(response => response.json())
            .then(data => {
                tokenContainer.innerHTML = `<h4>This is your Auth Token which you can use to fetch real data from INRIX:</h4>\n ${data.message}`;
            })
            .catch(error => console.error('Error fetching API token:', error));
    });
});
