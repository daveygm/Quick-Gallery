// Set locations for all DOM elements that we need.
var quickGallerymainImage = document.getElementById('quickGalleryMainImage');
var quickGalleryModal = document.getElementById('quickGalleryPopup');
var quickGallery = document.getElementById('quickGalleryThumbs');
var quickGalleryLeftNavButton = document.getElementById('quickGalleryLeftButton');
var quickGalleryRightNavButton = document.getElementById('quickGalleryRightButton');
var quickGalleryCloseButton = document.getElementById('quickGalleryCloseButton');
var indexOfClickedImage;




// Make a list of all the images in the gallery.
var galleryImageList = function() {
	var thumbnails = quickGallery.children;
	var fullImageList = [];
	
	for (var i=0; i < thumbnails.length; i++) {
		fullImageList[i] = getFullImage(thumbnails[i].src);
	}
	return fullImageList;
}




// Make a default image to load to make sure something is loaded when an thumbnail is clicked.
var imageToLoad = galleryImageList()[0];




// Get the name of the full size image given which thumbnail was clicked on.
function getFullImage(source) {
	return source.replace('-thumb', '');
}




// Event listener for opening the clicked thumbnail open the full image.
quickGallery.addEventListener('click', (function(event) {
	var thumb = event.target;
	imageToLoad = getFullImage(thumb.src);

	// Match the image clicked to the array of images.
	indexOfClickedImage = matchSelectedImageWithList(imageToLoad, galleryImageList());

	// Set the image to the clicked thumbnail.
	quickGallerymainImage.src = imageToLoad;

	// Show the modal photo viewer.
	quickGalleryModal.style.display = 'block';
}), false);

// Load the first image into the viewer
quickGallerymainImage.src = imageToLoad;





// Match the clicked thumbnail with the position in the array of images.
// This allows the 'previous' and 'next' buttons to know which image to switch to when clicked.
function matchSelectedImageWithList(str, strArray) {
	for (var j=0; j<strArray.length; j++) {
		if (strArray[j].match(str)) return j;
	}
	return -1;
}




// Event listeners for the nav buttons and image.
function navPreviousButtonClick() {
	if(indexOfClickedImage > 0) {
		quickGallerymainImage.src = galleryImageList()[indexOfClickedImage - 1];
		indexOfClickedImage -= 1;
	}
}
function navNextButtonClick() {
	if(indexOfClickedImage < galleryImageList().length - 1) {
		quickGallerymainImage.src = galleryImageList()[indexOfClickedImage + 1];
		indexOfClickedImage += 1;
	}
}
quickGalleryLeftNavButton.addEventListener('click', navPreviousButtonClick, false);
quickGalleryRightNavButton.addEventListener('click', navNextButtonClick, false);
quickGallerymainImage.addEventListener('click', navNextButtonClick, false);




// Methods for closing the modal viewer.
window.onclick = function(event) {
	if (event.target === quickGalleryModal) {
		quickGalleryModal.style.display = 'none';
	}
};
quickGalleryCloseButton.addEventListener('click', (function() {
	quickGalleryModal.style.display = 'none';
}), false);




// Use the left and right arrow keys to go to the previous and next images.
window.onkeyup = function(event) {
	var key = event.keyCode ? event.keyCode : event.which;

	if (key === 37) {
		navPreviousButtonClick();
	} else if (key === 39) {
		navNextButtonClick();
	}
}