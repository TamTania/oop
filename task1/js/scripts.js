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

function drawTable(tbody, obj) {
    var tr, td;
    tbody = document.getElementById(tbody);
    tr = tbody.insertRow(tbody.rows.length);
    td = tr.insertCell(tr.cells.length);
    td.setAttribute("align", "center");
    td.innerHTML = obj.place;
    td = tr.insertCell(tr.cells.length);
    td.setAttribute("align", "center");
    td.innerHTML = obj.price;
    td = tr.insertCell(tr.cells.length);
    td.setAttribute("align", "center");
    td.innerHTML = obj.weight;    
};

function purchase () {
	var btn = document.getElementById('btn').disabled = true;
	var billValue = 0;
	for (var i = 0; i < 15; i++) {
		var item = new Item(selectPlace(), evaluation(), weigh());
		console.log(item);
	    billValue += item.getPrice();
	    drawTable("matchData", item);

	}
	console.log("Total: " + billValue + " $");
	document.getElementById('output').innerHTML += billValue;

};



