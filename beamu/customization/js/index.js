var cropper = null, options = 1, imgUpload = false;


var btn_reset_ui = document.getElementById('btn-start-over'),
	btn_reset_ui2 = document.getElementById('btn-start-over2'),
	btn_back1 = document.getElementById('btn-back1'),
	btn_back2 = document.getElementById('btn-back2'),
	btn_back3 = document.getElementById('btn-back3');
	
btn_reset_ui.style.display = "none";
btn_reset_ui.addEventListener("click", function() {
	if(cropper != null){
		cropper.destroy();
		cropper = null;
	}else{
		cropper = null;
	}
	
	btn_reset_ui.style.display = "none";
	text_input_ui.style.display = "none";
	btn_text_input.className = "btn-ui selectable";
	
	document.getElementById('file-input').value = "";
	upload_top_ui.style.display = "none";
	upload_bottom_ui.style.display = "none";
	imgUpload = false;
	
	main_skin_ui.style.display = "block";
	main_text_ui.style.display = "none";
	main_upload_crop_ui.style.display = "none";
	main_adjustment_ui.style.display = "none";
	
	btn_crop.removeEventListener('click', function(){});
	btn_crop.style.display = "none";
	document.getElementById('image-step').innerHTML = '<i class="fas fa-crop-alt"></i>&nbsp;&nbsp;&nbsp;Custom Image - Upload an image or skip if you don\'t want to have a custom image!</text>';

	document.getElementById('preview-crop-pic').src = "";
	document.getElementById("text-input").value = "";
	
	resetAdjustment();
	setTextInput();
	
	document.getElementById('cfName').value = "";
	document.getElementById('cfEmail').value = "";
	document.getElementById('cfMessage').value = "";
	
	BODY.style.overflow = "auto";
	
	document.getElementById('btn-submit').removeEventListener("click", submitForm);
});

btn_reset_ui2.addEventListener("click", function() {
	off();
	
	if(cropper != null){
		cropper.destroy();
		cropper = null;
	}else{
		cropper = null;
	}
	
	btn_reset_ui.style.display = "none";
	text_input_ui.style.display = "none";
	btn_text_input.className = "btn-ui selectable";
	
	document.getElementById('file-input').value = "";
	upload_top_ui.style.display = "none";
	upload_bottom_ui.style.display = "none";
	imgUpload = false;
	
	main_skin_ui.style.display = "block";
	main_text_ui.style.display = "none";
	main_upload_crop_ui.style.display = "none";
	main_adjustment_ui.style.display = "none";
	
	btn_crop.removeEventListener('click', function(){});
	btn_crop.style.display = "none";
	document.getElementById('image-step').innerHTML = '<i class="fas fa-crop-alt"></i>&nbsp;&nbsp;&nbsp;Custom Image - Upload an image or skip if you don\'t want to have a custom image!</text>';

	document.getElementById('preview-crop-pic').src = "";
	document.getElementById("text-input").value = "";
	
	resetAdjustment();
	setTextInput();
	
	document.getElementById('cfName').value = "";
	document.getElementById('cfEmail').value = "";
	document.getElementById('cfMessage').value = "";
	
	BODY.style.overflow = "auto";
	
	document.getElementById('btn-submit').removeEventListener("click", submitForm);
});

btn_back1.addEventListener("click", function() {
	main_skin_ui.style.display = "block";
	main_text_ui.style.display = "none";
	text_input_ui.style.display = "none";
	BODY.style.overflow = "auto";
	
	btn_reset_ui.style.display = "none";
});

btn_back2.addEventListener("click", function() {
	main_text_ui.style.display = "block";
	main_upload_crop_ui.style.display = "none";
	
	upload_top_ui.style.display = "none";
	upload_bottom_ui.style.display = "none";
	
});

btn_back3.addEventListener("click", function() {
	main_upload_crop_ui.style.display = "block";
	main_adjustment_ui.style.display = "none";
	
	if(imgUpload){
		upload_top_ui.style.display = "none";
		upload_bottom_ui.style.display = "block";
	}else{
		upload_top_ui.style.display = "block";
		upload_bottom_ui.style.display = "none";
	}
});

/*--------------------------------------------------------
---- SELECT DESIGN ---------------------------------------- 
----------------------------------------------------------*/
var BODY = document.getElementsByTagName("BODY")[0];
	main_skin_ui = document.getElementById('main-skin'),
	btn_card_options_1 = document.getElementById('card-options-1'),
	btn_card_options_2 = document.getElementById('card-options-2');
	
