'use strict';

var APP = APP || {};

APP.views = {
    buildItem: function(item) {
        var template = '<div class="col-4">\
        <figure class="box">\
            <img src="{{1}}" alt="{{2}}">\
            <div class="center">\
                <button class="more-button" type="button">More</button>\
            </div>\
        </figure>\
    </div>';
        return template.replace('{{1}}', item.snippet.thumbnails.medium.url)
            .replace('{{2}}', item.snippet.title);
    },
    renderSearchContent: function(data, element) {
        console.log(">>> renderSearchContent");
        var html = '';
        var that = this;
        if (data.items && data.items.length > 0) {
            data.items.forEach(function(item, idx) {
                if (idx === 0) {
                    html = '<div class="row clearfix center">';
                } else if (idx % 3 === 0) {
                    html += '</div><div class="row clearfix center">';
                }
                console.log("idx " + idx + " item.snippet.title " + item.snippet.title);
                html += that.buildItem(item);
            });
            html += "</div>";
            $('#buttons').show();
        }
        else {
            $('#buttons').hide();
        }
        element.html(html);
        console.log("<<< renderSearchContent");
    }
};
