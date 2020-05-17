var stepTwo = document.getElementById('step2');
var stepThree = document.getElementById('step3');
var stepFour = document.getElementById('step4');
var stepFive = document.getElementById('step5');
var stepSix = document.getElementById('step6');
var stepSeven = document.getElementById('step7');

var order = [];

$(document).ready(function() {
	$('.myChatBox').hide();
	$('.bot').on('click', function() {
		$('.myChatBox').toggle();
	});
});

function y1() {
	var msg = document.createElement('h5');
	msg.innerText = 'Select which kind of Pizza';
	stepTwo.appendChild(msg);
	msg.setAttribute('class', 'text-center m-2');

	var veg = document.createElement('button');
	veg.innerText = 'Vegetarian';
	veg.setAttribute('class', 'btn btn-outline-success ml-5 my-2');
	stepTwo.appendChild(veg);

	var nonVeg = document.createElement('button');
	nonVeg.innerText = 'Non Veg';
	nonVeg.setAttribute('class', 'btn btn-outline-danger ml-5 my-2');
	stepTwo.appendChild(nonVeg);

	veg.addEventListener('click', vegCrust);
	nonVeg.addEventListener('click', nonVegCrust);
}

function m1() {}

function who() {}

function vegCrust() {
	console.log('inside veg');

	order.push('Vegetarian');

	var typeV = document.createElement('h5');
	typeV.innerText = 'Select Type of Crust';
	typeV.setAttribute('class', 'text-center my-2');
	stepThree.appendChild(typeV);

	var wheat = document.createElement('button');
	wheat.innerText = 'Wheat';
	wheat.setAttribute('class', 'btn btn-outline-info ml-5 my-2');
	stepThree.appendChild(wheat);

	var thin = document.createElement('button');
	thin.innerText = 'Thin';
	thin.setAttribute('class', 'btn btn-outline-info ml-2 my-2');
	stepThree.appendChild(thin);

	var cheese = document.createElement('button');
	cheese.innerText = 'Cheese Burst';
	cheese.setAttribute('class', 'btn btn-outline-info ml-2 my-2');
	stepThree.appendChild(cheese);

	wheat.addEventListener('click', vegWheat);
	thin.addEventListener('click', vegThin);
	cheese.addEventListener('click', vegCB);
}

function crust() {}

function nonVegCrust() {
	console.log('inside nonveg');

	order.push('Non Veg');

	var typeN = document.createElement('h5');
	typeN.innerText = 'Select Type of Crust';
	typeN.setAttribute('class', 'text-center my-2');
	stepThree.appendChild(typeN);

	var wheat = document.createElement('button');
	wheat.innerText = 'Wheat';
	wheat.setAttribute('class', 'btn btn-outline-info ml-5 my-2');
	stepThree.appendChild(wheat);

	var thin = document.createElement('button');
	thin.innerText = 'Thin';
	thin.setAttribute('class', 'btn btn-outline-info ml-2 my-2');
	stepThree.appendChild(thin);

	var cheese = document.createElement('button');
	cheese.innerText = 'Cheese Burst';
	cheese.setAttribute('class', 'btn btn-outline-info ml-2 my-2');
	stepThree.appendChild(cheese);

	wheat.addEventListener('click', nonVegWheat);
	thin.addEventListener('click', nonVegThin);
	cheese.addEventListener('click', nonVegCB);
}

function vegWheat() {
	order.push('Wheat Crust');
	allVegPizzas();
}
function vegThin() {
	order.push('Thin Crust');
	allVegPizzas();
}
function vegCB() {
	order.push('Chese Burst');
	allVegPizzas();
}

function allVegPizzas() {
	var selV = document.createElement('h5');
	selV.innerText = 'Choose From Our In house Speacials';
	stepFour.appendChild(selV);
	selV.setAttribute('class', 'text-center my-2');

	var veg1 = document.createElement('button');
	veg1.innerText = 'Mexican Green Wave';
	veg1.setAttribute('class', 'btn btn-outline-dark');
	selV.appendChild(veg1);

	var veg2 = document.createElement('button');
	veg2.innerText = 'Peppy Paneer';
	veg2.setAttribute('class', 'btn btn-outline-dark ml-1');
	selV.appendChild(veg2);

	var veg3 = document.createElement('button');
	veg3.innerText = 'Spicy Extravaganza';
	veg3.setAttribute('class', 'btn btn-outline-dark ml-1 mt-1');
	selV.appendChild(veg3);

	var veg4 = document.createElement('button');
	veg4.innerText = "Chef's Special";
	veg4.setAttribute('class', 'btn btn-outline-dark ml-1 mt-1');
	selV.appendChild(veg4);

	veg1.addEventListener('click', function() {
		pizzaSelected();
		order.push(veg1.innerHTML);
		console.log(order);
	});

	veg2.addEventListener('click', function() {
		pizzaSelected();
		order.push(veg2.innerHTML);
		console.log(order);
	});

	veg3.addEventListener('click', function() {
		pizzaSelected();
		order.push(veg3.innerHTML);
		console.log(order);
	});

	veg4.addEventListener('click', function() {
		pizzaSelected();
		order.push(veg4.innerHTML);
		console.log(order);
	});

	extraToppings();
}

function pizzaSelected() {
	var selAdded = document.createElement('h5');
	selAdded.innerHTML = 'Yippie! Pizza Added To Cart!';
	selAdded.setAttribute('class', 'text-success text-center');
	stepFour.appendChild(selAdded);
}

