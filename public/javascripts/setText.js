$(document).ready(function(){
// jQuery methods go here...
$("#size").hide();

$("#btn-get-size").click(function(){
  $("#size").fadeToggle(500);
});

});

function setText() {
  var a = 'new text has been set!';
  document.getElementById('text').innerHTML = a;
}

function resetText() {
  var data = 'text';
   document.getElementById('text').innerHTML = data;

}

function resize() {
  var screenHeight = screen.height;
  var screenWidth = screen.width;
  var obj = document.getElementById("size");

  obj.innerHTML = "Height: " + screenHeight + "<br>Width: " + screenWidth;

}
