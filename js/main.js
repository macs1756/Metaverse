
console.log("hallo world");

const burger = document.querySelector("#burger");
const burger_list = document.querySelector("#burger_list");
const burger_none = document.querySelector("#burger_none");

burger.addEventListener("click", function(){
		burger_list.classList.remove("trans");
});

burger_none.addEventListener("click", function(){
	burger_list.classList.add("trans");
});

