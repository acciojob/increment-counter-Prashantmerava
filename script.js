//your JS code here. If required.
let counter=0;

const count=document.getElementById("counter");
const incrementBtn=document.getElementById("incrementBtn");

incrementBtn.addEventListener("click",function ()
							  {
								 alert(counter);
								  counter++;
								  count.innerHTML=counter;
							
							  });