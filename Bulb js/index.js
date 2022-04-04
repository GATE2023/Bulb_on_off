const img=document.querySelector("img");
document.querySelector(".but1").onclick=function(){
    img.setAttribute("src","bulb_on1.png");
}
document.querySelector(".but2").onclick=function(){
    img.setAttribute("src","bulb_off.png");
}