btn_card_options_1.addEventListener("click", function() {
	main_skin_ui.style.display = "none";
	main_text_ui.style.display = "block";
	
	btn_reset_ui.style.display = "block";
	document.getElementById("card-selection1").src = "img/beamu-card-black-empty.png";
	document.getElementById("card-selection2").src = "img/beamu-card-black-empty.png";
	
	options = 1;
});

btn_card_options_2.addEventListener("click", function() {
	main_skin_ui.style.display = "none";
	main_text_ui.style.display = "block";
	
	btn_reset_ui.style.display = "block";
	document.getElementById("card-selection1").src = "img/beamu-card-blue-empty.png";
	document.getElementById("card-selection2").src = "img/beamu-card-blue-empty.png";
	
	options = 2;
});

/*--------------------------------------------------------
---- SELECT DESIGN ---------------------------------------- 
----------------------------------------------------------*/
var main_text_ui = document.getElementById('main-text'),
	
	btn_text_input =  document.getElementById('btn-text-input'),
	text_input_ui =  document.getElementById('text-input-ui'),
	btn_clear_input =  document.getElementById('btn-clear-text-input'),
	btn_cutom_text_enter = document.getElementById('btn-cutom-text-enter');

main_text_ui.style.display = "none";
text_input_ui.style.display = "none";

btn_text_input.addEventListener("click", function() {
	if (text_input_ui.style.display === "block") {
		text_input_ui.style.display = "none";
		btn_text_input.className = "btn-ui selectable";
	} else {
		text_input_ui.style.display = "block";
		btn_text_input.className = "btn-ui selectable selected";
	}
});

btn_clear_input.addEventListener("click", function() {
	document.getElementById("text-input").value = "";
	getText();
	
	text_input_ui.style.display = "none";
	btn_text_input.className = "btn-ui selectable";
});

getText();
function getText(){
	var c = document.getElementById('preview-text-pic');
	var ctx = c.getContext("2d");
	ctx.canvas.width = 128;
	ctx.canvas.height = 128;
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, 128, 128);
	
	var c = document.getElementById('preview-text-scale-pic');
	var ctx = c.getContext("2d");
	ctx.canvas.width = 128;
	ctx.canvas.height = 15.5;
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, 128, 15.5);
	
	if(document.getElementById("text-input").value){
		ctx.fillStyle = "black";
		ctx.font = "bold 13px Microsoft Yahei";
		ctx.textAlign = "center"; 
		ctx.fillText(document.getElementById("text-input").value,64,12);
	}
	
	var c = document.getElementById('preview-adjustment-text-pic');
	var ctx = c.getContext("2d");
	ctx.canvas.width = 128;
	ctx.canvas.height = 15.5;
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, 128, 15.5);
	
	if(document.getElementById("text-input").value){
		document.getElementById('preview-adjustment-text-pic').style.display = "inline-block";
		document.getElementById('preview-adjustment-text-pic').style.position = "absolute"; 
		document.getElementById('preview-adjustment-text-pic').style.zIndex = "91"; 
		document.getElementById('preview-adjustment-text-pic').style.marginLeft = "259px"; 
		document.getElementById('preview-adjustment-text-pic').style.marginTop = "139.5px";
		
		ctx.fillStyle = "black";
		ctx.font = "bold 13px Microsoft Yahei";
		ctx.textAlign = "center"; 
		ctx.fillText(document.getElementById("text-input").value,64,12);
	}else{
		document.getElementById('preview-adjustment-text-pic').style.display = "none";
	}
}

function setTextInput(){
	getText();
	if(document.getElementById("text-input").value){
		btn_cutom_text_enter.innerHTML = "<i class='fas fa-arrow-alt-circle-right'></i>&nbsp;&nbsp;&nbsp;Next";
	}else{
		btn_cutom_text_enter.innerHTML = "<i class='fas fa-arrow-alt-circle-right'></i>&nbsp;&nbsp;&nbsp;Skip";
	}
}

btn_cutom_text_enter.addEventListener("click", function() {
	main_text_ui.style.display = "none";
	main_upload_crop_ui.style.display = "block";
	
	if(cropper == null){
		upload_top_ui.style.display = "block";
		upload_bottom_ui.style.display = "none";
	}else{
		upload_top_ui.style.display = "none";
		upload_bottom_ui.style.display = "block";
	}
	
	text_input_ui.style.display = "none";
});	

