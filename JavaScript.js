/*function setActive(){
	var object document.getElementById("123");
	object.className = "active";
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
	if (distanceScrolledMellan(1,100))
	{
        document.getElementById("Befolkning").className = "active";
    } else {
        document.getElementById("Befolkning").className = " ";
    }
	if (distanceScrolledMellan(100,200)) 
	{
        document.getElementById("Klimat").className = "active";
    } else {
        document.getElementById("Klimat").className = " ";
    }
	if (distanceScrolledMellan(200,300)) {
        document.getElementById("Energi").className = "active";
    } else {
        document.getElementById("Energi").className = " ";
    }
	if (distanceScrolledMellan(300,400)) {
        document.getElementById("Teknik").className = "active";
    } else {
        document.getElementById("Teknik").className = " ";
    }
}