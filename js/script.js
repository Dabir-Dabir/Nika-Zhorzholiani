

/////////////////////
// config.js
/////////////////////

// Gallery grid
const columns_margin = 5;
const column_image = 5;

const top_line_height = 0;

// Devices widths
const mobile_width = 600;
const tablet_width = 767;
const laptop_width = 959;
const desktop_width = 1500;
const desktopFullWidth = 1921;

//////////////////////

// Variables
let window_width = $(window).width();
let window_height = $(window).height();


// Detect portrait or landscape
let window_orientation = '';

function windowOrientation() {
	if ($(window).width() > $(window).height()) {
		window_orientation = 'landscape';
	} else {
		window_orientation = 'portrait';
	}
}

// Ajax load page
let lasturl=""; //here we store the current URL hash

/////////////////////////////
//////// Top line and menu
/////////////////////////////

$(window).resize(function () {
	window_width = $(window).width();
});

$(document).on('click', '#hamburger-button', function() {
	$('#mobile-header').addClass('menu-opened');
});

$(document).on('click', '#close-mobile-menu', function() {
	$('#mobile-header').removeClass('menu-opened');
});

if (window_width <= mobile_width) {
	
	$(window).scroll(function () {
		const window_scroll_top = $(window).scrollTop();
		if (window_scroll_top > 10) {
			$('#mobile-top').addClass('scrolled');
		} else {
			$('#mobile-top').removeClass('scrolled');
		}
	});
}


/////////////////////
//// Gallery Grid
/////////////////////

function createGalleryGrid() {
	
	let column = 0;
	let column1 = 0;
	let column2 = 0;
	let column3 = 0;
	let column4 = 0;
	
	function chooseColumnCount(columns) {
		switch (columns) {
			case 1:
				column += top_line_height;
				
				$('.image-container').each(function(index) {
					
					let imageWidth = $(this).data('width');
					let imageHeight = $(this).data('height');
					let calcImageWidth = $(this).width();
					let calcImgHeight = calcImageWidth * imageHeight / imageWidth;
					
					$(this).css({
						top: column,
						height: calcImgHeight,
						left: '0'
					})
					column += calcImgHeight + column_image + 20;
				});
				return;
				
				break;
			
			case 2:
				column1 += top_line_height;
				column2 += top_line_height;
				
				$('.image-container').each(function(index) {
					
					let imageWidth = $(this).data('width');
					let imageHeight = $(this).data('height');
					let calcImageWidth = $(this).width();
					let calcImgHeight = calcImageWidth * imageHeight / imageWidth;
					
					if (column1 <= column2) {
						$(this).css({
							top: column1,
							height: calcImgHeight,
							left: '0'
						});
						column1 += calcImgHeight + column_image + 30;
						
					} else {
						$(this).css({
							top: column2,
							height: calcImgHeight,
							left: '53%'
						});
						column2 += calcImgHeight + column_image + 30;
						
					}
				});
				
				if (column1 >= column2) {
					var longestColumn = column1;
				} else {
					var longestColumn = column2;
				}
				$('#images-grid').height(longestColumn);
				return;
				
				break;
			
			case 3:
				$('.image-container').each(function(index) {
					
					let imageWidth = $(this).data('width');
					let imageHeight = $(this).data('height');
					let calcImageWidth = $(this).width();
					let calcImgHeight = calcImageWidth * imageHeight / imageWidth;
					
					if (column1 <= column2 && column1 <= column3) {
						$(this).css({
							top: column1,
							height: calcImgHeight,
							left: '0'
						});
						column1 += calcImgHeight + column_image + 35;
						
					} else if (column2 < column1 && column2 <= column3) {
						$(this).css({
							top: column2,
							height: calcImgHeight,
							left: '35%'
						});
						column2 += calcImgHeight + column_image + 35;
						
					} else {
						$(this).css({
							top: column3,
							height: calcImgHeight,
							left: '70%'
						});
						column3 += calcImgHeight + column_image + 35;
						
					}
				});
				
				if (column1 >= column2 && column1 >= column3) {
					var longestColumn = column1;
				} else if (column2 > column1 && column2 >= column3) {
					var longestColumn = column2;
				} else {
					var longestColumn = column3;
				}
				$('#images-grid').height(longestColumn);
				return;
				
				break;
			
			case 4:
				$('.image-container').each(function(index) {
					
					let imageWidth = $(this).data('width');
					let imageHeight = $(this).data('height');
					let calcImageWidth = $(this).width();
					let calcImgHeight = calcImageWidth * imageHeight / imageWidth;
					
					if (column1 <= column2 && column1 <= column3 && column1 <= column4) {
						$(this).css({
							top: column1,
							height: calcImgHeight,
							left: '0'
						});
						column1 += calcImgHeight + column_image + 80;
						
					} else if (column2 < column1 && column2 <= column3 && column2 <= column4) {
						$(this).css({
							top: column2,
							height: calcImgHeight,
							left: '25%'
						});
						column2 += calcImgHeight + column_image + 80;
						
					} else if (column3 < column1 && column3 < column2 && column3 <= column4) {
						$(this).css({
							top: column3,
							height: calcImgHeight,
							left: '50%'
						});
						column3 += calcImgHeight + column_image + 80;
						
					} else {
						$(this).css({
							top: column4,
							height: calcImgHeight,
							left: '75%'
						});
						column4 += calcImgHeight + column_image + 80;
						
					}
				});
				
				if (column1 >= column2 && column1 >= column3 && column1 >= column4) {
					var longestColumn = column1;
				} else if (column2 > column1 && column2 >= column3 && column2 >= column4) {
					var longestColumn = column2;
				} else if (column3 > column1 && column3 > column2 && column3 >= column4) {
					var longestColumn = column2;
				} else {
					var longestColumn = column3;
				}
				$('#images-grid').height(longestColumn);
				return;
				
				break;
		}
	}
	
	// Columns count on screen sizes
	if ($(window).width() > laptop_width) {
		
		chooseColumnCount(3);
		
	} else if ($(window).width() > tablet_width) {
		
		chooseColumnCount(2);
		
	} else {
		
		chooseColumnCount(1);
		
	}
	
}