/*--------------------------------------------------------
---- UPLOAD & CROP IMG ---------------------------------------- 
----------------------------------------------------------*/
var main_upload_crop_ui = document.getElementById('main-upload-crop'),
	upload_top_ui = document.getElementById('upload-crop-top-nav'),
	upload_bottom_ui = document.getElementById('upload-crop-bottom-nav'),
	
	btn_skip_upload = document.getElementById('btn-skip-upload'),
	
	btn_reupload = document.getElementById('btn-reupload'),
	btn_delete_image = document.getElementById('btn-delete-image'),
	btn_reset_crop = document.getElementById('btn-reset-crop'),
	btn_crop = document.getElementById('btn-crop'),
	
	btn_zoom = document.getElementById('btn-zoom'),
	sliders_zoom_ui = document.getElementById('sliders-zoom'),
	sliders_zoom_input = document.getElementById('slider-zoom-input');

main_upload_crop_ui.style.display = "none";
btn_crop.style.display = "none";
sliders_zoom_ui.style.display = "none";
document.getElementById('preview-crop-pic').style.display = "none";

btn_skip_upload.addEventListener("click", function() {
	main_upload_crop_ui.style.display = "none";
	btn_crop.removeEventListener('click', function(){});
	
	main_adjustment_ui.style.display 	= "block";
	adjustment_bottom_ui.style.display = "none";
	
	imgUpload = false;
	getDefaultPNG();
	
	document.getElementById('final-step').innerHTML = '<i class="fas fa-edit"></i>&nbsp;&nbsp;&nbsp;Final Preview';
});

btn_reupload.addEventListener("click", function() {
	sliders_zoom_ui.style.display = "none";
	btn_zoom.className = "btn-ui selectable";
	sliders_zoom_input.value = 0;
	
	document.getElementById("file-input").click();
	
	document.getElementById('image-step').innerHTML = '<i class="fas fa-crop-alt"></i>&nbsp;&nbsp;&nbsp;Custom Image - Upload an image or skip if you don\'t want to have a custom image!</text>';
});

btn_delete_image.addEventListener("click", function() {
	sliders_zoom_ui.style.display = "none";
	btn_zoom.className = "btn-ui selectable";
	sliders_zoom_input.value = 0;
	
	if(cropper != null){
		cropper.destroy();
		cropper = null;
	}else{
		cropper = null;
	}
	
	imgUpload = false;
	
	main_upload_crop_ui.style.display = "block";
	upload_top_ui.style.display = "block"; 
	upload_bottom_ui.style.display = "none";
	
	btn_crop.style.display = "none";
	
	document.getElementById('image-step').innerHTML = '<i class="fas fa-crop-alt"></i>&nbsp;&nbsp;&nbsp;Custom Image - Upload an image or skip if you don\'t want to have a custom image!</text>';
});

btn_zoom.addEventListener("click", function() {
	if (sliders_zoom_ui.style.display === "block") {
		sliders_zoom_ui.style.display = "none";
		btn_zoom.className = "btn-ui selectable";
	} else {
		sliders_zoom_ui.style.display = "block";
		btn_zoom.className = "btn-ui selectable selected";
	}
});

sliders_zoom_input.oninput = function() {
	if(cropper){
		cropper.reset();
		var w = window.innerWidth;
		var h = window.innerHeight;
		cropper.setCropBoxData({
			width: 256,
			height: 256,
			left: (w/2) - 128,
			top: (h/2) - 128
		})
		cropper.zoom(this.value/100);
	}
}

btn_reset_crop.addEventListener("click", function() {
	sliders_zoom_ui.style.display = "none";
	btn_zoom.className = "btn-ui selectable";
	sliders_zoom_input.value = 0;
	
	if(cropper != null){
		cropper.destroy();
		cropper = null;
	}else{
		cropper = null;
	}
	initCropper();	
});

function readURL(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();

		reader.onload = function (e) {
			document.getElementById('preview-crop-pic').src = e.target.result;
			upload_top_ui.style.display 	= "none";
			if(cropper != null){
				cropper.destroy();
				cropper = null;
			}else{
				cropper = null;
			}
			initCropper();	
		};
		reader.readAsDataURL(input.files[0]);
	}
}

