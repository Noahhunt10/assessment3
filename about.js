console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been submited!')
}

function giveComp(evt) {
	alert("You also like cats so you're even cooler!")
}


let form = document.querySelector('#contact');
let img = document.querySelector('img');
form.addEventListener('submit', handleSubmit);
img.addEventListener('mouseover', giveComp);