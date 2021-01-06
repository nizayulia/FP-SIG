
    if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function() {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
    }
    mapboxgl.accessToken = 'pk.eyJ1Ijoibml6YXl1bGlhIiwiYSI6ImNrajJ6czQwdjA4Z3Yyc2xsamMwZThncnAifQ.AbatdQTi9Lrc2AP3sPS4Vg';
    /**
     * Menambahkan maps
    */
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [112.73770,-7.24656 ],
    zoom: 11,
    scrollZoom: true
    });

    map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken
    }),
    'top-right'
    );
    var tempat = {
        "type": "FeatureCollection",
        "features": [
        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                112.63329938064271, -7.276488128161709
            ]
            },
            "properties": {
            "phone": "(031)7441155",
            "nama": "Ciputra Waterpark",
            "city": "Sambikerep",
            "alamat": "Kawasan, Jl. Waterpark Boulevard Jl. Citraland Surabaya, Made, Kec. Sambikerep, Kota SBY, Jawa Timur 60219"
            }
        },
        
        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                112.79932053729573, -7.267457371518037
            ]
            },
            "properties": {
            "phone": "085338192009",
            "nama": "Hutan Bambu",
            "city": "Keputih",
            "alamat":"Jl. Raya Marina Asri, Keputih, Kec. Sukolilo, Kota SBY, Jawa Timur 60111"
            }
        },
        
        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                112.73389294244035,-7.223017376070445
            ]
            },
            "properties": {
            "phone": "(031)3539000",
            "nama": "House of Sampoerna",
            "city": "Pabean Cantian",
            "alamat": "Taman Sampoerna No.6, Krembangan Utara, Kec. Pabean Cantian, Kota SBY, Jawa Timur 60163",
            }
        },
        
        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                112.73755,-7.29597
            ]
            },
            "properties": {
            "phone": "(031)5678703",
            "nama": "Kebun Binatang Surabaya",
            "city": "Wonokromo",
            "alamat":"Jl. Setail No.1, Darmo, Kec. Wonokromo, Kota SBY, Jawa Timur 60241"
            }
        },
        
        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                112.74350598087538, -7.259119344595743
            ]
            },
            "properties": {
            "phone": "-",
            "nama": "Monumen Bambu Runcing",
            "city": "Genteng",
            "alamat": "Jl. Panglima Sudirman, Embong Kaliasin, Kec. Genteng, Kota SBY, Jawa Timur 60271"
            }
        },

        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
            112.74865582202119, -7.258097630542689
            ]
            },
            "properties": {
            "phone": "(031)5490410",
            "nama": "Monumen Kapal Selam",
            "city": "Genteng",
            "alamat": "Jl. Pemuda No.39, Embong Kaliasin, Kec. Genteng, Kota SBY, Jawa Timur 60271",
            }
        },

        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                112.73309,-7.19741
            ]
            },
            "properties": {
            "phone": "(031)3568050",
            "nama": "Surabaya North Quay",
            "city": "Pabean Cantian",
            "alamat": "North Perak, Pabean Cantian, Surabaya City, East Java 60165"
            }
        },
        
        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                112.74228957361306,-7.259131470538874
            ]
            },
            "properties": {
            "phone": "(031)5078357",
            "nama": "Taman Prestasi",
            "city": "Genteng",
            "alamat" : "Jl. Ketabang Kali No.6, Ketabang, Kec. Genteng, Kota SBY, Jawa Timur 60272"
            
            }
        },
        
        
        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                112.73614839390758, -7.238611263568138
            ]
            },
            "properties": {
            "phone": "(031)3571100",
            "nama": "Tugu Pahlawan",
            "city": "Bubutan",
            "alamat":"Jl. Pahlawan, Alun-alun Contong, Kec. Bubutan, Kota SBY, Jawa Timur 60174"
            }
        },
        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                112.73766949424345, -7.281596466046479
            ]
            },
            "properties": {
            "phone": "-",
            "nama": "Taman Bungkul",
            "city": "Wonokromo",
            "alamat": "Jl. Taman Bungkul, Darmo, Kec. Wonokromo, Kota SBY, Jawa Timur 60241",
            }
        },
        
        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                112.79413760681408, -7.231079514845228
            ]
            },
            "properties": {
            "phone": "-",
            "nama": "Pantai Kenjaran Lama",
            "city": "Bulak",
            "alamat": "Jl. Pantai Kenjeran No.1-6, Kenjeran, Kec. Bulak, Kota SBY, Jawa Timur 60123",
            }
        },
        
        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
            112.73799533142936, -7.254616984349095
            ]
            },
            "properties": {
            "phone": "http://surabaya.go.id/",
            "nama": "Museum Siola",
            "city": "Genteng",
            "alamat": "Jl. Tunjungan No.1, Genteng, Kec. Genteng, Kota SBY, Jawa Timur 60275",
            }
        }]
        }

    tempat.features.forEach(function(place, i){
    place.properties.id = i;
    });

    map.on('load', function (e) {
    map.addSource("places", {
        "type": "geojson",
        "data": tempat
    });

    var geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: true,
        bbox: [-77.210763, 38.803367, -76.853675, 39.052643]
    });
    buildLocationList(tempat);
    addMarkers();
    map.addControl(new mapboxgl.NavigationControl(), 'top-left');
    });

    /**
     * Menambahkan marker pada setiap daftar tempat
    **/
    function addMarkers() {
    tempat.features.forEach(function(marker) {
        var el = document.createElement('div');
        el.id = "marker-" + marker.properties.id;
        el.className = 'marker';
        new mapboxgl.Marker(el, {offset: [0, -23]})
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
        el.addEventListener('click', function(e){
        flyToPlace(marker);
        createPopUp(marker);
        var activeItem = document.getElementsByClassName('active');
        e.stopPropagation();
        if (activeItem[0]) {
            activeItem[0].classList.remove('active');
        }
        var listing = document.getElementById('listing-' + marker.properties.id);
        listing.classList.add('active');
        });
    });
    }

    /**
     * Menambahkan daftar objek wisata pada sidebar
    **/
    function buildLocationList(data) {
    data.features.forEach(function(place, i){
        var prop = place.properties;
        var listings = document.getElementById('listings');
        var listing = listings.appendChild(document.createElement('div'));
        listing.id = "listing-" + prop.id;
        listing.className = 'item';
        var link = listing.appendChild(document.createElement('a'));
        link.href = '#';
        link.className = 'title';
        link.id = "link-" + prop.id;
        link.innerHTML = prop.nama;

        /* Menambahkan detail pada tiap data listing. */
        var details = listing.appendChild(document.createElement('div'));
        details.innerHTML = prop.city;
        details.innerHTML += ' · ' + prop.phone;

        link.addEventListener('click', function(e){
        for (var i=0; i < data.features.length; i++) {
            if (this.id === "link-" + data.features[i].properties.id) {
            var clickedListing = data.features[i];
            flyToPlace(clickedListing);
            createPopUp(clickedListing);
            }
        }
        var activeItem = document.getElementsByClassName('active');
        if (activeItem[0]) {
            activeItem[0].classList.remove('active');
        }
        this.parentNode.classList.add('active');
        });
    });
    }

    function flyToPlace(currentFeature) {
    map.flyTo({
        center: currentFeature.geometry.coordinates,
        zoom: 15
        });
    }

    /**
     * Membuat pop-Up
    **/
    function createPopUp(currentFeature) {
    var popUps = document.getElementsByClassName('mapboxgl-popup');
    if (popUps[0]) popUps[0].remove();

    var popup = new mapboxgl.Popup({closeOnClick: false})
        .setLngLat(currentFeature.geometry.coordinates)
        .setHTML('<h3>' + currentFeature.properties.nama + '</h3>' + '<h4>' + currentFeature.properties.alamat + '</h4>')
        .addTo(map);
    }
