/**
 * 
The fetchDataFromURL function is defined. It takes a URL (url) as an argument and returns a Promise. Inside the Promise constructor, it makes a single HTTP GET request to the specified URL using the fetch API.

Inside the fetch request, there are a few Promise chains:

The first .then() block checks if the response is OK (i.e., the HTTP status code is in the 200-299 range). If it's not OK, it throws an Error to reject the Promise.

The second .then() block parses the response body as JSON using response.json() and resolves the Promise with the parsed data.

The .catch() block handles any errors that occur during the fetch operation, such as network issues or parsing errors. It rejects the Promise with the error.

After defining the fetchDataFromURL function, you provide a sample URL (apiUrl) and then call the function with that URL.

You chain .then() to the result of the fetchDataFromURL(apiUrl) call. If the Promise resolves successfully (i.e., the data is fetched and parsed), it logs a success message along with the fetched data.

You also chain .catch() to handle any errors that may occur during the fetch operation. If the Promise rejects (due to a network error or an issue with the response), it logs an error message.
 */

function fetchDataFromURL(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

// Sample URL
const apiUrl = 'https://api.learn.skuflic.com/users/1';

// Using the promise function to fetch data from the URL
fetchDataFromURL(apiUrl)
    .then((result) => {
        console.log('Data fetched successfully:', result);
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });


// async function fetchAndHandleData() {
//     const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

//     try {
//         const data = await fetchData(apiUrl);
//         console.log('Data:', data);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// fetchAndHandleData();
