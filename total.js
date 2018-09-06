
function getReceipt()
{	
	text1 = "";
	text2 = "";
	var grandTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");	
	for (var i =0; i <sizeArray.length; i++){
		if (sizeArray[i].checked) {
			var sizeSelect = sizeArray[i].value;
			text1 = text1+sizeSelect+"<br>";
		}
	}
	if (sizeSelect === "Small"){
		sizeTotal = 6;
		text2 = text2+sizeTotal+"<br>"
	}
	else if (sizeSelect === "Medium"){
		sizeTotal = 10;
		text2 = text2+sizeTotal+"<br>"
	}
	else if (sizeSelect === "Large"){
		sizeTotal = 14;
		text2 = text2+sizeTotal+"<br>"		
	}
	else if (sizeSelect === "Xtra Large"){
		sizeTotal = 16;
		text2 = text2+sizeTotal+"<br>"		
	}	
	grandTotal = sizeTotal;
	getMeat(grandTotal, text1, text2);	
};

function getMeat(grandTotal, text1, text2)
{
	console.log("entered fxn getMeat");
	
	var grandTotal = grandTotal;
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var i = 0; i < meatArray.length; i++){
		if (meatArray[i].checked){
			selectedMeat.push(meatArray[i].value);
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	}
	else{ meatCount = 0;}
	grandTotal += meatTotal;
	// con log
	for (var i = 0; i < selectedMeat.length; i++){
		text1 = text1+selectMeat[i]+"<br>";
		if(meatCount<=1){
			text2 = text2+0+"<br>"
			meatCount -= 1;
		}
		else if(meatCount==2){
			text2 = text2+1+"<br>"
			meatCount -= 1;
		}
		else{
			text2 = text2+1+"<br>"
			meatCount -= 1;
		}
	}
	getVeggie(grandTotal,text1,text2)
};

function getVeggie(grandTotal,text1,text2)
{
	console.log("entered fxn getVeggie");
	
	var grandTotal = grandTotal;
	var veggieTotal = 0;
	var selectedVeggie = [];
	var veggieArray = document.getElementsByClassName("veggies");
	for (var i = 0; i < veggieArray.length; i++){
		if (veggieArray[i].checked){
			selectedVeggie.push(veggieArray[i].value);
		}
	}
	var veggieCount = selectedVeggie.length;
	if (veggieCount > 1) {
		veggieTotal = (veggieCount - 1);
	}
	else{ veggieCount = 0;}
	grandTotal += veggieTotal;
	for (var i = 0; i < selectedVeggie.length; i++){
		text1 = text1+selectedVeggie[i]+"<br>";
		if(veggieCount<=1){
			text2 = text2+0+"<br>"	
			veggieCount -= 1;
		}
		else if(veggieCount==2){
			text2 = text2+1+"<br>"
			veggieCount -= 1;
		}
		else{
			text2 = text2+1+"<br>"
			veggieCount -= 1;
		}
	}
	getCheese(grandTotal,text1,text2)
};

function getCheese(grandTotal,text1,text2)
{
	var cheeseTotal = 0;
	var slectedCheese =[];
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var i=0; i < cheeseArray.length;i++){
		if (cheeseArray[i].checked){
			slectedCheese = cheeseArray[i].value; //slectedCheese works / selectedCheese breaks the program
		}
		if (slectedCheese === "Extra cheese"){
			cheeseTotal = 3;
		}
	}
	text2 = text2+cheeseTotal+"<br>"
	text1 = text1+slectedCheese+"<br>";
	grandTotal += cheeseTotal;
	getSauce(grandTotal,text1,text2);
}

function getSauce(grandTotal,text1,text2) {
	var sauceArray = document.getElementsByClassName("sauce");
	for (var j = 0; j < sauceArray.length; j++) {
		if (sauceArray[j].checked) {
			selectedSauce = sauceArray[j].value;
			text1 = text1 + selectedSauce +"<br>";
		}
	}
	text2 = text2 + 0 + "<br>";
	getCrust(grandTotal,text1,text2)
};

function getCrust(grandTotal,text1,text2)
{
	var crustTotal = 0;
	var selectedCrust;
	var crustArray = document.getElementsByClassName("crust");
	for (var i=0;i<crustArray.length;i++){
		if(crustArray[i].checked){
			selectedCrust = crustArray[i].value;
			text1=text1+selectedCrust+"<br>";
		}
		if(selectedCrust === "Cheese Stuffed"){
			crustTotal = 3;
		}
	}
	grandTotal+=crustTotal;
	text2 = text2 + crustTotal + "<br>";
	document.getElementById("cart").style.opacity=1;
	document.getElementById("showText1").innerHTML=text1;
	document.getElementById("showText2").innerHTML=text2;
	document.getElementById("grandTotal2").innerHTML="<h3>$"+grandTotal+".00"+"</h3>";
};