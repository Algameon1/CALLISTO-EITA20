/*function setActive(){
	var object document.getElementById("123");
	object.className = "active";
	//document.offsetTop
}*/
function distanceScrolledMellan(min , max){
	"use strict";
	if (document.documentElement.scrollTop > min && document.documentElement.scrollTop < max)
		{
			return true;
		}else{
			return false;
		}
}
function myFunction() {
   "use strict";
	if (document.documentElement.scrollTop>document.getElementById("befolkning").offsetTop && document.documentElement.scrollTop<document.getElementById("klimat").offsetTop )
	{
        document.getElementById("Befolkning").className = "active";
    } else {
        document.getElementById("Befolkning").className = " ";
    }
	if (document.documentElement.scrollTop>document.getElementById("klimat").offsetTop && document.documentElement.scrollTop<document.getElementById("energi").offsetTop) 
	{
        document.getElementById("Klimat").className = "active";
    } else {
        document.getElementById("Klimat").className = " ";
    }
	if (document.documentElement.scrollTop>document.getElementById("energi").offsetTop && document.documentElement.scrollTop<document.getElementById("teknik").offsetTop) {
        document.getElementById("Energi").className = "active";
    } else {
        document.getElementById("Energi").className = " ";
    }
	if (document.documentElement.scrollTop>document.getElementById("teknik").offsetTop) {
        document.getElementById("Teknik").className = "active";
    } else {
        document.getElementById("Teknik").className = " ";
    }
}