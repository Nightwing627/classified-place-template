"use strict";
function custom_template_style(){
    var boxed = false; 
    var hide_palette = false;

    if(boxed) {
        $('.custom-palette-box input[name="type-site"][value="boxed"]').attr('checked','checked');
        $('body').addClass('boxed');
    }

    if(hide_palette) {
        $('.custom-palette').css('display','none');
    }
}