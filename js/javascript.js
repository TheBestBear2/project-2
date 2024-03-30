

let APIKEY = 'T7170iEKl4A6f6gwIPrkYEavEc7qkv5X';

/*
document.addEventListener('DOMContentLoaded', init);
function init() {
    
    document.getElementById('btnSearch').addEventListener('click', ev=> {
        ev.preventDefault();
        str = document.getElementById('search').value.trim();
        let APIKEY = 'T7170iEKl4A6f6gwIPrkYEavEc7qkv5X';
        let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${str}&limit=5`;
        url = url.concat(str);
        console.log(url);
    });
}
*/

function searchForGiphy() {
    str = document.getElementById('search').value.trim();
    let APIKEY = 'T7170iEKl4A6f6gwIPrkYEavEc7qkv5X';
    let apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${str}&limit=10`;

    console.log(apiUrl);

const options = {
    method: 'GET', 
    headers: {
      'Content-Type': 'application/json', 
     
    },
  };
  fetch(apiUrl, options)
    .then(response => {
      
      if (response.ok) {
        
        return response.json();
      }
      
      throw new Error('Network response was not ok.');
    })
    .then(data => {
      
      console.log('API Response:', data);
    })
    .catch(error => {
      
      console.error('Fetch Error:', error);

    });

}


/*
// Define any additional options such as headers or request method
const options = {
    method: 'GET', // Specify the HTTP method (GET, POST, PUT, DELETE, etc.)
    headers: {
      'Content-Type': 'application/json', // Specify the content type of the request body
      // Add any other headers if needed
    },
  };
  
  // Use the fetch method to make the API call
  fetch(apiUrl, options)
    .then(response => {
      // Check if the response is successful (status code 200-299)
      if (response.ok) {
        // Parse the response body as JSON
        return response.json();
      }
      // If response is not successful, throw an error
      throw new Error('Network response was not ok.');
    })
    .then(data => {
      // Handle the response data
      console.log('API Response:', data);
    })
    .catch(error => {
      // Handle any errors that occur during the fetch request
      console.error('Fetch Error:', error);
    });

}
*/