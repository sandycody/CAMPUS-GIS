var mapView = new ol.View ({
    center: ol.proj.fromLonLat([77.11316208637668, 28.67555625]),
    zoom: 17
});

var map = new ol.Map ({
    target: 'map',
    view: mapView
});


var osmTile = new ol.layer.Tile ({
    title: 'Open Street Map',
    visible: true,
    source: new ol.source.OSM()
});

map.addLayer(osmTile);


var BVPTile = new ol.layer.Tile ({
    title: "BVICAM Infrastructure",
    source: new ol.source.TileWMS ({
        url: 'http://localhost:8080/geoserver/Fields/wms',
        params: {'LAYERS' : 'BVPSHP:fields', 'TILED' : true},
        serverType: 'geoserver',
        visible: true,
    })
});

map.addLayer(BVPTile);

let canvas = document.getElementsByTagName('canvas')[0]

function handleClick(event){
    var rect = canvas.getBoundingClientRect()
    var x = event.clientX-rect.left
    var y = event.clientY-rect.top

    console.log(x,y)
    // if(x >= 654 && x <= 669 || y >= 196 && y <= 204){
    //     window.location.href = "http://127.0.0.1:5500/Map%20View/Static%20Pages/library.html" 
    // }

    // else if(x >= 585 && x <= 675 || y >= 230 && y <= 291){
    //     window.location.href = "http://127.0.0.1:5500/Map%20View/Static%20Pages/ground.html" 
    // }
    
    // else if(x >= 696 && x <= 716 && y >= 204 && y <= 348){
    //     window.location.href = "http://127.0.0.1:5500/Map%20View/Static%20Pages/basketballGround.html" 
    // }

    // else if(x >= 667 && x <= 681 && y >= 140 && y <= 163){
    //     window.location.href = "http://127.0.0.1:5500/Map%20View/Static%20Pages/canteen.html" 
    // }


    if(x >= 654 && x <= 669 || y >= 196 && y <= 204){
            window.location.href = "http://127.0.0.1:5500/Map%20View/Static%20Pages/library.html" 
    }
    
    else if(x >= 585 && x <= 677 || y >= 172 && y <= 262){
            window.location.href = "http://127.0.0.1:5500/Map%20View/Static%20Pages/ground.html" 
    }
    
    if(x >= 620 && x <= 633 || y >= 143 && y <= 172){
        window.location.href = "http://127.0.0.1:5500/Map%20View/Static%20Pages/basketballGround.html" 
    }

    if(x >= 585 && x <= 613 || y >= 140 && y <= 172){
        window.location.href = "http://127.0.0.1:5500/Map%20View/Static%20Pages/canteen.html" 
    }

    if(x >= 597 && x <= 604 || y >= 89 && y <= 98){
        window.location.href = "http://127.0.0.1:5500/Map%20View/Static%20Pages/gym.html" 
    }
}

canvas.addEventListener('click',handleClick,false)