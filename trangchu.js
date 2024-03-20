/* ----------chuyển ảnh đầu------------- */
var slideIndex = 0;
showSlides();

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000);
}
/* 
<!--     ------------------- --> */

 function changeVideo(videoUrl) {
     document.getElementById('myFrame').src = videoUrl; }

/* --------------------------------------------------------- */

// Lấy tất cả các thẻ a
var links = document.getElementsByClassName('myLink');

// Lặp qua từng thẻ a
for (var i = 0; i < links.length; i++) {
    // Thêm sự kiện click cho từng thẻ a
    links[i].addEventListener('click', function() {
        // Lấy iframe và div
        var iframe = document.getElementsByClassName('niframe2')[0];
        var div = document.getElementsByClassName('myDiv')[0];

        // Ẩn div và hiển thị iframe
        div.style.display = 'none';
        iframe.style.display = 'block';
    });
}
  
/* <!--  ------------- nut day trang len dau---------- --> */

 window.onscroll = function() {scrollFunction()};
 function scrollFunction() {
  
 if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
 document.getElementById("myBtn").style.display = "block";
 } else {
 document.getElementById("myBtn").style.display = "none";
 }
 }
  
 document.getElementById('myBtn').addEventListener("click", function(){
 document.body.scrollTop = 0;
 document.documentElement.scrollTop = 0;
 });
/* --------------------------------------------- */

var slideIndex = 0;
showImageSlides();

function showImageSlides() {
  var i;
  var slides = document.getElementsByClassName("myImageSlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showImageSlides, 5000); 
}


/* ------------------------------------------ */
function changeSrc(url) {
    document.getElementById('myboxframe').src = url;
}
/* ---------------------------- *//* 
document.getElementById('playButton').addEventListener('click', function() {
  var video = document.getElementById('myVideo');
  if (video.paused) {
    video.play();
    this.innerHTML = "Pause";
  } else {
    video.pause();
    this.innerHTML = "Play";
  }
}); */
/* -----------------chuyen _tab----------------- */
document.getElementById('btn-tt-kh').addEventListener('click', function () {
  document.getElementById('tt-kh-content').style.display = 'block';
  document.getElementById('tainguyen-content').style.display = 'none';
  document.getElementById('tienich-content').style.display = 'none';
});

document.getElementById('btn-tainguyen').addEventListener('click', function () {
  document.getElementById('tt-kh-content').style.display = 'none';
  document.getElementById('tainguyen-content').style.display = 'block';
  document.getElementById('tienich-content').style.display = 'none';
});

document.getElementById('btn-tienich').addEventListener('click', function () {
  document.getElementById('tt-kh-content').style.display = 'none';
  document.getElementById('tainguyen-content').style.display = 'none';
  document.getElementById('tienich-content').style.display = 'block';
});