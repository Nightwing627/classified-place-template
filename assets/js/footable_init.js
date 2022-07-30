"use strict";
/*
 * http://fooplugins.github.io/FooTable/docs/getting-started.html
 */    
function footable_init() {
    $('.footable').footable({
        "filtering": {
        "enabled": false
              },
    });
    
    $('.footable-sort').footable({
        "filtering": {
        "enabled": true
              },
    });
}
