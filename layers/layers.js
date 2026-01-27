var wms_layers = [];


        var lyr_googlesatellitehybrid_0 = new ol.layer.Tile({
            'title': 'google satellite hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_QuemaAeropuerto20262101_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'QuemaAeropuerto20262101<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/QuemaAeropuerto20262101_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-9525219.389014, 1184210.215337, -9520881.587659, 1187086.158526]
        })
    });

lyr_googlesatellitehybrid_0.setVisible(true);lyr_QuemaAeropuerto20262101_1.setVisible(true);
var layersList = [lyr_googlesatellitehybrid_0,lyr_QuemaAeropuerto20262101_1];
