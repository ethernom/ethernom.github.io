function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

var cropper = null;

var main_upload = document.getElementById("main-upload"),
	main_crop = document.getElementById("main-crop"),
	main_preview = document.getElementById("main-preview"),
	
	btn_upload = document.getElementById("btn-upload"),
	btn_start_over = document.getElementById("btn-start-over"),
	btn_start_over2 = document.getElementById("btn-start-over2"),
	btn_reset_crop =  document.getElementById("btn-reset-crop"),
	btn_crop =  document.getElementById("btn-crop"),
	btn_save = document.getElementById('btn-save');

main_crop.style.display = "none";
main_preview.style.display = "none";

btn_start_over.addEventListener("click", function() {
	document.getElementById('file-input').value = "";
	
	main_upload.style.display = "block";
	main_crop.style.display = "none";
	main_preview.style.display = "none";
	
	btn_crop.removeEventListener('click', function(){});
	cropper.destroy();
});

btn_start_over2.addEventListener("click", function() {
	slider_brightness.style.display = "none";
	slider_contrast.style.display = "none";
	slider_saturation.style.display = "none";
	slider_grayscale.style.display = "none";
		
	btn_brightness.style.color = "white";
	btn_contrast.style.color = "white";
	btn_saturation.style.color = "white";
	btn_grayscale.style.color = "white";
	
	document.getElementById('file-input').value = "";
	
	main_upload.style.display = "block";
	main_crop.style.display = "none";
	main_preview.style.display = "none";
	
	btn_crop.removeEventListener('click', function(){});
	cropper.destroy();
});

btn_save.addEventListener("click", function() {
	slider_brightness.style.display = "none";
	slider_contrast.style.display = "none";
	slider_saturation.style.display = "none";
	slider_grayscale.style.display = "none";
		
	btn_brightness.style.color = "white";
	btn_contrast.style.color = "white";
	btn_saturation.style.color = "white";
	btn_grayscale.style.color = "white";
	
	var canvas = document.getElementById('preview-cropped-pic');
	var dataURL = canvas.toDataURL();
	
	var d = new Date();
	var file_string = "beamu_preview_" + (d.getMonth()+1) + d.getDate() + d.getFullYear();
	
	var link = document.createElement("a");
    link.setAttribute("href", dataURL);
	link.setAttribute("download", file_string);
    link.click();
});


btn_upload.addEventListener("click", function() {
	document.getElementById("file-input").click();
});

function readURL(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();

		reader.onload = function (e) {
			document.getElementById('preview-crop-pic').src = e.target.result;
			
			if(cropper != null) cropper.destroy();
			initCropper();

			main_upload.style.display = "none";
			main_crop.style.display = "block";
			main_preview.style.display = "none";
		};
		reader.readAsDataURL(input.files[0]);
	}
}

function initCropper(){
	btn_crop.removeEventListener('click', function(){});
	const image = document.getElementById('preview-crop-pic');
	var w = window.innerWidth;
	var h = window.innerHeight - 140;
	cropper = new Cropper(image, {
		viewMode: 0,
		dragMode: 'move',
		autoCropArea: 0,
		toggleDragModeOnDblclick: false,
		responsive: false,
		cropBoxMovable: false,
		cropBoxResizable: false,
		minContainerHeight: h,
		minContainerWidth: w,
		center: true,
		
		ready(){
			this.cropper.setCanvasData({
				left: 0,
				top: 10
			})
			
			this.cropper.setCropBoxData({
				width: 256,
				height: 256,
				left: (w/2) - 128,
				top: (h/2) - 128
			})
			
			btn_crop.addEventListener('click', function(){
				var canvas;
				canvas = cropper.getCroppedCanvas({
					fillColor: '#fff',
					width: 256,
					height: 256,
				});
				
				document.getElementById('preview-cropped-pic-hidden').src = canvas.toDataURL();
				getPNG();
				
				main_upload.style.display = "none";
				main_crop.style.display = "none";
				main_preview.style.display = "block";
			});
		}
	});
}

btn_reset_crop.addEventListener("click", function() {
	btn_crop.removeEventListener('click', function(){});
	cropper.destroy();
	initCropper();	
});

