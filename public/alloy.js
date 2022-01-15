var data = [
	{
		"Size": "13 inch",
		"Model": "B290",
		"image": "images/alloys/alloy1.jpeg"
	},
	{
		"Size": "14 inch",
		"Model": "B290",
		"image": "images/alloys/alloy1.jpeg"
	},
	{
		"Size": "15 inch",
		"Model": "BMUCR 4x100",
		"image": "images/alloys/15_bmucr.jpeg"
	},
	{
		"Size": "15 inch",
		"Model": "462 15x6.5 8x100/114.3",
		"image": "images/alloys/15_462.jpeg"
	},
	{
		"Size": "13 inch",
		"Model": "B290",
		"image": "images/alloys/alloy1.jpeg"
	},
	{
		"Size": "13 inch",
		"Model": "B290",
		"image": "images/alloys/alloy1.jpeg"
	},
	{
		"Size": "13 inch",
		"Model": "B290",
		"image": "images/alloys/alloy1.jpeg"
	},
	{
		"Size": "13 inch",
		"Model": "B290",
		"image": "images/alloys/alloy1.jpeg"
	},
	{
		"Size": "13 inch",
		"Model": "B290",
		"image": "images/alloys/alloy1.jpeg"
	},
	
];

var products = "",
	Sizes = "",
	Models = "";

for (var i = 0; i < data.length; i++) {
	var Size = data[i].Size,
		Model = data[i].Model,
		// price = data[i].price,
		// rawPrice = price.replace("$",""),
		// rawPrice = parseInt(rawPrice.replace(",","")),
		image = data[i].image;
	
	//create product cards
	products += "<div class='col-sm-4 product' data-Size='" + Size + "' data-Brand='" + "' data-Model='" + Model + "' data-price='" + "'><div class='product-inner text-center'><img class='pp' src='" + image + "'><br />Size: " + Size + "<br />Model: " + Model + "</div></div>";
	
	//create dropdown of makes
	if (Sizes.indexOf("<option value='" + Size + "'>" + Size + "</option>") == -1) {
		Sizes += "<option value='" + Size + "'>" + Size + "</option>";
	}
	
	//create dropdown of Brands
	// if (Brands.indexOf("<option value='" + Brand+"'>" + Brand + "</option>") == -1) {
	// 	Brands += "<option value='" + Brand + "'>" + Brand + "</option>";
	// }
	
	//create dropdown of Models
	if (Models.indexOf("<option value='" + Model + "'>" + Model + "</option>") == -1) {
		Models += "<option value='" + Model + "'>" + Model + "</option>";
	}
}

$("#products").html(products);
$(".filter-Size").append(Sizes);
// $(".filter-Brand").append(Brands);
$(".filter-Model").append(Models);

var filtersObject = {};

//on filter change
$(".filter").on("change",function() {
	var filterSize = $(this).data("filter"),
		filterVal = $(this).val();
	
	if (filterVal == "") {
		delete filtersObject[filterSize];
	} else {
		filtersObject[filterSize] = filterVal;
	}
	
	var filters = "";
	
	for (var key in filtersObject) {
	  	if (filtersObject.hasOwnProperty(key)) {
			filters += "[data-"+key+"='"+filtersObject[key]+"']";
	 	}
	}
	
	if (filters == "") {
		$(".product").show();
	} else {
		$(".product").hide();
		$(".product").hide().filter(filters).show();
	}
});

//on search form submit
$("#search-form").submit(function(e) {
	e.preventDefault();
	var query = $("#search-form input").val().toLowerCase();

	$(".product").hide();
	$(".product").each(function() {
		var Size = $(this).data("Size").toLowerCase(),
			Model = $(this).data("Model").toLowerCase();

		if (Size.indexOf(query) > -1 || Model.indexOf(query) > -1) {
			$(this).show();
		}
	});
});
