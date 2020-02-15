function previewFile() {
	var preview = document.querySelector('img');
	var file    = document.querySelector('input[type=file]').files[0];
	var reader  = new FileReader();

	reader.addEventListener("load", function () {
		preview.src = reader.result;
	}, false);

	if (file) {
		reader.readAsDataURL(file);
		
		var image = document.querySelector('#image');
		console.log(image);
		var cropper = new Cropper(image, {
			ready: function () {
				var cropper = this.cropper;
				var containerData = cropper.getContainerData();
				var cropBoxData = cropper.getCropBoxData();
				var aspectRatio = cropBoxData.width / cropBoxData.height;
				var newCropBoxWidth;

				if (aspectRatio < minAspectRatio || aspectRatio > maxAspectRatio) {
					newCropBoxWidth = cropBoxData.height * ((minAspectRatio + maxAspectRatio) / 2);
					cropper.setCropBoxData({
						left: (containerData.width - newCropBoxWidth) / 2,
						width: newCropBoxWidth
					});
				}
			},
			cropmove: function () {
				var cropper = this.cropper;
				var cropBoxData = cropper.getCropBoxData();
				var aspectRatio = cropBoxData.width / cropBoxData.height;

				if (aspectRatio < minAspectRatio) {
					cropper.setCropBoxData({
						width: cropBoxData.height * minAspectRatio
					});
				} else if (aspectRatio > maxAspectRatio) {
					cropper.setCropBoxData({
						width: cropBoxData.height * maxAspectRatio
					});
				}
			},
		});
	}
}