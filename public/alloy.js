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
		"Size": "15 inch",
		"Model": "V120 15x6.5 12x100x114.3",
		"image": "images/alloys/15_v120.jpeg"
	},
	{
		"Size": "15 inch",
		"Model": "RS2 15x7 8x100/114.3",
		"image": "images/alloys/15_rs2.jpeg"
	},
	{
		"Size": "15 inch",
		"Model": "V1593 15x6.5 8x100/114.3",
		"image": "images/alloys/15_v1593.jpeg"
	},
	{
		"Size": "15 inch",
		"Model": "885A 15x7 4x100",
		"image": "images/alloys/15_885a.jpeg"
	},
	{
		"Size": "15 inch",
		"Model": "L118 15x6.5 4x100",
		"image": "images/alloys/15_l118.jpeg"
	},
	{
		"Size": "15 inch",
		"Model": "ZW841 15x6.5 8x100/114.3",
		"image": "images/alloys/15_zw841.jpeg"
	},
	{
		"Size": "15 inch",
		"Model": "5630 15x7 4x100",
		"image": "images/alloys/15_5630.jpeg"
	},
	{
		"Size": "15 inch",
		"Model": "YS2231 15x7 8x100/114.3",
		"image": "images/alloys/15_ys2231.jpeg"
	},
	{
		"Size": "15 inch",
		"Model": "WT572 15x7 8x100/114.3 ",
		"image": "images/alloys/15_wt572.jpeg"
	},
	{
		"Size": "15 inch",
		"Model": "YS504 15x7 4x100/114.3",
		"image": "images/alloys/15_ys504.jpeg"
	},
	{
		"Size": "15 inch",
		"Model": "VR70 15x7 8x100/114.3",
		"image": "images/alloys/15_vr70.jpeg"
	},
	{
		"Size": "15 inch",
		"Model": "H565 15x7 8x100/114.3",
		"image": "images/alloys/15_h565.jpeg"
	},
	{
		"Size": "15 inch",
		"Model": "5236 15x6.5 4x100",
		"image": "images/alloys/15_5236.jpeg"
	},
	{
		"Size": "15 inch",
		"Model": "VR65 15x7 8x100/114.3",
		"image": "images/alloys/15_vr65.jpeg"
	},
	{
		"Size": "15 inch",
		"Model": "X154 15x7 8x100/114.3",
		"image": "images/alloys/15_x154.jpeg"
	},
	{
		"Size": "15 inch",
		"Model": "VR70 15x7 8x100/114.3",
		"image": "images/alloys/15_vr70s.jpeg"
	},
	{
		"Size": "15 inch",
		"Model": "AD6 15x8 4x100",
		"image": "images/alloys/15_ad6.jpeg"
	},
	{
		"Size": "15 inch",
		"Model": "4408 15x6.5 8x100/114.3",
		"image": "images/alloys/15_4408.jpeg"
	},
	{
		"Size": "15 inch",
		"Model": "PD509",
		"image": "images/alloys/15_pd509.jpeg"
	},
	{
		"Size": "15 inch",
		"Model": "MTW35 15x7 8x100/114.3",
		"image": "images/alloys/15_mtw35.jpeg"
	},
	{
		"Size": "15 inch",
		"Model": "VR61 15x7 8x100/114.3",
		"image": "images/alloys/15_vr61.jpeg"
	},
	{
		"Size": "15 inch",
		"Model": "VR62 15x7 8x100/114.3",
		"image": "images/alloys/15_vr62.jpeg"
	},
	{
		"Size": "15 inch",
		"Model": "5630 15x7 8x100/114.3",
		"image": "images/alloys/15_5630.jpeg"
	},
	{
		"Size": "15 inch",
		"Model": "5630 15x7 8x100/114.3",
		"image": "images/alloys/15_5630b.jpeg"
	},
	{
		"Size": "15 inch",
		"Model": "TORQUE9013 15x6.5 8x100/108",
		"image": "images/alloys/15_torque.jpeg"
	},
	{
		"Size": "15 inch",
		"Model": "AD10 15x8 4x100",
		"image": "images/alloys/15_ad10.jpeg"
	},
	{
		"Size": "15 inch",
		"Model": "L984 15x8 4x100",
		"image": "images/alloys/15_l984.jpeg"
	},
	{
		"Size": "15 inch",
		"Model": "RS6 15x7 8x100/108",
		"image": "images/alloys/15_rs6.jpeg"
	},
	{
		"Size": "15 inch",
		"Model": "752 15x7 8x100/114.3",
		"image": "images/alloys/15_752.jpeg"
	},
	{
		"Size": "15 inch",
		"Model": "MQ678 15x7.5 4x100",
		"image": "images/alloys/15_mq678.jpeg"
	}
	
	
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
	products += "<div class='col-sm-4 product' data-Size='" + Size + "' data-Brand='" + "' data-Model='" + Model + "' data-price='" + "'><div class='product-inner text-center'><img class='ppa' src='" + image + "'><br />Size: " + Size + "<br />Model: " + Model +"<br/><a href='http://wa.me/919999415676?text=https://thetyrecottage.herokuapp.com/"+ image +"' class='wan'><i class='fa fa-whatsapp wa' style='font-size:24px'></i></a>" + "</div></div>";
	
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
