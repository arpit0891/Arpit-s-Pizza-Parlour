function invoice() {
	
	var size = document.querySelector('input[name="size"]:checked').value; console.log("size="+size);
	var sizePrice = 0;
	if (size === "Personal") {
		sizePrice = 6;
	};
	if (size === "Medium") {
		sizePrice = 10;
	};
	if (size === "Large") {
		sizePrice = 14;
	};
	if (size === "Extra-Large") {
		sizePrice = 16;
	}; console.log("sizePrice="+sizePrice);
	
	var cheese = document.querySelector('input[name="cheese"]:checked').value; console.log("cheese="+cheese);
	var cheesePrice = 0;
	if (cheese === "Extra") {
		if (size === "Personal") {
			cheesePrice = 5;
		} else if (size === "Medium") {
			cheesePrice = 8;
		} else if (size === "Large") {
			cheesePrice = 10;
		} else {
			cheesePrice = 11;
		};
	}; console.log("cheesePrice="+cheesePrice);
	
	var crust = document.querySelector('input[name="crust"]:checked').value; console.log("crust="+crust);
	var crustPrice = 0
	if (crust="Cheese-Stuffed") {
		crustPrice = 3;
	}; console.log("crustPrice="+crustPrice);
	
	var sauce = document.querySelector('input[name="sauce"]:checked').value; console.log("sauce="+sauce);
	
	var meatPrice = 0
	var meat = document.getElementsByName("meat");
	var meatSelect = [];
	var meatDisplay = "";
	for (var i = 0; i < meat.length; i++) {
		if (meat[i].checked) {
			meatSelect.push(meat[i].value);
		};		
	}; console.log("meatSelect="+meatSelect);
	if (meatSelect.length === 1) {
		meatDisplay = meatSelect[0];
	} else if (meatSelect.length > 1) {
		for (i=0; i < meatSelect.length; i++) {
				meatDisplay += meatSelect[i];
				if (i < (meatSelect.length-1)) {
					meatDisplay += ", ";
				};
		};
	};		
	meatPrice = meatSelect.length * 2; console.log("meatPrice="+meatPrice);
	if (meatSelect.length === 0) {
		meatDisplay = "No Meats";
	}
	
	var vegPrice = 0;
	var veg = document.getElementsByName("veg");
	var vegSelect = [];
	var vegDisplay = "";
	for (var i = 0; i<veg.length; i++) {
		if (veg[i].checked) {
			vegSelect.push(veg[i].value);
		};
	}; console.log("vegSelect="+vegSelect);
	if (vegSelect.length > 1) {
		vegPrice = 2;
	}; console.log("vegPrice="+vegPrice);
	if (vegSelect.length === 1) {
		vegDisplay = vegSelect[0];
	} else if (vegSelect.length > 1) {
		for (i=0; i < vegSelect.length; i++) {
			vegDisplay += vegSelect[i];
			if (i < (vegSelect.length - 1)) {
				vegDisplay += ", ";
			};
		};
	};
	if (vegSelect.length === 0) {
		vegDisplay = "No Vegetables";
	}
	
	var noPizza = Number(document.getElementById("pzaNo").value);
	
	var totalPrice = (vegPrice + meatPrice + crustPrice + cheesePrice + sizePrice + 2) * noPizza; 
	console.log("totalPrice="+totalPrice);

	$("#size").html(size+" Pizza");
	$("#sizeprice").html(" $"+sizePrice+".00");
	$("#crust").html(crust+" Crust");
	$("#crustprice").html("+"+crustPrice+".00");
	$("#cheese").html(cheese+" Cheese");
	$("#cheeseprice").html("+"+cheesePrice+".00");
	$("#sauce").html(sauce+" Sauce");
	$("#sauceprice").html("+2.00");
	$("#meat").html(meatDisplay);
	$("#meatprice").html("+"+meatPrice+".00");
	$("#veg").html(vegDisplay);
	$("#vegprice").html("+"+vegPrice+".00");
	$("#pizza").html(noPizza);
	$("#totalprice").html(totalPrice+".00");
	
	
	
};