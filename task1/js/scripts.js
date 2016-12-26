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

function purchase () {
	
}
