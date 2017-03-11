'use strict';

var APP = APP || {};

APP.views = {
    buildItem: function(idx, item) {
        var template = '<div class="col-4">\
        <figure class="box">\
            <img data-item-id="{{1}}" src="{{2}}" alt="{{3}}">\
            <div class="center">\
                <button class="more-button" type="button">More</button>\
            </div>\
        </figure>\
    </div>';
        return template.replace('{{1}}', idx)
            .replace('{{2}}', item.snippet.thumbnails.medium.url)
            .replace('{{3}}', item.snippet.title);
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
                html += that.buildItem(idx, item);
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
