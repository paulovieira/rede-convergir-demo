
var viewportHeight = $(window).height();
var footerHeight = $(".footer").height();
var navbarHeight = $(".navbar").height();

console.log(viewportHeight);
console.log(footerHeight);
console.log(navbarHeight);

//$("#map").height(viewportHeight - footerHeight - navbarHeight - 2);

// for div#list we have to remove an extra 50 pixels because of the padding-top + padding-bottom
//$("#list").height(viewportHeight - footerHeight - navbarHeight - 2 - 50);

//console.log("list height: ", $("#list").height() );
//console.log("map height: ", $("#map").height() );
/*
*/




var RC = new Mn.Application();
RC.addRegions({
	listRegion: "#list-region",
	mapRegion: "#map-region",
});


var projectsData = [
	{
		id: 1,
		projectName: "TU - Transição Universitária da Fcul",
		summary: "O TU - Transição Universitária é um grupo de da Faculdade de Ciências da Universidade de Lisboa (FCUL) que pretende facilitar a Transição na Universidade.",
		type: "Transição",
		url: "http://www.tu-fcul.net",
		logoImg: "tulogo.gif",
		addedBy: "José Silva",
		lastUpdated: "2014-10-26",
		latLng: [38.2, -7.2]
	},

	{
		id: 2,
		projectName: "Canyaviva",
		summary: "Desenhamos e construímos estruturas, para espaços interiores e exteriores. Cada desenho é único, adaptando-se a localização e as diversas necessidades.",
		type: "Gestão da Terra e da Natureza",
		url: "http://www.canyaviva.com",
		logoImg: "canyavivalogo.jpg",
		addedBy: "Manuel Silva",
		lastUpdated: "2015-01-13",
		latLng: [39.81, -7.21]
	},

	{
		id: 3,
		projectName: "Comunidade de Partilha",
		summary: "A Comunidade de Partilha do Bairro da Boavista promove a partilha de bens, espaços, produções, serviços e projectos empreendedores pelos moradores do bairro.",
		type: "Centro Comunitário",
		url: "https://www.facebook.com/comunidadepartilha",
		logoImg: "logo_comunidade.png",
		addedBy: "Ana Silva",
		lastUpdated: "2014-12-04",
		latLng: [37.8, -7.82]
	},
];


var ProjectM = Backbone.Model.extend({
	initialize: function(){

		var marker = L.marker(this.get("latLng"));

		var self = this;
		marker.on("click", function(e){
			self.trigger("click:marker");
			console.log(self.toJSON());
		});

		this.set("marker", marker);
	}
})

var ProjectsC = Backbone.Collection.extend({
	model: ProjectM
})
var projectsC = new ProjectsC(projectsData);


var ProjectLV = Mn.LayoutView.extend({
	initialize: function(){
		this.$el.attr("id", "project-" + this.model.get("id"));
	},
	modelEvents: {
		"click:marker":"clickMarker"
	},
	template: "project/templates/project.html",
	clickMarker: function(){
		this.trigger("click:marker");
	}

});

var ProjectsCV = Mn.CollectionView.extend({
	childView: ProjectLV,
	//id: "js-projects-container",
	childEvents: {
		"click:marker": function(childView){
			//this.$el.scrollTo(childView.$el, 800);
			//this.$el.scrollTo('+=400px', 800);

			childView.$el.ScrollTo({
			    // duration: 2000,
			    // easing: 'linear'
			});

		}
	},
	onAttach: function(){
		
		//$("#projects-list").height(viewportHeight - footerHeight - navbarHeight - 2 - 50);
		$("#projects-list").height(210);
	}
});

var projectsCV = new ProjectsCV({
	collection: projectsC,
	id: "projects-list",

});
RC.listRegion.show(projectsCV);



var MapLV = Mn.LayoutView.extend({
	template: "map/templates/map.html",

	addTiles: function(){
		L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
			maxZoom: 18,

			id: 'examples.map-i875mjb7'
		}).addTo(this.map);
	},

	addPopups: function(){
		this.collection.each(function(model){
			//model.set("popup", L.popup().setLatLng(model.get("latLng")).addTo(this.map));
		})
	},

	addMarkers: function(){

		this.collection.each(function(model){
			model.get("marker").addTo(this.map);
		}, this);
	},

	onAttach: function(){
		$("#map").height(viewportHeight - footerHeight - navbarHeight - 2);
		//$("#map").height(viewportHeight - navbarHeight - 2);
		this.map = L.map('map').setView([39.8, -7.2], 6);
		this.addTiles();
		this.addMarkers();
	}
});

var mapLV = new MapLV({
	collection: projectsC
});
RC.mapRegion.show(mapLV);
