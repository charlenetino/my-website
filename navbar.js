document.body.onload=function(){
    var comming=document.getElementById("comming");
    var soon=document.getElementById("soon");
    var comming2=document.getElementById("comming2");
    var soon2=document.getElementById("soon2");
}
function timereturn() {
    soon.style.transform="translateY(200px)";
}
function timereturn2() {
    soon2.style.transform="translateY(200px)";
}

comming.onclick = function(){
    soon.style.transform="translateY(0)";
    setTimeout(timereturn, 5000);
}

comming2.onclick = function(){
    soon2.style.transform="translateY(0)";
    setTimeout(timereturn2, 5000);
}

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