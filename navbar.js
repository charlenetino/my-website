/*document.body.onload=function(){
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
}*/

window.onscroll=function(){
    var TOPBAR=document.getElementById("topbar");

    if(document.documentElement.scrollTop>80){
        TOPBAR.style.backgroundColor="white"
        TOPBAR.style.color="black"
        TOPBAR.style.textShadow="none"
    }
    else{
        TOPBAR.style.backgroundColor="transparent"
        TOPBAR.style.color="white"
        TOPBAR.style.textShadow="2px 2px 20px #000000"
    }


}