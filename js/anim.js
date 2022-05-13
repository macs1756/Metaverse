const anim = document.querySelector("#animeBtn");
const animCard = document.querySelector("#animCard")


anim.addEventListener("click", function(){
	animCard.classList.toggle("animation");	
});