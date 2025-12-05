ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([13633472.181250, 4430915.443674, 13633777.646350, 4431182.162463]);
var wms_layers = [];

var format_background_0 = new ol.format.GeoJSON();
var features_background_0 = format_background_0.readFeatures(json_background_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_background_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_background_0.addFeatures(features_background_0);
var lyr_background_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_background_0, 
                style: style_background_0,
                popuplayertitle: 'background',
                interactive: true,
                title: '<img src="styles/legend/background_0.png" /> background'
            });
var format_wall_1 = new ol.format.GeoJSON();
var features_wall_1 = format_wall_1.readFeatures(json_wall_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wall_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wall_1.addFeatures(features_wall_1);
var lyr_wall_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_wall_1, 
                style: style_wall_1,
                popuplayertitle: 'wall',
                interactive: true,
                title: '<img src="styles/legend/wall_1.png" /> wall'
            });
var format_room_2 = new ol.format.GeoJSON();
var features_room_2 = format_room_2.readFeatures(json_room_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_room_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_room_2.addFeatures(features_room_2);
var lyr_room_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_room_2, 
                style: style_room_2,
                popuplayertitle: 'room',
                interactive: true,
                title: '<img src="styles/legend/room_2.png" /> room'
            });
var format_equipment_3 = new ol.format.GeoJSON();
var features_equipment_3 = format_equipment_3.readFeatures(json_equipment_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_equipment_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_equipment_3.addFeatures(features_equipment_3);
var lyr_equipment_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_equipment_3, 
                style: style_equipment_3,
                popuplayertitle: 'equipment',
                interactive: false,
                title: '<img src="styles/legend/equipment_3.png" /> equipment'
            });

lyr_background_0.setVisible(true);lyr_wall_1.setVisible(true);lyr_room_2.setVisible(true);lyr_equipment_3.setVisible(false);
var layersList = [lyr_background_0,lyr_wall_1,lyr_room_2,lyr_equipment_3];
lyr_background_0.set('fieldAliases', {'fid': 'fid', });
lyr_wall_1.set('fieldAliases', {'fid': 'fid', });
lyr_room_2.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', });
lyr_equipment_3.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', });
lyr_background_0.set('fieldImages', {'fid': '', });
lyr_wall_1.set('fieldImages', {'fid': '', });
lyr_room_2.set('fieldImages', {'fid': '', 'NAME': '', });
lyr_equipment_3.set('fieldImages', {'fid': '', 'NAME': '', });
lyr_background_0.set('fieldLabels', {'fid': 'no label', });
lyr_wall_1.set('fieldLabels', {'fid': 'no label', });
lyr_room_2.set('fieldLabels', {'fid': 'inline label - always visible', 'NAME': 'inline label - always visible', });
lyr_equipment_3.set('fieldLabels', {'fid': 'hidden field', 'NAME': 'inline label - always visible', });
lyr_equipment_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});