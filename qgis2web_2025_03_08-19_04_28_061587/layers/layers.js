var wms_layers = [];


        var lyr_FonddecarteOSM_0 = new ol.layer.Tile({
            'title': 'Fond de carte OSM',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Arrondissement_1 = new ol.format.GeoJSON();
var features_Arrondissement_1 = format_Arrondissement_1.readFeatures(json_Arrondissement_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arrondissement_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arrondissement_1.addFeatures(features_Arrondissement_1);
var lyr_Arrondissement_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arrondissement_1, 
                style: style_Arrondissement_1,
                popuplayertitle: 'Arrondissement',
                interactive: true,
                title: '<img src="styles/legend/Arrondissement_1.png" /> Arrondissement'
            });
var format_Zonedhabitation_2 = new ol.format.GeoJSON();
var features_Zonedhabitation_2 = format_Zonedhabitation_2.readFeatures(json_Zonedhabitation_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonedhabitation_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonedhabitation_2.addFeatures(features_Zonedhabitation_2);
var lyr_Zonedhabitation_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonedhabitation_2, 
                style: style_Zonedhabitation_2,
                popuplayertitle: 'Zone d\'habitation',
                interactive: false,
                title: '<img src="styles/legend/Zonedhabitation_2.png" /> Zone d\'habitation'
            });
var format_Surfacedecommuneenha_3 = new ol.format.GeoJSON();
var features_Surfacedecommuneenha_3 = format_Surfacedecommuneenha_3.readFeatures(json_Surfacedecommuneenha_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Surfacedecommuneenha_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Surfacedecommuneenha_3.addFeatures(features_Surfacedecommuneenha_3);
var lyr_Surfacedecommuneenha_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Surfacedecommuneenha_3, 
                style: style_Surfacedecommuneenha_3,
                popuplayertitle: 'Surface de commune en ha',
                interactive: true,
    title: 'Surface de commune en ha<br />\
    <img src="styles/legend/Surfacedecommuneenha_3_0.png" /> 107<br />\
    <img src="styles/legend/Surfacedecommuneenha_3_1.png" /> 1127<br />\
    <img src="styles/legend/Surfacedecommuneenha_3_2.png" /> 2183<br />\
    <img src="styles/legend/Surfacedecommuneenha_3_3.png" /> 2204<br />\
    <img src="styles/legend/Surfacedecommuneenha_3_4.png" /> 2564<br />\
    <img src="styles/legend/Surfacedecommuneenha_3_5.png" /> 3291<br />\
    <img src="styles/legend/Surfacedecommuneenha_3_6.png" /> 5548<br />\
    <img src="styles/legend/Surfacedecommuneenha_3_7.png" /> 5632<br />\
    <img src="styles/legend/Surfacedecommuneenha_3_8.png" /> 7143<br />' });

