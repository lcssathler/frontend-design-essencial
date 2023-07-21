myCats = {
	cat: [
		{
			id: 1,
			name: "Chico",
			description: "O Chico cansou de ser cat e virou Dinossauro.",
			imgUrl: "images/gato-01.jpg",
			externalLink: "https://www.instagram.com/canseidesergato/",
		},

		{
			id: 2,
			name: "Hamilton",
			description:
				"Hamilton é o gato mais hipster que você vai ver hoje.",
			imgUrl: "images/gato-02.jpg",
			externalLink: "https://www.instagram.com/hamilton_the_hipster_cat/",
		},

		{
			id: 3,
			name: "Nala",
			description: "Nala é uma gatinha muito simpática e extrovertida.",
			imgUrl: "images/gato-03.jpg",
			externalLink: "https://www.instagram.com/nala_cat/",
		},
	],
};

$(function () {
	var cardCat = $("#card");
	var cardBody = $(".card-body");
	var btn = $("#btn");

	function getCat() {
        var input = $("input").val().toLowerCase();
        
		for (var i = 0; myCats.cat.length > i; i++) {
			console.log(input);
			var cat = myCats.cat[i];

			if (input == cat.name.toLowerCase()) {
				$("#card img").attr("src", cat.imgUrl);
				$(".card-body h1").html(cat.name);
				$(".card-body p").html(cat.description);
			} else {
				$("#card img").attr("src", "images/gato-00.jpg");
				$(".card-body h1").html("Cat not found :(");
				$(".card-body p").html("");
			}
		}
	}

	btn.click(getCat);
});
