'use strict';

/*
test breaking apart the initial test position
*/

var OMDB_BASE_URL = 'https://www.omdbapi.com/';

function getDataFromApi(searchTerm, callback) {
    var settings = {
        url: OMDB_BASE_URL,
        data: {
            s: searchTerm,
            r: 'json',
        },
        dataType: 'json',
        type: 'GET',
        success: callback
    };
    $.ajax(settings);
}
//
//function getDataFromApi(searchTerm, callback) {
//    var query = {
//        s: searchTerm,
//        r: 'json'
//    };
//    $.getJSON(OMDB_BASE_URL, query, callback);
//}
//
function displaySearchData(data) {
//    var resultElement = '';
    if (data.Search) {
        data.Search.forEach(function(item) {
            console.log("item.Title "+item.Title);
        });
    }
    else {
    }
}

//function watchSubmit() {
//    $('.js-search-form').submit(function(e) {
//        e.preventDefault();
//        var query = $(this).find('.js-query').val();
//        getDataFromApi(query, displayOMDBSearchData);
//    });
//}

$(function() {
    getDataFromApi("morning", displaySearchData);
});
