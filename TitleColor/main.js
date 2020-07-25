setInterval(function(){
	document.getElementById("para").style.color = "red";
	document.getElementById("para").style.backgroundColor = "black";
	setTimeout(function(){
	document.getElementById("para").style.color = "white";
	document.getElementById("para").style.backgroundColor = "red";
	setTimeout(function(){
	document.getElementById("para").style.color = "lightgreen";
	document.getElementById("para").style.backgroundColor = "grey";
	setTimeout(function(){
	document.getElementById("para").style.color = "black";
	document.getElementById("para").style.backgroundColor = "blue";	
	},2000);
	},2000);
	},2000);
},8000);

