var stepTwo = document.getElementById('step2');
var stepThree = document.getElementById('step3');
var stepFour = document.getElementById('step4');
var stepFive = document.getElementById('step5');
var stepSix = document.getElementById('step6');
var stepSeven = document.getElementById('step7');
var currOrder = document.getElementById('currOrder');

var finalStep = document.getElementById('finalStep');

var msg = document.getElementById('userQuestion');

var edit = document.getElementById('edit');
var lastStep = document.getElementById('lastStep');

var qty = 0,
	flag = 0,
	extras = 0,
	final = 0,
	eQt = 0,
	nam = 0,
	stay = 0,
	contact = 0;
var order = [];
var tops = [],
	quant = [];
var orderObj = {};
var cart = [];

var chatObj = {
	Hi: 'Hi there!, Would you like to order a Pizza ?',
	'How are you': "I'm Good. Thanks for asking. Would you like to order a Pizza ?",
	Yes: yes1,
	yes: yes1,
	wassup: 'We have the best pizzas in town. Would you like to Order ?'
};
// var data = document.getElementById("chatterBox").value
function chatWithBot() {
	var data1 = document.getElementById('chatterBox').value;
	document.getElementById('chatterBox').value = '';

	if (nam == 1 && stay == 1 && contact == 1) {
		if (data1 != null) placed();
	} else if (nam == 1 && stay == 1) {
		if (data1 != null) contact = 1;
		userMob();
	} else if (nam == 1) {
		if (data1 != null) stay = 1;
		userAddress();
	} else if (flag == 1 && eQt == 0 && nam == 0) {
		if (data1 > 0 && data1 < 100 && data1 % 1 == 0) {
			var quantMsg = document.createElement('p');
			quantMsg.innerHTML += data1 + '<br>';
			quantMsg.setAttribute('class', 'text-center text-info');
			stepThree.appendChild(quantMsg);
			console.log(data1);
			quant.push(data1);
			qty = data1;
			console.log(qty);
			order.push(qty);
			orderObj.quant = qty;

			crust();
			msg.innerText = '';
		} else {
			msg.innerHTML += 'The No of pizzas can be between 1 and 99' + '<br>';
		}
	} else if (eQt == 1) {
		if (data1 > 0 && data1 < 100 && data1 % 1 == 0) {
			var quantMsg = document.createElement('p');
			quantMsg.innerHTML += data1 + '<br>';
			quantMsg.setAttribute('class', 'text-center text-info');
			edit.appendChild(quantMsg);
			console.log(data1);
			qty = data1;
			quant.push(data1);
			console.log(qty);
			order.push(qty);
			orderObj.quant = qty;

			// crust()
			msg.innerText = '';
			viewSummary();
		} else {
			msg.innerHTML += 'The No of pizzas can be between 1 and 99' + '<br>';
		}
	} else {
		msg.innerText = data1;
		if (data1 in chatObj) {
			document.getElementById('botResponse').innerHTML = chatObj[data1] + '<br>';
		} else {
			document.getElementById('botResponse').innerHTML =
				"I'm Sorry I dont understand! Would you like to order a Pizza ?";
		}
	}
}

$(document).ready(function() {
	$('.toggleShowHide').hide();

	$('.bot').on('click', function() {
		$('.toggleShowHide').toggle();
	});
});

function yes1() {
	var msg = document.createElement('h5');
	msg.innerText = 'Select which kind of Pizza';
	stepTwo.appendChild(msg);
	msg.setAttribute('class', 'text-center my-2 ');

	var veg = document.createElement('button');
	veg.innerText = 'Vegetarian';
	veg.setAttribute('class', 'btn btn-outline-success ml-5 my-2');
	stepTwo.appendChild(veg);

	var nonVeg = document.createElement('button');
	nonVeg.innerText = 'Non Veg';
	nonVeg.setAttribute('class', 'btn btn-outline-danger ml-5 my-2');
	stepTwo.appendChild(nonVeg);

	veg.addEventListener('click', allVegPizzas);
	nonVeg.addEventListener('click', allNonVegPizzas);
}

function mayBe1() {}

function who() {}