////////////////////////
/////// Lightbox
////////////////////////
var imageWidth, imageHeight, imageCurrentHeight, imageCalcWidth, imageCalcHeight, imageViewHeight;

function openLightbox() {
	let index = 1;
	
	// 'Close' button
	$('#close-lightbox').click(function() {
		$('#lightbox').removeClass('opened');
	});
	
	// Click on image in grid
	$('.image-container').click(function() {
		$('#lightbox').addClass('opened');
		$('#lightbox-image').addClass('faid');
		$('#image-loader-wrap').first().addClass('loading');
		index = $(this).index();
		
		$('#next-image').css('visibility', 'visible');
		$('#prev-image').css('visibility', 'visible');
		if (index === 0) {
			$('#prev-image').css('visibility', 'hidden');
		} else if (index === $('.image-container').length - 1) {
			$('#next-image').css('visibility', 'hidden');
		}
		
		
		var currentImage;
		if (window_width <= mobile_width) {
			
			if ($('.image-container').eq(index).find('img').first().data('src') != undefined) {
				currentImage = $('.image-container').eq(index).find('img').first().data('src');
			} else {
				currentImage = $('.image-container').eq(index).find('img').first().attr('src');
			}
			
		} else if (window_width <= laptop_width) {
			
			currentImage = $('.image-container').eq(index).find('img').first().data('medium-image');
			
		} else {
			
			currentImage = $('.image-container').eq(index).find('img').first().data('big-image');
			
		}
		
		$('#lightbox-image').attr('src', currentImage).on('load', function(){
			setTimeout(function(){$('#lightbox-image').removeClass('faid'); $('#image-loader-wrap').first().removeClass('loading');}, 300);
		});
		$('#hashtags').text($('.image-container').eq(index).data('hashtags'));
	});
	
	// 'Previous' button
	$('#prev-image').click(function() {
		if (index > 0) {
			$('#lightbox-image').addClass('faid');
			$('#image-loader-wrap').first().addClass('loading');
			
			index = index - 1;
			
			// Lightbox nav arrows visibility
			if (index === 0) {
				$(this).css('visibility', 'hidden');
			}
			$('#next-image').css('visibility', 'visible');
			
			
			
			if (window_width <= mobile_width) {
				
				if ($('.image-container').eq(index).find('img').first().data('src') != undefined) {
					var currentImage = $('.image-container').eq(index).find('img').first().data('src');
				} else {
					var currentImage = $('.image-container').eq(index).find('img').first().attr('src');
				}
				
			} else if (window_width <= laptop_width) {
				
				var currentImage = $('.image-container').eq(index).find('img').first().data('medium-image');
				
			} else {
				
				var currentImage = $('.image-container').eq(index).find('img').first().data('big-image');
				
			}
			
			var currentImageTitle = $('.image-container').eq(index).find('h3').first().text();
			$('#lightbox-image').attr('src', currentImage).on('load', function(){
				setTimeout(function(){$('#lightbox-image').removeClass('faid'); $('#image-loader-wrap').first().removeClass('loading');}, 300);
			});
			$('#prev-image img').removeClass('clicked');
			setTimeout(function(){$('#prev-image img').addClass('clicked');}, 100);
		}
	});
	
	// 'Next' button
	$('#next-image').click(function() {
		if (index < $('.image-container').length - 1) {
			$('#lightbox-image').addClass('faid');
			$('#image-loader-wrap').first().addClass('loading');
			index = index + 1;
			
			// Lightbox nav arrows visibility
			if (index === $('.image-container').length - 1) {
				$('#next-image').css('visibility', 'hidden');
			}
			$('#prev-image').css('visibility', 'visible');
			
			
			if (window_width <= mobile_width) {
				
				if ($('.image-container').eq(index).find('img').first().data('src') != undefined) {
					var currentImage = $('.image-container').eq(index).find('img').first().data('src');
				} else {
					var currentImage = $('.image-container').eq(index).find('img').first().attr('src');
				}
				
			} else if (window_width <= laptop_width) {
				
				var currentImage = $('.image-container').eq(index).find('img').first().data('medium-image');
				
			} else {
				
				var currentImage = $('.image-container').eq(index).find('img').first().data('big-image');
				
			}
			
			var currentImageTitle = $('.image-container').eq(index).find('h3').first().text();
			$('#lightbox-image').attr('src', currentImage).on('load', function(){
				setTimeout(function(){$('#lightbox-image').removeClass('faid'); $('#image-loader-wrap').first().removeClass('loading')}, 300);
			});
			var currentImageTitle = $('.image-container').eq(index).find('h3').first().text();
			$('#hashtags').text($('.image-container').eq(index).data('hashtags'));
			$('#next-image img').removeClass('clicked');
			setTimeout(function(){$('#next-image img').addClass('clicked');}, 100);
		}
	});
}

