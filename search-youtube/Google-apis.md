
# Google Youtube APis

Notes regarding using the apis.

A good starting point is:
https://developers.google.com/youtube/v3/



## Getting Started

### Get a Google Youtube Api key
```
https://console.developers.google.com/apis/library
YoutubeData APIs
Create a Project
Web Browser

Copy the API key.

```

### Get Youtube Channel Id

www.youtube.com
Icon to left of Youtube.com icon
My Channel
Notice the url.
Channel Id is everything after www.youtube.com/channel/

## Get My Own Videos

https://www.googleapis.com/youtube/v3/activities?part=snippet,contentDetails&channelId=<my-channel-id>&key=<my-key>&maxResults=20

## Get Videos

Look for up to 20 videos for quewry string 'niagara falls'

https://www.googleapis.com/youtube/v3/activities?part=snippet&channelId=<my-channel-id>&q=niagara%20falls&key=<my-key>&maxResults=20
