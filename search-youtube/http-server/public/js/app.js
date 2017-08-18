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
        APP.views.renderSearchContent(APP.model.storage, $('.js-search-results'), $('#js-buttons'));
    });

/* ----------------------------------- */
/* Application events */
/* ----------------------------------- */

    $('.js-search-form').submit(function(e) {
        console.log(">>> .js-search-form");
        e.preventDefault();
        var query = $(this).find('.js-query').val();
        APP.model.getDataFromApiForSearch(query);
        this.reset();
        console.log("<<< .js-search-form");
    });

/*
Play the YouTube video in a Lightbox. Implemented using FancyBox.
*/
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

/*
In a new window, play the youtube video.
*/
//    $('.js-search-results').on('click', '.box .tooltip', function() {
//        console.log("--- js-search-results click .box tooltip");
//        var imageId = parseInt($(this).children("img").attr('data-item-id'));
//        console.log("imageId "+imageId);
//        var url = APP.model.getPlayVideoUrl(imageId);
//        console.log("url "+url);
//        window.open(url, '_blank');
//    });

/*
More button, Gets videos from this channel.
*/
    $('.js-search-results').on('click', '.box .more-button', function() {
        console.log(".js-search-results .box .more-button");
        var idx = parseInt($(this).closest('.box').find("img").attr('data-item-id'));
        console.log("idx "+idx);
        APP.model.getDataFromApiByChannel(idx);
    });

/*
Handle Previous button
*/
    $('#js-buttons').on('click', '.js-prev', function() {
        console.log("'#js-buttons .js-prev'");
        APP.model.getDataFromApiForPage(false);
    });

/*
Handle Next button
*/
    $('#js-buttons').on('click', '.js-next', function() {
        console.log("'#js-buttons .js-next'");
        APP.model.getDataFromApiForPage(true);
    });

/*
How to pass parameters in a custom event:

$('main').trigger('click-image-youtube', imageId);
$('main').on('click-image-youtube', function(event, imageId) {});
*/

    var testQuery = function(query) {
        APP.model.getDataFromApiForSearch(query);
    };

    testQuery("lunch");
});