function crust() {
	var typeN = document.createElement('h5');
	typeN.innerText = 'Select Type of Crust';
	typeN.setAttribute('class', 'text-center my-2');
	stepFour.appendChild(typeN);

	var wheat = document.createElement('button');
	wheat.innerText = 'Wheat';
	wheat.setAttribute('class', 'btn btn-outline-info ml-5 my-2');
	stepFour.appendChild(wheat);

	var thin = document.createElement('button');
	thin.innerText = 'Thin';
	thin.setAttribute('class', 'btn btn-outline-info ml-2 my-2');
	stepFour.appendChild(thin);

	var cheese = document.createElement('button');
	cheese.innerText = 'Cheese Burst';
	cheese.setAttribute('class', 'btn btn-outline-info ml-2 my-2');
	stepFour.appendChild(cheese);

	wheat.addEventListener('click', Wheat);
	thin.addEventListener('click', Thin);
	cheese.addEventListener('click', CB);
}

function Wheat() {
	order.push('Wheat Crust');
	orderObj.crust = 'Wheat Crust';
	extraToppings();
}
function Thin() {
	order.push('Thin Crust');
	orderObj.crust = 'Thin Crust';
	extraToppings();
}
function CB() {
	order.push('Chese Burst');
	orderObj.crust = 'Cheese Burst';
	extraToppings();
}

function allVegPizzas() {
	console.log('inside veg');

	order.push('Vegetarian');
	orderObj.kind = 'Vegetarian';

	var selV = document.createElement('h5');
	selV.innerText = 'Choose From Our In house Speacials';
	stepThree.appendChild(selV);
	selV.setAttribute('class', 'text-center my-4 ');

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
		flag = 1;

		$(veg2).hide();
		$(veg3).hide();
		$(veg4).hide();

		howManyPizzas();

		// chatWithBotQty()

		// pizzaSelected();
		order.push(veg1.innerHTML);
		orderObj.pizza = veg1.innerHTML;
		console.log(order);
	});

	veg2.addEventListener('click', function() {
		// pizzaSelected();
		flag = 1;

		$(veg1).hide();
		$(veg3).hide();
		$(veg4).hide();

		howManyPizzas();
		order.push(veg2.innerHTML);
		orderObj.pizza = veg2.innerHTML;
		console.log(order);
	});

	veg3.addEventListener('click', function() {
		// pizzaSelected();
		flag = 1;

		$(veg2).hide();
		$(veg1).hide();
		$(veg4).hide();

		howManyPizzas();

		order.push(veg3.innerHTML);
		orderObj.pizza = veg3.innerHTML;
		console.log(order);
	});

	veg4.addEventListener('click', function() {
		// pizzaSelected();
		flag = 1;

		$(veg2).hide();
		$(veg3).hide();
		$(veg1).hide();

		howManyPizzas();
		order.push(veg4.innerHTML);
		orderObj.pizza = veg4.innerHTML;
		console.log(order);
	});
}

function howManyPizzas() {
	var msgQty = document.createElement('h5');
	msgQty.innerHTML = 'Please Key in the Quantity!';
	msgQty.setAttribute('class', 'text-success text-center my-2 ');

	if (eQt == 1) {
		edit.appendChild(msgQty);
	} else {
		stepThree.appendChild(msgQty);
	}
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
		orderObj.tops = option1.innerHTML;
		tops.push(option1.innerHTML);
		console.log(order);
	});

	option2.addEventListener('click', function() {
		toppingSelected();
		order.push(option2.innerHTML);
		orderObj.tops = option2.innerHTML;
		tops.push(option2.innerHTML);
		console.log(order);
	});

	option3.addEventListener('click', function() {
		toppingSelected();
		order.push(option3.innerHTML);
		orderObj.tops = option3.innerHTML;
		tops.push(option3.innerHTML);
		console.log(order);
	});

	option4.addEventListener('click', function() {
		toppingSelected();
		order.push(option4.innerHTML);
		orderObj.tops = option4.innerHTML;
		tops.push(option4.innerHTML);
		console.log(order);
	});

	option5.addEventListener('click', function() {
		toppingSelected();
		order.push(option5.innerHTML);
		orderObj.tops = option5.innerHTML;
		console.log(order);
		tops.push(option5.innerHTML);
	});

	checkComplete();
}

function toppingSelected() {
	extras = 1;
	var selTopAdded = document.createElement('h5');
	selTopAdded.innerHTML = '!Toppings Added!';
	selTopAdded.setAttribute('class', 'text-primary text-center my-2 ');
	stepFour.appendChild(selTopAdded);
}

