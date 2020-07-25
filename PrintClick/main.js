var count = 0
$(document).ready(function(){
  $("html").click(function(){
    count+=1;
    if(count==1)
		console.log("You clicked " +count +" time on the webpage.");
	else
		console.log("You clicked " +count +" times on the webpage.");
  });
});


