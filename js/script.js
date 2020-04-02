/////////////////////
// config.js
/////////////////////

// Gallery grid
var columns_margin = 5;
var column_image = 5;
var top_line_height = 0;

// Devices widths
var mobile_width = 600;
var tablet_width = 767;
var laptop_width = 959;
var desktop_width = 1500;
var desktopFullWidth = 1921;

//////////////////////

// Variables
var window_width = $(window).width();
var window_height = $(window).height();

var content_height = $('main').first().height();

// Detect portrait or landscape
var window_orientation = '';

function windowOrientation() {
	if ($(window).width() > $(window).height()) {
		window_orientation = 'landscape';
	} else {
		window_orientation = 'portrait';
	}
}

// Ajax load page
var lasturl = ""; //here we store the current URL hash

/////////////////////////////
//////// Top line and menu
/////////////////////////////

$(window).resize(function () {
	window_width = $(window).width();
	content_height = $('main').first().height();
});

$(document).on('click', '#hamburger-button', function () {
	$('#mobile-header').addClass('menu-opened');
});

$(document).on('click', '#close-mobile-menu', function () {
	$('#mobile-header').removeClass('menu-opened');
});

$(document).on('click', '#back-to-top', function () {
	$("html, body").animate({scrollTop: 0}, "slow");
	return false;
});

if (window_width < laptop_width) {

	$(window).scroll(function () {
		var window_scroll_top = $(window).scrollTop();
		if (window_scroll_top > 10) {
			$('#mobile-top').addClass('scrolled');
		} else {
			$('#mobile-top').removeClass('scrolled');
		}
	});
}

if (window_width >= laptop_width & window_width > window_height) {
	$(window).scroll(function () {
		var window_scroll_top = $(window).scrollTop();
		if (window_scroll_top > 90) {
			$('#back-to-top').addClass('visible');
		} else {
			$('#back-to-top').removeClass('visible');
		}
	});
}


/////////////////////
//// Gallery Grid
/////////////////////

