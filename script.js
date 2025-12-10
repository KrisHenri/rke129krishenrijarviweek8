document.addEventListener("DOMContentLoaded", function () {
  const imageElement = document.getElementById("profile-photo");

 
  if (!imageElement) return;

  
  const images = [
    "img/sethrogen.png",
    "img/sethrogen2.png"
   
  ];

  let currentIndex = 0;
  
  imageElement.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex];
  });
});
