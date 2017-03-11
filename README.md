
# Thinkful Tube

Project to implement the Thinkful Tube challenge.

## Getting Started

Challenge: Thinkful Tube

Problem is described here:
```
https://courses.thinkful.com/fewd-001v6/project/3.3.2
```

To run the application:
```
Implementation: search-youtube/index.html
```
which runs version 9, the final version.

### Google References
https://developers.google.com/youtube/v3/docs/search
https://developers.google.com/youtube/v3/docs/search/list

https://developers.google.com/youtube/code_samples
https://developers.google.com/youtube/v3/code_samples/javascript#search_by_keyword

## Versioning

```
Version 1:
Basic Html and css implementing the end goal.
Looks like Star Wars project.
Handles responsive.
Should be no more html and css work.
```

```
Version 2:
Retrieved thumbnail data from youtube and rendered the content dynamically.
Some css work.
```

```
Version 3:
Used medium thumbnail.
Changed layout to 3 across.
Built as Model & View.
Ajax call in the model.
```

```
Version 4:
Implemented optional challenge:
Make the images clickable, leading the user to the YouTube video, on YouTube
```

```
Version 5:
Implemented tooltip for the images.
Show Title only.

/*jshint multistr: true */
gags brackets warnings about multiline strings.

Attribute Title is global. Usually used for tooltips.
Added to buttons as a user aid.
```

```
Version 6:
Implemented a different tooltip for the images.
Show Title only.
```

```
Version 6a:
Implemented a different tooltip for the images.
Show Title and description.
Implemented click on tooltip.
```

```
Version 7:
Implemented optional challenge:
Make the images clickable, playing them in a lightbox.

Cannot use html5 video tag to play a YouTube video as this is a violation of the ToS.

Add:
<a class="fancybox-media" href="http://www.youtube.com/watch?v={{6}}"></a>\
inside box but outside tooltip. This is prevent the event triggering itself.

FancyBox requires use of <a> tag, using href attribute to provide the url of the YouTube video

Active code:
        var ahref = $(this).parent().find('.fancybox-media');
        ahref.fancybox({
            openEffect  : 'none',
            closeEffect : 'none',
            helpers : {
                media : {}
            }
        });
        ahref.click();

```

```
Version 8:
Optional challenge:
Show a link for more from the channel that each video came from.

```

```
Version 9:
Optional challenge.
Show buttons to get more results (using the previous and next page links from the JSON)

```

#### Fancybox

```
fancy-media
Got this to work here
```

```
tooltip
Worked with various ways to implement tooltips
```