function createGalleryGrid() {

	var column = 0;
	var column1 = 0;
	var column2 = 0;
	var column3 = 0;
	var column4 = 0;

	function chooseColumnCount(columns) {
		switch (columns) {
			case 1:
				column += top_line_height;

				$('.image-container').each(function (index) {

					var imageWidth = $(this).data('width');
					var imageHeight = $(this).data('height');
					var calcImageWidth = $(this).width();
					var calcImgHeight = calcImageWidth * imageHeight / imageWidth;

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

				$('.image-container').each(function (index) {

					var imageWidth = $(this).data('width');
					var imageHeight = $(this).data('height');
					var calcImageWidth = $(this).width();
					var calcImgHeight = calcImageWidth * imageHeight / imageWidth;

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
				$('.image-container').each(function (index) {

					var imageWidth = $(this).data('width');
					var imageHeight = $(this).data('height');
					var calcImageWidth = $(this).width();
					var calcImgHeight = calcImageWidth * imageHeight / imageWidth;

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
				$('.image-container').each(function (index) {

					var imageWidth = $(this).data('width');
					var imageHeight = $(this).data('height');
					var calcImageWidth = $(this).width();
					var calcImgHeight = calcImageWidth * imageHeight / imageWidth;

					if (column1 <= column2 && column1 <= column3 && column1 <= column4) {
						$(this).css({
							top: column1,
							height: calcImgHeight,
							left: '0'
						});
						column1 += calcImgHeight + column_image + 30;

					} else if (column2 < column1 && column2 <= column3 && column2 <= column4) {
						$(this).css({
							top: column2,
							height: calcImgHeight,
							left: '26%'
						});
						column2 += calcImgHeight + column_image + 30;

					} else if (column3 < column1 && column3 < column2 && column3 <= column4) {
						$(this).css({
							top: column3,
							height: calcImgHeight,
							left: '52%'
						});
						column3 += calcImgHeight + column_image + 30;

					} else {
						$(this).css({
							top: column4,
							height: calcImgHeight,
							left: '78%'
						});
						column4 += calcImgHeight + column_image + 30;

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
	if ($(window).width() > desktop_width) {

		chooseColumnCount(4);

	} else if ($(window).width() > laptop_width) {

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
	var index = 1;

	// 'Close' button
	$('#close-lightbox').click(function () {
		$('#lightbox').removeClass('opened');
	});

	// Click on image in grid
	$('.image-container').click(function () {
		$('#lightbox').addClass('opened');
		$('#lightbox-image').addClass('faid');
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
			currentImage = $('.image-container').eq(index).find('img').first().data('medium-image');
		} else if (window_width <= desktop_width) {
			currentImage = $('.image-container').eq(index).find('img').first().data('medium-image');
		} else {
			currentImage = $('.image-container').eq(index).find('img').first().data('big-image');
		}

		$('#lightbox-image').attr('src', currentImage).on('load', function () {
			setTimeout(function () {
				$('#lightbox-image').removeClass('faid');
			}, 300);
		});
	});

	// 'Previous' button
	$('#prev-image').click(function () {
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
				currentImage = $('.image-container').eq(index).find('img').first().data('medium-image');
			} else if (window_width <= desktop_width) {
				currentImage = $('.image-container').eq(index).find('img').first().data('medium-image');
			} else {
				currentImage = $('.image-container').eq(index).find('img').first().data('big-image');
			}

			$('#lightbox-image').attr('src', currentImage).on('load', function () {
				setTimeout(function () {
					$('#lightbox-image').removeClass('faid');
				}, 300);
			});
		}
	});

	// 'Next' button
	$('#next-image').click(function () {
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
				currentImage = $('.image-container').eq(index).find('img').first().data('medium-image');
			} else if (window_width <= desktop_width) {
				currentImage = $('.image-container').eq(index).find('img').first().data('medium-image');
			} else {
				currentImage = $('.image-container').eq(index).find('img').first().data('big-image');
			}

			$('#lightbox-image').attr('src', currentImage).on('load', function () {
				setTimeout(function () {
					$('#lightbox-image').removeClass('faid');
				}, 300);
			});
		}
	});
}

function openLightboxSingle() {
	var index = 1;

	// 'Close' button
	$('#close-lightbox').click(function () {
		$('#lightbox').removeClass('opened');
	});

	// Click on image in grid
	$('.single-event__image').click(function () {
		$('#lightbox').addClass('opened');
		$('#lightbox-image').addClass('faid');
		index = $(this).index();

		$('#next-image').css('visibility', 'visible');
		$('#prev-image').css('visibility', 'visible');
		if (index === 0) {
			$('#prev-image').css('visibility', 'hidden');
		} else if (index === $('.single-event__image').length - 1) {
			$('#next-image').css('visibility', 'hidden');
		}


		var currentImage;
		if (window_width <= mobile_width) {
			currentImage = $('.single-event__image').eq(index).find('img').first().data('medium-image');
		} else if (window_width <= desktop_width) {
			currentImage = $('.single-event__image').eq(index).find('img').first().data('medium-image');
		} else {
			currentImage = $('.single-event__image').eq(index).find('img').first().data('big-image');
		}

		$('#lightbox-image').attr('src', currentImage).on('load', function () {
			setTimeout(function () {
				$('#lightbox-image').removeClass('faid');
			}, 300);
		});
	});

	// 'Previous' button
	$('#prev-image').click(function () {
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
				currentImage = $('.single-event__image').eq(index).find('img').first().data('medium-image');
			} else if (window_width <= desktop_width) {
				currentImage = $('.single-event__image').eq(index).find('img').first().data('medium-image');
			} else {
				currentImage = $('.single-event__image').eq(index).find('img').first().data('big-image');
			}

			$('#lightbox-image').attr('src', currentImage).on('load', function () {
				setTimeout(function () {
					$('#lightbox-image').removeClass('faid');
				}, 300);
			});
		}
	});

	// 'Next' button
	$('#next-image').click(function () {
		if (index < $('.single-event__image').length - 1) {
			$('#lightbox-image').addClass('faid');
			$('#image-loader-wrap').first().addClass('loading');
			index = index + 1;

			// Lightbox nav arrows visibility
			if (index === $('.single-event__image').length - 1) {
				$('#next-image').css('visibility', 'hidden');
			}
			$('#prev-image').css('visibility', 'visible');


			if (window_width <= mobile_width) {
				currentImage = $('.single-event__image').eq(index).find('img').first().data('medium-image');
			} else if (window_width <= desktop_width) {
				currentImage = $('.single-event__image').eq(index).find('img').first().data('medium-image');
			} else {
				currentImage = $('.single-event__image').eq(index).find('img').first().data('big-image');
			}

			$('#lightbox-image').attr('src', currentImage).on('load', function () {
				setTimeout(function () {
					$('#lightbox-image').removeClass('faid');
				}, 300);
			});
		}
	});
}

///////////////////////////
//// Ajax load pages
///////////////////////////

function ajaxLoadPage() {

	$('.ajax').click(function (e) {
		e.preventDefault();

		let url = $(this).attr('href');
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

	$('.menu a').click(function (e) {
		e.preventDefault();

		$('#mobile-header').removeClass('menu-opened');
		let url = $(this).attr('href');
		history.pushState({url}, '', url);
		checkURL(url);
	});

}

function checkURL(pathname) {
	if (!pathname) pathname = window.location.pathname;    //if no parameter is provided, use the pathname value from the current address

	if (pathname != lasturl) // if the pathname value has changed
	{
		$('.loader-wrap').addClass('loading');
		lasturl = pathname;   //update the current pathname
		loadPage(pathname); // and load the new page
	}
}

function loadPage(url) {

	$('#content').load(url + ' #content > *', function () {

		$("html, body").animate({scrollTop: 0}, 10);
		setTimeout(function () {
			$('.loader-wrap').removeClass('loading')
		}, 400);

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

	$('menu li').each(function () {

		if ($(this).hasClass(cur_word)) {

			$(this).addClass('hilight');

		} else if ($(this).hasClass('hilight')) {

			$(this).removeClass('hilight');

		}
	});
}


$(document).ready(function ($) {

	createGalleryGrid();
	openLightbox();
	openLightboxSingle();
	ajaxLoadPage();
	currentMenuItem();

	$('.img').Lazy({
		effect: "fadeIn"
	});

	setTimeout(function () {
		$('.loader-wrap').removeClass('loading')
	}, 400);
});

$(window).on('resize', function () {

	content_height = $('main').first().height();

	createGalleryGrid();
	openLightbox();

	// $('.img').Lazy({
	// 	effect: "fadeIn"
	// });

});

$(document).ajaxComplete(function () {

	createGalleryGrid();
	openLightbox();
	ajaxLoadPage();
	currentMenuItem();

	$('.img').Lazy({
		effect: "fadeIn"
	});
});

window.addEventListener('popstate', function (event) {
	loadPage(window.location);
});