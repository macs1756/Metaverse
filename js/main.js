
console.log("hallo world");

const burger = document.querySelector("#burger");
const burgerList = document.querySelector("#burger_list");
const burgerNone = document.querySelector("#burger_none");

burger.addEventListener("click", function(){
		burgerList.classList.remove("trans");
});

burgerNone.addEventListener("click", function(){
	burger_list.classList.add("trans");
});

