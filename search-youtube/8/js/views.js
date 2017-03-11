'use strict';

/*jshint multistr: true */

var APP = APP || {};

APP.views = {
    buildItem: function(idx, item) {
        var template = '<div class="col-4">\
        <figure class="box">\
            <a class="fancybox-media" href="{{6}}"></a>\
            <div class="tooltip"> \
                <img data-item-id="{{1}}" src="{{2}}" alt="{{3}}">\
                <span><p class="title">{{4}}</p><p class="description">{{5}}</p></span> \
            </div>\
            <div class="center">\
                <button class="more-button" title="Get more from this channel" type="button">More</button>\
            </div>\
        </figure>\
    </div>';
        return template.replace('{{1}}', idx)
            .replace('{{2}}', item.snippet.thumbnails.medium.url)
            .replace('{{3}}', item.snippet.title)
            .replace('{{4}}', item.snippet.title)
            .replace('{{5}}', item.snippet.description)
            .replace('{{6}}', APP.model.getPlayVideoUrl(idx));
    },
    renderSearchContent: function(data, element) {
//        console.log(">>> renderSearchContent");
        var html = '';
        var that = this;
        if (data.items && data.items.length > 0) {
            data.items.forEach(function(item, idx) {
                if (idx === 0) {
                    html = '<div class="row clearfix center">';
                } else if (idx % 3 === 0) {
                    html += '</div><div class="row clearfix center">';
                }
//                console.log("idx " + idx + " item.snippet.title " + item.snippet.title +
//                           " item.snippet.channelId "+item.snippet.channelId);
                html += that.buildItem(idx, item);
            });
            html += "</div>";
            $('#buttons').show();
        }
        else {
            $('#buttons').hide();
        }
        element.html(html);
//        console.log("<<< renderSearchContent");
    }
};
