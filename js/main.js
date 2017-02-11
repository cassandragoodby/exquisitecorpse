function showMusic() {
	$("#music").css("display", "block");
}

var music = document.getElementById("music-note");
music.addEventListener("click", showMusic, false);

// shout out to https://css-tricks.com/snippets/jquery/smooth-scrolling/ for this scrolling help
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 50}, 1000);
        return false;
      }
    }
  });
});