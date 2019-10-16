function loopCountries(){
	sessionStorage.setItem("countries", JSON.stringify(countries));

	const countryStr = sessionStorage.getItem("countries");
	const countryJson = JSON.parse(countryStr); 

	let list = document.getElementsByClassName("instructions")[0];
	list.style.listStyle = "decimal";
	list.innerHTML = "";

	//make a deep copy so I can remove countries
	let randomArray = JSON.parse(JSON.stringify(countryJson));

	for(i = 0; i < 50; i++){
		let randomIndex = Math.floor(Math.random()*randomArray.length)
		let countryNode = document.createElement("LI");
		let countryName = document.createTextNode(randomArray[randomIndex].name);
		randomArray.splice(randomIndex, 1);
		countryNode.appendChild(countryName);
		list.appendChild(countryNode);
	}
}

document.getElementsByClassName("button")[0].addEventListener("click", loopCountries)

//get node js!!