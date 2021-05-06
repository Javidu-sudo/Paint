var mouseEvent = "null";
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var lastMouseX,lastMouseY;

canvas.addEventListener("mousedown",my_mouse_down)
function my_mouse_down(e){
mouseEvent = "mousedown"
}
canvas.addEventListener("mousemove",my_mouse_move)
function my_mouse_move(e){
    var current_mouse_x = e.clientX-canvas.offsetLeft 
    var current_mouse_y = e.clientY-canvas.offsetTop
    if (mouseEvent=="mousedown"){
     ctx.beginPath();
     ctx.strokeStyle = "black";
     ctx.lineWidth = 1;
     ctx.moveTo(lastMouseX,lastMouseY)
     ctx.lineTo(current_mouse_x,current_mouse_y)
     ctx.stroke()

    } 
    lastMouseX = current_mouse_x
    lastMouseY = current_mouse_y
}
canvas.addEventListener("mouseleave",my_Mouseleave)
function my_Mouseleave(){
    mouseEvent = "mouseleave"
}
canvas.addEventListener("mouseup",my_Mouseup)
function my_Mouseup(){
    mouseEvent = "mouseup"
}
