function Item (place, price,weight) {
	this.place = place;
	this.price = price;
	this.weight = weight;
};

Item.prototype.getPrice = function () {
	return this.price;
};

Item.prototype.getWeight = function () {
	return this.weight;
};

console.log("1. Press 'Generate items offer' button");
console.log("2. Press 'Weigh products' button");
console.log("3. Press 'Evaluate' button");
console.log("4. Nice! Get bill");

function selectPlace () {
	var places = ['electronic', 'bodycare', 'backery', 'butchery', 'frozen', 'dairy', 'grocery', 'beer&wine'];
  	var place = places[Math.floor(Math.random()*places.length)];
  	return place;
};



function evaluation () {
  var price = Math.round(Math.random()*500);
  return price;
};

function weigh () {
	var weight = Math.round(Math.random()*20);
  	return weight;
};

function purchase () {
	var purchases = [];
	var billValue = 0;
	for (var i = 0; i < 15; i++) {
	    purchases.push(new Item(selectPlace(), evaluation(), weigh()));
	    console.log(purchases[i]);
	    billValue += purchases[i].getPrice();
	}
	console.log("Total: " + billValue + " $");
};





