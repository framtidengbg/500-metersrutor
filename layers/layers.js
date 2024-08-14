var wms_layers = [];

var lyr_Stadskartanedtonadbeta_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geodata.stadsbyggnad.goteborg.se/services/stadskarta-v5/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "stadskarta_nedtonad",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Stadskarta nedtonad (beta)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Stadskartanedtonadbeta_0, 0]);
var lyr_Stadskartagrbeta_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geodata.stadsbyggnad.goteborg.se/services/stadskarta-v5/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "stadskarta_gra",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Stadskarta grå (beta)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Stadskartagrbeta_1, 0]);
var lyr_Ortofoto_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geodata.sbk.goteborg.se/services/ortofoto-v2/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "orto",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortofoto",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortofoto_2, 0]);
var format_Rutor500mGteborgkommun_3 = new ol.format.GeoJSON();
var features_Rutor500mGteborgkommun_3 = format_Rutor500mGteborgkommun_3.readFeatures(json_Rutor500mGteborgkommun_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rutor500mGteborgkommun_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rutor500mGteborgkommun_3.addFeatures(features_Rutor500mGteborgkommun_3);
var lyr_Rutor500mGteborgkommun_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rutor500mGteborgkommun_3, 
                style: style_Rutor500mGteborgkommun_3,
                popuplayertitle: "Rutor 500m Göteborg kommun",
                interactive: true,
                title: '<img src="styles/legend/Rutor500mGteborgkommun_3.png" /> Rutor 500m Göteborg kommun'
            });

lyr_Stadskartanedtonadbeta_0.setVisible(true);lyr_Stadskartagrbeta_1.setVisible(true);lyr_Ortofoto_2.setVisible(true);lyr_Rutor500mGteborgkommun_3.setVisible(true);
var layersList = [lyr_Stadskartanedtonadbeta_0,lyr_Stadskartagrbeta_1,lyr_Ortofoto_2,lyr_Rutor500mGteborgkommun_3];
lyr_Rutor500mGteborgkommun_3.set('fieldAliases', {'Rut_id': 'Rut_id', 'SW_MEMBER': 'SW_MEMBER', 'AJOUR_DATU': 'AJOUR_DATU', 'OPERATÖR': 'OPERATÖR', 'REG_DATUM': 'REG_DATUM', 'KVALITET': 'KVALITET', });
lyr_Rutor500mGteborgkommun_3.set('fieldImages', {'Rut_id': 'TextEdit', 'SW_MEMBER': 'TextEdit', 'AJOUR_DATU': 'TextEdit', 'OPERATÖR': 'TextEdit', 'REG_DATUM': 'TextEdit', 'KVALITET': 'TextEdit', });
lyr_Rutor500mGteborgkommun_3.set('fieldLabels', {'Rut_id': 'no label', 'SW_MEMBER': 'no label', 'AJOUR_DATU': 'no label', 'OPERATÖR': 'no label', 'REG_DATUM': 'no label', 'KVALITET': 'no label', });
lyr_Rutor500mGteborgkommun_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});