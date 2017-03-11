'use strict';

/*
this works:
https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCC5pd3SNjKYcfU5hIR0IviT212w2bkQmM&q=niagara%20falls&maxResults=20
*/

var YOUTUBE_APIS_URL = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(searchTerm, callback) {
    console.log(">>> getDataFromApi");
    var settings = {
        url: YOUTUBE_APIS_URL,
        data: {
            part: 'snippet',
            key: 'AIzaSyCC5pd3SNjKYcfU5hIR0IviT212w2bkQmM',
            q: searchTerm,
            maxResults: '20'
        },
        dataType: 'json',
        type: 'GET',
        success: callback,
        error: errorAlert,
        complete: complete
    };
    $.ajax(settings);
    console.log("<<< getDataFromApi");
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

function errorAlert(jqXHR, status, err) {
    console.log("ErrorAlert");
}

function complete(jqXHR, status) {
    console.log("Ajax get completed");
}

function displaySearchData(data, status, jqXHR) {
    console.log(">>> displaySearchData");
    var html = '';
    if (data.items && data.items.length > 0) {
        data.items.forEach(function(item, idx) {
            if (idx === 0) {
                html = '<div class="row clearfix center">';
            } else if (idx % 6 === 0) {
                html += '</div><div class="row clearfix center">';
            }
            console.log("idx " + idx + " item.snippet.title " + item.snippet.title);
            html += buildItem(item);
        });
        html += "</div>";
        $('#buttons').show();
    } else {
        $('#buttons').hide();
    }
    $('.js-search-results').html(html);
    console.log("<<< displaySearchData");
}

// build list item
var buildItem = function(item) {
    var template = '<div class="col-2">\
    <figure class="box">\
        <img src="{{1}}" alt="{{2}}">\
        <div class="center">\
            <button class="more-button" type="button">More</button>\
        </div>\
    </figure>\
</div>';
    return template.replace('{{1}}', item.snippet.thumbnails.default.url)
        .replace('{{2}}', item.snippet.title);
};


/*
Useful for initial setup:
getDataFromApi("morning", displaySearchData);
*/

function watchSubmit() {
    console.log(">>> watchSubmit");
    $('.js-search-form').submit(function(e) {
        e.preventDefault();
        var query = $(this).find('.js-query').val();
        getDataFromApi(query, displaySearchData);
    });
    console.log("<<< watchSubmit");
}

$(function() {
    $('#buttons').hide();
    watchSubmit();
});
