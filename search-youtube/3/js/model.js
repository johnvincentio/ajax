'use strict';

/*
this works:
https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCC5pd3SNjKYcfU5hIR0IviT212w2bkQmM&q=niagara%20falls&maxResults=20
*/

var YOUTUBE_APIS_URL = 'https://www.googleapis.com/youtube/v3/search';

var APP = APP || {};

APP.model = {
    storage : [],
    getDataFromApi : function(searchTerm) {
        console.log(">>> getDataFromApi");
        var that = this;
        var request = $.ajax({
            url: YOUTUBE_APIS_URL,
            data: {
                part: 'snippet',
                key: 'AIzaSyCC5pd3SNjKYcfU5hIR0IviT212w2bkQmM',
                q: searchTerm,
                maxResults: '20'
            },
            dataType: 'json',
            type: 'GET'
        });
        request.done(function(data) {
            console.log("addData");
            that.storage = data;
            $('main').trigger('model-changed');
        });
        request.fail(function(jqXHR, status) {
            console.log("ajax get failed; "+status);
        });
        console.log("<<< getDataFromApi");
    }
};

//    getDataFromApi_OLD : function(searchTerm) {
//        console.log(">>> getDataFromApi");
//        var settings = {
//            url: YOUTUBE_APIS_URL,
//            data: {
//                part: 'snippet',
//                key: 'AIzaSyCC5pd3SNjKYcfU5hIR0IviT212w2bkQmM',
//                q: searchTerm,
//                maxResults: '20'
//            },
//            dataType: 'json',
//            type: 'GET',
//            success: this.addData,
//            error: this.errorAlert,
//            complete: this.complete
//        };
//        $.ajax(settings);
//        console.log("<<< getDataFromApi");
//    },
//    addData: function(info) {
//        console.log("addData");
////        this.data = info;
//        this.data = 'abcd';
//        $('main').trigger('model-changed');
//    },
//    errorAlert: function(jqXHR, status, err) {
//        console.log("ErrorAlert");
//    },
//
//    complete: function(jqXHR, status) {
//        console.log("Ajax get completed");
//    }

//
//function getDataFromApi(searchTerm, callback) {
//    var query = {
//        s: searchTerm,
//        r: 'json'
//    };
//    $.getJSON(OMDB_BASE_URL, query, callback);
//}
//
