// Define the URL to which you want to send the POST request
const apiUrl = 'http://localhost:3000/users/1';

// Create an object with the data you want to send in the request body
const requestData = {
    'name': 'Juline Cornell',
    'birthday': '10/28/1979',
    'address': {
        'street': '50375 Johnson Trail',
        'city': 'Lens',
        'zip': '62335 CEDEX',
        'state': 'B4',
        'country': 'Croatia'
    },
    'email': 'jcornell1@rediff.com',
    'phone': '512-801-8824'
};

// Define the options for the POST request, including method, headers, and body
const requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json', // Set the content type to JSON
        // You may need to include additional headers like authentication tokens if required
    },
    body: JSON.stringify(requestData) // Convert the data object to JSON string
};

// Use the Fetch API to send the POST request
document.querySelector('button').addEventListener('click', () => {
    fetch(apiUrl, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse the response as JSON
        })
        .then(data => {
            // Handle the response data
            console.log('Response data:', data);
        })
        .catch(error => {
            // Handle any errors that occurred during the request
            console.error('Error:', error);
        });
})

