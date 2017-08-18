'use strict';

var APP = APP || {};

$(function() {
    $('#buttons').hide();

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

     $('main').on('click-image', function(event, imageId) {
        console.log("main click-on-image; "+imageId);
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

//    $('.js-search-results').on('click', '.box img', function() {
//        console.log("--- js-search-results click .box img");
//        var imageId = parseInt($(this).attr('data-item-id'));
//        console.log("imageId "+imageId);
//        $('main').trigger('click-image', imageId);
//    });

    $('.js-search-results').on('click', '.box .tooltip', function() {
        console.log("--- js-search-results click .box tooltip");
        var imageId = parseInt($(this).children("img").attr('data-item-id'));
        console.log("imageId "+imageId);
        $('main').trigger('click-image', imageId);
    });

    var testQuery = function(query) {
        APP.model.getDataFromApi(query);
    };

    testQuery("lunch");
});
