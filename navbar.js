document.body.onload=function(){
    var JECLICK=document.getElementById("JECLICK");
    var JERECLICK=document.getElementById("JERECLICK");
    var LANAV=document.getElementById("LANAV");
}
JECLICK.onclick = function(){
    LANAV.style.transform="translate(0)";
    JECLICK.style.transform="translate(-500px)";
}
JERECLICK.onclick = function(){
    LANAV.style.transform="translate(-500px)";
    JECLICK.style.transform="translate(0)";
}
