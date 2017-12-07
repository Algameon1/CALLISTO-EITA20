function setActive() { //Script som kollar hur långt användaren har scrollat på sidan. och om användaren har scrollat in på det avsnittet.
   "use strict";
	if (document.body.scrollTop+44>document.getElementById("bef").offsetTop &&  document.body.scrollTop+44<document.getElementById("ene").offsetTop ) //mer än befolkning mindre än energi
	{
        document.getElementById("befolkningg").className = "active";
    } else {
        document.getElementById("befolkningg").className = " ";
    }
	if (document.body.scrollTop+44>document.getElementById("ene").offsetTop && document.body.scrollTop+44<document.getElementById("kli").offsetTop) //Mer än energi mindre än klimat
	{
        document.getElementById("energii").className = "active";
    } else {
        document.getElementById("energii").className = " ";
    }
	if (document.body.scrollTop+44>document.getElementById("kli").offsetTop && document.body.scrollTop+44<document.getElementById("tek").offsetTop) //Mer än klimat mindre än teknik
	{
        document.getElementById("klimatt").className = "active";
    } else {
        document.getElementById("klimatt").className = " ";
    }
	if (document.body.scrollTop+44>document.getElementById("tek").offsetTop)//Mer än klimat
	{
        document.getElementById("teknikk").className = "active";
    } else {
        document.getElementById("teknikk").className = " ";
    }
}