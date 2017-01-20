var video = document.querySelector("#webcam");
var loading = document.querySelector("#loading-processing");
var steps = document.querySelectorAll(".step-of-process");

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

if (navigator.getUserMedia) {
   navigator.getUserMedia({video: true}, handleVideo, videoError);
}

function handleVideo(stream) {
   video.src = window.URL.createObjectURL(stream);
}

function videoError(e) {
   console.log(e);
}

(function waitNextStep(currentStep) {
   if(currentStep < steps.length - 1) {
      steps[currentStep].style.display = "block";
      loading.innerHTML = parseInt(Math.floor((currentStep / steps.length) * 100)) + ' %';
      setTimeout(function() {
         steps[currentStep].style.display = "none";
         waitNextStep(currentStep+1);
      }, 2000);
   } else if(currentStep < steps.length) {
      steps[currentStep].style.display = "block";
      loading.innerHTML = parseInt(Math.floor((currentStep / steps.length) * 100)) + ' %';
      setTimeout(function() {
         window.location.href = "step-result.html";
      }, 2000);
   }
})(0);