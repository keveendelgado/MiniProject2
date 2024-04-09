window.onload = function () {
    document.getElementById("copyright").innerHTML 
    = new Date().getFullYear();
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    document.getElementById("cornerBtn").style.display = "block";
  } else {
    document.getElementById("cornerBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}