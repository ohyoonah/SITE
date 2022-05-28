/*var slides = document.querySelectorAll('#slides > img');
var prev = document.getElementById('prev');
var next = document.getElementById('next');

var current = 0; //슬라이드 번호를 저장할 인덱스 변수 초깃값 설정

showSlides(current);
prev.onclick = prevSlide;
next.onclick = nextSlide;

function showSlides(n) {
  for(var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // 모든 이미지를 화면에서 감춤
  }
  slides[n].style.display = "block"; // n번째 이미지만 화면에 표시
}

function prevSlide() {
  if(current > 0) current -= 1; // current값이 0보다 크면 이전 위치로
  else current = slides.length - 1;
    showSlides(current);
}

function nextSlide() {
  if(current < slides.length - 1) current += 1; // current값이 2보다 작으면 다음 위치로
  else current = 0;
    showSlides(current);
}*/

var current = 0; // 이미지 위치를 나타내는 변수
showSlides(); // 기본 첫 번째 이미지

function showSlides() {
  var slides = document.querySelectorAll("#slides > img");
  for(let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  current++; // 다음 이미지로 이동
  if(current > slides.length)
    current = 1;
  slides[current - 1].style.display = "block";
  setTimeout(showSlides, 2000);
}