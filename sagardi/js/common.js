$(document).ready(function() {
	//button menu
	$('.js-menu').on('click', function(){
		$(this).toggleClass('active');
		$('.menu_wrap-mobile').toggleClass('is-active');
		$('html').toggleClass('open-popup');
	});

	//popups
	$('.js-popup-link').on('click', function() {
		$('.js-overlay').fadeIn(300);
		var popup = $(this).data('href');
		$('[data-popup="'+popup+'"]').fadeIn(300);
		//$('html').addClass('open-popup');
		if (popup == 'order-catalog') {
			$('textarea').val('Я ХОЧУ ЗАКАЗАТЬ: плитку коллекции' + ' ' + $('.artTitle').text());
		}
		return false;
	});
	$('.js-overlay, .js-popup-close').on('click', function(){
		$('.js-overlay').fadeOut(300);
		$(".js-popup").fadeOut(300);
		//$('html').removeClass('open-popup');
		return false;
	});


	//INIT MAIN SLIDER
	$('.js-slider').slick({
		arrows: true,
		infinite: true,
	});
	$('.js-photo-slider').slick({
		arrows: true,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 981,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
			}
		]
	});
	$('.js-photo-slider-inner').slick({
		arrows: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		swipe: false,
		responsive: [
			{
				breakpoint: 981,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1
					}
			},
			{
				breakpoint: 767,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						swipe: true
					}
			}
		]
	});
	$('.js-slider-news').slick({
		arrows: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 981,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1
					}
			},
			{
				breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
			}
		]
	});
	function salesslider(){
		var slider = $('.js-sales');
		slider.on('init reinit afterChange breakpoint',function(event, slick, currentSlide, nextSlide){
			
			var count = slick.slideCount;
			var cur = currentSlide;
			var slidestoscroll = slick.options.slidesToScroll;
			console.log(slidestoscroll);
			if(cur == undefined || cur == 0){
				
				slider.removeClass('bgl');
			}else{
				slider.addClass('bgl');
			}
			if(cur >= count - slidestoscroll){
				slider.removeClass('bgr');
			}else{
				slider.addClass('bgr');
			}
			// var slidesNext = parseInt(nextSlide);
			// leftblocks.removeClass('curr');
			// dopcont.find('[data-slick-index = '+ slidesNext +']').addClass('curr');
		});		
		slider.slick({
			arrows: true,
			infinite: false,
			slidesToShow: 4,
			slidesToScroll: 4,
			adaptiveHeight: false,
			// centerMode: true,
			// initialSlide: 2,
			// draggable: false,
			dots: true,
			appendDots: $('.js-sales').parent().find('.sales-pagi'),
			responsive: [
				{
					breakpoint: 981,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3
						}
				},
				{
					breakpoint: 768,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
				}
			]
		});
	}
	salesslider();
	$('.js-contact-slider').slick({
		arrows: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.js-pager-slider',
		fade: true
	});
	$('.js-pager-slider').slick({
		arrows: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		vertical: true,
		verticalSwiping: true,
		asNavFor: '.js-contact-slider',
		responsive: [
			{
				breakpoint: 768,
					settings: {
						vertical: false,
						verticalSwiping: false
					}
			}
		]
	});
	$('.js-pager-slider .slick-slide').on('click', function(){
		var index = $(this).attr('data-slick-index');
		$('.js-pager-slider').find('.slick-slide').removeClass('current');
		$(this).addClass('current');
		$('.js-contact-slider').slick('slickGoTo', index);
	});



	$('.js-gallery').slick({
		arrows: false,
		infinite: true,
		asNavFor: '.js-gallery-pager',
		swipe: false
	});

	$('.js-gallery-pager').slick({
		arrows: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.js-gallery',
		responsive: [
			{
				breakpoint: 980,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
					}
			},{
				breakpoint: 768,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
			}
		]
	});
	$('.js-gallery-pager .slick-slide').on('click', function(){
		//initVideo();
		var index = $(this).attr('data-slick-index');
		$('.js-gallery-pager').find('.slick-slide').removeClass('current');
		$(this).addClass('current');
		$('.js-gallery').slick('slickGoTo', index);
	});
	$('.js-gallery-pager').on('afterChange', function (slick){
		//initVideo();
	})


	function oneheight(){
		setTimeout(function(){
			var project_divs = $(".newsItem a");
			var maxHeight = 0;
			for(var i =0; i< project_divs.length; i++){
				if(maxHeight < project_divs[i].clientHeight){
					maxHeight = project_divs[i].clientHeight;
				}
			}
			for(var i=0; i < project_divs.length; i++){
				project_divs[i].style.height = maxHeight +'px';
			}
		});
	};
	oneheight();
	$(window).resize(function(){
		oneheight();
	});
	

	//validation
    var form_validate = $('.js-validate');
    if (form_validate.length) {
        form_validate.each(function () {
        var form_this = $(this);
        $.validate({
            	form : form_this,
            	validateOnBlur : false,
            	scrollToTopOnError : false,
            	borderColorOnError : '#fca9a5'
            });
        });
    };

    //fancybox
    if($('.fancybox').length){
	    $('.fancybox').fancybox({
			padding: 0,
			helpers:  {
				overlay : {
					locked: false
				}
			}
		});
	}


	//YANDEX MAP
	//if($('.map_container').length){
		var myMap;

		ymaps.ready(init);
		function init(){
			myMap = new ymaps.Map('map', {
				center: [53.933985, 27.503189],
				zoom: 16,
				controls: ['zoomControl']
			},{
				searchControlProvider: 'yandex#search'
			}),
			myPlacemark = new ymaps.Placemark([53.932734, 27.503189], {
				balloonContentHeader: "Балун метки",
	            balloonContentBody: "Содержимое <em>балуна</em> метки",
	            balloonContentFooter: "Подвал",
	            hintContent: "Хинт метки"
	        },{
	        	iconLayout: 'default#image',
	        	iconImageHref: 'images/baloon-map.png',
	        	iconImageSize: [260,260],
	        	iconImageOffset: [-130,-260]
	        });
			myMap.behaviors.disable('scrollZoom');
	        myMap.geoObjects.add(myPlacemark);
		};
	//};
	// tabs
	function tab() {
		$(".js-tab").each(function(){
			var tab_link = $(this).find("a");
			var tab_item = $(this).find("li");
			var tab_cont = $(this).parents(".js-tab-group").find(".js-tab-cont");
			tab_cont.hide();
			tab_item.first().addClass("is-active");
			$(this).parents(".js-tab-group").find(".js-tab1").show();
			tab_link.on("click", function() {
				var index = $(this).data("href");
				tab_item.removeClass("is-active");
				$(this).parent().addClass("is-active");
				tab_cont.hide();
				$(this).parents(".js-tab-group").find("."+index).show();           
				return false;
			});
		});
	}
	tab();


	//SHOW MORE
	function initShow() {
		var height = 125;
		$('.js-readmore').readmore({
			speed: 375,
			maxHeight: height,
			moreLink: '<a href="#" class="readmore">Показать все</a>',
			lessLink: '<a href="#" class="readmore">Скрыть</a>',
			//heightMargin: 18
		});
	};
	initShow();

	$(window).resize(function () {
		initShow();
	})

	//select
	function selectSingle() {
		$(".js-select-single").each(function(){
			var length = $(this).find('option').length;
			console.log(length)
			if(length == 0) {
				$(this).parents('.filter').find('.select').addClass('olo');
			}
			var placeholder = $(this).data("placeholder");
			$(this).multiselect({
				multiple: false,
				//header: false,
				show: ["fade", 200],
				hide: ["fade", 200] ,
				selectedList: 1,
				noneSelectedText: placeholder
			});
		});		
	};
	selectSingle();


	//tooltip
	$('.js-tooltip').on('click', function () {
		$(this).parent().find('.js-container').toggleClass('is-open');
	});
	$('.js-tooltip-hover').hover(function () {
		$(this).parent().find('.js-container').addClass('is-open');
	},function(){
		$(this).parent().find('.js-container').removeClass('is-open');
	});
	$('.btn_tooltip-close').on('click', function () {
		$(this).parent().removeClass('is-open');
	})
	$('.js-container').mouseleave(function () {
		$(this).removeClass('is-open');
	});



	//slider
	function ui_slider() {
		$(".js-ui-slider").each(function(){
			var slider = $(this).find(".js-ui-slider-main"),
				inputFrom = $(this).find(".js-ui-slider-from"),
				inputFromHidden = $(this).find(".js-input-from-hidden"),
				inputTo = $(this).find(".js-ui-slider-to"),
				inputToHidden = $(this).find(".js-input-to-hidden"),
				maxVal = +slider.attr("data-max"),
				minVal = +slider.attr("data-min"),
				valFrom = inputFromHidden.val(),
				valTo = inputToHidden.val(),
				stepVal = +slider.attr("data-step"),
				reset = $(this).find('.js-reset-range');
				inputFromHidden.val(minVal);
				inputToHidden.val(maxVal);
				
				if (!valFrom) {
					var valFrom = minVal;
				}
				if (!valTo) {
					var valTo = maxVal;
				}
				
			slider.slider({
				range: true,
				min: minVal,
				max: maxVal,
				//step: stepVal,
				values: [ valFrom, valTo ],
				stop: function( event, ui ) {
					inputFrom.val(ui.values[0]);
					inputFromHidden.val(ui.values[0]);
					inputTo.val(ui.values[1]);
					inputToHidden.val(ui.values[1]);
				},
				slide: function( event, ui ) {
					inputFrom.val(ui.values[0]);
					inputFromHidden.val(ui.values[0]);
					inputTo.val(ui.values[1]);
					inputToHidden.val(ui.values[1]);
				}
			});
			
			inputFrom.on('change', function(){
				var val1 = $(this).val(),
					val2 = inputFromHidden.val(val1),
					valmin = slider.attr('data-min'), 
					valmax = inputToHidden.val();
				if(parseInt(val1) < parseInt(valmin)) {
					val1 = valmin
					$(this).val(valmin);
					$('.js-input-from-hidden').val(valmin);
				}
				
				if (parseInt(val1) > parseInt(valmax)) {
					val1 = valmax;
					inputFromHidden.val(val1);
					$(this).val(valmax);
				}					
				slider.slider('values',0 , val1);
        	});
			
			inputTo.on('change', function(){
				var val1 = $(this).val(),
					val2 = inputToHidden.val(val1),
					valmin = inputFromHidden.val(),
					valmax = slider.attr('data-max');
				if(parseInt(val1) > parseInt(valmax)) {
					val1 = valmax;
					$(this).val(valmax);
					inputToHidden.val(valmax);
				}
				if(parseInt(val1) < parseInt(valmin) ) {
					val1 = valmin;
					inputToHidden.val(valmin);
					$(this).val(valmin);
				}
				slider.slider('values',1 , val1);
			});

			inputFrom.val(slider.slider( "values", 0 ));
			inputTo.val(slider.slider( "values", 1 ));
		});
	}
	ui_slider();

	$(".js-reset-range").on("click",function(){
		var slider = $(".js-ui-slider").find(".js-ui-slider-main"),
			maxVal = slider.attr("data-max"),
			minVal = slider.attr("data-min");
		slider.slider( "values", [ minVal, maxVal ] );
		$(".js-ui-slider").find(".js-input-from-hidden").val(minVal);
		$(".js-ui-slider").find(".js-input-to-hidden").val(maxVal);
		$(".js-ui-slider").find(".js-ui-slider-from").val(minVal);
		$(".js-ui-slider").find(".js-ui-slider-to").val(maxVal);
		$(".js-select-single").multiselect("uncheckAll");
		$('input:checkbox').removeAttr('checked');
		return false;	
	});



	//toggle filter

	$('.toggle_filter').on('click', function () {
		$(this).parents('.content').toggleClass('is-show');
		selectSingle();
		initShow();
	})


	//video
	function initVideo() {  
		$(".video-js").each(function (videoIndex) {
		    var videoId = $(this).attr("id");
			var myPlayer = videojs(videoId);
		    _V_(videoId).ready(function(){
		        $('.js-gallery-pager .slick-slide,.js-gallery-pager .slick-arrow').on('click', function(){
		            $(".video-js").each(function (index) {
		                this.player.pause();
		            });
		        });

		    });
		});    
	}
	initVideo();


	//animate popup
	$('.js-request').on('click', function(){
		$(this).parents('.popup-form').find('.js-form').addClass('is-visible');
		$(this).attr('type','submit');
	});
	$('.js-overlay, .js-popup-close').on('click', function(){
		$('.js-form').removeClass('is-visible');
		$('.js-request').removeAttr('type');
	});
});