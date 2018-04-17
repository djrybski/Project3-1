/*Andy Kukuc
 Professor Krieglstad
 Project 3 Map
 4-16-2018*/

//adding the vars
var map;
var marker;
var current;

//top radioactive locations on Earth.
var 5_mayak_siberia={lat: 55.695092, lng: 60.802625};
var 4_semi_kazakhstan={lat: 50.423346, lng: 80.250811};
var 3_malisuu_kyrgyzstan={lat: 41.248221, lng: 72.455402};
var 2_chernobyl_ukraine={lat: 51.276302, lng: 30.221899};
var 1_fukushima_japan={lat: 37.421336, lng: 141.028078};

var locations=["Mayak","Semipalatinsk","Mailuu-Suu","Chernobyl","Fukushima"];

function initMap() {
	current={lat: 55.695092, lng: 60.802625};
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 10,
		center: current
	});
	marker = new google.maps.Marker({
		position: current,
		map: map
});
}

function goto(location, title) {
	map.panTo(location);
	map.setZoom(12);
	marker = new google.maps.Marker({
		position: location,
		map:map
});

if(title==locations[0]){
	document.getElementById("demo").innerHTML = "Mayak, Siberia contains a Chemical Plant where a bunch of toxic and radioactive waste has spilled out to the enviroment.";
}
else if (title==locations[1]) {
	document.getElementById("demo").innerHTML = "Semipalatinsk, Kazakhstan formerlly a Soviet Nuclear Weapon Testing Location. The Soviets dropped a bunch of test nuclear bombs here and the area will be readicative for millenia.";
}
else if (title==locations[2]) {
	document.getElementById("demo").innerHTML = "Mailuu-Suu, Kryrgyzstan used to be a Uranium mining spot. All Uranium that we use came form this lcoation but due to the pollution from mining the area is heavily irradiated.";
}
else if(title==locations[3]) {
	document.getElementById("demo").innerHTML = "Chrenobyl, Ukraine a very famous spot that we all know about. In 1989 the nuclear power plant had a meltdwon and spewed several meric tons of radiaoactive waste to the surrounding towns and villages.";
}
else if(title==locations[4]) {
	document.getElementById("demo").innerHTML = "Fukushima Power Plant in Japan. It was struck by a huge Tsunami in 2011 and the reactor cores went into total meltdown. The area is one of the most heaviest irradiated spots on Earth and makes it to the top of the list.";
}
else {
	documnet.getElementById("demo").innerHTML = null;
}
}
