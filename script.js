// Get the header element
let header = document.querySelector("header");

// Add an event listener for the scroll event on the window object
window.onscroll = function() {
  // Check if the vertical scroll position is greater than 20px
  if(document.documentElement.scrollTop > 20){
    // If so, add the "sticky" class to the header element
    header.classList.add("sticky");
  }else {
    // Otherwise, remove the "sticky" class from the header element
    header.classList.remove("sticky");
  }
}

// Initialize the Owl Carousel plugin on the element with class "slider"
$(".slider").owlCarousel({
  // Set the autoplay timeout to 2000ms (2 seconds)
  autoplayTimeout: 2000,
  // Enable the autoplay hover pause feature
  autoplayHoverPause: true,
  items: 4,

});

// Define a function called "copyLink" that copies the current URL to the clipboard
function copyLink() {
  // Get the current URL
  var copyText = window.location.href;
  // Use the navigator.clipboard API to write the URL to the clipboard
  navigator.clipboard.writeText(copyText);
  // Display an alert to confirm that the URL has been copied to the clipboard
  alert("Link copied to clipboard: " + copyText);
}