function extraToppings() {
	var top = document.createElement('h5');
	top.innerText = 'Add extra Toppings';
	stepFour.appendChild(top);
	top.setAttribute('class', 'text-center');

	var addRem = document.createElement('p');
	addRem.innerText = 'Click once to ADD, double click to remove';
	stepFour.appendChild(addRem);
	addRem.setAttribute('class', 'text-center');

	var option1 = document.createElement('btn');
	option1.innerText = 'Jalapeno';
	stepFour.appendChild(option1);
	option1.setAttribute('class', ' btn-sm btn-success');

	var option2 = document.createElement('btn');
	option2.innerText = 'Tomato';
	stepFour.appendChild(option2);
	option2.setAttribute('class', ' btn-sm btn-danger ml-1');

	var option3 = document.createElement('btn');
	option3.innerText = 'Onion';
	stepFour.appendChild(option3);
	option3.setAttribute('class', ' btn-sm btn-info ml-1');

	var option4 = document.createElement('btn');
	option4.innerText = 'Paneer';
	stepFour.appendChild(option4);
	option4.setAttribute('class', ' btn-sm btn-light ml-1');

	var option5 = document.createElement('btn');
	option5.innerText = 'Pineapple';
	stepFour.appendChild(option5);
	option5.setAttribute('class', ' btn-sm btn-warning ml-1');

	option1.addEventListener('click', function() {
		toppingSelected();
		order.push(option1.innerHTML);
		console.log(order);
	});

	option2.addEventListener('click', function() {
		toppingSelected();
		order.push(option2.innerHTML);
		console.log(order);
	});

	option3.addEventListener('click', function() {
		toppingSelected();
		order.push(option3.innerHTML);
		console.log(order);
	});

	option4.addEventListener('click', function() {
		toppingSelected();
		order.push(option4.innerHTML);
		console.log(order);
	});

	option5.addEventListener('click', function() {
		toppingSelected();
		order.push(option5.innerHTML);
		console.log(order);
	});

	checkComplete();
}

function toppingSelected() {
	var selTopAdded = document.createElement('h5');
	selTopAdded.innerHTML = '!Toppings Added!';
	selTopAdded.setAttribute('class', 'text-primary text-center');
	stepFour.appendChild(selTopAdded);
}

function checkComplete() {
	var comp = document.createElement('h5');
	comp.innerHTML = 'Is Your order complete';
	comp.setAttribute('class', 'text-center');
	stepFive.appendChild(comp);

	var compY = document.createElement('button');
	compY.setAttribute('class', 'btn btn-lg btn-outline-primary ml-3');
	compY.innerHTML = 'YES';
	stepFive.appendChild(compY);

	var compN = document.createElement('button');
	compN.setAttribute('class', 'btn btn-lg btn-outline-primary ml-2');
	compN.innerHTML = 'NO';
	stepFive.appendChild(compN);

	var viewCurrentOrder = document.createElement('button');
	viewCurrentOrder.innerHTML = 'View Current Order';
	viewCurrentOrder.setAttribute('class', 'btn btn-info ml-1');
	stepFive.appendChild(viewCurrentOrder);

	compY.addEventListener('click', placeOrder);

	// compN.addEventListener("click",) logic
}

function placeOrder() {
	var msgToGetDetails = document.createElement('h5');
	msgToGetDetails.innerHTML = 'Your Cart is Ready! Please fill in your details to Proceed ';
	stepSix.appendChild(msgToGetDetails);
}

function nonVegWheat() {
	order.push('Wheat Crust');
	allNonVegPizzas();
}
function nonVegThin() {
	order.push('Thin Crust');
	allNonVegPizzas();
}
function nonVegCB() {
	order.push('Cheese Burst');
	allNonVegPizzas();
}

function allNonVegPizzas() {
	var selN = document.createElement('h5');
	selN.innerText = 'Choose From Our In house Speacials';
	stepFour.appendChild(selN);
	selN.setAttribute('class', 'text-center my-2');

	var nonVeg1 = document.createElement('button');
	nonVeg1.innerText = 'Barbeque Chicken';
	nonVeg1.setAttribute('class', 'btn btn-outline-dark');
	selN.appendChild(nonVeg1);

	var nonVeg2 = document.createElement('button');
	nonVeg2.innerText = 'Peppy Pepperoni';
	nonVeg2.setAttribute('class', 'btn btn-outline-dark ml-1');
	selN.appendChild(nonVeg2);

	var nonVeg3 = document.createElement('button');
	nonVeg3.innerText = 'Non-Veg Supreme';
	nonVeg3.setAttribute('class', 'btn btn-outline-dark ml-1 mt-1');
	selN.appendChild(nonVeg3);

	var nonVeg4 = document.createElement('button');
	nonVeg4.innerText = "Chef's Special";
	nonVeg4.setAttribute('class', 'btn btn-outline-dark ml-1 mt-1');
	selN.appendChild(nonVeg4);

	nonVeg1.addEventListener('click', function() {
		pizzaSelected();
		order.push(nonVeg1.innerHTML);
		console.log(order);
	});

	nonVeg2.addEventListener('click', function() {
		pizzaSelected();
		order.push(nonVeg2.innerHTML);
		console.log(order);
	});

	nonVeg3.addEventListener('click', function() {
		pizzaSelected();
		order.push(nonVeg3.innerHTML);
		console.log(order);
	});

	nonVeg4.addEventListener('click', function() {
		pizzaSelected();
		order.push(nonVeg4.innerHTML);
		console.log(order);
	});

	extraToppings();
}
