// LiveDoc - Toolset to help creating mocks as a part of live documentation.
// by Mark Cipolla, http://www.markcipolla.com

// Version 0.1.0
// Full source at https://github.com/markcipolla/LiveMoc
// Copyright (c) 2012 Mark Cipolla

// MIT License, https://github.com/markcipolla/LiveMoc/blob/master/LICENSE.md

LiveMoc = {};

LiveMoc.Tools = (function () {
    var init = function() {
        $('body').prepend("<div id='livemoc'><h1>Toggle Highlight on Clickable Areas</h1></div>")
        $('#livemoc h1').toggle(function() {
            $('.livemoc_clickable').stop().animate({opacity: 0.25}, 300);
        },
        function() {
            $('.livemoc_clickable').stop().animate({opacity: 0}, 300);
        });

        // Finally, unhide the whole she-bang
        $("#livemoc").fadeIn("slow");
    };

    // Public API
    return {
        init: init
    };
})();

$(document).ready(function () {
     LiveMoc.Tools.init();
});