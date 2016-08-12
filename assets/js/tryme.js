var nystories = document.querySelector("p").offsetTop;
window.onscroll = function() {
  if (window.pageYOffset > 0) {
	var opac = window.pageYOffset / nystories;
	document.body.style.background =
        "linear-gradient(rgba(255, 255, 255, " + opac + "), rgba(255, 255, 255, " + opac + ")), url(times-square-perspective.jpg) no-repeat";
	}
}
