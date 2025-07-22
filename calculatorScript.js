
let input = document.getElementById("box1");
let buttons = document.querySelectorAll("button");
let string = "";

let array1 = Array.from(buttons);
array1.forEach(button => {
	button.addEventListener('click', (e) => {
		if(e.target.innerHTML == "=") {
			string = eval(string);
			input.value = string;
		}
		else if(e.target.innerHTML == "Clear"){
			string = "";
			input.value = string;
		}
		else{
			string += e.target.innerHTML;
			input.value = string;
		}
	})
})