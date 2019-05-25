# Quick Gallery
A simple and fast image gallery for use on your websites. It's responsive and works across many (if not all) devices.

Quick Gallery looks for thumbnail images inside a DIV tag with an ID "quickGalleryThumbs" and automatically makes a modal window to view the full resolution images of those thumbnails. For example, the following HTML code will find the full resolution images called image1.jpg, image2.jpg, image3.jpg, and image4.jpg.

```
<div id="quickGalleryThumbs">
	<img src="qg-img/image1-thumb.jpg">
	<img src="qg-img/image2-thumb.jpg">
	<img src="qg-img/image3-thumb.jpg">
	<img src="qg-img/image4-thumb.jpg">
</div>
```

Quick Gallery relies on specific naming of the thumbnails in order to correctly display the full resolution images. All it does is strip "-thumb" from the thumbnail source and expects there to be another image with that name in the same folder.

[Sample Gallery](https://davidgmead.com/quick-gallery/)