function initCropper(){
	document.getElementById('image-step').innerHTML = '<i class="fas fa-crop-alt"></i>&nbsp;&nbsp;&nbsp;Custom Image - Adjust image to fit within the open space!</text>';
	BODY.style.overflow = "hidden";
	
	main_upload_crop_ui.style.display = "block";
	btn_crop.style.display = "block"
	upload_bottom_ui.style.display = "block";
	
	const image = document.getElementById('preview-crop-pic');
	var w = window.innerWidth;
	var h = window.innerHeight;
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
			cropper.setCropBoxData({
				width: 256,
				height: 256,
				left: (w/2) - 128,
				top: (h/2) - 128
			})
			
			btn_crop.removeEventListener('click', function(){});
			btn_crop.addEventListener('click', function(){
				imgUpload = true;
				if(options == 1) document.getElementById("card-selection2").src = "img/beamu-card-black-empty.png";
				else document.getElementById("card-selection2").src = "img/beamu-card-blue-empty.png";
				document.getElementById('final-step').innerHTML = '<i class="fas fa-edit"></i>&nbsp;&nbsp;&nbsp;Custom Image - Edit & Adjustment';
				
				var canvas;
				canvas = cropper.getCroppedCanvas({
					fillColor: '#fff',
					width: 256,
					height: 256,
				});
				
				document.getElementById('preview-cropped-pic-hidden').src = canvas.toDataURL();
				getPNG();
				
				upload_top_ui.style.display = "none";
				main_upload_crop_ui.style.display = "none";
				main_adjustment_ui.style.display = "block";
				adjustment_bottom_ui.style.display = "block";
			});
		}
	});
}

/*--------------------------------------------------------
---- ADJUST-ing IMG ---------------------------------------- 
----------------------------------------------------------*/
var main_adjustment_ui = document.getElementById('main-adjustment'),
	adjustment_bottom_ui = document.getElementById('adjustment-bottom-nav'),
	
	btn_brightness = document.getElementById('btn-brightness'),
	btn_contrast = document.getElementById('btn-contrast'),
	
	sliders_brightness_ui = document.getElementById('sliders-brightness'),
	sliders_contrast_ui = document.getElementById('sliders-contrast'),
	
	slider_brightness_input_ui = document.getElementById('slider-brightness-input'),
	slider_contrast_input_ui = document.getElementById('slider-contrast-input'),
	
	btn_reset_adjustment = document.getElementById('btn-reset-adjustment');

main_adjustment_ui.style.display = "none";
adjustment_bottom_ui.style.display = "none";
sliders_brightness_ui.style.display = "none";
sliders_contrast_ui.style.display = "none";

btn_reset_adjustment.addEventListener("click", function() {
	resetAdjustment();
	getPNG();
});

btn_brightness.addEventListener("click", function(event) {
	if (sliders_brightness_ui.style.display === "block") {
		sliders_brightness_ui.style.display = "none";
		btn_brightness.className = "btn-ui selectable";
	} else {
		sliders_brightness_ui.style.display = "block";
		sliders_contrast_ui.style.display = "none";
		
		btn_brightness.className = "btn-ui selectable selected";
		btn_contrast.className = "btn-ui selectable";
	}
});

btn_contrast.addEventListener("click", function(event) {
	if (sliders_contrast_ui.style.display === "block") {
		sliders_contrast_ui.style.display = "none";
		btn_contrast.className = "btn-ui selectable";
	} else {
		sliders_brightness_ui.style.display = "none";
		sliders_contrast_ui.style.display = "block";
		
		btn_brightness.className = "btn-ui selectable";
		btn_contrast.className = "btn-ui selectable selected";
	}
});

slider_brightness_input_ui.oninput = function() {
	document.getElementById('preview-cropped-pic-hidden').filter = "brightness("+ this.value + "%) contrast(" + slider_contrast_input_ui.value + "%)";
	document.getElementById("preview-cropped-pic-hidden").style.WebkitFilter = "brightness("+ this.value + "%) contrast(" + slider_contrast_input_ui.value + "%)";
	getPNG();
}

slider_contrast_input_ui.oninput = function() {
	document.getElementById('preview-cropped-pic-hidden').filter = "brightness("+ slider_brightness_input_ui.value + "%) contrast(" + this.value + "%)";
	document.getElementById("preview-cropped-pic-hidden").style.WebkitFilter = "brightness("+ slider_brightness_input_ui.value + "%) contrast(" + this.value + "%)";
	getPNG();
}

