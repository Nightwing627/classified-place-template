"use strict";
var markers = new Array();
var marker_clusterer ='';
var defaulColor =''; // default color

$(document).on('ready', function () {
    /* init */
    var _headerSlider= $("#header-slider");
    
    /* placeholder for IE */
    $.support.placeholder = ('placeholder' in document.createElement('input'));
    //fix for IE
    if (!$.support.placeholder) {
        $("[placeholder]").on('focus', function () {
            if ($(this).val() === $(this).attr("placeholder"))
                $(this).val("");
        }).blur(function () {
            if ($(this).val() === "")
                $(this).val($(this).attr("placeholder"));
        }).blur();

        $("[placeholder]").parents("form").submit(function () {
            $(this).find('[placeholder]').each(function () {
                if ($(this).val() === $(this).attr("placeholder")) {
                    $(this).val("");
                }
            });
        });
    }
    /* end placeholder for IE */

    /* Start slider touch */
    _headerSlider.swiperight(function () {
        $(this).carousel('prev');
    });
    _headerSlider.swipeleft(function () {
        $(this).carousel('next');
    });
    /* End slider touch */

    _headerSlider.on('mousedown', function () {
        $(document).on('mousemove', function (e) {
            $('#header-slider').css('cursor', 'pointer')
        })
        $(this).unbind('mouseup');
        $(this).on('mouseup', function (e) {
            $('#header-slider').css('cursor', 'auto')
            document.onmousemove = null;
            $(document).unbind('mousemove')
        })
    });

    //dropdown select
    $('.selectpicker').selectpicker({
        style: 'selectpicker-primary',
    });
    
    /* Start menu dropdown */
    var _w = $(window);
    $('#main-menu .dropdown').on({
            'mouseover' : function () {
                            if(_w.width()>767)
                                $(this).addClass('active').find('.dropdown-menu').stop(true, true).delay(100).fadeIn('fast');
                        },
            'mouseout' :function () {
                            if(_w.width()>767)
                                $(this).removeClass('active').find('.dropdown-menu').stop(true, true).delay(100).fadeOut('fast');
                        }
    });
    
    $('#main-menu .dropdown-menu').on({
            'mouseover': function () {
                            if(_w.width()>767)
                                    $(this).stop(true, true);
                    },
            'mouseout': function () {
                            if(_w.width()>767)
                                $(this).stop(true, true).delay(100).fadeOut('fast');
                    }
    });
    /* End menu dropdown */
    
    /* Start no drag and selected */
    // Prevent anchor links and buttons and .nodrag items from being dragged
    $('.carousel-inner .carousel-item img, .no-drag, .carousel-inner *')
            .css('-moz-user-select', 'none')
            .css('-webkit-user-select', 'none')
            .on('selectstart', function (e) {
                e.preventDefault();
                return false;
            })
            .on('draggesture', function (e) {
                e.preventDefault();
                return false;
            })
            .on('draggable', function (e) {
                e.preventDefault();
                return false;
            })
            .on('dragstart', function (e) {
                e.preventDefault();
                return false;
            });
    /* End no drag and selected */

    /* Start carusel */
    var owlAgencies = $('.agencies-corousel .owl-carousel');
    if($('body').hasClass('full-width'))
        owlAgencies.owlCarousel({
            responsiveClass: true,
            margin: 30,
            responsive: {
                0: {
                    items: 1,
                },
                670: {
                    items: 2,
                },
                1200: {
                    items: 3,
                },
                1400: {
                    items: 4,
                },
                2100: {
                    items: 6,
                }
            }
        });
    else 
        owlAgencies.owlCarousel({
            responsiveClass: true,
            margin: 30,
            responsive: {
                0: {
                    items: 1,
                },
                670: {
                    items: 2,
                },
                1200: {
                    items: 3,
                }
            }});
    // Go to the next item
    $('.agencies-corousel .customNextBtn').on('click', function (e) {
        e.preventDefault();
        owlAgencies.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.agencies-corousel .customPrevBtn').on('click', function (e) {
        e.preventDefault();
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owlAgencies.trigger('prev.owl.carousel', [300]);
    })

    var owlAgents = $('#agents-corousel .owl-carousel');
    if($('body').hasClass('full-width'))
        owlAgents.owlCarousel({
            margin: 30,
            responsiveClass: true,
            loop: true,
            responsive: {
                0: {
                    items: 1,
                },
                670: {
                    items: 2,
                },
                1200: {
                    items: 3,
                },
                1400: {
                    items: 4,
                },
                2100: {
                    items: 6,
                }
            }
        });
    else
        owlAgents.owlCarousel({
            margin: 30,
            responsiveClass: true,
            loop: true,
            responsive: {
                0: {
                    items: 1,
                },
                670: {
                    items: 2,
                },
                1200: {
                    items: 3,
                }
            }
        });
    // Go to the next item
    $('.agents-corousel .customNextBtn').on('click', function (e) {
        e.preventDefault();
        owlAgents.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.agents-corousel .customPrevBtn').on('click', function (e) {
        e.preventDefault();
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owlAgents.trigger('prev.owl.carousel', [300]);
    })

    // agents carousel big
    var owlAgentsBig = $('#agents-corousel-big .owl-carousel');
    owlAgentsBig.owlCarousel({
        margin: 30,
        responsiveClass: true,
        loop: true,
        responsive: {
            0: {
                items: 1,
            },
            670: {
                items: 2,
            },
            1200: {
                items: 3,
            },
            1400: {
                items: 4,
            },
            2100: {
                items: 6,
            }
        }
    });
    // Go to the next item
    $('#agents-corousel-big .customNextBtn').on('click', function (e) {
        e.preventDefault();
        owlAgentsBig.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('#agents-corousel-big .customPrevBtn').on('click', function (e) {
        e.preventDefault();
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owlAgentsBig.trigger('prev.owl.carousel', [300]);
    })

    // agents carousel big
    if ($('#property-corousel').length) {
        var owlAgentsBig2 = $('#property-corousel .owl-carousel');
        owlAgentsBig2.owlCarousel({
            margin: 30,
            responsiveClass: true,
            loop: true,
            responsive: {
                0: {
                    items: 1,
                },
                670: {
                    items: 2,
                },
                1000: {
                    items: 3,
                },
                1200: {
                    items: 4,
                }
            }
        });
        // Go to the next item
        $('#property-corousel .customNextBtn').on('click', function (e) {
            e.preventDefault();
            owlAgentsBig2.trigger('next.owl.carousel');
        })
        // Go to the previous item
        $('#property-corousel .customPrevBtn').on('click', function (e) {
            e.preventDefault();
            // With optional speed parameter
            // Parameters has to be in square bracket '[]'
            owlAgentsBig2.trigger('prev.owl.carousel', [300]);
        })
    }

    /* End carusel */

    /* Start btn-scroll-up */
    var _bs =$('#btn-scroll-up');
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 500) {
            _bs.css('display', 'block');
        } else {
            _bs.css('display', 'none');
        }
    });

    _bs.on('click', function () {
        $('html,body').animate({scrollTop: 0}, 'slow');
        return false;
    });
    /* End btn-scroll-up */

    /* Start Top bar fixed */
    $(window).on('scroll', function () {
        var _t = $('.top-box');
        if ($(this).scrollTop() > 250) {
            _t.addClass('top-bar-fixed');
        } else {
            _t.removeClass('top-bar-fixed');
        }
    });

    //sticky
    // Custom 
    var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
        var stickyHeight = sticky.outerHeight();
        var stickyTop = stickyWrapper.offset().top;
        if (scrollElement.scrollTop() >= stickyTop) {
            stickyWrapper.height(stickyHeight);
            sticky.addClass("is-sticky");
        } else {
            sticky.removeClass("is-sticky");
            stickyWrapper.height('auto');
        }
    };

    // Find all data-toggle="sticky-onscroll" elements
    $('[data-toggle="sticky-onscroll"]').each(function () {
        var sticky = $(this);
        var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
        sticky.before(stickyWrapper);
        sticky.addClass('sticky');

        // Scroll & resize events
        $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
            stickyToggle(sticky, stickyWrapper, $(this));

            if ($(window).scrollTop() === 0) {
                sticky.removeClass("is-sticky");
                stickyWrapper.height('auto');
            }
        });

        // On page load
        stickyToggle(sticky, stickyWrapper, $(window));
    });
    /* End Top bar fixed */

    /* Start Image gallery 
     *    use css/blueimp-gallery.min.css
     *    use js/blueimp-gallery.min.js
     *    Site https://github.com/blueimp/Gallery/blob/master/README.md#setup
     */

    $('body').append('<div id="blueimp-gallery" class="blueimp-gallery">\n\
                    <div class="slides"></div>\n\
                    <h3 class="title"></h3>\n\
                    <a class="prev">&lsaquo;</a>\n\
                    <a class="next">&rsaquo;</a>\n\
                    <a class="close">&times;</a>\n\
                    <a class="play-pause"></a>\n\
                    <ol class="indicator"></ol>\n\
                    </div>')
    $(document).on('touchstart click', '.images-gallery a.preview', function (e) {
        e.preventDefault();
        var myLinks = new Array();
        var current = $(this).attr('href');
        var curIndex = 0;

        $('.images-gallery a.preview').each(function (i) {
            var img_href = $(this).attr('href');
            myLinks[i] = img_href;
            if (current === img_href)
                curIndex = i;
        });
        var options = {index: curIndex}
        blueimp.Gallery(myLinks, options);
        return false;
    });

    /* End Image gallery */

    /* WorldMapGenerator */
    var worldmap = $('.worldmapgenerator');
    if (worldmap && worldmap.length){
        worldmap.WorldMapGenerator({
            width: 150,
            height: 70,
            hoverColor: '#004790',
            selectedColor: '#004790',
            mapColor: '#BBB',
            defaultCss: true,
            selectBox: true,
            quickLink: [{
                    "Amsterdam": "Europe/Amsterdam",
                    "Budapest": "Europe/Budapest",
                    "London": "Europe/London",
                    "Madrid": "Europe/Madrid",
                    "Malta": "Europe/Malta",
                    "Dublin": "Europe/Dublin",
                    "Oslo": "Europe/Oslo",
                    "Paris": "Europe/Paris",
                    "Prague": "Europe/Prague",
                    "Riga": "Europe/Riga",
                    "Sofia": "Europe/Sofia",
                    "Vilnius": "Europe/Vilnius",
                    "Warsaw": "Europe/Warsaw",
                    "Zagreb": "Europe/Zagreb"
                }],
            showHoverText: true
        });
        var _worldmap = getParameterByName('geolocation');
        if (_worldmap) {
            var locationWorldMapGenerator = '';
            locationWorldMapGenerator = _worldmap.toLowerCase();

            switch (locationWorldMapGenerator) {
                case 'amsterdam':
                    locationWorldMapGenerator = "Europe/Amsterdam";
                    break;
                case 'andorra':
                    locationWorldMapGenerator = "Europe/Andorra";
                    break;
                case 'athens':
                    locationWorldMapGenerator = "Europe/Athens";
                    break;
                case 'belgrade':
                    locationWorldMapGenerator = "Europe/Belgrade";
                    break;
                case 'bucharest':
                    locationWorldMapGenerator = "Europe/Bucharest";
                    break;
                case 'berlin':
                    locationWorldMapGenerator = "Europe/Berlin";
                    break;
                case 'budapest':
                    locationWorldMapGenerator = "Europe/Budapest";
                    break;
                case 'chisinau':
                    locationWorldMapGenerator = "Europe/Chisinau";
                    break;
                case 'bratislava':
                    locationWorldMapGenerator = "Europe/Bratislava";
                    break;
                case 'brussels':
                    locationWorldMapGenerator = "Europe/Brussels";
                    break;
                case 'copenhagen':
                    locationWorldMapGenerator = "Europe/Copenhagen";
                    break;
                case 'dublin':
                    locationWorldMapGenerator = "Europe/Dublin";
                    break;
                case 'gibraltar':
                    locationWorldMapGenerator = "Europe/Gibraltar";
                    break;
                case 'guernsey':
                    locationWorldMapGenerator = "Europe/Guernsey";
                    break;
                case 'helsinki':
                    locationWorldMapGenerator = "Europe/Helsinki";
                    break;
                case 'isle_of_man':
                    locationWorldMapGenerator = "Europe/Isle_of_Man";
                    break;
                case 'istanbul':
                    locationWorldMapGenerator = "Europe/Istanbul";
                    break;
                case 'jersey':
                    locationWorldMapGenerator = "Europe/Jersey";
                    break;
                case 'kaliningrad':
                    locationWorldMapGenerator = "Europe/Kaliningrad";
                    break;
                case 'kiev':
                    locationWorldMapGenerator = "Europe/Kiev";
                    break;
                case 'lisbon':
                    locationWorldMapGenerator = "Europe/Lisbon";
                    break;
                case 'ljubljana':
                    locationWorldMapGenerator = "Europe/Ljubljana";
                    break;
                case 'london':
                    locationWorldMapGenerator = "Europe/London";
                    break;
                case 'luxembourg':
                    locationWorldMapGenerator = "Europe/Luxembourg";
                    break;
                case 'madrid':
                    locationWorldMapGenerator = "Europe/Madrid";
                    break;
                case 'malta':
                    locationWorldMapGenerator = "Europe/Malta";
                    break;
                case 'mariehamn':
                    locationWorldMapGenerator = "Europe/Mariehamn";
                    break;
                case 'minsk':
                    locationWorldMapGenerator = "Europe/Minsk";
                    break;
                case 'monaco':
                    locationWorldMapGenerator = "Europe/Monaco";
                    break;
                case 'moscow':
                    locationWorldMapGenerator = "Europe/Moscow";
                    break;
                case 'oslo':
                    locationWorldMapGenerator = "Europe/Oslo";
                    break;
                case 'paris':
                    locationWorldMapGenerator = "Europe/Paris";
                    break;
                case 'podgorica':
                    locationWorldMapGenerator = "Europe/Podgorica";
                    break;
                case 'prague':
                    locationWorldMapGenerator = "Europe/Prague";
                    break;
                case 'riga':
                    locationWorldMapGenerator = "Europe/Riga";
                    break;
                case 'rome':
                    locationWorldMapGenerator = "Europe/Rome";
                    break;
                case 'samara':
                    locationWorldMapGenerator = "Europe/Samara";
                    break;
                case 'san_marino':
                    locationWorldMapGenerator = "Europe/San_Marino";
                    break;
                case 'sarajevo':
                    locationWorldMapGenerator = "Europe/Sarajevo";
                    break;
                case 'simferopol':
                    locationWorldMapGenerator = "Europe/Simferopol";
                    break;
                case 'skopje':
                    locationWorldMapGenerator = "Europe/Skopje";
                    break;
                case 'sofia':
                    locationWorldMapGenerator = "Europe/Sofia";
                    break;
                case 'stockholm':
                    locationWorldMapGenerator = "Europe/Stockholm";
                    break;
                case 'tallinn':
                    locationWorldMapGenerator = "Europe/Tallinn";
                    break;
                case 'vaduz':
                    locationWorldMapGenerator = "Europe/Vaduz";
                    break;
                case 'tirane':
                    locationWorldMapGenerator = "Europe/Tirane";
                    break;
                case 'vatican':
                    locationWorldMapGenerator = "Europe/Vatican";
                    break;
                case 'uzhgorod':
                    locationWorldMapGenerator = "Europe/Uzhgorod";
                    break;
                case 'vienna':
                    locationWorldMapGenerator = "Europe/Vienna";
                    break;
                case 'vilnius':
                    locationWorldMapGenerator = "Europe/Vilnius";
                    break;
                case 'volgograd':
                    locationWorldMapGenerator = "Europe/Volgograd";
                    break;
                case 'warsaw':
                    locationWorldMapGenerator = "Europe/Warsaw";
                    break;
                case 'zagreb':
                    locationWorldMapGenerator = "Europe/Zagreb";
                    break;
                case 'zaporozhye':
                    locationWorldMapGenerator = "Europe/Zaporozhye";
                    break;
                case 'zurich':
                    locationWorldMapGenerator = "Europe/Zurich";
                    break;
            }
            worldmap.data('WorldMapGenerator').setValue(locationWorldMapGenerator)
        }
    }
    $('.worldmapgenerator polygon, .quickLink span').on('click', function () {
        var hash = $(this).attr('data-timezone') || $(this).attr('data-select');
        hash = hash.split('/');
        if (hash[1]) {
            var hash = hash[1];
            var hash = hash.toLowerCase();
            history.pushState(null, null, location.pathname + '?geolocation=' + hash);
        }
    })
    /* end WorldMapGenerator */

    /* start big slider */
    if ($('.slider-full-height').length) {
        var height = $(window).height() || FALSE;
        var _a = $('.header-slider .carousel.slider-tall .carousel-inner .item');
        if (height)
            _a.height(height);

        $(window).resize(function () {
            var height = $(window).height() || FALSE;
            if (height)
                _a.height(height);
        })
    }
    /* end big slider */

    $('#search-additional').on('click', function () {
        if ($('#form-addittional').length) {
            var _fa = $('#form-addittional');
            var _ai = $('#search-additional i');
            var form = $(this).closest('.search-form ');
            form.addClass('open-form');
            var _searchbtn =$('#search-btn').parent();
            if (_fa.is(':visible')) {
                _ai.removeClass('icon-caret-up').addClass('icon-caret-down');
                 form.removeClass('open-form');
            } else {
                _ai.removeClass('icon-caret-down').addClass('icon-caret-up');
                form.addClass('open-form');
            }
            _fa.slideToggle();
        }
    })

    /* start image cover ( use class object-fit-container  as div.object-fit-container > img) */
    /*"use strict";*/

    if (!Modernizr.prefixed('objectFit')) {
        $('.object-fit-container, .image-box, .img-circle-cover, .header-slider .item, #property-slider .item').each(function () {
            var $container = $(this);
            $(this).addClass('object-fit-container');
            var imgUrl = $container.find('img').prop('src');
            if (imgUrl) {
                $container
                        .css('background-image', 'url("' + imgUrl + '")')
                        .addClass('compat-object-fit');
            }
        });
    }

    $('.news-thumbnail, .image-cover-div').each(function () {
        var $container = $(this);
        $(this).addClass('object-fit-container');
        var imgUrl = $container.find('img').prop('src');
        if (imgUrl) {
            $container.addClass('compat-object-fit')
                    .prepend('<div class="object-fit-imagediv"></div>').find('.object-fit-imagediv')
                    .css('background-image', 'url("' + imgUrl + '")');
        }
    });

    /* end image cover */

    $('.property-card  #more_category').on('click', function () {
        $(this).closest('.property-card ').find('.treefield-categories-more').slideToggle('fast');
        $('.property-card').not($(this).closest('.property-card')).find('.treefield-categories-more').slideUp('fast')
    })
    
    $("#route_from_button").on('click', function () {
        window.open("https://maps.google.com/maps?saddr=" + $("#route_from").val() + "&daddr=Ilica 345, HR-10000 Zagreb@45.812231, 15.920618", '_blank');
        return false;
    });
    
    /* load extern scripts */
    if($('#main-map').length){
        LoadMap_main(defaulColor);
    }
    
    if($('#property-map').length){
        map_property();
    }
    
    if($('#contact-map').length){
        contactMap();
    }
    
    if(typeof custom_template_style === 'function'){
        custom_template_style();
    }
    
    if(typeof footable_init === 'function'){
        footable_init();
    }
    
    if(typeof palette_init === 'function'){
        palette_init();
    }
    
    if(typeof codemirror_init === 'function'){
        codemirror_init();
    }
    
    if(defaulColor && defaulColor!=='') {
        //logo 
        var _l = $('.header-inner .logo a').eq(0);
        _l.find('img').eq(0).attr('src', 'assets/img/logo/'+defaulColor+'/logo.png');
        _l.find('img.mini-logo').attr('src', 'assets/img/logo/'+defaulColor+'/logo_mini.png');
    }
    
})

function print_page() {
    window.print();
}

function getParameterByName(name, url) {
    if (typeof url === 'undefined')
        url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
    if (!results)
        return null;
    if (!results[2])
        return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}