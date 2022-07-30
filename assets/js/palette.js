"use strict";
/* Start Palette */
/*
 * Colorpicker http://mjolnic.com/bootstrap-colorpicker/
 * 
 * 
 */
function palette_init() {

    /* ini  colorpicker */
    $('#color-primary').colorpicker()
            .colorpicker('setValue', '#0f7ad5');
    $('#color-secondary').colorpicker()
            .colorpicker('setValue', '#004790');
    $('#color-background').colorpicker()
            .colorpicker('setValue', '#EDEEF0');
    $('#color-focus').colorpicker()
            .colorpicker('setValue', '#F50073');
    $('#badges-primary').colorpicker()
            .colorpicker('setValue', '#B7CD08');
    $('#badges-secondary').colorpicker()
            .colorpicker('setValue', '#7D881E');
    var _h = $('head');
    var _body = $('body');
    /* end ini  colorpicker */

    // close and open palette panel
    $('.custom-palette-btn').on('click', function () {
        $('.custom-palette').toggleClass('palette-closed');
    })

    // change primary color
    $('#color-primary').colorpicker().on('changeColor.colorpicker', function (event) {
        var color = event.color.toString();
        $('.color-primary').css('background-color', color);
        $('.border-color-primary').css('border-color', color);
        $('.text-color-primary').css('color', color);
        $('.widget .widget-header').css('border-color', color);
        $('.border-color-primary').css('border-color', color);
        /* menu */
        $(".dropdown-item:not(.active)").on({
                'mouseover': function () {
                                $(this).css("background-color", color);
                            }, 
                'mouseout': function () {
                                $(this).css("background-color", "transparent");
                            }
                });

        // main menu .active
        $(".menu .dropdown-item.active ").css("background-color", color);
        /*end menu */
        
        var style = '';
        style = '.news:not(.section-parallax) .card .title a, .primary-hover,.infobox .infobox-footer, .infobox .infobox-link-btn, .infobox .title a,.property-card .property-card-box .property-card-title, .property-card .property-card-box .property-card-title a, .agents-corousel-item .agent-details .mail{ color:' + color + ';}';
        style += '.color-primary-easy, .section-title span:after,.section-title span:before,.treefield-categories .treefield-box-item:hover,.primary-hover:hover, .infobox .infobox-link-btn:hover,.infobox .title a:hover, .menu .nav >.nav-item .nav-link:hover, .menu .active .nav-link, .menu .nav-link.active, .agents-corousel-item .agent-details .mail:hover, .property-card .property-card-box .property-card-title a:hover {\n\
                    background-color: ' + color + ';\n\
                 }';
        
        if ($('#palette-styles-pr').length) {
            _h.find('#palette-styles-pr').html(style);
        } else {
            _h.append('<style id="palette-styles-pr">' + style + '</style>');
        }
        
        /* svg image */
        var obj = $(".page-body object");
        obj.each(function(){
            var svg = this.contentDocument.querySelector("svg");
            $('path,polygon', svg).css('fill', color)
        })
    });

    // change secondary color
    $('#color-secondary').colorpicker().on('changeColor.colorpicker', function (event) {
        var color = event.color.toString();
        $('.color-secondary').css('background-color', color);
        $('.border-color-secondary').css('border-color', color);
        
        var style = '';
        style += 'body .pagination-carousel li a:hover,body .pagination-carousel li.active a, body .pagination li.page-item a:hover, body .pagination li.page-item a.active, .header .top-bar .pull-right {\n\
                    background-color: ' + color + ';\n\
                 }';
        
        if ($('#palette-styles-pr-s').length) {
            _h.find('#palette-styles-pr-s').html(style);
        } else {
            _h.append('<style id="palette-styles-pr-s">' + style + '</style>');
        }
    });
    
    // change focus color
    $('#color-focus').colorpicker().on('changeColor.colorpicker', function (event) {
        var color = event.color.toString();
        $('.focus-color').css('cssText', 'background-color: '+color+' !important');
        var style = '';
        style += '.focus-color-easy {\n\
                    background-color: ' + color + ';\n\
                 }';
        
        if ($('#palette-styles-focus').length) {
            _h.find('#palette-styles-focus').html(style);
        } else {
            _h.append('<style id="palette-styles-focus">' + style + '</style>');
        }
    });
    
    // change focus color
    $('#badges-primary').colorpicker().on('changeColor.colorpicker', function (event) {
        var color = event.color.toString();
        $('.property-card .budget, .label-tag-warning').css('cssText', 'background-color: '+color+' ');
    });
    
    // change badges-secondary color
    $('#badges-secondary').colorpicker().on('changeColor.colorpicker', function (event) {
        var color = event.color.toString();
         $('.label-tag-primary').css('cssText', 'background-color: '+color+' ');
    });

    // chose prepared color
    $('#palette-colors-prepared a').on('click', function (e) {
        e.preventDefault();
        var primary = '';
        primary = $(this).closest('li').attr('data-primary-color');
        if (primary)
            $('#color-primary').colorpicker('setValue', primary);

        var secondary = '';
        secondary = $(this).closest('li').attr('data-secondary-color');
        if (secondary)
            $('#color-secondary').colorpicker('setValue', secondary);

        var focus = '';
        focus = $(this).closest('li').attr('data-focus-color');
        if (focus){
            $('#color-focus').colorpicker('setValue', focus);
            }

        var focus = '';
        focus = $(this).closest('li').attr('data-focus-color');
        if (focus){
            $('#color-focus').colorpicker('setValue', focus);
            }

        var badgespr = '';
        badgespr = $(this).closest('li').attr('data-badgesprimary-color');
        if (badgespr){
            $('#badges-primary').colorpicker('setValue', badgespr);
            }

        var badgessecondary = '';
        badgessecondary = $(this).closest('li').attr('data-badgessecondary-color');
        if (badgessecondary){
            $('#badges-secondary').colorpicker('setValue', badgessecondary);
            }
            
        /* prepered by id color */
        var colorid = '';
        colorid = $(this).closest('li').attr('data-color-id');
        if (colorid){

            if($('#main-map').length){
                if(typeof LoadMap_main === 'function'){
                    setAllMap(null);
                    markers = [];
                    if(marker_clusterer != null)
                        marker_clusterer.clearMarkers();
                    LoadMap_main(colorid);
                }
            }
            
            //logo 
            var _l = $('.header-inner .logo a').eq(0);
            _l.find('img').eq(0).attr('src', 'assets/img/logo/'+colorid+'/logo.png');
            _l.find('img.mini-logo').attr('src', 'assets/img/logo/'+colorid+'/logo_mini.png');
        }
        
    })

    // change background color
    $('#color-background').colorpicker().on('changeColor.colorpicker', function (event) {
        var color = event.color.toString();
        _body.css('background', color);
    });

    // choose preperad bg-color boxed
    $('#palette-backgroundimage-prepared a').on('click', function (e) {
        e.preventDefault();
        var bg;
        var style;
        bg = $(this).closest('li').attr('data-backgroundimage') || '';
        style = $(this).closest('li').attr('data-backgroundimage-style') || '';

        $('#palette-backgroundimage-prepared a').removeClass('active');
        $(this).addClass('active');
        var _par = $('.section-parallax');
        if (bg && style) {
            if (style === 'fixed') {
                _body.css('background', 'url(' + bg + ') no-repeat fixed')
                    .css('background-size', 'cover');
                _par.css('background', 'url(' + bg + ') no-repeat fixed')
                    .css('background-size', 'cover');
            } else if (style === 'repeat') {
                _body.css('background', 'url(' + bg + ') repeat')
                     .css('background-size', 'inherit');
                _par.css('background', 'url(' + bg + ') repeat')
                    .css('background-size', 'inherit');
            } else {
                _body.css('background', 'url(' + bg + ') no-repeat fixed');
                _par.css('background', 'url(' + bg + ') no-repeat fixed');
            }
        } else if (bg) {
            _body.css('background', 'url(' + bg + ') no-repeat fixed');
            _par.css('background', 'url(' + bg + ') no-repeat fixed');
        }
    })

    //type-site (full-width, wide)
    $('.custom-palette-box input[name="type-site"]').change(function (e) {
        e.preventDefault();
        _body.removeClass('full-width')
                .removeClass('boxed');
        _body.addClass($('.custom-palette-box input[name="type-site"]:checked').val());
    })

    //reset 
    $('#pallete-reset').on('click', function (e) {
        e.preventDefault();

        $('#color-primary').colorpicker('setValue', '#0f7ad5');
        $('#color-secondary').colorpicker('setValue', '#004790');
        $('#color-background').colorpicker('setValue', '#EDEEF0');
        $('#color-focus').colorpicker('setValue', '#F50073');
        _body.attr('class', '');
        var type = $('input[name="type-site"]').last().val();
        _body.attr('class', type);
        

        $('.color-primary').css('background-color', '#0f7ad5');
        $('.border-color-primary').css('border-color', '#0f7ad5');
        $('.text-color-primary').css('color', '#0f7ad5');
        $('.widget .widget-header').css('border-color', '#0f7ad5');

        // main menu
        $(".dropdown-item:not(.active)").on({
            'mouseover': function () {
                $(this).css("background-color", '#0f7ad5');
            },
            'mouseout': function () {
                $(this).css("background-color", "transparent");
            }
        });
        
        // main menu .active
        $(".menu .dropdown-item.active").css("background-color", '#0f7ad5');

        $('.color-secondary').css('background-color', '#004790');
        $('.focus-color').css('background-color', '#F50073');
        $('.border-color-secondary').css('border-color', '#004790');
        $('.border-color-primary').css('border-color', 'rgb(23, 133, 227)');

        $('#palette-backgroundimage-prepared a').removeClass('active');

        $('.custom-palette-box input[name="type-site"]').removeAttr('checked')
        $('.custom-palette-box input[name="type-site"][value=""]').attr('checked', 'checked');

        _body.css('background', 'url(assets/img/patterns/full-bg-road.jpg) no-repeat fixed')
                .css('background-size', 'cover');
        
        $('#badges-primary').colorpicker('setValue', '#B7CD08');
        $('#badges-secondary').colorpicker('setValue', '#7D881E');
        
        if($('#main-map').length){
            setAllMap(null);
            markers = [];
            if(marker_clusterer != null)
                marker_clusterer.clearMarkers();

            LoadMap_main();
        }
                    
        //logo 
        var _l = $('.header-inner .logo a').eq(0);
        _l.find('img').eq(0).attr('src', 'assets/img/logo/logo.png');
        _l.find('img.mini-logo').attr('src', 'assets/img/logo/logo_mini.png');
    })
    /* End Palette */

    /* Guid */
    _body.append('<div id="load_popup_modal_show_id" class="modal fade" tabindex="-1"></div>');
    var $modal = $('#load_popup_modal_show_id');

    $('#pallete-save').on('click',
            function (e) {
                e.preventDefault();
                $modal.load('guid_custum_template_style.html', {}, function () {
                    $modal.modal('show');
                });
            });
    /* End Guid */
};