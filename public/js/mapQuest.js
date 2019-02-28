function initMap() {
	// add your code here
	L.mapquest.key = 'nrneUb5DTY6eq2ZsG6pkvrgMgPkc4xZP';
	var ucsd_ltlng = {lat: 32.8788033, lng: -117.2359121};

	var map = L.mapquest.map('map', {
		center: [32.88, -117.236],
		zoom: 12
		zoomControl: false
	});

	L.marker([32.88, -117.236]).addTo(map);
}