function resetAdjustment(){
	slider_brightness_input_ui.value = 100;
	slider_contrast_input_ui.value = 100;
	
	sliders_brightness_ui.style.display = "none";
	sliders_contrast_ui.style.display = "none";
	
	btn_brightness.className = "btn-ui selectable";
	btn_contrast.className = "btn-ui selectable";
	
	document.getElementById('preview-cropped-pic-hidden').filter = "brightness(100%) contrast(100%)";
	document.getElementById("preview-cropped-pic-hidden").style.WebkitFilter = "brightness(100%) contrast(100%)";
}


/*--------------------------------------------------------
---- DITHER-ing IMG ---------------------------------------- 
----------------------------------------------------------*/
function getDefaultPNG(){
	document.getElementById('preview-dither-scale-pic').style.display = "none";
	if(options == 1 && document.getElementById("text-input").value){
		document.getElementById('card-selection2').src = "img/beamu-card-black-noImage.png";
	}else if(options == 2 && document.getElementById("text-input").value){
		document.getElementById('card-selection2').src = "img/beamu-card-blue-noImage.png";
	}else if(options == 1 && document.getElementById("text-input").value == ""){
		document.getElementById('card-selection2').src = "img/beamu-card-black.png";
	}else if(options == 2 && document.getElementById("text-input").value == ""){
		document.getElementById('card-selection2').src = "img/beamu-card-blue.png";
	}
}

function getPNG(){
	var image = new Image();
	image.onload = function() {
		var img_canvas = document.getElementById('preview-cropped-pic');
		var ctx = img_canvas.getContext('2d');
		
		ctx.clearRect(0, 0, 256, 256);
		ctx.canvas.width = 256;
		ctx.canvas.height = 256;
		ctx.filter = "brightness("+ slider_brightness_input_ui.value + "%) contrast(" + slider_contrast_input_ui.value + "%)";
		ctx.drawImage(document.getElementById('preview-cropped-pic-hidden'), 0, 0);
		
		applyAdjustment();
	};
	image.src = document.getElementById('preview-cropped-pic-hidden').src;
}

function applyAdjustment(){
	var canvas = fx.canvas();
	var t_image = document.getElementById('preview-cropped-pic-hidden');
	var texture = canvas.texture(t_image);
	
	//if ( /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification))  ) {
	if(checkBrowser()){
		canvas.draw(texture).matrixWarp([[1,0],[0,-1]], false, true).brightnessContrast((slider_brightness_input_ui.value-100)/100, (slider_contrast_input_ui.value-100)/100).update();
	}else{
		canvas.draw(texture).brightnessContrast((slider_brightness_input_ui.value-100)/100, (slider_contrast_input_ui.value-100)/100).update();
	}
	
	var img = new Image();
	img.onload = function(){
		var img_canvas = document.getElementById('preview-cropped-pic');
		console.log(img_canvas);
		var ctx = img_canvas.getContext('2d');
		console.log(ctx);
		ctx.canvas.width = 256;
		ctx.canvas.height = 256;
		
		ctx.drawImage(img,0,0); // Or at whatever offset you like
		var curr  = ctx.getImageData(0, 0, img_canvas.width, img_canvas.height);
		console.log(curr);
		getPNG2Dither(curr);
	};
	img.src = canvas.toDataURL('image/png');
}

//checkBrowser();
function checkBrowser(){
	/*
	var isSafari1 = /a/.__proto__=='//';
	var isSafari2 = !!navigator.userAgent.match(/safari/i) && !navigator.userAgent.match(/chrome/i) && typeof document.body.style.webkitFilter !== "undefined" && !window.chrome;
	var isSafari3 = /constructor/i.test(window.HTMLElement);
	
	console.log(isSafari1);
	console.log(isSafari2);
	console.log(isSafari3);
	*/
	
	var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
	var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
	
	if (isSafari && iOS) {
		return true;
	} else if(isSafari) {
		return true;
	} else{
		return false;
	}
}

function getPNG2Dither(img_data){
	console.log(img_data);
	var dither = floyd_steinberg(img_data);
	console.log(dither);
	var preview_dither_pic_img = document.getElementById('preview-dither-pic');
	var ctx = preview_dither_pic_img.getContext('2d');
	ctx.canvas.width = 256;
	ctx.canvas.height = 256;
	
	console.log(dither);
	ctx.putImageData(dither, 0, 0);
	
	document.getElementById('preview-dither-scale-pic').style.display = "inline-block";
	var scale = document.getElementById("preview-dither-scale-pic");
	var scale_context = scale.getContext("2d");
	scale_context.clearRect(0, 0, 128, 128);
	scale_context.canvas.width = 128;
	scale_context.canvas.height = 128;
	scale_context.drawImage(document.getElementById('preview-dither-pic'), 0, 0, 128, 128);
}

