const embedOptions = { actions: false };

vegaEmbed("#map_state", "vis/01_map_state.vg.json", embedOptions);

vegaEmbed("#line_total_migration", "vis/02_line_total_migration.vg.json", {
  actions: false,
  bindingsContainerId: "line_total_migration_controls"
});

vegaEmbed("#stacked_area_status", "vis/03_stacked_area_status.vg.json", embedOptions);

vegaEmbed("#bar_top_countries", "vis/04_bar_top_countries.vg.json", embedOptions);
vegaEmbed("#flow_map", "vis/05_flow_map_world.vg.json", embedOptions);
vegaEmbed("#lollipop_region_growth", "vis/06_lollipop_region_growth.vg.json", embedOptions);

vegaEmbed("#visa_bubble", "vis/07_visa_industry_bubble.vg.json", {
  actions: false,
  bindingsContainerId: "visa_bubble_controls"
});

vegaEmbed("#norm_area", "vis/08_normalized_area.vg.json", embedOptions);
vegaEmbed("#stacked_bar_visa", "vis/09_stacked_bar_visa.vg.json", embedOptions);
vegaEmbed("#heatmap_temp_visa", "vis/10_heatmap_temp_visa.vg.json", embedOptions);
