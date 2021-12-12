// Create variables from id 
var inputText = document.getElementById("input-area");
var submitButton = document.getElementById("submit");
var landing = document.getElementById("ul");
var condition = document.getElementById("condition");

// Function to create liste when the text is submitted
var create = function() {
	var node = document.createElement("li");
	var textnode = document.createTextNode(inputText.value);
	node.appendChild(textnode);
	landing.appendChild(node);
	// Create variable when the checkbox is clicked
	var checkBox = document.createElement("input");
	checkBox.setAttribute("type", "checkbox");
	node.appendChild(checkBox);
	// Create variable and function when clicked button delete 
	var deleteButton = document.createElement("button");
	deleteButton.setAttribute('type', 'button');
	var x = document.createTextNode("Delete");
	deleteButton.appendChild(x);
	node.appendChild(deleteButton);
  // Function delete when on click on delete
	var remove = function() {
		landing.removeChild(node);
	}
  // Function to delete onclick 
	deleteButton.onclick = remove;
	var index = 0;
	var lineThrough = function() {
		index += 1;
		if(index >= 2) {
			index = 0;
		}
		if(index === 1) {
			node.style.textDecoration="line-through";
		}
		if(index === 0) {
			node.style.textDecoration="none";
		}
	}
	checkBox.onchange = lineThrough;
  
	if(inputText.value == '') {
		landing.removeChild(node);
		condition.innerHTML = ("Je suis sûr que vous avez des choses à faire...");
	}
	else if(inputText.value != '') {
		condition.innerHTML = ('C est dans la boîte!');
	}
	inputText.value = '';
	return;
}
// Function when press enter 
function pressEnter(event) {
	var keyCode = event.keyCode;
	if(keyCode == 13) {
		create();
	}
}
// Submit when click
submit.addEventListener("click", create);
inputText.addEventListener("keydown", pressEnter, false);

