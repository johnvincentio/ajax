'use strict';

var APP = APP || {};

$(function() {

/* ----------------------------------- */
/* Custom events */
/* ----------------------------------- */

    $('main').on('model-changed', function() {      /* Model has changed */
        console.log("$('main').on('model-changed')");
        $('main').trigger('render-search-data');
    });

    $('main').on('render-search-data', function() {      /* Render content */
        console.log("$('main').on('render-search-data')");
        APP.views.renderSearchContent(APP.model.storage, $('.js-search-results'));
    });

     $('main').on('click-image-youtube', function(event, imageId) {
        console.log("main click-image-youtube; "+imageId);
        var url = APP.model.getPlayVideoUrl(imageId);
        console.log("url "+url);
        window.open(url, '_blank');
     });

/* ----------------------------------- */
/* Application events */
/* ----------------------------------- */

    $('.js-search-form').submit(function(e) {
        console.log(">>> .js-search-form");
        e.preventDefault();
        var query = $(this).find('.js-query').val();
        APP.model.getDataFromApi(query);
        this.reset();
        console.log("<<< .js-search-form");
    });

    $('.js-search-results').on('click', '.box .tooltip', function(event) {
        console.log("--- js-search-results click .box .tooltip");
        event.preventDefault();
        var ahref = $(this).parent().find('.fancybox-media');
        ahref.fancybox({
            openEffect  : 'none',
            closeEffect : 'none',
            helpers : {
                media : {}
            }
        });
        ahref.click();
    });

    var testQuery = function(query) {
        APP.model.getDataFromApi(query);
    };

    testQuery("lunch");
});