lyr_FonddecarteOSM_0.setVisible(true);lyr_Arrondissement_1.setVisible(true);lyr_Zonedhabitation_2.setVisible(false);lyr_Surfacedecommuneenha_3.setVisible(true);
var layersList = [lyr_FonddecarteOSM_0,lyr_Arrondissement_1,lyr_Zonedhabitation_2,lyr_Surfacedecommuneenha_3];
lyr_Arrondissement_1.set('fieldAliases', {'ID': 'ID', 'NOM': 'NOM', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'ID_AUT_ADM': 'ID_AUT_ADM', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_DESTR': 'DATE_DESTR', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'DETRUIT': 'DETRUIT', });
lyr_Zonedhabitation_2.set('fieldAliases', {'ID': 'ID', 'NATURE': 'NATURE', 'NAT_DETAIL': 'NAT_DETAIL', 'TOPONYME': 'Nom des zones d\'habitation', 'STATUT_TOP': 'STATUT_TOP', 'IMPORTANCE': 'IMPORTANCE', 'FICTIF': 'FICTIF', 'ETAT': 'ETAT', 'DETRUIT': 'DETRUIT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_DESTR': 'DATE_DESTR', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'ID_BAN': 'ID_BAN', });
lyr_Surfacedecommuneenha_3.set('fieldAliases', {'ID': 'ID', 'INSEE_COM': 'INSEE_COM', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_COL': 'INSEE_COL', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'POPULATION': 'POPULATION', 'SURFACE_HA': 'Surface en ha', 'DETRUIT': 'DETRUIT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_DESTR': 'DATE_DESTR', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'CODE_POST': 'CODE_POST', 'NOM': 'NOM', 'CL_ARROND': 'CL_ARROND', 'CL_COLLTER': 'CL_COLLTER', 'CL_DEPART': 'CL_DEPART', 'CL_REGION': 'CL_REGION', 'CAPITALE': 'CAPITALE', 'DATE_RCT': 'DATE_RCT', 'RECENSEUR': 'RECENSEUR', 'SIREN_EPCI': 'SIREN_EPCI', 'ID_CH_LIEU': 'ID_CH_LIEU', 'ID_AUT_ADM': 'ID_AUT_ADM', 'CODE_SIREN': 'CODE_SIREN', });
lyr_Arrondissement_1.set('fieldImages', {'ID': 'Hidden', 'NOM': 'TextEdit', 'INSEE_ARR': 'Hidden', 'INSEE_DEP': 'Hidden', 'INSEE_REG': 'Hidden', 'ID_AUT_ADM': 'Hidden', 'DATE_CREAT': 'Hidden', 'DATE_MAJ': 'Hidden', 'DATE_DESTR': 'Hidden', 'DATE_APP': 'Hidden', 'DATE_CONF': 'Hidden', 'DETRUIT': 'Hidden', });
lyr_Zonedhabitation_2.set('fieldImages', {'ID': 'Hidden', 'NATURE': 'TextEdit', 'NAT_DETAIL': 'Hidden', 'TOPONYME': 'TextEdit', 'STATUT_TOP': 'Hidden', 'IMPORTANCE': 'TextEdit', 'FICTIF': 'Hidden', 'ETAT': 'TextEdit', 'DETRUIT': 'Hidden', 'DATE_CREAT': 'Hidden', 'DATE_MAJ': 'Hidden', 'DATE_DESTR': 'Hidden', 'DATE_APP': 'Hidden', 'DATE_CONF': 'Hidden', 'SOURCE': 'Hidden', 'ID_SOURCE': 'Hidden', 'ACQU_PLANI': 'Hidden', 'PREC_PLANI': 'Hidden', 'ID_BAN': 'Hidden', });
lyr_Surfacedecommuneenha_3.set('fieldImages', {'ID': 'Hidden', 'INSEE_COM': 'Hidden', 'INSEE_ARR': 'Hidden', 'INSEE_COL': 'Hidden', 'INSEE_DEP': 'Hidden', 'INSEE_REG': 'Hidden', 'POPULATION': 'Range', 'SURFACE_HA': 'Range', 'DETRUIT': 'Hidden', 'DATE_CREAT': 'Hidden', 'DATE_MAJ': 'Hidden', 'DATE_DESTR': 'Hidden', 'DATE_APP': 'Hidden', 'DATE_CONF': 'Hidden', 'CODE_POST': 'TextEdit', 'NOM': 'TextEdit', 'CL_ARROND': 'TextEdit', 'CL_COLLTER': 'Hidden', 'CL_DEPART': 'TextEdit', 'CL_REGION': 'TextEdit', 'CAPITALE': 'Hidden', 'DATE_RCT': 'Hidden', 'RECENSEUR': 'Hidden', 'SIREN_EPCI': 'Hidden', 'ID_CH_LIEU': 'Hidden', 'ID_AUT_ADM': 'Hidden', 'CODE_SIREN': 'Hidden', });
lyr_Arrondissement_1.set('fieldLabels', {'NOM': 'inline label - always visible', });
lyr_Zonedhabitation_2.set('fieldLabels', {'NATURE': 'inline label - always visible', 'TOPONYME': 'inline label - always visible', 'IMPORTANCE': 'inline label - visible with data', 'ETAT': 'inline label - always visible', });
lyr_Surfacedecommuneenha_3.set('fieldLabels', {'POPULATION': 'inline label - always visible', 'SURFACE_HA': 'inline label - always visible', 'CODE_POST': 'inline label - always visible', 'NOM': 'inline label - always visible', 'CL_ARROND': 'inline label - always visible', 'CL_DEPART': 'inline label - always visible', 'CL_REGION': 'inline label - always visible', });
lyr_Surfacedecommuneenha_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});