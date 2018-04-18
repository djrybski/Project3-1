/*Andy Kukuc
 Professor Krieglstad
 Project 3 Map
 4-16-2018*/

//adding the vars
var map;
var marker;
var current;

//top radioactive locations on Earth.
var mayak_siberia={lat: 55.695092, lng: 60.802625};
var semi_kazakhstan={lat: 50.423346, lng: 80.250811};
var malisuu_kyrgyzstan={lat: 41.248221, lng: 72.455402};
var chernobyl_ukraine={lat: 51.276302, lng: 30.221899};
var fukushima_japan={lat: 37.421336, lng: 141.028078};
var secret_alien_base={lat: -30.510678, lng: 115.382231};

var locations=["Mayak","Semipalatinsk","Mailuu-Suu","Chernobyl","Fukushima","Secret Alien Base"];

function initMap() {
	current={lat: 55.695092, lng: 60.802625};
	map = new google.maps.Map(document.getElementById('map'), {
		zoom:15,
	center: mayak_siberia,mapTypeId:'satellite'});
	marker = new google.maps.Marker({
		position:mayak_siberia,
		animation:google.maps.Animation.BOUNCE,
	map: map });
}

function travel(location, title) {
	map.panTo(location);
	map.setZoom(12);
	marker = new google.maps.Marker({
		position: location,
		map: map
	});
	if(radioactive_spot==locations[0]){
		document.getElementById("description").innerHTML="Mayak Siberia is a very heavily polluted and radioactive powerplant. A lot of radioactive wase has spilled out to the surrounding areas thus contamininating the forrests and wildlife for many thousands of years."
	}
	else if(radioactive_spot==locations[1]){
		document.getElementById("description").innerHTML="Semipatalnsk used to be a Soviet Nuclear Testing Ground. Many nuclear bombs were detonated here and the land is highly radioactive for thousands of years."
	}
	else if(radioactive_spot==locations[2]){
		document.getElementById("description").innerHTML="Malisuu Kyrgyzstan used to be a Uranium Mining Plant. All the Uranium we use came out of Malisuu. Unfortuantley, due to the pollution caused by the mine the area is a hit bed for radiactivity and is lethal wehn approached too close."
	}
	else if(radioactive_spot==locations[3]) {
		document.getElementById("description").innerHTML="Chernobyl Ukraine had a reactor core meltdown back in the 1980's, The Reacter Core blew up spreading serveral metric tons of Radioactive Material into the atmosphere."
	}
	else if(radioactive_spot==locations[4]){
		document.getElementById("description").innerHTML="Fukusima Daici Power Plant in Japan experienced a Tsunami in 2011. Due to poor effective planning for this natural disaster it is the most radiaoactive location on earth. The reactor had several meltdowns and a lot of radiation has spewed into the Pacific Ocean."
	}
	else if(radioactive_spot==locations[5]) {
		document.getElementById("description").innerHTML="It was a Hoax! You found the Millenium Falcon!"
	}
	else {
		document.getElementById("description").innerHTML=null;
	}
}
