let header = document.querySelector("header");
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    header.classList.add("sticky");
  }else {
    header.classList.remove("sticky");
  }
}

      $(".slider").owlCarousel({
        autoplayTimeout: 2000, //2000ms = 2s;
        autoplayHoverPause: true,
      });

      //Share button on BeFooter section
      function copyLink() {
        var copyText = window.location.href;
        navigator.clipboard.writeText(copyText);
        alert("Link copied to clipboard: " + copyText);
      }