function on() {
	document.getElementById("overlay").style.display = "block";
	
	if(document.getElementById("text-input").value && options == 1){
		document.getElementById("cfOptions").value = "Options: 1. Black Design";
		document.getElementById("cfCustomText").value = document.getElementById("text-input").value;
		
	}else if(document.getElementById("text-input").value && options == 2){
		document.getElementById("cfOptions").value = "Options: 2. Blue Design";
		document.getElementById("cfCustomText").value = document.getElementById("text-input").value;
		
	}else if(!document.getElementById("text-input").value && options == 1){
		document.getElementById("cfOptions").value = "Options: 1. Black Design";
		document.getElementById("cfCustomText").value = "[No Custom Text]";
		
	}else if(!document.getElementById("text-input").value && options == 2){
		document.getElementById("cfOptions").value = "Options: 2. Blue Design";
		document.getElementById("cfCustomText").value = "[No Custom Text]";
	}

	if(imgUpload){
		document.getElementById("custom-image").style.display = "block";
	}else{
		document.getElementById("custom-image").style.display = "none";
	}

	var canvas = document.getElementById('preview-cropped-pic');
	var imageURL = canvas.toDataURL();
	document.getElementById('final-image').src = imageURL;
	
	document.getElementById('btn-submit').addEventListener("click", submitForm);
}

function submitForm(event){
	event.preventDefault();
	cfSubmitForm();
}

function off() {
	document.getElementById("overlay").style.display = "none";
	
	$('form#contact-form').show();
	$('#success_message').hide();
	$('#error_message').hide();
	
	document.getElementById('cfName').value = "";
	document.getElementById('cfEmail').value = "";
	document.getElementById('cfMessage').value = "";
	
	document.getElementById('btn-submit').removeEventListener("click", submitForm);
}

function cfSubmitForm(){
	
	if($("#cfName").val() == ""){
		document.getElementById('cfName').style.border = "1px solid red";
		return;
	}else{
		document.getElementById('cfName').style.border = "1px solid rgb(169, 169, 169)";
	}
	
	if($("#cfEmail").val() == ""){
		document.getElementById('cfEmail').style.border = "1px solid red";
		return;
	}else if(validateEmail($("#cfEmail").val()) == false){
		document.getElementById('cfEmail').style.border = "1px solid red";
		return;
	}else{
		document.getElementById('cfEmail').style.border = "1px solid rgb(169, 169, 169)";
	}
	
	cfProcessing();
	
    var name = $("#cfName").val();
    var email = $("#cfEmail").val();
	var options = $('#cfOptions').val();
	var custom_text = $('#cfCustomText').val();
	var message = $("#cfMessage").val();
	
	if(imgUpload == true){
		var canvas = document.getElementById('preview-cropped-pic');
		var imageURL = canvas.toDataURL();
	
		$.ajax({
			type: "POST",
			url: "./php/cf-process.php",
			data: "cfName=" + name + "&cfEmail=" + email + "&cfOptions=" + options + "&cfCustomText=" + custom_text + "&cfMessage=" + message + "&cfImageURL=" + imageURL,
			success : function(text){
				if (text == "success"){
					cfSuccess();
				} else {
					console.log(text);
					cfError();
				}
			}
		});
	}else{
		$.ajax({
			type: "POST",
			url: "./php/cf-process-noImage.php",
			data: "cfName=" + name + "&cfEmail=" + email + "&cfOptions=" + options + "&cfCustomText=" + custom_text + "&cfMessage=" + message,
			success : function(text){
				if (text == "success"){
					cfSuccess();
				} else {
					console.log(text);
					cfError();
				}
			}
		});
	}
}

function cfProcessing(){
	document.getElementById('btn-submit').removeEventListener("click", submitForm);
	$('form#contact-form').hide();
	$('#processing_message').show();
	$('#success_message').hide();
	$('#error_message').hide();
}

function cfSuccess(){
	$('form#contact-form').hide();
	$('#processing_message').hide();
	$('#success_message').show();
	$('#error_message').hide();
}

function cfError(){
	$('form#contact-form').hide();
	$('#processing_message').hide();
	$('#success_message').hide();
	$('#error_message').show();
}

function validateEmail(email){
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}