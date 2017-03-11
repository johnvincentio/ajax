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
        console.log("<<< .js-search-form");
    });

    var testQuery = function(query) {
        APP.model.getDataFromApi(query);
    };

    testQuery("lunch");
});
