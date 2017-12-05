/*function setActive(){
	var object document.getElementById("123");
	object.className = "active";
	//document.offsetTop
}*/
function distanceScrolledMellan(min , max){
	"use strict";
	if (document.body.scrollTop+44 > min && document.body.scrollTop+44 < max)
		{
			return true;
		}else{
			return false;
		}
}
function setActive() {
   "use strict";
	if (document.body.scrollTop+44>document.getElementById("Befolkning").offsetTop && document.body.scrollTop+44<document.getElementById("Energi").offsetTop )
	{
        document.getElementById("befolkningg").className = "active";
    } else {
        document.getElementById("befolkningg").className = " ";
    }
	if (document.body.scrollTop+44>document.getElementById("Energi").offsetTop && document.body.scrollTop+44<document.getElementById("Klimat").offsetTop) 
	{
        document.getElementById("energii").className = "active";
    } else {
        document.getElementById("energii").className = " ";
    }
	if (document.body.scrollTop+44>document.getElementById("Klimat").offsetTop && document.body.scrollTop+44<document.getElementById("Teknik").offsetTop) 
	{
        document.getElementById("klimatt").className = "active";
    } else {
        document.getElementById("klimatt").className = " ";
    }
	if (document.body.scrollTop+44>document.getElementById("Teknik").offsetTop) {
        document.getElementById("teknikk").className = "active";
    } else {
        document.getElementById("teknikk").className = " ";
    }
}
function BrowserDetection() {
    alert("hello");
    if (navigator.userAgent.search("MSIE") > 0) {
        document.getElementsByClassName("frosted-glass").setAttribute("style", "box-shadow: inset 0 0 0 rgba(255,255,255, 0); -webkit-filter: blur(0px); -moz-filter: blur(0px); -o-filter: blur(0px); -ms-filter: blur(0px); filter: blur(0px); background-color: black;");
    }
    //Check if browser is Firefox 
    else if (navigator.userAgent.search("Firefox") > 0) {
        alert("aiodhqwoii");
        document.getElementsByClassName("bef").setAttribute("link href="stylesheet"", "background: url(""); background-color: black;");    
    }
}