///////////////////////////
//// Ajax load pages
///////////////////////////

function ajaxLoadPage() {
	
	$('.ajax').click(function() {
		var url = $(this).data('href');
		history.pushState({url}, '', url);
		checkURL(url);
	});
	
	// $('.logo').click(function(e) {
	// 	e.preventDefault();
	// 	if ( !$('logo').first().attr('href') == window.location ) {
	// 		var url = $(this).attr('href');
	//         history.pushState({url}, '', url);
	// 		checkURL(url);
	// 	}
	// });
	
	$('.menu a').click(function(e) {
		e.preventDefault();
		
		if ( !$(this).parent().hasClass('menu-item-has-children') ) {
			$('#mobile-nav').removeClass('opened');
			$('.top-line').removeClass('opened');
			var url = $(this).attr('href');
			history.pushState({url}, '', url);
			checkURL(url);
		}
	});
	
}

function checkURL(pathname) {
	if(!pathname) pathname=window.location.pathname;    //if no parameter is provided, use the pathname value from the current address
	
	if(pathname != lasturl) // if the pathname value has changed
	{
		$('.loader-wrap').addClass('loading');
		lasturl=pathname;   //update the current pathname
		loadPage(pathname); // and load the new page
	}
}

function loadPage(url) {
	
	$('#content').load(url + ' #content > *', function() {
		
		$("html, body").animate({ scrollTop: 0 }, 10);
		setTimeout(function(){$('.loader-wrap').removeClass('loading')}, 1000);
		
		var current_page_title = $('#inner').data('page-title');
		$(document).attr('title', current_page_title);
	});
	
}

// hilight current menu item
function currentMenuItem() {
	
	var cur_url = window.location.href;
	var firstChar = cur_url.indexOf("/", 7);
	var lastChar = cur_url.indexOf("/", firstChar + 1);
	
	if (lastChar > -1) {
		var cur_word = cur_url.substring(firstChar + 1, lastChar);
	} else {
		var cur_word = 'weddings';
	}
	
	$('.menu li').each(function(){
		
		if ( $(this).hasClass(cur_word) ) {
			
			$(this).addClass('hilight');
			
		} else if ( $(this).hasClass('hilight') ) {
			
			$(this).removeClass('hilight');
			
		}
	});
}

// Categories Overlay Open-Close on Mobile and Tablet Devices
function openCategoriesOvMobile() {
	if ($(window).width() <= tablet_width) {
		$('#open-categories').click(function() {
			$('#categories-ov').addClass('opened');
		});
		
		$('#close-categories').click(function() {
			$('#categories-ov').removeClass('opened');
		});
	} else {
		$('#categories-ov').removeClass('opened');
	}
}



$(document).ready(function($) {
	
	createGalleryGrid();
	openLightbox();
	ajaxLoadPage();
	currentMenuItem();
	openCategoriesOvMobile();
	
	
	$('.img').Lazy();
	
	
	// Info Overlay Open-Close
	$('#open-info').click(function() {
		$('#info-ov').addClass('opened');
	});
	$('#close-info').click(function() {
		$('#info-ov').removeClass('opened');
	});
	
	// Closu categories overlay after click
	$('#categories-ov ul a').click(function() {
		$('#categories-ov').removeClass('opened');
	});
	
	if ( $('.prev-image').attr('href') == window.location.href ) {
		$('.prev-image').css('display', 'none');
	} else if ( $('.next-image').attr('href') == window.location.href ) {
		$('.next-image').css('display', 'none');
	}
});

$(window).on('resize', function() {
	
	createGalleryGrid();
	openLightbox();
	openCategoriesOvMobile();
	
	
	$('.img').Lazy();
	
});

$(document).ajaxComplete(function() {
	
	createGalleryGrid();
	openLightbox();
	ajaxLoadPage();
	currentMenuItem();
	openCategoriesOvMobile();
	
	
	$('.img').Lazy();
});

window.addEventListener('popstate', function(event) {
	loadPage(window.location);
});