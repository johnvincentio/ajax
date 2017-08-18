'use strict';

var APP = APP || {};

$(function() {
    $('#buttons').hide();

/* ----------------------------------- */
/* Application events */
/* ----------------------------------- */

    $('main').on('model-changed', function() {      /* Model has changed */
        console.log("$('main').on('model-changed')");
         $('main').trigger('render-search-data');
    });

    $('main').on('render-search-data', function() {      /* Render content */
        console.log("$('main').on('render-search-data')");
        APP.views.renderSearchContent(APP.model.storage, $('.js-search-results'));
    });

    $('.js-search-form').submit(function(e) {
        console.log(">>> .js-search-form");
        e.preventDefault();
        var query = $(this).find('.js-query').val();
        APP.model.getDataFromApi(query);
        this.reset();
        console.log("<<< .js-search-form");
    });

    $('.js-search-results').on('click', '.box img', function() {
//        console.log("click on image");
        var imageId = parseInt($(this).attr('data-item-id'));
//        console.log("imageId "+imageId);
        var url = APP.model.getPlayVideoUrl(imageId);
//        console.log("url "+url);
        window.open(url, '_blank');
    });

    var testQuery = function(query) {
        APP.model.getDataFromApi(query);
    };

    testQuery("lunch");
});
