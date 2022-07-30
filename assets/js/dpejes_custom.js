"use strict";
/* start implement dpe-->   */
    dpe.show_numbers = true;
    dpe.energy_title1 = "Energy efficient";
	dpe.energy_title2 = "80 kWh EP ";
	dpe.energy_title3 = "";
    dpe.gg_title2 = "30 kg CO2 ";
	dpe.gg_title1 = "Gas emission";
	
    if(!dpe.show_numbers)
    {
    	dpe.energy_title2 = "";
        dpe.gg_title2 = "";
    }
    
	/* adjusts the height of the large thumbnails (the width is automatically adjusted proportionally)
	 * possible values: de 180 a 312 
	 */
	dpe.canvas_height = 210;
	/*not to display the unit gas emissions greenhouse in the right column: */
	dpe.gg_unit = '';
	/*  adjusts the height of the small thumbnails
	 * possible values: 35
	 */
	dpe.sticker_height = 35;
	/* can change the attribute of div tags that indicates it is a tag */
	dpe.tag_attribute = 'attributdpe';
	dpe.tag_attribute = 'title';
	/* Launches replacing the contents of the div right by good vignettes */
	dpe.all();
/* end implement dpe-->   */