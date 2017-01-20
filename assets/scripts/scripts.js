var video = document.querySelector("#webcam");
var loading = document.querySelector("#loading-processing");
var stepsProcess = document.querySelectorAll(".step-of-process");
var stepsGeneral = document.querySelectorAll(".step");


stepsGeneral.forEach(function(step){
   step.onmouseover = function(){
      step.children[0].style.visibility = "visible";
      step.children[1].style.visibility = "hidden";
   };
   step.onmouseout = function(){
      step.children[0].style.visibility = "hidden";
      step.children[1].style.visibility = "visible";
   };
});

(function waitNextStep(currentStep) {
   if(currentStep < stepsProcess.length - 1) {
      stepsProcess[currentStep].style.display = "block";
      loading.innerHTML = parseInt(Math.floor((currentStep / stepsProcess.length) * 100)) + ' %';
      setTimeout(function() {
         stepsProcess[currentStep].style.display = "none";
         waitNextStep(currentStep+1);
      }, 2000);
   } else if(currentStep < stepsProcess.length) {
      stepsProcess[currentStep].style.display = "block";
      loading.innerHTML = parseInt(Math.floor((currentStep / stepsProcess.length) * 100)) + ' %';
      setTimeout(function() {
         window.location.href = "step-result.html";
      }, 2000);
   }
})(0);