function getPNG(){
	var image = new Image();
	image.onload = function() {
		var img_canvas = document.getElementById('preview-cropped-pic');
		var ctx = img_canvas.getContext('2d');
		
		ctx.clearRect(0, 0, 256, 256);
		ctx.canvas.width = 256;
		ctx.canvas.height = 256;
		ctx.drawImage(document.getElementById('preview-cropped-pic-hidden'), 0, 0);
		
		var canvas = fx.canvas();
		var t_image = document.getElementById('preview-cropped-pic-hidden');
		var texture = canvas.texture(t_image);
		canvas.draw(texture).brightnessContrast((slider_brightness_input.value-100)/100, (slider_contrast_input.value-100)/100).update();
		
		var img = new Image;
		img.onload = function(){
			ctx.drawImage(img,0,0); // Or at whatever offset you like
			
			var curr  = ctx.getImageData(0, 0, img_canvas.width, img_canvas.height);
			getPNG2Dither(curr);
		};
		img.src = canvas.toDataURL('image/png');
		
	};
	image.src = document.getElementById('preview-cropped-pic-hidden').src;
}

function getPNG2Dither(img_data){
	var dither = floyd_steinberg(img_data);
	var preview_dither_pic_img = document.getElementById('preview-dither-pic');
	var ctx = preview_dither_pic_img.getContext('2d');
	ctx.canvas.width = 256;
	ctx.canvas.height = 256;
	ctx.putImageData(dither, 0, 0);
}

var btn_reset_adjustment = document.getElementById("btn-reset-adjustment"),
	btn_brightness = document.getElementById("btn-brightness"),
	btn_contrast = document.getElementById("btn-contrast"),
	
	slider_brightness = document.getElementById("slider-brightness"),
	slider_contrast = document.getElementById("slider-contrast"),
	
	slider_brightness_input = document.getElementById("slider-brightness-input"),
	slider_contrast_input = document.getElementById("slider-contrast-input");
	
slider_brightness.style.display = "none";
slider_contrast.style.display = "none";

btn_reset_adjustment.addEventListener("click", function() {
	resetAdjustment();
});

function resetAdjustment(){
	slider_brightness.style.display = "none";
	slider_contrast.style.display = "none";
	
	btn_brightness.style.color = "white";
	btn_contrast.style.color = "white";
	
	slider_brightness_input.value = 100;
	slider_contrast_input.value = 100;
	
	document.getElementById('preview-cropped-pic-hidden').filter = "brightness(100%) contrast(100%)";
	document.getElementById("preview-cropped-pic-hidden").style.WebkitFilter = "brightness(100%) contrast(100%)";
	getPNG();
}

btn_brightness.addEventListener("click", function(event) {
	if (slider_brightness.style.display === "block") {
		slider_brightness.style.display = "none";
		btn_brightness.style.color = "white";
		
	} else {
		slider_brightness.style.display = "block";
		slider_contrast.style.display = "none";
		
		btn_brightness.style.color = "black";
		btn_contrast.style.color = "white";
	}
});

btn_contrast.addEventListener("click", function(event) {
	if (slider_contrast.style.display === "block") {
		slider_contrast.style.display = "none";
		btn_contrast.style.color = "white";
	} else {
		slider_brightness.style.display = "none";
		slider_contrast.style.display = "block";
		
		btn_brightness.style.color = "white";
		btn_contrast.style.color = "black";
	}
});

slider_brightness_input.oninput = function() {
	document.getElementById('preview-cropped-pic-hidden').filter = "brightness("+ this.value + "%) contrast(" + slider_contrast_input.value + "%)";
	document.getElementById("preview-cropped-pic-hidden").style.WebkitFilter = "brightness("+ this.value + "%) contrast(" + slider_contrast_input.value + "%)";
	getPNG();
}

slider_contrast_input.oninput = function() {
	document.getElementById('preview-cropped-pic-hidden').filter = "brightness("+ slider_brightness_input.value + "%) contrast(" + this.value + "%)";
	document.getElementById("preview-cropped-pic-hidden").style.WebkitFilter = "brightness("+ slider_brightness_input.value + "%) contrast(" + this.value + "%)";
	getPNG();
}