function checkComplete() {
	var comp = document.createElement('h5');
	comp.innerHTML = 'Is Your order complete';
	comp.setAttribute('class', 'text-center my-2 ');
	stepFive.appendChild(comp);

	var compY = document.createElement('button');
	compY.setAttribute('class', 'btn btn-lg btn-outline-primary offset-4');
	compY.innerHTML = 'YES';
	stepFive.appendChild(compY);

	var compN = document.createElement('button');
	compN.setAttribute('class', 'btn btn-lg btn-outline-primary ml-2');
	compN.innerHTML = 'NO';
	stepFive.appendChild(compN);

	compY.addEventListener('click', placeOrder);

	compN.addEventListener('click', addAnotherPizza);
}

function allNonVegPizzas() {
	console.log('inside nonveg');

	order.push('Non Veg');
	orderObj.kind = 'Non-Veg';

	var selN = document.createElement('h5');
	selN.innerText = 'Choose From Our In house Speacials';
	stepThree.appendChild(selN);
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
	nonVeg4.innerText = 'Tandoori Chicken';
	nonVeg4.setAttribute('class', 'btn btn-outline-dark ml-1 mt-1');
	selN.appendChild(nonVeg4);

	nonVeg1.addEventListener('click', function() {
		// pizzaSelected();

		flag = 1;

		$(nonVeg2).hide();
		$(nonVeg3).hide();
		$(nonVeg4).hide();

		howManyPizzas();

		order.push(nonVeg1.innerHTML);
		orderObj.pizza = nonVeg1.innerHTML;
		console.log(order);
	});

	nonVeg2.addEventListener('click', function() {
		// pizzaSelected();
		flag = 1;

		$(nonVeg1).hide();
		$(nonVeg3).hide();
		$(nonVeg4).hide();

		howManyPizzas();

		order.push(nonVeg2.innerHTML);
		orderObj.pizza = nonVeg2.innerHTML;
		console.log(order);
	});

	nonVeg3.addEventListener('click', function() {
		// pizzaSelected();
		flag = 1;

		$(nonVeg2).hide();
		$(nonVeg1).hide();
		$(nonVeg4).hide();

		howManyPizzas();

		order.push(nonVeg3.innerHTML);
		orderObj.pizza = nonVeg3.innerHTML;
		console.log(order);
	});

	nonVeg4.addEventListener('click', function() {
		// pizzaSelected();
		flag = 1;

		$(nonVeg2).hide();
		$(nonVeg3).hide();
		$(nonVeg1).hide();

		howManyPizzas();

		order.push(nonVeg4.innerHTML);
		orderObj.pizza = nonVeg4.innerHTML;
		console.log(order);
	});
}

function addAnotherPizza() {
	final = 0;
	viewSummary();

	stepTwo.innerHTML = '';
	stepThree.innerHTML = '';
	stepFour.innerHTML = '';
	stepFive.innerHTML = '';
	stepSix.innerHTML = '';

	yes1();
}

function placeOrder() {
	final = 1;
	var msgToGetDetails = document.createElement('h5');
	msgToGetDetails.innerHTML = 'Your Cart is Ready!';
	stepSix.appendChild(msgToGetDetails);
	msgToGetDetails.setAttribute('class', 'my-2 text-center');
	viewSummary();
}

