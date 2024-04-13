window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}


window.addEventListener('load', function () {
  var loadingScreen = document.getElementById('loading-screen');
  var mainContent = document.getElementById('main-content');
  
  // Simulate preloading process (you can replace this with actual preloading)
  setTimeout(function () {
    // Hide loading screen
    loadingScreen.style.display = 'none';
    
    // Show main content
    mainContent.style.display = 'block';
  }, 5000); // 5 seconds delay
});