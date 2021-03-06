function initialize() {

	var options = {
	  enableHighAccuracy: true,
	  timeout: 5000,
	  maximumAge: 0
	};

	function success(pos) {
		var lat = pos.coords.latitude;
		var lon = pos.coords.longitude;
		var myLatlng = new google.maps.LatLng(lat, lon);
		
		// Objeto literal creado para la realización de las distintas opciones del mapa.
	    var mapOptions = {
	        zoom: 16,
	        center: new google.maps.LatLng(lat, lon),
	        disableDefaultUI: false,
	        navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
	        mapTypeId: google.maps.MapTypeId.ROADMAP
	    };


		var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
		var marker = new google.maps.Marker({
      		 position: myLatlng,
     		 map: map,
     		 
 		});

		var contentString = '<div>'+
      		'<h1>Paquito Choc</h1>'+
      		'<div>'+
      		'<p>Hi! Anyone for a beer?</p>'+
      		'<p>Country: Canada <a href="http://twitter.com">'+
      		'Twitter</a>' +
      		'</p>'+
      		'</div>'+
      		'</div>';

		var infowindow = new google.maps.InfoWindow({
				content: contentString,
      			maxWidth: 500

		});

  	  	google.maps.event.addListener(marker, 'click', function() {
   	  	infowindow.open(map, marker);
			});

  	  	$.ajaxSetup({cache: false});

 		$.getJSON('points.json', function(data) { 
     	       $.each( data.points, function(i, value) {
	
      	         var myLatlng = new google.maps.LatLng(value.lat, value.lon);
      	          
       	         var marker = new google.maps.Marker({
       	         position: myLatlng,
       	         map: map,
       	         title: "mochilerillo"
      	         });
       	         //console.log (value)
      	         var contentString = '<div>'+
      				'<h1>'+value.name+'</h1>'+
      				'<div>'+
      				'<p>'+value.message+'</p>'+
      				'<p>'+value.country+' <a href="http://twitter.com">'+
      				'Twitter</a>' +
      				'</p>'+
      				'</div>'+
      				'</div>';

				var infowindow = new google.maps.InfoWindow({
				content: contentString,
      			maxWidth: 300

				});

  	  			google.maps.event.addListener(marker, 'click', function() {
   	  			infowindow.open(map, marker);
					});
	
    			});
		});

	};
	function error(err) {
	  console.warn('ERROR(' + err.code + '): ' + err.message);
	};

	navigator.geolocation.getCurrentPosition(success, error, options);

 	 


};

 /*function showlocation(){
	/*var options = {
	  enableHighAccuracy: true,
	  timeout: 5000,
	  maximumAge: 0
	};*/

	/*function success(pos) {
		var lat = pos.coords.latitude;
		var lon = pos.coords.longitude;
		var myLatlng = new google.maps.LatLng(lat, lon);
		// Objeto literal creado para la realización de las distintas opciones del mapa.
	    var mapOptions = {
	        zoom: 16,
	        center: new google.maps.LatLng(lat, lon),
	        disableDefaultUI: true,
	        navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
	        mapTypeId: google.maps.MapTypeId.ROADMAP
	    };*/
	    	
	  // Creamos el mapa y le pasamos las opciones y el id del contenedor en el que se va a alojar
 		/*var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
  	 	var marker = new google.maps.Marker({
      		 position: myLatlng,
     		 map: map,
     		 
 		});
  	 	var infowindow = new google.maps.InfoWindow({
			minHeigth: 500,
			content: 'You!'

		});

  	  		google.maps.event.addListener(marker, 'click', function() {
   	  		infowindow.open(map, marker);
			});
		};

	/*function error(err) {
	  console.warn('ERROR(' + err.code + '): ' + err.message);
	};*/

	/*navigator.geolocation.getCurrentPosition(success, error, options);
  
  };*/