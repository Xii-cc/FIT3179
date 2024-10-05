var vg_1 = "dot_map.vg.json";
vegaEmbed("#dot_map", vg_1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "proportional_symbol_map_mly.vg.json";
vegaEmbed("#proportional_symbol_map", vg_2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);