function viewSummary() {
	if (eQt == 0) {
		cart.push(orderObj);
	}
	console.log(cart);

	var table = document.createElement('table');
	var tHead = document.createElement('thead');
	table.appendChild(tHead);

	var thRow = document.createElement('tr');
	tHead.appendChild(thRow);

	var td1 = document.createElement('td');
	td1.innerText = 'Qty';
	thRow.appendChild(td1);

	var td2 = document.createElement('td');
	td2.innerText = 'Pizza';
	thRow.appendChild(td2);

	var td3 = document.createElement('td');
	td3.innerText = 'Crust';
	thRow.appendChild(td3);

	var td4 = document.createElement('td');
	td4.innerText = 'Toppings';
	thRow.appendChild(td4);

	var tbody = document.createElement('tbody');
	table.appendChild(tbody);

	var tRow = document.createElement('tr');
	tbody.appendChild(tRow);

	var tCol1 = document.createElement('td');
	var tCol2 = document.createElement('td');
	var tCol3 = document.createElement('td');
	var tCol4 = document.createElement('td');
	var tCol5 = document.createElement('td');
	var tCol6 = document.createElement('td');
	var tCol7 = document.createElement('td');
	var tCol8 = document.createElement('td');

	tCol1.innerText = quant[quant.length - 1];
	cart.map((e) => {
		tCol2.innerHTML = e.pizza;
		if (e.crust == null) {
			tCol3.innerHTML = 'Wheat';
		} else {
			tCol3.innerHTML = e.crust;
		}
	});
	if (extras == 0 && eQt == 0) {
		tCol4.innerHTML = '';
	} else {
		if (tops.length > 0) {
			tCol4.innerHTML = tops[0];
			// tops.shift()
		}

		if (tops.length > 1) {
			tCol5.innerHTML = tops[1];
			// tops.shift()
		}

		if (tops.length > 2) {
			tCol6.innerHTML = tops[2];
			// tops.shift()
		}

		if (tops.length > 3) {
			tCol7.innerHTML = tops[3];
			// tops.shift()
		}

		if (tops.length > 4) {
			tCol8.innerHTML = tops[4];
			// tops.shift()
		}
	}
	console.log(tCol2, tCol3, tCol4);
	tRow.appendChild(tCol1);
	tRow.appendChild(tCol2);
	tRow.appendChild(tCol3);
	tRow.appendChild(tCol4);

	if (tCol5) tRow.appendChild(tCol5);
	if (tCol6) tRow.appendChild(tCol6);
	if (tCol7) tRow.appendChild(tCol7);
	if (tCol8) tRow.appendChild(tCol8);

	tHead.setAttribute('class', 'border border-info rounded bg-dark text-white');
	tbody.setAttribute('class', 'border border-info rounded bg-light');

	if (eQt == 0) finalStep.appendChild(table);
	else edit.appendChild(table);

	if (eQt == 0) {
		orderObj = {};
		while (tops.length > 0) {
			tops.pop();
		}
		// editOrder()
	}

	eQt = 0;
	editOrder();
}

function editOrder() {
	var editNow = document.createElement('button');
	editNow.innerHTML = 'Edit Order';
	editNow.setAttribute('class', 'btn btn-sm btn-success mt-2 offset-3');
	edit.appendChild(editNow);

	editNow.addEventListener('click', editFunctionality);

	var go = document.createElement('button');
	go.innerHTML = 'Place Order';
	go.setAttribute('class', 'btn btn-warning btn-sm mt-2 ml-2');
	edit.appendChild(go);

	go.addEventListener('click', setOrder);
}

function editFunctionality() {
	var editQty = document.createElement('button');
	editQty.innerHTML = 'Edit Quantity';
	editQty.setAttribute('class', 'btn btn-sm btn-secondary mt-2 ml-4');
	edit.appendChild(editQty);

	editQty.addEventListener('click', function() {
		console.log('Editing the Qty...');
		eQt = 1;
		howManyPizzas();
	});

	var editPizza = document.createElement('button');
	editPizza.innerHTML = 'Edit Pizza';
	editPizza.setAttribute('class', 'btn btn-sm btn-secondary mt-2 ml-3');
	edit.appendChild(editPizza);

	var editTop = document.createElement('button');
	editTop.innerHTML = 'Edit Toppings';
	editTop.setAttribute('class', 'btn btn-sm btn-secondary mt-2 ml-3');
	edit.appendChild(editTop);

	var editCrust = document.createElement('button');
	editCrust.innerHTML = 'Edit Crust';
	editCrust.setAttribute('class', 'btn btn-sm btn-secondary mt-2 offset-5');
	edit.appendChild(editCrust);
}

function setOrder() {
	userName();
}

userName = () => {
	nam = 1;
	var orderMsg1 = document.createElement('h5');
	orderMsg1.setAttribute('class', 'text-center text-primary');
	orderMsg1.textContent = 'Please enter Your Name';
	lastStep.appendChild(orderMsg1);
};
userAddress = () => {
	var orderMsg2 = document.createElement('h5');
	orderMsg2.setAttribute('class', 'text-center text-primary');
	orderMsg2.textContent = 'Please enter Your Address';
	lastStep.appendChild(orderMsg2);
};
userMob = () => {
	var orderMsg3 = document.createElement('h5');
	orderMsg3.setAttribute('class', 'text-center text-primary');
	orderMsg3.textContent = 'Please enter Your Mobile No.';
	lastStep.appendChild(orderMsg3);
};

placed = () => {
	var finalMsg = document.createElement('h3');
	finalMsg.setAttribute('class', 'text-center font-weight-bold text-success');
	finalMsg.textContent = 'Your order has been Placed!!';
	lastStep.appendChild(finalMsg);
};
