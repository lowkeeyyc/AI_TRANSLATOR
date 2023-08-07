// Function to handle network error
function handleNetworkError() {
    const networkError = document.getElementById('network-error');
    const retryButton = document.getElementById('retry-button');
    
    // Check if the browser is online
    if (!navigator.onLine) {
      // Display the network error message
      networkError.style.display = 'block';
    }
    
    // Retry button click event listener
    retryButton.addEventListener('click', function() {
      // Hide the network error message
      networkError.style.display = 'none';
      
      // Retry the operation after a fixed delay
        function retryOperation() {
            setTimeout(() => {
            // Retry the operation here
             }, 3000); // Retry after 3 seconds
        }
  
    });
  }
  
  // Call the handleNetworkError function when the page loads
  window.addEventListener('load', handleNetworkError);
  