function init(){

    var styles = ["animate4", "animate1", "animate2", "animate3"];
    var scales = ["scale1", "scale2", "scale3"];
    var opacities = ["opacity1", "opacity1", "opacity1", "opacity2", "opacity2", "opacity3"];
  
    function rand(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
  
    var stars = "";
    var count = 300;
    var widthWindow = window.innerWidth;
    var heightWindow = window.innerHeight;
  
    for (var i = 0; i < count; i++) {
      stars += "<span class='star " + styles[rand(0, 4)] + " " + opacities[rand(0, 6)] + " "
      + scales[rand(0, 3)] + "' style='animation-delay: ." + rand(0, 9)+ "s; left: "
      + rand(0, widthWindow) + "px; top: " + rand(0, heightWindow) + "px;'></span>";
    }
  
    document.querySelector(".sky").innerHTML = stars;
  
    }
  
  window.onload = init;
  window.onresize = init;
  
  