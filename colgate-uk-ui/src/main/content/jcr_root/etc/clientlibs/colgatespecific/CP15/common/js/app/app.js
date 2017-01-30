/**
* This file handles the initialization of the App object and it's modules,
* should also contain any common variables required by the system
*
*
* This is required for the usage of components, please do not remove
**/

;(function (App, undefined) {

    // Setting App.debug to @true will display all console and/or
    // logging routines within browser consoles called via App.Log
    // App.Log return an array of arguments passed
    App.debug = true;
    App.consoleDebugger = App.consoleDebugger === undefined ? {} : App.consoleDebugger;
    App.Log = function () {
         if (App.debug) { return log(arguments); }
    };

    // cache general configs
    App.Window = $(window);
    App.HTML = $('html, body');

    //TODO: do not rely on html classes in order to detect browsers, use navigator.userAgent instead
    App.isIE10 = App.HTML.hasClass('ie10');
    App.isIE9 = App.HTML.hasClass('ie9');
    App.isIE8 = App.HTML.hasClass('ie8');
    App.ua = navigator.userAgent.toLowerCase();

    // Initialize App Objects
    App.Utils = App.Utils === undefined ? {} : App.Utils;
    App.Components = App.Components === undefined ? {} : App.Components;

    //Initialize your components here
    App.Responsive = App.Responsive === undefined ? {} : App.Responsive;
    App.Foo = App.Foo === undefined ? {} : App.Foo;
    App.Header = App.Header === undefined ? {} : App.Header;
    App.BasicHeader = App.BasicHeader === undefined ? {} : App.BasicHeader;
    App.Navigation = App.Navigation === undefined ? {} : App.Navigation;
    App.SearchInput = App.SearchInput === undefined ? {} : App.SearchInput;
    App.SubmitForm = App.SubmitForm === undefined ? {} : App.SubmitForm;
    App.Footer = App.Footer === undefined ? {} : App.Footer;
    App.NiceScroll = App.NiceScroll === undefined ? {} : App.NiceScroll;
    App.Slider = App.Slider === undefined ? {} : App.Slider;
    App.MultipleSlider = App.MultipleSlider === undefined ? {} : App.MultipleSlider;
    App.ToggleList = App.ToggleList === undefined ? {} : App.ToggleList;
    App.VideoController = App.VideoController === undefined ? {} : App.VideoController;
    App.FlexImg = App.FlexImg === undefined ? {} : App.FlexImg;
    App.Glossary = App.Glossary === undefined ? {} : App.Glossary;
    App.ToggleComponent = App.ToggleComponent === undefined ? {} : App.ToggleComponent;
    App.SortTopic = App.SortTopic === undefined ? {} : App.SortTopic;
    App.topicChoice = App.topicChoice === undefined ? {} : App.topicChoice;
    App.SimpleSlider = App.SimpleSlider === undefined ? {} : App.SimpleSlider;
    App.SliderDesk = App.SliderDesk === undefined ? {} : App.SliderDesk;
    App.FadeSlider = App.FadeSlider === undefined ? {} : App.FadeSlider;
    App.Zoom = App.Zoom === undefined ? {} : App.Zoom;
    App.FilterByTag = App.FilterByTag === undefined ? {} : App.FilterByTag;
    App.CollapseBreakpoints = App.CollapseBreakpoints === undefined ? {} : App.CollapseBreakpoints;
    App.Tooltip = App.Tooltip === undefined ? {} : App.Tooltip;
    App.ShowMore = App.ShowMore === undefined ? {} : App.ShowMore;
    App.CoolSelect = App.CoolSelect === undefined ? {} : App.CoolSelect;
    App.ShowMoreMobile = App.ShowMoreMobile === undefined ? {} : App.ShowMoreMobile;
    App.ShowMoreAjax = App.ShowMoreAjax === undefined ? {} : App.ShowMoreAjax;
    App.ShowMoreHide = App.ShowMoreHide === undefined ? {} : App.ShowMoreHide;
    App.Outbrain = App.Outbrain === undefined ? {} : App.Outbrain;
    App.ThumbSelectorZoom = App.ThumbSelectorZoom === undefined ? {} : App.ThumbSelectorZoom;
    App.ProductGrid = App.ProductGrid === undefined ? {} : App.ProductGrid;
    App.IE8Placeholder = App.IE8Placeholder === undefined ? {} : App.IE8Placeholder;
    App.FormFilter = App.FormFilter === undefined ? {} : App.FormFilter;
    App.FormSelector = App.FormSelector === undefined ? {} : App.FormSelector;
    App.IFrameResize = App.IFrameResize === undefined ? {} : App.IFrameResize;
    App.SimpleAnchor = App.SimpleAnchor === undefined ? {} : App.SimpleAnchor;
    App.YoutubeVideoInfo = App.YoutubeVideoInfo === undefined ? {} : App.YoutubeVideoInfo;
    App.oneIframeResize = App.oneIframeResize === undefined ? {} : App.oneIframeResize;
    App.YoutubeVideoThumb = App.YoutubeVideoThumb === undefined ? {} : App.YoutubeVideoThumb;
    App.YoutubeAPILoader = App.YoutubeAPILoader === undefined ? {} : App.YoutubeAPILoader;
    App.SwitchTitles = App.SwitchTitles === undefined ? {} : App.SwitchTitles;
    App.GameGrid = App.GameGrid === undefined ? {} : App.GameGrid;
    

    //fires App initialization
    App.Initialize = (function () {}());

}(window.App = window.App === undefined ? {} : window.App));

/**
*  Basic Header functions
**/

/**
* 	USAGE: call this component adding a call to its Initialize method on the html code
*          You can pass over options using data-component-options Warning: must put inside a valid Json object
*	 You can choose between using the simple header or not:
*	 EXAMPLE: <div data-component="App.BasicHeader.Initialize"></div>
*
**/

;(function(App){


	/*
	App.BasicHeader.CollapseSlider()
		Hides the slider element in colgate.com page
	@params:
		None
	*/
	App.BasicHeader.CollapseSlider = function() {
		//App.BasicHeader.HideSlider();
		if (App.currentBreakpoint !== 'mobile') {
			$('.grey-box-slider .bx-wrapper').fadeOut();
		}
	};//-- App.BasicHeader.CollapseSlider()	

	/*
	App.BasicHeader.ExpandSlider()
		Shows the slider element in colgate.com page
	@params:
		None
	*/
	App.BasicHeader.ExpandSlider = function() {
		//App.BasicHeader.ShowSlider();
		if (App.currentBreakpoint !== 'mobile') {
			$('.grey-box-slider .bx-wrapper').fadeIn();
		}
	};//-- App.BasicHeader.ExpandSlider()

	/*
	App.BasicHeader.CollapseMainSection()
		Hides the main section of the header in colgate.com page
	@params:
		None
	*/
	App.BasicHeader.CollapseMainSection = function() {
		//App.BasicHeader.HideSlider();
		if (App.currentBreakpoint !== 'mobile') {
			$('.main-sections').fadeOut();
		}
	};//-- App.BasicHeader.CollapseMainSection()

	/*
	App.BasicHeader.ExpandMainSection()
		Shows the main section of the header in colgate.com page
	@params:
		None
	*/
	App.BasicHeader.ExpandMainSection = function() {
		//App.BasicHeader.ShowSlider();
		if (App.currentBreakpoint !== 'mobile') {
			$('.main-sections').fadeIn();
		}
	};//-- App.BasicHeader.ExpandMainSection()

	/*
	App.BasicHeader.setCorrectCSS
		Sets the correct css for the header depending if if is simple or not
	@params: 
		none
	*/
	App.BasicHeader.setCorrectCSS = function () {
		var headerHero = $('header .wrapper .hero');
		headerHero.css({'width':'auto'});
	};//-- App.BasicHeader.setCorrectCSS

	/*
	App.BasicHeader.SetCorrectHeaderSize()
		Centers the image in desktop browsers when the user resizes.
	@params:
		None
	*/
	App.BasicHeader.SetCorrectHeaderSize = function () {
		
		var maxSize;
		var windowWidth = $(window).width();

		if (windowWidth >= 960) {
			maxSize = 1920;

		} else if (windowWidth >= 768 ) {

			maxSize = 959;

		} else if (windowWidth >320 || $('section').hasClass('colgate-com') ) {
			
			maxSize = 767;

		} else {
			App.BasicHeader.$hero.css('left', 0);
			return;
		}

		var position = ( maxSize - windowWidth ) / 2;
		//if( !navigator.userAgent.match(/(Android)/g)){
			App.BasicHeader.$hero.css('left', -position);

		//}


	};//-- App.BasicHeader.SetCorrectHeaderSize()


	/*
	App.BasicHeader.InitScroll()
		Initializes the calculations for the header so it shrinks when the user scrolls down. 
	@params: 
		initialHeight: The header's height at that moment (Could be full screen or not)
		bottomLimit: The moment when the header stops cutting from the bottom and starts movin the imagen up.
		headerMinimunHeight: The minimun height that the header will have at full scroll.
	*/
	App.BasicHeader.InitScroll = function(initialHeight, bottomLimit, headerMinimunHeight){
		App.BasicHeader.$sliderNavigationState =  'active';
		var MState = 'active';
		var mainSectionNavigationState = 'active';
		var navigationState = 'active';
		var scroll;
		var newHeight;
		var collapseHeight = initialHeight - $('.main-sections .container').height();

		//if( navigator.userAgent.match(/(iPad|iPhone|iPod touch);.*CPU.*OS 7_\d/i)) {
		if( navigator.userAgent.match(/(iPad|iPhone|iPod|Android)/g)) {
			$(window).unbind('scroll'); //added to reset scroll behavior for ios devices
			App.BasicHeader.$header.css({'position':'static'});
			App.BasicHeader.$header.find('.nav-bar').css({'left':'0px !important','z-index':'90'});
			var newSliderHeight = $('.colgate-com-home .bx-wrapper .bx-viewport .head-slider').height();
			$('.colgate-com-home .bx-wrapper').css({'height':newSliderHeight+'px'});
			App.BasicHeader.$header.find('.nav-bar-content').css({'position':'absolute','top':'0','left':'0px'});
			App.BasicHeader.$header.find('.header .nav-bar .nav-bar-blur').css({'position':'absolute','top':'0','left':'0px !important'});
			//App.BasicHeader.$header.find('.nav-bar-content').css({'position':'fixed'});
			App.BasicHeader.$header.find('.nav-bar-content').css({'-webkit-backface-visibility':'hidden'});
			App.BasicHeader.$header.find('.nav-bar-content').css({'backface-visibility':'hidden'});
			jQuery('.header-background-height').css({'display':'none'});
			//App.BasicHeader.$header.find('.search-bar').css({'top':'207px'});
			//$('header .wrapper .header-content .search-bar').css({'position':'relative','margin-top':'-73px','padding-bottom':'30px','bottom':'none'});
			$(window).scroll(function (event) {
				scroll = $(window).scrollTop();
				var navHeight = $('.nav-bar-content').height();
				var headHeight = $('img.hero').height();
				var imgHeight = headHeight - navHeight;
				/*
				if (scroll > headHeight) {
					//$('.nav-bar-blur img').css('top','-'+navHeight+'px');
				}
				else {
					//$('.nav-bar-blur img').css('top','0px');
				}
				*/
			});
			App.BasicHeader.SetCorrectHeaderSize();
			App.BasicHeader.replicateBlur();
		} else {


			$(window).unbind('scroll'); // to reset the scroll behaviour.

			$(window).scroll(function (event) {

				scroll = $(window).scrollTop();
				newHeight = initialHeight - scroll;
				var windowSize = $(window).width();

				if ($('section').hasClass('colgate-com') ) {
					if (scroll > 0) {

						/*Collapse Slider */
						if (App.BasicHeader.$sliderNavigationState === 'active') {
							App.BasicHeader.CollapseSlider();
							App.BasicHeader.$sliderNavigationState = 'collapsed';
							App.FadeSlider.$fadeSlider.stopAuto();
						}


						if (scroll > collapseHeight) {
							/* Collapse Main Options */
							if (mainSectionNavigationState === 'active') {
								App.BasicHeader.CollapseMainSection();
								mainSectionNavigationState = 'collapsed';
							}
						} else	{
							/* Show Main Options */
							if (mainSectionNavigationState === 'collapsed') {
								App.BasicHeader.ExpandMainSection();
								mainSectionNavigationState = 'active';
							}
						}

					} else {
						/* Show Slider */
						if (App.BasicHeader.$sliderNavigationState === 'collapsed') {
							App.BasicHeader.ExpandSlider();
							App.BasicHeader.$sliderNavigationState = 'active';
							App.FadeSlider.$fadeSlider.startAuto();
						}
					}
				}
				
				if (newHeight > headerMinimunHeight) {

					if ( bottomLimit > newHeight ) {

						var topValue = -(bottomLimit - newHeight);
						$('.wrapper .hero').css({ 'top': topValue});

					} else {

						$('.wrapper .hero').css({ 'top':0});

					}

					if (navigationState === 'collapsed') {
						navigationState = 'active';
					}

					$('header').height(newHeight);

				} else {

					//When the user is on the minimun height

					if (navigationState !== 'collapsed') {
						var top = -(initialHeight - headerMinimunHeight - (initialHeight - bottomLimit ));
						$('.wrapper .hero').css({ 'top':top});

						$('header').height(headerMinimunHeight);

						navigationState = 'collapsed';
					}
				}
				App.BasicHeader.replicateBlur();
			});
		}

	};//-- App.BasicHeader.InitScroll()

	/*
	App.BasicHeader.ResizeOption()
		Resets the main functions when the user resizes the screen.
	@params: 
		None
	*/
	App.BasicHeader.ResizeOption = function () {

		App.BasicHeader.SetCorrectHeaderSize();

		if(!App.Responsive.IsMobile()) { //resize option only for desktop.
			$( window ).resize(function() {

				App.BasicHeader.setCorrectCSS();
				App.BasicHeader.SetCorrectHeaderSize();
				App.BasicHeader.ResetHeaderHeight();
				
				var headerHeight = $('.wrapper').outerHeight();
				var imageBottomLimit = headerHeight - headerHeight / 4 ;
				var headerMinimunHeight = $('.nav-bar-content').height() + 4;

				App.BasicHeader.InitScroll(headerHeight, imageBottomLimit, headerMinimunHeight);
			});
		}

	};//-- App.BasicHeader.ResizeOption()

	/*
	App.BasicHeader.ResetHeaderHeight()
		Resets the header height so the pluggin can function correctly when the user resizes the screnn
	@params: 
		None
	*/
	App.BasicHeader.ResetHeaderHeight = function () {
		$('html, body').scrollTop(0);
		App.BasicHeader.ExpandSlider();
		App.BasicHeader.ExpandMainSection();
		$('header').css('height','auto');
		$('header .wrapper').css('height','auto');
		$('.header-background-height').height($('header').height());
		App.BasicHeader.replicateBlur();
	};//-- App.BasicHeader.ResetHeaderHeight()

	/*
	App.BasicHeader.HeaderBehavior()
		Sets the main header functionality.
	@params: 
		None
	*/
	App.BasicHeader.HeaderBehavior = function () {
		App.BasicHeader.ResetHeaderHeight();
		App.BasicHeader.ResizeOption();

		var headerHeight = $('.wrapper').outerHeight();
		var imageBottomLimit = headerHeight - headerHeight / 4 ;
		var headerMinimunHeight = $('.nav-bar-content').height() + 4;

		App.BasicHeader.InitScroll(headerHeight, imageBottomLimit, headerMinimunHeight);

		App.BasicHeader.replicateBlur();
	};//-- App.BasicHeader.HeaderBehavior()


	/*
		Relicates size and position of the hero image into the blur layer
	*/
	App.BasicHeader.replicateBlur = function(){

		var css = {
			'height': App.BasicHeader.$hero.height() + 'px',
			'width': App.BasicHeader.$hero.width() + 'px',
			'left' : App.BasicHeader.$hero.css('left'),
			'top' : App.BasicHeader.$hero.css('top')
		};
		App.BasicHeader.$blurImg.css(css);
	};

	/*
	App.BasicHeader.Initialize()
		Initialize functions for the home page.
	@params: 
		none
	*/
	App.BasicHeader.Initialize = function(){
		App.BasicHeader.$header = jQuery('header');
		App.BasicHeader.$hero = jQuery('header .wrapper .hero');
		App.BasicHeader.$blurImg =  jQuery('.nav-bar-blur img');
		App.BasicHeader.$navBar = jQuery('header .nav-bar');
		App.BasicHeader.$content = App.BasicHeader.$header.find('.header-content');

		App.BasicHeader.setCorrectCSS();
		App.BasicHeader.HeaderBehavior();

	};//-- App.BasicHeader.Initialize()

}(window.App));
/**
* Slider component 
* Use the examples below to create you own module
**/

/**
* 	USAGE: call this component adding a call to its Initialize method on the html code
*          You can pass over options using data-component-options Warning: must put inside a valid Json object
*   EXAMPLE: <div data-component='App.Slider.Initialize' data-options='{}'></div>
**/
;(function(App){


	/*
	App.Slider.setbxSlider();
		Initilizes or destroys the bxslider plugin depending on the size of the screen. 
	@params: 
		sliderObject :  the basic html structure for the slider.
	*/
	App.SimpleSlider.setbxSlider = function ($slider) {

		var windowSize = $(window).width();
		var sliderObject = $slider;

		sliderObject.bxSlider({
			mode: 'fade',
			touchEnabled: true,
			controls: true,
			infiniteLoop: true
		});

	};//-- App.Slider.setbxSlider();

	/*
	App.Slider.Initialize();
		Initilizes the functionality for the bxslider plugin-
	@params: 
		options :  to know the data-component-caller
	*/
	App.SimpleSlider.Initialize = function(options){
		App.SimpleSlider.setbxSlider($(options.dataComponentCaller));
	};//-- App.Slider.Initialize();

}(window.App));
/**
*	Choice module
	This module allow to jump to links from a button bar
**/

;(function(App){
	
	//Handles component initialization

	App.topicChoice.Initialize = function(componentData){

		//First load the component options
		var componentContainer = jQuery(componentData.dataComponentCaller);
		var letter = componentContainer.find(componentData.choice);
		App.topicChoice.goToLetterBox(letter,componentContainer);
		App.topicChoice.checkTopicHash();
	};


	//go to letter box click event
	App.topicChoice.goToLetterBox = function(letter,componentContainer){
		$(letter).click(function(event){

			event.preventDefault();

			var toLetterParent = $(this).parent();
			var toLetter = $(this).attr('href');
			var letterBox = componentContainer.find(toLetter);
			var position = letterBox.offset().top - $('.nav-bar-content').height();
			var body = $('html, body');

			if(!(toLetterParent.hasClass('deactive'))){

				setTimeout(function(){
					body.animate({scrollTop:position}, '500', 'swing');
				}, 500);
			}
		});
	};


	/*
	App.topicChoice.ScrollToPosition()
		Checks if the url redirects to a form. If it does, it will open the form section.
	@params:
		none
	*/
	App.topicChoice.checkTopicHash = function() {

		setTimeout(function(){
			$('html, body').stop();
			var urlHash = document.location.hash;

			console.log(urlHash);
				$('a[href="'+ urlHash +'"]').click();
			/*
			if (urlHash.indexOf('short-form') !== -1) {
				App.FormFilter.OpenSectionform('short-form');
			}

			if (urlHash.indexOf('long-form') !== -1) {
				App.FormFilter.OpenSectionform('long-form');
			}*/

		}, 2000);
	
	};//-- App.topicChoice.ScrollToPosition()



	
}(window.App));
/**
* CollapseBreakpoints component
* Toggle collapse status depending on the breakpoint. It must be called with a
* bootstrap collapseable object
**/

/**
*       USAGE: call this component adding a call to its Initialize method on the html code
*          You can pass over options using data-component-options Warning: must put inside a valid Json object
*   EXAMPLE: <div data-component='App.Slider.Initialize' data-options='{}'></div>
**/
;(function(App){

        /*
        App.CollapseBreakpoints.resetCollapse();

        @params:

        */
        App.CollapseBreakpoints.resetCollapse =  function (caller, currentBreakpoint) {

          var defaultOptions = { 'mobile':'show', 'tablet':'show', 'desktop':'show' };
          var options = $.extend(defaultOptions, caller.data('component-options'));
          caller.collapse(options[currentBreakpoint]);

        };//-- App.CollapseBreakpoints.resetToggle();


        /*
        App.CollapseBreakpoints.bindEvents();

        @params:

        */
        App.CollapseBreakpoints.bindEvents = function (caller) {
          App.onBreakpointChange(
            function(event, breakpoints){
              App.CollapseBreakpoints.resetCollapse(caller, breakpoints.currentBreakpoint);
            });
        };//-- App.CollapseBreakpoints.resetToggle();

        /*
        App.CollapseBreakpoints.Initialize();
                Initilizes the functionality
        @params:
                options :  to know the data-component-caller
        */
        App.CollapseBreakpoints.Initialize = function(options){
          App.CollapseBreakpoints.bindEvents($(options.dataComponentCaller));
          App.Responsive.triggerBreakpointChange();
        };//-- App.CollapseBreakpoints.Initialize();

}(window.App));

/**
* CoolSelect component
* Sets a list working sync'd with a native select on mobile devices
**/

/**
*   USAGE: call this component adding a call to its Initialize method on the html code
*          You can pass over options using data-component-options Warning: must put inside a valid Json object
*   EXAMPLE: <div data-component='App.CoolSelect.Initialize' data-options='{}'></div>
**/
;(function(App){

    // ###  Example for module initialization
    // @param: options
    App.CoolSelect.Initialize = function(options){
        //options.componentCaller references the DOM element that contains the data-component
        var elements = {};
        elements.$this = $(options.dataComponentCaller);
        elements.$trigger = elements.$this.find(options.listTrigger);
        elements.$options = elements.$this.find(options.listOptions);
        elements.$input = elements.$this.find(options.input);
        elements.$select = elements.$this.find(options.select);

        elements.$options.hide();
        //by default the list might have a hidden class to avoid display before hiding, need to take it out
        elements.$options.removeClass('hidden');

        App.CoolSelect.bindHandlers(elements);
    };

    //bind event handlers for elements
    App.CoolSelect.bindHandlers = function (elements) {

        //trigger click opend the list
        elements.$trigger.on('click',function(e){
            $(this).addClass('active');
            e.preventDefault();
            elements.$options.slideDown(function () {
                elements.$options.removeAttr('style');
                App.CoolSelect.afterDisplayList(elements.$options, elements.$trigger);
            });
            
        });

        //handle list selection
        elements.$options.find('li').on('click', function(){
            var value = $(this).data('value');
            var text = $(this).text();

            elements.$trigger.removeClass('active');
            App.CoolSelect.updateListDisplay(elements.$trigger, text);
            App.CoolSelect.updateValue(elements.$input, value);
            App.CoolSelect.updateSelect(elements.$select, value);
        });

        elements.$select.on('change',function(e){
            App.CoolSelect.updateValue(elements.$input, this.value);

            $(this).find('option').each(function(index){
                if( this.value === elements.$select.val()){
                    App.CoolSelect.updateListDisplay(elements.$trigger, $(this).text());
                }
            });
        });
    };

    //handle display value for the list component
    App.CoolSelect.updateListDisplay = function($trigger, text){
        $trigger.text(text);
    };

    App.CoolSelect.updateSelect = function($select, value){
        $select.val(value);
    };

    //handle clicks outside the menu after diplaying
    App.CoolSelect.afterDisplayList = function($options, $trigger){
        $('html').click(function(event) {
            $('html').unbind('click');
            $options.slideUp();
            $trigger.removeClass('active');
        });
        $('html').on('touch',function(event) {
            $('html').unbind('click');
            $options.slideUp();
            $trigger.removeClass('active');
        });
    };

    //updates value of the hidden input
    App.CoolSelect.updateValue = function($input, value){
        $input.val(value);
    };

}(window.App));
// #### App.consoleDebugger()
// Used in conjunction with App.Log(args);
// * Safe calling of console.log
// * Disables console errors if not supported allowing you to retain console data in your code.
;(function (App) {

    //do not do this on debug mode, it is not usefull
    // if(!App.debug){
    //     try {
    //         var noop = function () {}, log = {};
    //         window.log = {};
    //         window.log = (window.console === undefined) ? noop
    //             : (Function.prototype.bind !== undefined) ? Function.prototype.bind.call(console.log, console)
    //             : function() { Function.prototype.apply.call(console.log, console, arguments); };
    //         return log;
    //     } catch (err) {
    //         throw new Error('<!>App.consoleDebugger: ' + err);
    //     }
    // }
}(window.App)); //-- App.consoleDebugger()
/**
* FadeSlider component 
* Use the examples below to create you own module
**/

/**
* 	USAGE: call this component adding a call to its Initialize method on the html code
*          You can pass over options using data-component-options Warning: must put inside a valid Json object
*   EXAMPLE: <div data-component='App.FadeSlider.Initialize' data-options='{}'></div>
**/
;(function(App){
	/*App.FadeSlider.goToSlide = function(headSlider,newIndex){
		headSlider.goToSlide(newIndex);
	};*/
	/*
	App.FadeSlider.setbxSlider();
		Initilizes or destroys the bxslider plugin depending on the size of the screen. 
	@params: 
		sliderObject :  the basic html structure for the slider.
	*/
	App.FadeSlider.setbxSlider = function (sliderObject) {

		var windowSize = $(window).width();
		var headSlider = $('.head-slider').bxSlider({ mode: 'fade', controls: false, pager: false, responsive: false, autoStart: false});
		App.FadeSlider.$fadeSlider = sliderObject.bxSlider({
			touchEnabled: true,
			controls: true,
			infiniteLoop: true,
			auto: true,
			pause: 5000,
			onSlideBefore: function ($slideElement, oldIndex, newIndex) {
				var routes = App.FadeSlider.ExtractRoutes($slideElement);
				App.FadeSlider.chageHeaderImage(routes);
				headSlider.goToSlide(newIndex);
				//headSlider.goToNextSlide();
				//App.FadeSlider.goToSlide(headSlider,newIndex);
			}
		});


	};//-- App.FadeSlider.setbxSlider();

	/*extracts the image routes from the image placeholder inside the card */
	App.FadeSlider.ExtractRoutes = function($slide){

		var $router = $slide.find('.img-router');

		return {
			lg: $router.attr('data-lg-src') || false,
			md: $router.attr('data-md-src') || false,
			sm: $router.attr('data-sm-src') || false,
			xs: $router.attr('data-xs-src') || $router.attr('data-sm-src')
		};
	};

	/*
	App.FadeSlider.chageHeaderImage();
		Changes the background image of the header with each slide. 
	@params: 
		slideNumber :  Number of the slide provided by the plugin.
	*/
	App.FadeSlider.chageHeaderImage = function (routes) {
		/*var breakpoint = App.Responsive.getBreakpoint();
		var BaseRoute = '/CP15/en/us/locale-assets/img/heros/colgate-com/';
		var newImageRoute = BaseRoute + breakpoint + '/slide-' + slideNumber + '.jpg' ;*/
		var newImageRoute = routes[App.Responsive.getBreakpointCode()];
		App.FadeSlider.$BlurImage.animate({opacity: '0.0'},200, function () {
			//App.FadeSlider.$BlurImage.attr('src', newImageRoute);
			if($('html').hasClass('ie8')){
				App.FadeSlider.$BlurImage.load(function(){
					App.FadeSlider.correctFlexImgRoutes(App.FadeSlider.$BlurImage, routes);
					App.FadeSlider.$BlurImage.attr('src', newImageRoute);
					//App.FadeSlider.$BlurImage.animate({opacity: '1'},200);
					App.FadeSlider.$BlurImage.unbind('load'); //this is key to this working repeatedly without slowing down
				});
			}else{
				App.FadeSlider.$BlurImage.load(function(){
					App.FadeSlider.correctFlexImgRoutes(App.FadeSlider.$BlurImage, routes);
					App.FadeSlider.$BlurImage.attr('src', newImageRoute);
					App.FadeSlider.$BlurImage.animate({opacity: '1'},200);
					App.FadeSlider.$BlurImage.unbind('load'); //this is key to this working repeatedly without slowing down
				}).attr('src', newImageRoute);
			}
			//App.FadeSlider.$BlurImage.animate({opacity: '1'},200);
		});

		//App.FadeSlider.correctFlexImgRoutes(App.FadeSlider.$HeroImage, routes);
		//App.FadeSlider.correctFlexImgRoutes(App.FadeSlider.$BlurImage, routes);
	};//--App.FadeSlider.chageHeaderImage();
	
	/*
	App.FadeSlider.correctFlexImgRoutes();
		Replaces the images routes in the html for the flexImg plugin
	@params:
		imageObject :  The image tag.
		routes: object with the diferent routes for diferent breakpoints
	*/
	App.FadeSlider.correctFlexImgRoutes = function (imageObject, routes) {
		imageObject.attr('data-lg-src', routes.lg );
		imageObject.attr('data-md-src', routes.md );
		imageObject.attr('data-sm-src', routes.sm );
		imageObject.attr('data-xs-src', routes.xs );
		if ($('section.colgate-com-home')){
			$('section.colgate-com-home header .wrapper').css('background','none').css('height','auto');
		}
	};//-- App.FadeSlider.correctFlexImgRoutes();

	/*
	App.FadeSlider.setHeaderSwipe();
		Enables the swipe action in the image of the header. Now when the user swipes right or left, the bxslider responds to the movement.
	@params:
		none
	*/
	App.FadeSlider.setHeaderSwipe = function () {

		var startX;
		var startY;
		var dist;
		var threshold = 50; //required min distance traveled to be considered swipe
		var allowedTime = 200; // maximum time allowed to travel that distance
		var elapsedTime;
		var startTime;

		$('header .wrapper img').bind('touchstart', function(e){
			var touchIn = e.originalEvent.touches[0];
			dist = 0;
			startX = touchIn.pageX;
			startTime = new Date().getTime(); // record time when finger first makes contact with surface
			//e.preventDefault();
		});
 
		$('header .wrapper img').bind('touchend', function(e){

			if (App.BasicHeader.$sliderNavigationState === 'active') {

				var touchOut = e.originalEvent.changedTouches[0];//.changedTouches[0];
			
				dist = touchOut.pageX - startX; // get total dist traveled by finger while in contact with surface
				elapsedTime = new Date().getTime() - startTime; // get time elapsed

				if(elapsedTime <= allowedTime && Math.abs(dist) >= threshold) {

					if(dist > 1) {
						App.FadeSlider.handleswipe('right');
					} else {
						App.FadeSlider.handleswipe('left');
					}

				}

				e.preventDefault();
			}
			
		});

	};//-- App.FadeSlider.setHeaderSwipe();

	/*
	App.FadeSlider.handleswipe();
		Moves the slider to the next slide or the previous one depending on the swipe movement in the header image.
	@params:
		options :  to know the data-component-caller
	*/
	App.FadeSlider.handleswipe = function (isrightswipe) {
		if (isrightswipe === 'left') {
			App.FadeSlider.$fadeSlider.goToNextSlide();
		} else {
			App.FadeSlider.$fadeSlider.goToPrevSlide();
		}
	}; //-- App.FadeSlider.handleswipe();

	App.FadeSlider.preloadImages = function(dataComponent){

		var images = dataComponent.find('.img-router');
		var imagesLoaded = 0;

		console.log(App.Responsive.getBreakpoint());

		images.each( function () {
			var img = new Image();
			if (App.Responsive.getBreakpoint() === 'mobile') {
				$(img).attr('src' , $(this).attr('data-sm-src' ));
			} else {
				$(img).attr('src' , $(this).attr('data-' + App.Responsive.getBreakpointCode() + '-src' ));
			}

			$('#preloader').append($(img));
			$(img).load(function(){

				imagesLoaded = imagesLoaded + 1;
				if (imagesLoaded === 3) {
					$('.header-content').show();
					App.FadeSlider.setbxSlider(dataComponent);
					App.FadeSlider.setHeaderSwipe();
					App.FadeSlider.initSliderContent();
				}
			});

		});
	};

	App.FadeSlider.initSliderContent = function(dataComponent){
		$('.header-content').show();
		App.FadeSlider.setbxSlider(dataComponent);
		App.FadeSlider.setHeaderSwipe();
	};
	/*
	App.FadeSlider.Initialize();
		Initilizes the functionality for the bxslider plugin-
	@params:
		options :  to know the data-component-caller
	*/
	App.FadeSlider.Initialize = function(options){
		App.FadeSlider.$HeroImage = $('header .wrapper > img');
		App.FadeSlider.$BlurImage = $('header .nav-bar-blur img');

		// App.FadeSlider.preloadImages($(options.dataComponentCaller));
		App.FadeSlider.initSliderContent($(options.dataComponentCaller));

	};//-- App.FadeSlider.Initialize();
	
}(window.App));
/**
* FilterByTag component
* Use the examples below to create you own module
**/

/**
*       USAGE: call this component adding a call to its Initialize method on the html code
*          You can pass over options using data-component-options Warning: must put inside a valid Json object
*   EXAMPLE: <div data-component='App.FilterByTag.Initialize' data-options='{}'></div>
**/
;(function(App){

        /*
        App.FilterByTag.createRemoveFilterButton();

        @params:
                obj :
        */
        App.FilterByTag.createRemoveFilterButton = function(text, tags) {
          var e = $('<a>').attr('href', '#');
          var s = $('<span>').addClass('icon remove-circle');
          e.html(text).append(s);
          e.data('tags',  tags);
          // e.attr('data-tags', '["'+ tags.join('","') +'"]' );
          e.addClass('clear-filter');
          e.bind('click', function(){
            App.FilterByTag.clearFilters(tags);
            e.remove();
            return false;
          });
          return e;
        };

        App.FilterByTag.toggleByTag = function(tags) {
          // show them all
          $('.toggleByTag').show();
          // then... hide those that don't have any of the tags
          $.each(tags, function(_,t){
            $('.toggleByTag').filter(function(){
              return $.inArray(t, $(this).data('tags')) === -1;
            }).hide();
          });
        };

        /*
        App.FilterByTag.bindFilters();
                Bind custom event to filter changes
        @params:
                obj :
        */
        App.FilterByTag.bindFilters = function () {
          // bind "remove filter" links
          $('.clear-all-filters').on('click', function(){
            $('.clear-filter').click();
            return false;
          });

          // bind checkbox
          $('.toggleTag').bind('change', function(){
            var tag = $(this).val();

            var allTags = $('.toggleTag:checked').map(function(_, el) {
                            return $(el).val();
                          }).get();
            App.FilterByTag.toggleByTag(allTags);
            if(allTags.length === 1){
                $('.clear-all, .icon.filter, .filter-count').show();
            }
            if ($(this).is(':checked')) {
              // create a "remove filter" link
              var text = $(this).closest('label').text();
              var removeBtn = App.FilterByTag.createRemoveFilterButton($.trim(text), [tag]);
              $('#filters-list').append(removeBtn);
            } else {
              App.FilterByTag.clearFilters(tag);
              App.FilterByTag.deleteRemoveFilterButton(tag);

            }
            $(this).closest('.list-group-item').toggleClass('backChecked');
            App.FilterByTag.updateCounters();
          });
        };//-- App.FilterByTag.bindFilters();

        App.FilterByTag.deleteRemoveFilterButton = function(tag) {
          if(tag==='*') {
            $('.clear-filter').remove();
          } else {
            $('.clear-filter').each(function(){
              if($.inArray(tag, $(this).data('tags')) !== -1) {
                $(this).remove();
              }
            });
          }
        };

        /*
        App.FilterByTag.updateCounters();

        @params:
                obj :
        */
        App.FilterByTag.updateCounters = function () {
          var visibleElems = $('.toggleByTag:visible').length;
          $('.products-count').html(visibleElems);
          if(visibleElems === 0) {
            $('.no-items-msg').show();
          } else {
            $('.no-items-msg').hide();
          }
          var filtersCount = $('.toggleTag:checked').length;
          $('.filter-count').html('(' + filtersCount + ')');
          if(filtersCount === 0){
             $('.clear-all, .icon.filter, .filter-count').hide();
          }
        };//-- App.FilterByTag.updateCounters();

        /*
        App.FilterByTag.updateCounters();

        @params:
                obj :
        */
        App.FilterByTag.clearFilters = function(tags) {
          if (tags === '*') {
            $('.toggleTag:checked').click();
          } else if($.isArray(tags)) {
            $.each(tags, function(i, t) {
              if( $('.toggleTag[value="'+t+'"]').is(':checked') ) {
                $('.toggleTag[value='+t+']').click();
              }
            });
          }
        };

        /*
        App.FilterByTag.Initialize();
                Initilizes the functionality
        @params:
                options :  to know the data-component-caller
        */
        App.FilterByTag.Initialize = function(options){
          App.FilterByTag.updateCounters();
          App.FilterByTag.bindFilters();
        };//-- App.FilterByTag.Initialize();

}(window.App));

/*
	Helps loading diferent images acording to the breakpoint
	DEPENDENCY: jQuery, App module and Responsive module
	IMPLEMENTATION: add data-component='App.FlexImg.Initialize' to the images, it is recomended that the src attribute of
					those images is empty

					EG: <img data-component="App.FlexImg.Initialize" src=""
						data-lg-src="<!--#echo var="app.locale.path" -->/locale-assets/img/assets/bad-breath-related-video.jpg"
						data-md-src="<!--#echo var="app.locale.path" -->/locale-assets/img/assets/bad-breath-related-video-md.jpg"
						data-sm-src="<!--#echo var="app.locale.path" -->/locale-assets/img/assets/bad-breath-related-video-sm.jpg"
						>
*/

(function(App){

	App.FlexImg.defaultImgPriority = ['lg', 'md', 'sm', 'xs'];
	//this function needs to be called for every flex img in the page
	App.FlexImg.Initialize = function(options){
		var $image = jQuery(options.dataComponentCaller);

		//bind event handlers for the image
		App.FlexImg.bindHandlers($image);
	};

	App.FlexImg.bindHandlers = function($image){
		$(document).ready(function(){
			App.FlexImg.setSource($image);
		});

		App.onBreakpointChange(function(){
			App.FlexImg.setSource($image);
		});

		//attach onload event if provided
		var onload = $image.attr('data-onload');
		if(onload){
			$image.load(function(event){
				var chunks = onload.split('.');

				var callback = window;
				for(var i=0; i < chunks.length; i+=1){
					callback=callback[chunks[i]];
				}

				callback(event);
			});
		}
	};

	//sets the correct source of the images according to the detected breakpoint
	//source values should be stored inside data-lg-src data-md-src data-sm-src data-xs-src
	App.FlexImg.setSource = function($image){

		switch(App.currentBreakpoint){
			//defaults to desktop since doing it will provide bad performance but the resulting image will always be big enough
			default:
			case 'desktop':
				$image.attr('src', App.FlexImg.getSrc($image, 'lg'));
			break;
			case 'tablet':
				$image.attr('src', App.FlexImg.getSrc($image, 'md'));
			break;
			case 'mobile':
				var $window = jQuery(window);

				if ( $image.attr('data-xs-src') && $window.width() <= 320) {
					$image.attr('src', App.FlexImg.getSrc($image, 'xs'));
				} else {
					$image.attr('src', App.FlexImg.getSrc($image, 'sm'));
				}
			break;
		}
	};

	//returns the source based on the breakpoint or defaults to a diferent breakpoint according to the global priority array
	App.FlexImg.getSrc = function($image, breakpoint){
		var sources = {
			lg: $image.attr('data-lg-src'),
			md: $image.attr('data-md-src'),
			sm: $image.attr('data-sm-src'),
			xs: $image.attr('data-xs-src')
		};
		if(sources[breakpoint]){
			return sources [breakpoint];
		}else{
			for(var i = 0; i < App.FlexImg.defaultImgPriority.length; i +=1){
				if(sources[ App.FlexImg.defaultImgPriority[i] ]){
					return sources[ App.FlexImg.defaultImgPriority[i] ];
				}
			}
		}
	};

}(window.App));
/**
* Foo component 
* Use the examples below to create you own module
**/

/**
* 	USAGE: call this component adding a call to its Initialize method on the html code
*          You can pass over options using data-component-options Warning: must put inside a valid Json object
*   EXAMPLE: <div data-component='App.Foo.Initialize' data-options='{}'></div>
**/
;(function(App){

	// ###  Example for module initialization
	// @param: options 
	App.Foo.Initialize = function(options){
		//options.componentCaller references the DOM element that contains the data-component

		//Use App.log instead of console.log it checks the App.debug variable and turns off all log in production mod
		App.Log(options);

		App.onBreakpointChange(function(e){
			App.Log(e);
		});
	};

}(window.App));
/**
*	Footer module
**/

;(function(App){

	//Handles component initialization
	App.Footer.Initialize = function(componentData){

		//First lets load the component options
		App.Footer.$container = jQuery(componentData.dataComponentCaller);
		App.Footer.$scrollUpBtn = App.Footer.$container.find(componentData.scrollUp);
		App.Footer.$countryTrigger = App.Footer.$container.find(componentData.countrySelector.trigger);
		App.Footer.$countrySelector = App.Footer.$container.find(componentData.countrySelector.selector);
		App.Footer.$countrySelectorMobile = App.Footer.$container.find(componentData.countrySelectorMobile);
		App.Footer.countryListURL = componentData.countryListURL;


		App.Footer.loadCountries();
		App.Footer.bindHandlers();
	};

	App.ToggleList.ScrollToBottom = function (element) {
		//var position = $('.occ-footer').offset().top - $('.nav-bar-content').height() - 50; /* 50 is the size of the circle arrow */
		var position = $(document).height() - $('.country-list').outerHeight() - 250;
		var body = $('html, body');
		body.animate({scrollTop:position}, '500', 'swing');
	};

	//loads countries in the coutry selector fro an xml file
	App.Footer.loadCountries = function(){
		$.ajax({
			url: App.Footer.countryListURL,
			dataType: 'xml',
			method: 'get',
			success: function(data){
				App.Footer.populateCoutrySelector($(data).find('country'));
				App.Footer.populateMobileCoutrySelector($(data).find('country'));
			}
		});
	};

	//populates both mobile and desktop selector
	//@param countryArray array of country elements with name and url attributes
	App.Footer.populateCoutrySelector = function($countryArray){
		//first clean country selector
		var $listContainer = App.Footer.$countrySelector.find('.list');
		$listContainer.html('');

		//quantity of elements per column
		var qCol = Math.ceil($countryArray.length / 4);
		var currentCol = 0;

		var i = 0, $ul;
		while(i < $countryArray.length){
			//load xml element
			var $country = $($countryArray[i]);

			if( i === 0 || i >= (qCol*currentCol)){

				if(i !== 0){
					//append the column created previously
					$listContainer.append($ul);
				}
				//create column
				$ul = $(document.createElement('ul'));
				$ul.addClass('col-lg-3');

				currentCol +=1;
			}


			//add element to current column
			var $li = $(document.createElement('li'));
			var $a = $(document.createElement('a'));
			$a.attr('href', $country.attr('url'));
			$a.text($country.attr('name'));

			$li.append($a);
			$ul.append($li);

			i+=1;
		}
		//append last column
		$listContainer.append($ul);
	};

	App.Footer.populateMobileCoutrySelector = function($countryArray){

		for(var i = 0; i < $countryArray.length; i+=1){
			var $country = $($countryArray[i]);
			var $option = $(document.createElement('option'));

			$option.attr('value',$country.attr('url'));

			if ($country.attr('code') === window.countrycode ) {
				$option.attr('selected', 'selected');
			}

			$option.text($country.attr('name'));
			App.Footer.$countrySelectorMobile.append($option);
		}
	};

	//bind event handlers for elements inside the footer
	App.Footer.bindHandlers = function(){
		// up arrow click event
		App.Footer.$scrollUpBtn.click(function(){
			//jQuery(document).scrollTop(0);
			$('html, body').animate({
				 scrollTop:0
			},'slow');
		});

		//country selector click event
		App.Footer.$countryTrigger.click(function(event){
			event.preventDefault();
			//toggle country selector
			if(App.Footer.$countrySelector.is(':hidden')){
				App.Footer.$countrySelector.show('slow', function () {
					App.ToggleList.ScrollToBottom();
				});
			}else{
				App.Footer.$countrySelector.slideUp();
			}
		});

		//Mobile country selector redirect
		$(App.Footer.$countrySelectorMobile).change(function () {
			var selectedCountry =  $($(this).find('option:selected')).attr('value');
			window.location.href = selectedCountry;
		});

		//close button inside the country selector
		App.Footer.$countrySelector.find('span.close-countries').click(function(){
			App.Footer.$countrySelector.slideUp();
		});
	};

}(window.App));
/**
*  Filter for the top links in Contact-Us Page, related to the contact forms.
**/

/**
* 	USAGE: call this component adding a call to its Initialize method on the html code
*          You can pass over options using data-component-options Warning: must put inside a valid Json object
*   EXAMPLE: <div data-component='App.SubmitForm.Initialize' data-options='{}'></div>
**/



;(function(App){

	/*
	App.FormFilter.ShowOptions()
		Shows the links depending of the selected option.
	@params:
		submitButton =  The form's submit input.
	*/
	App.FormFilter.ShowOptions = function(id){
		$('.filter-option').hide();
		$('#'+id).show();
	};//-- App.FormFilter.ShowOptions()

	/*
	App.FormFilter.SetLinkFunctionality()
		If the link has an href to "to-short-form" or "to-long-form" it will be redirected to the specified form.
	@params:
		linkList =  array with all the links of the filter
	*/
	App.FormFilter.SetLinkFunctionality = function (linkList) {

		var linksToShortForm = linkList.find('a[data-attr="to-short-form"]');
		var linksToLongForm = linkList.find('a[data-attr="to-long-form"]');
		var linksToIngredients = linkList.find('a[data-attr="to-where-to-buy"]');
		var linksToQuestions = linkList.find('a[data-attr="to-questions-guide"]');


		linksToShortForm.click( function (event) {
			event.preventDefault();
			if ($(this).data('topic')){
				$('#genTopic').val($(this).data('topic'));
			} else {
				$('#genTopic').val('none');
			}
			App.FormFilter.OpenSectionform('short-form');
		});

		linksToLongForm.click( function (event) {
			event.preventDefault();
			App.FormFilter.OpenSectionform('long-form');
		});

		linksToIngredients.click( function (event) {
			event.preventDefault();
			App.FormFilter.OpenSectionform('ingredients-link');
		});

		linksToQuestions.click( function (event) {
			event.preventDefault();
			App.FormFilter.OpenSectionform('questions-link');
		});
		

	};//-- App.FormFilter.SetLinkFunctionality()


	/*
	App.FormFilter.OpenSectionform()
		Opens the form section using the id.
	@params:
		formId =  Id of the form to open.
	*/
	App.FormFilter.OpenSectionform = function (formName) {
		var formLinkButton;
		var formSection;
		var breakpointClass;
		var formId;
		var formElement;
		var formPath;
		var formTopic;

		// console.log('in!!!!!');

		if (formName === 'ingredients-link') {

			if (App.currentBreakpoint === 'mobile') {
				formLinkButton = $('.answers-2');
			} else {
				formLinkButton = $('.answers-2-desktop');
			}
			
		} else if( formName === 'questions-link' ) {
			
			if (App.currentBreakpoint === 'mobile') {
				formLinkButton = $('.answers-1');
			} else {
				formLinkButton = $('.answers-1-desktop');
			}

		} else {

			if (App.currentBreakpoint === 'mobile') {

				var mobileParentid = $('#mobile-toggle').find('.form-selector').parents('.content-item').prev().attr('class').split(' ')[1];

				// console.log(mobileParentid);

				formLinkButton = $('.' + mobileParentid);
				formSection = formLinkButton.parent().find('.content-item');
				breakpointClass = 'mobile';
			} else {


				var parentid = $('.toggle-content').find('.form-selector').parent().attr('id');
				formLinkButton = $('.' + parentid);
				formSection = $('#' + parentid);

				// console.log(parentid);
				// console.log(formLinkButton);
				// console.log(formSection);

				//formLinkButton = $('.answers-3-desktop');
				//formSection = $('#answers-3-desktop');
				breakpointClass = 'desktop';
			}

			formElement = $('.' + formName + '-' + breakpointClass);
			formId = '#' + formName + '-' + breakpointClass;

			//console.log(formId);

			if ($('#genTopic').val() !== 'none'){
				formPath = formElement.find('iframe').attr('src');
				formTopic = $('#genTopic').val();
				formElement.find('iframe').attr('src',formPath + '#' + formTopic);
			} else {
				formPath = formElement.find('iframe').attr('src');
				formPath = formPath.split('#')[0];
				formElement.find('iframe').attr('src',formPath);
			}

			formSection.find('.form-selector').find(formId).click();
		}

		if (!formLinkButton.hasClass('active')) {
			
			formLinkButton.click();
			setTimeout(function(){
				if (formElement !== 'undefined') {
					App.FormFilter.ScrollToPosition(formElement);
				}
			}, 1000);

		} else {

			if (formElement !== 'undefined') {
				// console.log('in');
				App.FormFilter.ScrollToPosition(formElement);
			} else {
				// console.log('in2');
				App.FormFilter.ScrollToPosition(formLinkButton);
			}
		}

		// console.log(formElement);
		

		
		
	
	};//-- App.FormFilter.OpenSectionform()

	/*
	App.FormFilter.ScrollToPosition()
		Simple scroll to position function
	@params:
		element =  element to get the position to scroll.
	*/
	App.FormFilter.ScrollToPosition = function (element) {
		var position = element.offset().top - $('.nav-bar-content').height();
		var body = $('html, body');
		body.stop(true);
		body.animate({scrollTop:position}, '500', 'swing');
	}; //-- App.FormFilter.ScrollToPosition()



	/*
	App.FormFilter.ScrollToPosition()
		Checks if the url redirects to a form. If it does, it will open the form section.
	@params:
		none
	*/
	App.FormFilter.checkFormHash = function() {

		setTimeout(function(){
			
			$('html, body').stop();
			var urlHash = document.location.hash;

			if (urlHash.indexOf('short-form') !== -1) {
				App.FormFilter.OpenSectionform('short-form');
			}

			if (urlHash.indexOf('long-form') !== -1) {
				App.FormFilter.OpenSectionform('long-form');
			}

		}, 1000);
	
	};//-- App.FormFilter.ScrollToPosition()

	/*
	App.FormFilter.Initialize()
		Intitializes the form filter at the top of the page.
	@params:
		options = component options
	*/
	App.FormFilter.Initialize = function(options){

		var coolSelectOptions = $(options.dataComponentCaller).find('ul.options li');
		var mobileSelectOptions = $(options.dataComponentCaller).find('select');
		var firstSelection = mobileSelectOptions.find('option:selected').val(); // Set first menu.

		App.FormFilter.ShowOptions(firstSelection);

		coolSelectOptions.click( function () {

			var element = $(this);

			if (element.hasClass('to-email-us')) {
				App.FormFilter.OpenSectionform('short-form');
			} else {
				var id = element.attr('data-value');
				App.FormFilter.ShowOptions(id);
			}

		});

		mobileSelectOptions.on('change', function () {

			var element = $(this).find('option:selected');

			if (element.hasClass('to-email-us')) {
				App.FormFilter.OpenSectionform('short-form');

			} else {
				var id = element.val();
				App.FormFilter.ShowOptions(id);
			}
		});
		
		App.FormFilter.SetLinkFunctionality($(options.dataComponentCaller));
		
		App.FormFilter.checkFormHash();

	};//-- App.FormFilter.Initialize()


}(window.App));
/**
*  Basic Functionality for Forms
**/

/**
* 	USAGE: call this component adding a call to its Initialize method on the html code
*          You can pass over options using data-component-options Warning: must put inside a valid Json object
*   EXAMPLE: <div data-component='App.SubmitForm.Initialize' data-options='{}'></div>
**/

;(function(App){


	App.FormSelector.setRadioButtons = function (form) {


		form.find('.long-form').hide(); // initialize the form in option 1.
		form.find('.short-form').hide();
		App.FormSelector.$activeOption = '';

		form.find('.selectors input[type=radio]').change(function(){ // radio button functionality.

			App.SimpleAnchor.ScrollToPosition(form);

			form.find('.separator').show();
			App.FormSelector.$activeOption = $(this).attr('id');
			form.find('.short-form').hide();
			form.find('.long-form').hide();
			form.find('.' + App.FormSelector.$activeOption).show();

		});

	};

	/*
	App.FormSelector.Initialize()
		Initialize the basic functionality for a search input.
	@params:
		none
	*/
	App.FormSelector.Initialize = function(options){

		App.FormSelector.setRadioButtons($(options.dataComponentCaller));

	};//-- App.FormSelector.Initialize()
}(window.App));

//TODO: Move this to the HTML, but carefoully, because it takes controll over all the inputs in all the pages

/**
* ProductGrid component
* Creates a column layout for products based on breakpoint
* Dependencies: Jquery, App.Responsive
**/

/**
* 	USAGE: call this component adding a call to its Initialize method on the html code
*          You can pass over options using data-component-options Warning: must put inside a valid Json object
*   EXAMPLE: <div data-component='App.Foo.Initialize' data-options='{}'></div>
**/
;(function(App){

	App.GameGrid.activeFilters = [];
	// ###  Example for module initialization
	// @param: options
	App.GameGrid.Initialize = function(options){
		//options.componentCaller references the DOM element that contains the data-component

		//Use App.log instead of console.log it checks the App.debug variable and turns off all log in production mod
		// App.Log('<!-- Initializing App.ProductGrid');
		console.log('inside');

		$(window).load( function () {

			console.log('in!');
			App.GameGrid.$productPool = $(options.source);
			App.GameGrid.$container = $(options.productsContainer);
			App.GameGrid.$filters = $('.col-first li.list-group-item');
			App.GameGrid.$buttonsContainer = $('#filters-list');

			App.GameGrid.SetLayout();
			App.GameGrid.BindEvents();

		});
	};

	//bind events
	App.GameGrid.BindEvents = function(){
		$(document).ready(function(){
			//do not hook this up before
			setTimeout(function(){
				App.onBreakpointChange(function(){
					// App.Log('<-- colsPerRow: '+App.GameGrid.columnsPerRow());
					App.GameGrid.SetLayout();
				});
			},1000);
		});

		App.GameGrid.$filters.bind('click', function(event){
			event.preventDefault();
			event.stopPropagation();
			// App.Log($(this));
			var tag = $(this).find('input[type=checkbox]').val();
			App.GameGrid.toggleTag(tag);
		});

		$('.clear-all, .clear-all-filters').click(function(){
			App.GameGrid.clearAllTags();
		});

	};

	App.GameGrid.clearAllTags = function(){

		//clear the active tags array
		App.GameGrid.activeFilters = [];
		
		//find the filters <li> and toggle class backChecked
		App.GameGrid.$filters.each(function(){
			$(this).removeClass('backChecked');
		});

		$('.clear-all, .icon.filter, .filter-count').hide();
		
		//toggle tag button
		App.GameGrid.$buttonsContainer.html('');

		//reset the product layout
		App.GameGrid.SetLayout();
	};

	App.GameGrid.toggleTag = function(tag){

		var index = $.inArray(tag, App.GameGrid.activeFilters);
		if(index >= 0){
			App.GameGrid.activeFilters.splice(index,1);
		}else{
			App.GameGrid.activeFilters.push(tag);
		}
		
		//find the <li> corresponding to the tag and toggle class backChecked
		var tagName = '';
		App.GameGrid.$filters.each(function(){
			if($(this).find('input[type=checkbox]').val() === tag){
				$(this).toggleClass('backChecked');
				tagName = $(this).find('label').text();
			}
		});
		
		//toggle tag button
		App.GameGrid.toggleTagButton(tag, tagName);

		//reset the product layout
		App.GameGrid.SetLayout();
	};

	// add/removes the tag buttons at the top of the page
	App.GameGrid.toggleTagButton = function(tagValue, tagText){
		//if the element is there, remove, if not create
		if(App.GameGrid.$buttonsContainer.find('a[data-tag="'+tagValue+'"]').length > 0){
			App.GameGrid.$buttonsContainer.find('a[data-tag="'+tagValue+'"]').remove();
		}else{
			App.GameGrid.$buttonsContainer.append(App.GameGrid.createTagButton(tagValue, tagText));
		}

		if(App.GameGrid.activeFilters.length > 0){
			$('.clear-all, .icon.filter, .filter-count').show();
		}else{
			$('.clear-all, .icon.filter, .filter-count').hide();
		}
	};

	//creates the filter inicators at the top
	App.GameGrid.createTagButton = function(tags, text) {
      var e = $(document.createElement('a')).attr('href', '#');
      var s = $(document.createElement('span')).addClass('icon remove-circle');
      e.html(text).append(s);
      e.data('tags',  tags);
      e.attr('data-tag', tags);
      // e.attr('data-tags', '["'+ tags.join('","') +'"]' );
      e.addClass('clear-filter');
      e.bind('click', function(){
        App.GameGrid.toggleTag(tags);
        return false;
      });

      return e;
    };

    //updates the products shown count
    App.GameGrid.updateCount = function(count){
		$('.products-count').html(count);
		$('.filter-count').html('(' + App.GameGrid.activeFilters.length + ')');
    };

	App.GameGrid.SetLayout = function(){
		//first, empty container
		App.GameGrid.$container.html('');
		App.GameGrid.$container.parent().find('.no-items-msg').hide();

		var colPerRow = App.GameGrid.columnsPerRow();
		var count=0;
		var images = [];
		var links = [];

		App.GameGrid.removeModalItems();

		var filteredByAge = App.GameGrid.filterByAge(App.GameGrid.$productPool);

		var filtered = [];


		if(filteredByAge.length === 0){
			filtered = App.GameGrid.$productPool;
		}else{
			filtered = filteredByAge;
		}

		console.log(filtered);


		for(var i=0; i<filtered.length; i+=1){
			var element = filtered[i];

			images.push(App.GameGrid.createImage($(element)));
			// App.Log('<-- Pushing image into the array');
			
			links.push(App.GameGrid.createLink($(element)));
			// App.Log('<-- Pushing link into the array');
			
			//adding item to the modal slider
			App.GameGrid.addModalItem($(element).attr('data-id'));
			

			//every productPerRow loops flush the acumulated elements into the DOM
			if( images.length === colPerRow){
				App.GameGrid.flushRow(images,links);
				images = [];
				links = [];
			}

			count +=1;
		}

		//if no elements are displayed, show the message
		if(count===0){
			App.GameGrid.$container.parent().find('.no-items-msg').show();
		}

		//flush any remaining elements
		if( images.length !== 0 ){
			App.GameGrid.flushRow(images,links);
		}

		//update counter
		App.GameGrid.updateCount(count);
	};

	App.GameGrid.filterByAge = function($products){

		var filtered =[];
		for(var i = 0; i<App.GameGrid.activeFilters.length; i += 1){
			var filterVal = App.GameGrid.activeFilters[i];
			$products.each(function(){
				if($(this).data('age').toString() === filterVal){
					filtered.push(this);
				}
			});
		}

		return filtered;
	};

	//FILTER LOGIC, decides whether the 
	App.GameGrid.hasTags = function($product){
		var productTags = JSON.parse($product.attr('data-tags'));
		
		// App.Log(productFilters);
		if(App.GameGrid.activeFilters.length > 0){
			var found = 0;
			for(var i=0; i<App.GameGrid.activeFilters.length; i+=1){
				if($.inArray(App.GameGrid.activeFilters[i], productTags) >= 0){
					found +=1;
				}
			}
			
			if(found >= 1){
				return true;
			}

			return false;
		}
		return true;
	};

	App.GameGrid.flushRow = function(images, links){
		var $row = $(document.createElement('div')).addClass('row');
		var $imagesRow = $(document.createElement('div'));
		var $linksRow = $(document.createElement('div'));

		$imagesRow.addClass('row').addClass('product-img').append(images);
		// App.Log('<-- Appending images to imageRow');
		$linksRow.addClass('row').addClass('product-link').append(links);
		// App.Log('<-- Appending links to linkRow');

		$row.append($imagesRow,$linksRow);
		// App.Log('<-- Appending rows to row');
		App.GameGrid.$container.append($row);
		// App.Log('<-- Appending row to container');
		// App.Log('Final row code:');
		// App.Log($row.html());
	};

	//returns a jquery element, a products image with it's corresponding column container
	App.GameGrid.createImage = function($product){
		// App.Log('<-- Creating image for product' + $product.attr('data-name'));

		var $imgCol = $(document.createElement('div'))
							.addClass('col-'+ App.Responsive.getBreakpointCode() + '-' + App.GameGrid.columnWith())
							.addClass('text-center')
							.addClass('product-img-col');

		//if the element is marked as new
		if($product.attr('data-new') === 'true'){
			$imgCol.append('<div class="product-float"><span class="product-new"></span></div>');
		}
		
		$imgCol.attr('data-toggle','modal')
				.attr('data-target',$product.attr('data-target'));

		var $img = $(document.createElement('img'))
				.attr('src', $product.attr('data-img'))
				.attr('alt',$product.attr('data-name'))
				.attr('data-tracking','product-quick-view')
				.attr('data-id',$product.attr('data-id'))
				.attr('data-tracking-attr',$product.attr('data-name'));


		var $intermediateDiv;


		var productQuickView =  false;

		if (productQuickView) {
			$intermediateDiv = $(document.createElement('div'));
		} else {
			var $intermediateLink;
			$intermediateLink = $(document.createElement('a'));
			$intermediateLink.attr('href', $product.attr('data-url'));
			
			/* open in a new window if it has the property new-window on true */
			if( $product.attr('new-window') === 'true' ) {
				$intermediateLink.attr('target', '_blank');
			}

			$intermediateDiv = $(document.createElement('div'));
			$intermediateDiv.append($intermediateLink);
			$intermediateDiv = $intermediateDiv.find('a');
		}

		$intermediateDiv.append($img);

		$imgCol.append($intermediateDiv);
		
		
		$imgCol.attr('data-tracking','product-quick-view').attr('data-tracking-attr',$product.attr('data-name'));
		$imgCol.click(function(){
			window.fireTracking(this);
		});

		if(App.Responsive.getBreakpointCode() === 'lg' && productQuickView ){
			$imgCol.append('<span class="square-link border-radius">'+$product.attr('data-button')+'</span>');

			$imgCol.on('mouseover',function(){
				$(this).find('span.square-link').show();
			});
				
			$imgCol.on('mouseout',function(){
				$(this).find('span.square-link').hide();
			});
		}

		return $imgCol;
	};

	//returns a jquery element, a products link with it's corresponding column container
	App.GameGrid.createLink = function($product){

		var productQuickView =  false;

		// App.Log('<-- Creating link for product' + $product.attr('data-name'));
		var $linkCol = $(document.createElement('div'))
						.addClass('col-'+ App.Responsive.getBreakpointCode() + '-' + App.GameGrid.columnWith())
						.addClass('text-center')
						.addClass('product-link-col');

		//on the desktop and tablet clicking opens the quickview modal
		if(App.currentBreakpoint !== 'mobile' && productQuickView ){
			$linkCol.attr('data-toggle','modal')
					.attr('data-id',$product.attr('data-id'))
					.attr('data-target',$product.attr('data-target'));
		}

		$linkCol.attr('data-tracking','product-quick-view').attr('data-tracking-attr',$product.attr('data-name'));
		$linkCol.click(function(){
			window.fireTracking(this);
		});
		
		var $link = $(document.createElement('a'));
		//on mobile only, the click must redirect to the PDP, rather than opening the quickview
		if(App.currentBreakpoint === 'mobile' || productQuickView ){
			$link.attr('href', $product.attr('data-url'));

			/* open in a new window if it has the property new-window on true */
			if( $product.attr('new-window') === 'true' ) {
				$link.attr('target', '_blank');
			}
		
		}
		
		$link.html($product.attr('data-name'));

		$linkCol.append($link);

		if(App.Responsive.getBreakpointCode() === 'lg' && productQuickView ){
			$linkCol.on('mouseover',function(){
				//using the data-id to locate the matching img container
				var id = $product.attr('data-id');
				App.GameGrid.$container.find('img[data-id="'+id+'"]').parents('.product-img-col').find('span.square-link').show();
			});
				
			$linkCol.on('mouseout',function(){
				//using the data-id to locate the matching img container
				var id = $product.attr('data-id');
				App.GameGrid.$container.find('img[data-id="'+id+'"]').parents('.product-img-col').find('span.square-link').hide();
			});
		}

		return $linkCol;
	};

	//returns the ammount of columns per row, according to the current breakpoint
	App.GameGrid.columnsPerRow = function(){
		var columnsPerRow = 2;
		if(App.Responsive.getBreakpointCode() === 'lg'){
			columnsPerRow = 3;
		}

		return columnsPerRow;
	};

	//returns the with of the columns relative to 12, bootstrap-wise
	App.GameGrid.columnWith = function(){
		return ( 12 / App.GameGrid.columnsPerRow() );
	};

	App.GameGrid.addModalItem = function (elementId) {

		var currentElement = $('#'+ elementId);
		$('#galleryModalSlider').append(currentElement);

	};

	App.GameGrid.removeModalItems = function () {

		$('#galleryModalSlider li').each(function () {
			console.log('in!!!');
			console.log(this);
			$('#inactiveElements').append($(this));
		});

		$('#galleryModalSlider').html();

/*
		$('#inactiveElements').append($('#galleryModalSlider li'));
		.html('');*/
	};

}(window.App));
/**
*	Glossary module
**/

;(function(App){
	
	//Handles component initialization
	App.Glossary.Initialize = function(options) {

		//First load the component options
		App.Glossary.$container = jQuery(options.dataComponentCaller);
		App.Glossary.$goToLetter = App.Glossary.$container.find(options.letterChoice);
		App.Glossary.$goToggle = App.Glossary.$container.find(options.wordToggle);
		App.Glossary.$breakpoint = App.Responsive.getBreakpoint();
		App.Glossary.$letterBar = $('.letter-choice');

		App.Glossary.goToLetterBox();
		App.Glossary.toggle();
		App.Glossary.bindHandlers();
		App.Glossary.addScrollTop();

		if( App.Glossary.$breakpoint !== 'desktop' ){
			App.Glossary.letterBoxMobile();
		}
	};

	//scroll to the top on the page on the back to top buttons.
	App.Glossary.addScrollTop = function() {
		$('a.scroll-top').click(function(event) {
			event.preventDefault();
			$('html, body').animate({scrollTop:0}, '500', 'swing');
		});
	};


	//go to letter box on click event
	App.Glossary.goToLetterBox = function() {

		$(App.Glossary.$goToLetter).click(function(event){
			event.preventDefault();

			var toLetterParent = $(this).parent(); //Parent of the clicked letter on the bar
			
			//Turn the selected letter to red
			App.Glossary.$letterBar.find('li').removeClass('active');
			toLetterParent.addClass('active');

			var toLetter = $(this).attr('href');
			var letterBox = App.Glossary.$container.find(toLetter); //Find the letter box where clicked letter points
			var desktop = App.currentBreakpoint === 'desktop';
			var body = $('html, body');
			
			if(!(toLetterParent.hasClass('deactive'))){
				var position = letterBox.offset().top - $('.nav-bar-content').height();
				body.animate({scrollTop:position}, '500', 'swing');
			}
		});
	};//-- App.Glossary.goToLetterBox()

	//go hide siblings on toggle
	App.Glossary.HideSiblings = function () {

		var siblingMenus = App.Glossary.$goToggle;

		siblingMenus.next().slideUp('500');
		siblingMenus.parent().removeClass('active');
		siblingMenus.next().addClass('collapsed');
	};//-- App.Glossary.HideSiblings()

	//go to show / hide definition word
	App.Glossary.toggle = function() {

		App.Glossary.HideSiblings();

		$(App.Glossary.$goToggle).click(function(event){
			
			event.preventDefault();

			var toggle = $(this);
			var menuParent = toggle.parent();
			var menu = toggle.next();

			if ( menu.hasClass('collapsed')) {
				App.Glossary.HideSiblings();
				menu.slideDown( '500' );
			} else {
				menu.slideUp('500');
			}
			
			menu.toggleClass('collapsed');
			menuParent.toggleClass('active');
		});

	};//-- App.Glossary.toggle()

	//style letterbox on mobile
	App.Glossary.letterBoxMobile = function() {

		var scrollWindowValue;
		var viewportHeight = window.innerHeight;
		var bottomStripe = $('footer').offset().top + $('.inline-social').height(); // Scroll Position where the Bar dissapears
		
		if( App.Glossary.$breakpoint === 'tablet'){
				App.Glossary.$letterBar.animate({ 'top': '123px' }, 300 );
		}else{
			App.Glossary.$letterBar.animate({ 'top': '120px' }, 300 );
		}

		App.Glossary.$letterBar.css('height', viewportHeight); //Set the fixed height of the letters box

		//on scroll, position letterbox on top function call
		window.addEventListener('scroll', function() {



			//Confirm the breakpoint change at the moment
			if( App.Glossary.$breakpoint !== 'desktop'){

				var headerImageTop = $('header').height();

				event.preventDefault();
				//clear scrollTop variable timeout
				clearTimeout(scrollWindowValue);
				
				scrollWindowValue = setTimeout(function(){

					//call function to style letterBox
					App.Glossary.scrollFunction( bottomStripe, viewportHeight, headerImageTop );

				}, 200);

				App.Glossary.getActiveLetter(viewportHeight);

			} else {
				App.Glossary.$letterBar.css({
					'height': 'auto',
					'top': 'inherit',
					'display': 'block'
				});
			}
		});

	};//-- App.Glossary.letterBoxMobile()

	//on scroll, position letterbox on top 
	App.Glossary.scrollFunction = function( bottomStripe, viewportHeight, headerImageTop ){

		var windowScroll = $(window).scrollTop();
		var scrollBottom = windowScroll + viewportHeight; //calculate the visible bottom of the page on scoll

		if(windowScroll === 0){
			if( App.Glossary.$breakpoint === 'tablet'){
				App.Glossary.$letterBar.animate({ 'top': '123px' }, 300 );
			}else{
				App.Glossary.$letterBar.animate({ 'top': '120px' }, 300 );
			}
			App.Glossary.$letterBar.animate({ scrollTop : 0 }, 300 ); //Initialize scroll inside the letters box
			App.Glossary.$letterBar.fadeIn(300);
		} else {
			App.Glossary.$letterBar.animate({ 'top': headerImageTop }, 300 ); //Move letters box to top when image header fades
			
			//If visible bottom's page is mayor to the position of the social section hide the letters box
			if( scrollBottom > bottomStripe){
				App.Glossary.$letterBar.fadeOut(300);
			} else {
				App.Glossary.$letterBar.fadeIn(300);
			}
		}

	};//-- App.Glossary.scrollFunction()


	App.Glossary.getActiveLetter = function (viewportHeight) {
		
		var headerHeight = $('header').height();
		var scroll = $(window).scrollTop();


		var elements =  $('h3.title');
		elements.each( function () {

			var element = $(this).parent();
			var position = $(element).offset().top;
			var height = $(element).height();

			var condition1 = (position - headerHeight - scroll ) < 0; // calculate top of the container
			var condition2 =  (position - headerHeight - scroll) > (-height); // calculate bottom of the container

			if ( condition1  &&  condition2 ) {
				var letterId = $(element).attr('id');
				App.Glossary.setActiveLetter(letterId);
			}

		});

	};

	App.Glossary.setActiveLetter =  function (letterId) {
		App.Glossary.$letterBar.find('li').removeClass('active');
		var letter = $('a[href="#'+ letterId +'"]');
		$(letter.parent()).addClass('active');

	};

	//on breakpoint change call or destroy mobile funcion
	App.Glossary.bindHandlers = function(){
		//If breakpoint changes
		App.onBreakpointChange(function(){

			App.Glossary.$breakpoint = App.Responsive.getBreakpoint();
			//Call function if devices
			if( App.Glossary.$breakpoint !== 'desktop'){
				App.Glossary.letterBoxMobile();
			}else{
				//Remove mobile styles on letters box
				App.Glossary.$letterBar.css({
					'height': 'auto',
					'display': 'block'
				});
			}
		});
	};//-- App.Glossary.bindHandlers()
	
}(window.App));
/**
*  Handles hompage header behavior for rezising, positioning and scrolling
**/

/**
* 	USAGE: call this component adding a call to its Initialize method on the html code
*          You can pass over options using data-component-options Warning: must put inside a valid Json object
*	 You can choose between using the simple header or not:
*	 EXAMPLE: <div data-component="App.Header.Initialize"></div>
*
**/

;(function(App){

	/*
	App.Header.Initialize()
		Initialize functions for the home page.
	@params:
		none
	*/
	App.Header.Initialize = function(options){
		//cache jQuery selectors
		App.Header.cacheElements();
		//set initial css properties
		App.Header.setFunctionalCSS();
		App.Header.setCurrentOrientation();
		App.Header.HeaderBehavior();


	};//-- App.Header.Initialize()

	/*
		Caches jQuery selectors to improve performance
	*/
	App.Header.cacheElements = function(){
		App.Header.$header = jQuery('header');

		App.Header.$hero = jQuery('header .wrapper .hero');
		//hero image is duplicated to achieve blur effect
		App.Header.$blurImg =  jQuery('.nav-bar-blur img');

		App.Header.$navBar = jQuery('header .nav-bar');
		App.Header.$content = App.Header.$header.find('.header-content');
	};

	/*
	App.Header.setFunctionalCSS
		Sets the correct css for the header depending if if is simple or not
	@params:
		none
	*/
	App.Header.setFunctionalCSS = function () {

		var windowWidth =  $(window).width();
		var searchbar = App.Header.$navBar.find('.search-bar');

		searchbar.css('display','none');

		// For desktop the Header should resize to the full HEIGHT of the viewport
		if (windowWidth >959) {
			//hide navigation elements on first load
			//this elements will be shown after scroll
			App.Header.$navBar.find('.main-title').css('display','none');
			App.Header.$navBar.find('.search-bar').css('display','none');

			//set hero image to the full height
			App.Header.$hero.css('height','100%');

			//keep automatic width to preserve image aspect-ratio
			App.Header.$hero.css('width','auto');

			App.Header.replicateBlur();
		} else {
			//for other breakpoints the header should resize to the full WIDTH of the viewport
			App.Header.$hero.css('width','100%');
			App.Header.replicateBlur();

			App.Header.$navBar.find('.main-title').css('display','inline-block');
		}

	};//-- App.Header.setFunctionalCSS

	/*
		Relicates size and position of the hero image into the blur layer
	*/
	App.Header.replicateBlur = function(){

		var css = {
			'height': App.Header.$hero.height() + 'px',
			'width': App.Header.$hero.width() + 'px',
			'left' : App.Header.$hero.css('left'),
			'top' : App.Header.$hero.css('top')
		};
		App.Header.$blurImg.css(css);
	};

	/*
	App.Header.InitScroll()
		Initializes the calculations for the header so it shrinks when the user scrolls down.
	@params:
		initialHeight: The header's height at that moment (Could be full screen or not)
		bottomLimit: The moment when the header stops cutting from the bottom and starts movin the imagen up.
		headerMinimunHeight: The minimun height that the header will have at full scroll.
	*/
	App.Header.InitScroll = function(initialHeight, bottomLimit, headerMinimunHeight){
		App.Header.navigationState =  'active';

		//since this scroll resizes two images and consumes a lot of resources,
		//let's avoid too many executions per second on IOs7
		App.Header.goResize = true;

		//due to iOS7 known issues with the scroll event, scroll in mobile devices are detected using the touch events
		if( navigator.userAgent.match(/(iPad|iPhone|iPod|Android)/g)){
			//Change css properties of elements to avoid rezising on scroll
			//since it's not posible to make it smooth on IOS7
			var windowWidth = $(window).width();
			App.Header.$header.css({'position':'static'});
			App.Header.$header.find('.nav-bar-content').css({'position':'absolute'});
			$('.nav-bar').css({'left':'0px !important','top':'0px !important'});
			//App.Header.$header.find('.nav-bar-content').css({'position':'fixed'});
			App.Header.$header.find('.nav-bar-content').css({'-webkit-backface-visibility':'hidden'});
			App.Header.$header.find('.nav-bar-content').css({'backface-visibility':'hidden'});
			jQuery('.header-background-height').css({'display':'none'});
			if((windowWidth > 767) && (windowWidth < 1024)){
				$('header .wrapper .header-content .search-bar').css({'position':'relative','margin-top':'-98px','padding-bottom':'38px','bottom':'inherit'});
			}
			if(windowWidth < 768){
				$('header .wrapper .header-content .search-bar').css({'position':'relative','margin-top':'-68px','padding-bottom':'25px','bottom':'inherit'});
			}
			$(window).on('orientationchange',function(){
				window.location.reload();
			});
			
			$(window).scroll(function (event) {
				if((document.body.scrollTop > 140) && (windowWidth > 959)){
					App.Header.$navBar.find('.main-title').fadeIn();
				}
				if((document.body.scrollTop < 141) && (windowWidth > 959)){
					App.Header.$navBar.find('.main-title').hide();
				}
			});
		}else{
			$(window).unbind('scroll'); // to reset the scroll behaviour.

			$(window).scroll(function (event) {
				App.Header.onScroll(initialHeight, bottomLimit, headerMinimunHeight);
			});
		}
		//setTimeout(function(){$('body').animate({scrollTop: 1});},300);
		//setTimeout(function(){$('body').animate({scrollTop: 0});},600);
	};//-- App.Header.InitScroll()
	
	/*
		Runs every time scroll is detected
	*/
	App.Header.onScroll = function(expandedHeight, bottomLimit, collapsedHeight){
		var scroll;
		var newHeight;

		newHeight = expandedHeight - $(window).scrollTop();


		if (newHeight > collapsedHeight) {

			if ( bottomLimit > newHeight ) {

				App.Header.$hero.css({ 'top': -(bottomLimit - newHeight)});

			} else {
				App.Header.$hero.css({ 'top':0});
			}

			App.Header.$header.height(newHeight);

			if (App.Header.navigationState === 'collapsed') {

				App.Header.SetExpandedElementVisibility();
				App.Header.navigationState = 'active';
			}

		} else {

			//When the user is on the minimun height

			if (App.Header.navigationState !== 'collapsed') {

				var top = -(expandedHeight - collapsedHeight - (expandedHeight - bottomLimit ));
				App.Header.$hero.css({ 'top':top});
				App.Header.$header.height(collapsedHeight);

				App.Header.SetCollapsedElementVisibility();

				App.Header.navigationState = 'collapsed';
			}
		}
		App.Header.replicateBlur();
	};

	/*
	App.Header.SetCorrectHeaderSize()
		Centers the image in desktop browsers when the user resizes, and expands it to full width in mobile devices
	@params:
		None
	*/
	App.Header.SetCorrectHeaderSize = function () {
		var windowWidth = $(window).width();

		if (windowWidth >= 960) {
			var windowHeight = $(window).height();
			var size = windowHeight * 1920 / 800;
			var position = ( size - windowWidth ) / 2;
			//if(position > 0){
				App.Header.$hero.css('left', -position);
			//}else {App.Header.$hero.css('left', position);}

		} else {
			App.Header.$hero.css('left', 0);
		}
	};//-- App.Header.SetCorrectHeaderSize()

	/*
	App.Header.ResizeOption()
		Resets the main functions when the user resizes the screen.
	@params:
		None
	*/
	App.Header.ResizeOption = function () {

		App.Header.SetCorrectHeaderSize();
		
		$( window ).resize(function() {


			if((!App.Responsive.IsMobile() || App.Header.CheckOrientationChange()) && !App.isIE8  ) { //resize option only for desktop or on orientation change.
				
				App.Header.SetCorrectHeaderSize();
				App.Header.setFunctionalCSS();
				App.Header.ResetHeaderHeight();
				App.Header.SetExpandedElementVisibility();

				var headerHeight = $('header').height();
				var imageBottomLimit = headerHeight / 2;
				var headerMinimunHeight = $('.nav-bar-content').height();
				App.Header.ButtonBehavior(headerHeight, headerMinimunHeight);
				App.Header.InitScroll(headerHeight, imageBottomLimit, headerMinimunHeight);
			}
		});

	};//-- App.Header.ResizeOption()

	/*
	App.Header.SetExpandedElementVisibility()
		Shows or hides the header's elements to their initial state.
	@params:
		None
	*/
	App.Header.SetExpandedElementVisibility = function() {
		App.Header.ShowHeaderElements();
		App.Header.HideNavMenu();
	};//-- App.Header.ResetElementsVisibility()

	/*
	App.Header.SetCollapsedElementVisibility()
		Shows or hides the header's elements to their initial state.
	@params:
		None
	*/
	App.Header.SetCollapsedElementVisibility = function() {
		App.Header.HideHeaderElements();
		App.Header.ShowNavMenu();
	};//-- App.Header.SetCollapsedElementVisibility()

	/*
	App.Header.ResetHeaderHeight()
		Resets the header height so the pluggin can function correctly when the user resizes the screnn
	@params:
		None
	*/
	App.Header.ResetHeaderHeight = function () {
		$('html, body').scrollTop(0);

		var windowHeight = $(window).height();
		if (App.currentBreakpoint === 'desktop') {
			App.Header.$header.height(windowHeight);
			$('header .wrapper').height(windowHeight);
			$('.header-background-height').height(App.Header.$header.height());
		} else {
			App.Header.$header.css('height','auto');
			$('header .wrapper').css('height','auto');
			$('.header-background-height').height(App.Header.$header.height());
		}
		App.Header.replicateBlur();
	};//-- App.Header.ResetHeaderHeight()

	/*
	App.Header.ShowNavMenu()
		Shows the elements in the nav menu depending in witch device the user is.
	@params:
		None
	*/
	App.Header.ShowNavMenu = function () {
		var windowSize = $(window).width();
		var navMenu = $('header .nav-bar-content');
		var navSearchBar = navMenu.find('.search-bar');
		var navTitle = navMenu.find('.main-title');

		navTitle.fadeIn();

		if (App.currentBreakpoint === 'desktop') {

			navSearchBar.fadeIn();
		}

	};//-- App.Header.ShowNavMenu()

	/*
	App.Header.HideNavMenu()
		Hides the elements in the nav menu depending in witch device the user is.
	@params:
		None
	*/
	App.Header.HideNavMenu =  function () {
		var windowSize = $(window).width();
		var navMenu = $('header .nav-bar-content .first-col');
		var navTitle = navMenu.find('.main-title');
		var navSearchBar = navMenu.find('.search-bar');

		navSearchBar.fadeOut();
		if (App.currentBreakpoint === 'desktop') {
			navTitle.fadeOut();
		}

	};//-- App.Header.HideNavMenu()

	/*
	App.Header.ShowHeaderElements()
		Shows the titles and the searchbar inside the hero..
	@params:
		None
	*/
	App.Header.ShowHeaderElements = function () {
		App.Header.$content.fadeIn();
	};//-- App.Header.ShowHeaderElements()

	/*
	App.Header.HideHeaderElements()
		Hides the titles and the searchbar inside the hero..
	@params:
		None
	*/
	App.Header.HideHeaderElements = function () {
		App.Header.$content.fadeOut();
	};//-- App.Header.HideHeaderElements()

	/*
	App.Header.HideHeaderElements()
		Sets the main header functionality.
	@params:
		None
	*/
	App.Header.HeaderBehavior = function () {
		App.Header.ResetHeaderHeight();
		App.Header.ResizeOption();

		var headerHeight = App.Header.$header.height();
		var imageBottomLimit = headerHeight / 2;
		var headerMinimunHeight = $('.nav-bar-content').height();

		App.Header.InitScroll(headerHeight, imageBottomLimit, headerMinimunHeight);
		App.Header.ButtonBehavior(headerHeight, headerMinimunHeight);
		App.Header.replicateBlur();

	};//-- App.Header.HideHeaderElements()



	App.Header.setCurrentOrientation =  function() {

		if( $(window).width() < $(window).height() ) {
			App.Header.$currentOrientation = 'portrait';
		} else {
			App.Header.$currentOrientation = 'landscape';
		}
		App.Responsive.$orientationChanged = false;

	};

	App.Header.CheckOrientationChange = function () {
		if (App.Header.$currentOrientation === 'portrait') {
			if( $(window).width() > $(window).height() ) {
				App.Header.$currentOrientation = 'landscape';
				//console.log('ORIENTATION CHANGED TO LANDSCAPE');
				App.Header.$orientationChanged = true;
				return App.Header.$orientationChanged;
			}
		} else {
			if( $(window).width() < $(window).height() ) {
				App.Header.$currentOrientation = 'portrait';
				//console.log('ORIENTATION CHANGED TO portrait!');
				App.Header.$orientationChanged = true;
				return App.Header.$orientationChanged;
			}
		}
		App.Header.$orientationChanged = false;
		return App.Header.$orientationChanged;
	};

	/*
	App.Header.ButtonBehavior()
		Sets the header's button functionality so it goes to the first section when the user clicks on it.
	@params:
		headerHeight: The header's height at that moment (Could be full screen or not)
		headerFixedHeight: The moment when the header stops cutting from the bottom and starts movin the imagen up.
	*/
	App.Header.ButtonBehavior = function(headerHeight, headerFixedHeight) {
		$('html, body').scrollTop(0);
		var button = $('.hero-arrow img');
		button.unbind('click');

		var firstSectionPos = headerHeight - headerFixedHeight ;

		button.click(function () {
			$('html, body').animate({
				scrollTop: firstSectionPos
			}, 2000);
		});
	};//-- App.Header.ButtonBehavior()

}(window.App));
/**
* IE8Placeholder  component 
* Provides placeholder behavior for IE8 browser

	DISABLED MODULE

**/

/**
* 	USAGE: This module runs automatically when added to the app.js, no need to call it
**/
;(function(App){

	// ###  Example for module initialization
	// @param: options 
	App.IE8Placeholder.Initialize = function(options){
		
	};

}(window.App));

// window.App.IE8Placeholder.Initialize();
/**
* Iframe resize component 
* Changes iframe height based on it's postMessage, the iframe must provide the height
* DEPENDENCIES: jQuery, also the iframed page must have postMessage implemented on their code
	see: http://shorts.jeffkreeftmeijer.com/2014/resize_an_iframe_based_on_its_contents/
**/

;(function(App){

	App.IFrameResize._list = [];
	// ###  Example for module initialization
	// @param: options 
	//the iframe elements MUST be the component caller
	App.IFrameResize.Initialize = function(options){
		App.IFrameResize._list.push({ 'iframe': options.dataComponentCaller, 'domain': options.domain});
		//VERY IMPORTANT, the iframes added to this list MUST NOT have scrollbar enabled, it created a resize loop that looks really bad and also kils the CPU
		$(options.dataComponentCaller).attr('scrolling','no');
		
	};

	App.IFrameResize.bindMessages = function(){
		window.addEventListener('message', function(event) {

			//check you are updating the correct iframe, more than one per page is supported
			var node = App.IFrameResize.findIframe(event);
			
			if(node){

				var data = App.IFrameResize.parseData(event.data);

				if (data.height) {
					$(node.iframe).css('height', data.height + 'px');
				}

				if (data.scrollMe){
					if(isNaN(data.scrollMe)){
						App.IFrameResize.ScrollToPosition($(node.iframe));
					}else{
						App.IFrameResize.ScrollToPosition($(node.iframe), data.scrollMe);
					}
				}
			}
		});
	};

	App.IFrameResize.findIframe = function(event) {
		var iframes = [];
		var i;
		var $iframe;
		//some iframes have the path inside, because the src of the iframe might be a relative path, without domain.
		var path = App.IFrameResize.parseData(event.data).path;

		for(i = 0; i < App.IFrameResize._list.length; i += 1){
			var domain = App.IFrameResize._list[i].domain;
			$iframe = $(App.IFrameResize._list[i].iframe);

			if(	domain && event.origin.indexOf(domain) >= 0 ){
				if(App.Responsive.getBreakpoint() === 'mobile' &&
					$iframe.parents('.toggle-content').length <= 0 ){
					iframes.push(App.IFrameResize._list[i]);
				}

				if(App.Responsive.getBreakpoint() !== 'mobile' &&
					$iframe.parents('.toggle-content').length > 0 ){
					iframes.push(App.IFrameResize._list[i]);
				}
			}
		}

		if(iframes.length > 0){
			if(iframes.length > 1){
				for(i = 0; i < iframes.length; i += 1){
					$iframe = $(iframes[i].iframe);
					if(event.data && path){
						if($iframe.attr('src').indexOf(path) >= 0){
							return iframes[i];
						}
					}
				}
			}else{
				return iframes[0];
			}
		}

		return false;
	};

	App.IFrameResize.parseData = function(data){

		if (typeof data === 'string' || data instanceof String) {

			try {
				return JSON.parse(data);
			}
			catch(err) {
				return false;
			}
			
		}
		return data;
	};

	App.IFrameResize.ScrollToPosition = function (element, delta) {
		var position = element.offset().top - $('.nav-bar-content').height();
		if(delta){
			position = position + delta;
		}

		var body = $('html, body');
		body.animate({scrollTop:position}, '500', 'swing');
	};

	$(document).ready(function(){
		App.IFrameResize.bindMessages();
	});

}(window.App));
/**
* Slider component 
* Use the examples below to create you own module
**/

/**
* 	USAGE: call this component adding a call to its Initialize method on the html code
*          You can pass over options using data-component-options Warning: must put inside a valid Json object
*   EXAMPLE: <div data-component='App.Slider.Initialize' data-options='{}'></div>
**/
;(function(App){

	/*
	App.MultipleSlider.setbxSlider();
		Initializes the bx-slider plugin.
	@params: 
		options :  to know the data-component-caller
	*/
	App.MultipleSlider.setbxSlider = function ($slider) {

		$('.content-item').css('display','block'); // it is necesary that the container that holds the bx-slide is visible to
		$('.content-item').css('display','block'); // make it work
		$('#mobile-toggle').removeClass('visible-sm');

		var windowSize = $(window).width();
		var sliderObject = $slider;

		sliderObject.bxSlider({
			touchEnabled: true,
			controls: true,
			responsive: false,
			onSliderLoad: function () {
				sliderObject.isInitialized = true;
				$('.content-item').css('display','none'); // Hide the container on initialization
				$('.content-item').css('display','none');
				
			}
		});
		$('#mobile-toggle').addClass('visible-sm');

	};//-- App.MultipleSlider.setbxSlider();

	/*
	App.MultipleSlider.setStructure();
		Sets the new structure so the bx-slider component works correctly dividing the elements in different slides.
	@params: 
		options :  to know the data-component-caller
	*/
	App.MultipleSlider.setStructure =  function (sliderObject) {
		App.MultipleSlider.$originalStructure = sliderObject.html();
		
		var newSectionContainer = $('<div></div>');
		var newSection  = $('<ul class="multiple-slider-structure"></ul>');
		var groups = sliderObject.find('.slider-group');


		groups.each(function () {
			var j = 0;
			var title = $(this).find('h3').html();
			var elements = $(this).find('.slider-item');
			var newSlide = $('<li class="multiple-slide"><h3>' + title + '</h3></li>');

			for (var i = 0; i < elements.length; i = i + 1) {

				newSlide.append(elements[i]);

				if ( j > 3 || i === elements.length - 1 )  {

					newSection.append(newSlide);
					newSlide = $('<li class="multiple-slide"><h3>' + title + '</h3></li>');
					j = 0;
				} else {
					j = j + 1;
				}

			}
			
			newSectionContainer.append(newSection);
			sliderObject.html(newSectionContainer);

		});

		var newSliderObject = sliderObject.find('ul');

		setTimeout(function(){
			App.MultipleSlider.setbxSlider(newSliderObject);
		}, 1000);

	};//-- App.MultipleSlider.setStructure();


	/*
	App.MultipleSlider.Initialize();
		Initilizes the functionality for the bxslider plugin-
	@params: 
		options :  to know the data-component-caller
	*/
	App.MultipleSlider.Initialize = function(options){
		//there is no need to keep this reference so lets not use a global here

		App.MultipleSlider.setStructure($(options.dataComponentCaller));

	};//-- App.MultipleSlider.Initialize();

}(window.App));



/**
* Navigation Bar Functions
**/

/**
* 	USAGE: call this component adding a call to its Initialize method on the html code
*          You can pass over options using data-component-options Warning: must put inside a valid Json object
*   EXAMPLE: <div data-component='App.Navigation.Initialize' data-options='{}'></div>
**/

;(function(App){

	App.Navigation.$nav = null;

	/*
	App.Navigation.HideSideBar()
		Shows the navigation bar.
		The width depends on the size of the window.
	@params:
		none
	*/
	App.Navigation.ShowSideBar = function () {
		var navWidth;
		var windowSize = $(window).width();

		if (windowSize >= 768) {
			navWidth = '485px';
		} else {
			navWidth = '310px';
		}

		App.Navigation.$nav.animate({
			width: navWidth
		}, 500, function () {
			App.Navigation.setActiveButtonClass();
		});

		// disabled scroll global scope

		/*
		if(App.Responsive.IsMobile()) {
			$('html').getNiceScroll().remove();

			document.ontouchmove = function(event) {
				event.preventDefault();
			};

			$('.nav-menu-container').niceScroll({
				mousescrollstep: 30,
				zindex: 10,
				cursorborder: '1px solid #000',
				cursorwidth: '10px'
			});
		}*/

	};//-- App.Navigation.HideSideBar()

	/*
	App.Navigation.HideSideBar()
		Hides the navigation bar.
	@params:
		none
	*/
	App.Navigation.HideSideBar = function (event) {
		App.Navigation.StopPropagation(event);

		App.Navigation.$nav.animate({
			width: '0px'
		}, 500, function() {
			App.Navigation.removeActiveButtonClass();
		});

		/*
		if(App.Responsive.IsMobile()) {
			$('.nav-menu-container').getNiceScroll().remove();
		
			document.ontouchmove = function(event) {
				return true;
			};
		}
		*/
	
	};//-- App.Navigation.HideSideBar()

	/*
	App.Navigation.setActiveButtonClass()
		Sets the 'active' class and binds the click event again to open the navigation menu.
		This function includes also effects to fade in and fade out the hamburger icons.
	@params:
		none
	*/
	App.Navigation.setActiveButtonClass = function () {

		var menuIcon = $('.hamburger');

		menuIcon.fadeOut( function () {
			$(this).addClass('active');
		}).fadeIn( function () {
			$('.nav-bar-icon').unbind('click');
			$('html').click(function(event) {
				$('html').unbind('click');
				App.Navigation.HideSideBar(event);
			});
		});
	};//-- App.Navigation.setActiveButtonClass()

	/*
	App.Navigation.removeActiveButtonClass()
		Removes the 'active' class and binds the click event again to open the navigation menu.
		This function includes also effects to fadein and fede out the hamburger icons.
	@params:
		none
	*/
	App.Navigation.removeActiveButtonClass = function () {

		var menuIcon = $('.hamburger');

		menuIcon.fadeOut( function () {
			$(this).removeClass('active');
		}).fadeIn( function () {
			$('.nav-bar-icon').click( function( event) {
				$('.nav-bar-icon').unbind('click');
				App.Navigation.StopPropagation(event);
				App.Navigation.ShowSideBar();
			});
		});
	};

	/*
	App.Navigation.HideSiblings()
		Hides the siblings menues of the one the user selects.
	@params:
		none
	*/
	App.Navigation.HideSiblings = function (menuHeader) {

		var siblingMenus = menuHeader.closest('ul').find('.toggle');

		siblingMenus.next().slideUp();
		siblingMenus.removeClass('active');
		siblingMenus.next().addClass('collapsed');

	};//-- App.Navigation.HideSiblings()

	/*
	App.Navigation.ToggleMenu()
		Displays or hides the options inside the navigation bar.
	@params:
		none
	*/
	App.Navigation.ToggleMenu = function () {
		var menuHeader;
		var menu;

		App.Navigation.$nav.find('.toggle').click(function(){

			menuHeader = $(this);

			menu = $(this).next();
			if ( menu.hasClass('collapsed')) {
				App.Navigation.HideSiblings(menuHeader);
				menu.slideDown();
			} else {
				menu.slideUp();
			}
			menu.toggleClass('collapsed');
			menuHeader.toggleClass('active');
		});
	};//-- App.Navigation.ToggleMenu()

	/*
	App.Navigation.StopPropagation()
		Stops porpagation for all browsers including IE8
	@params:
		e: The click event
	*/
	App.Navigation.StopPropagation = function(e) {
	    if(e.stopPropagation) {
	        e.stopPropagation();
	    } else {
	        e.cancelBubble = true;
	    }
	};//-- App.Navigation.StopPropagation()

	/*
	App.Navigation.Initialize()
		Initialize functions for the navigation menu.
	@params:
		options: the comes from the template.
	*/
	App.Navigation.Initialize = function(options){

		App.Navigation.$nav = $('nav');

		//Stop propagation when the user clicks on the menu so it avoids closing
		$('.nav-menu').click(function(event){
			App.Navigation.StopPropagation(event);
		});

/*		TODO FIX STOP PROPAGATION BUG IN MOBILE

		$('.nav-menu').scroll(function(event) {
			console.log('in!!');
			console.log(event.target);
			console.log(event);
			App.Navigation.StopPropagation(event);
		});
*/

		//To open the menu
		$('.nav-bar-icon').click(function(event) {
			$('.nav-bar-icon').unbind('click');
			App.Navigation.StopPropagation(event);
			App.Navigation.ShowSideBar();
		});

		App.Navigation.ToggleMenu();
	};//-- App.Navigation.Initialize()

}(window.App));

/**
*  NiceScroll functionálity
**/

/**
* 	USAGE: call this component adding a call to its Initialize method on the html code
*          You can pass over options using data-component-options Warning: must put inside a valid Json object
*	 You can choose between using the simple header or not:
*	 EXAMPLE: <div data-component="App.Header.Initialize" data-component-options='{"simpleHeader":true}'></div>
*
**/

;(function(App){

	/*
	App.NiceScroll.Initialize()
		Sets the niceScroll plugin functionality
	@params: 
		none
	*/
	App.NiceScroll.Initialize = function(options){

		if(!App.Responsive.IsMobile()) {
			$('html').niceScroll({
				mousescrollstep: 30,
				zindex: 100,
				cursorborder: '1px solid #000',
				cursorwidth: '10px'
			});
		}
	};//-- App.NiceScroll.Initialize()


}(window.App));
/**
* Iframe resize component 
* Changes iframe height based on it's postMessage, the iframe must provide the height
* DEPENDENCIES: jQuery, also the iframed page must have postMessage implemented on their code
	see: http://shorts.jeffkreeftmeijer.com/2014/resize_an_iframe_based_on_its_contents/
**/

;(function(App){

	App.oneIframeResize._list = [];
	// ###  Example for module initialization
	// @param: options 
	//the iframe elements MUST be the component caller
	App.oneIframeResize.Initialize = function(options){
		//VERY IMPORTANT, the iframes added to this list MUST NOT have scrollbar enabled, it created a resize loop that looks really bad and also kils the CPU
		$(options.dataComponentCaller).attr('scrolling','no');
		
	};

	App.oneIframeResize.bindMessages = function(){

		window.addEventListener('message', function(event) {

			//check you are updating the correct iframe, more than one per page is supported
			var iframe = App.oneIframeResize.findIframe(event);

			if(iframe){

				var data = event.data;
				if (typeof data === 'string' || data instanceof String) {
					data = JSON.parse(data);
				}

				if (data.height) {
					$(iframe).css('height', data.height + 'px');
				}
			}
		});
	};

	//returns the FIRST iframe found that matches the domain
	App.oneIframeResize.findIframe = function(event) {

		var iframes = $('iframe');

		for (var i = 0; i < iframes.length ; i= i + 1) {

			if( $(iframes[i]).attr('data-component') === 'App.oneIFrameResize.Initialize' ){
				var options = $(iframes[i]).attr('data-component-options');
				options = JSON.parse(options);

				if(options.domain && event.origin.indexOf(options.domain) >= 0){
					return $(iframes[i]);
				}
			}

		}

		return false;
	};

	$(document).ready(function(){
		App.oneIframeResize.bindMessages();
	});

}(window.App));
/**
* Outbrain component
* Creates outbrain modules
**/


;(function(App){

    //default values for generating the widget, can be overriten passing new values though data-component-options
    App.Outbrain.widgetId = 'AR_1';
    App.Outbrain.obTemplate = 'colgateoralcare';
    // ###  Creates a DOM element inside the componentCaller with the following pattern
    /*<div class="OUTBRAIN"
        data-src="http://www.colgate.com/app/CP/US/EN/OC/Information/Articles/Oral-and-Dental-Health-Basics/Oral-Hygiene/Oral-Hygiene-Basics/article/What-is-Good-Oral-Hygiene.cvsp"
        data-widget-id="AR_1"
        data-ob-template="colgateoralcare" >
    </div>*/
    // @param: options
    App.Outbrain.Initialize = function(options){
        //options.dataComponentCaller references the DOM element that contains the data-component

        var obWidget = App.Outbrain.createWidget(options);

        $(options.dataComponentCaller).append(obWidget);

    };

    App.Outbrain.createWidget = function(options){

        var obTemplate = options.obTemplate || App.Outbrain.obTemplate;
        var widgetId = options.widgetId || App.Outbrain.widgetId;

        //on password protected environments a prod url needs to be provided in order for the widget to display
        var srcUrl = '';
        var urlPath;

        /* hardcoded Countrycodes */
        /*var countryUrls =  {
            'en-au':'http://www.colgate.com.au/app/Colgate/AU/Corp/History/HistoryVideo.cvsp',
            'en-in':'http://www.colgate.co.in/app/Colgate/IN/Corp/History/HistoryVideo.cvsp',
            'en-ph':'http://www.colgate.ph/app/Colgate/PH/Corp/History/HistoryVideo.cvsp',
            'en-uk':'http://www.colgate.co.uk/app/CP/UK/OC/Information/Video-Library/Understanding-Tooth-Sensitivity.cvsp',
            'en-us':'http://www.colgate.com/en/us/oc/oral-health/basics/brushing-and-flossing/video/Kids-Weigh-In',
            'es-mx':'http://www.colgate.com.mx/app/Colgate/MX/Corp/History/HistoryVideo.cvsp',
            'pt-br':'http://www.colgate.com.br/app/CP/BR/OC/Information/Video-Library/Introduction-to-Tooth-Whitening.cvsp'
        };*/

        var reg = new RegExp(/^(localhost|dev|iwd|stage)/i);
        var matches = reg.exec(window.location.host);
        
        if(matches){
            //srcUrl = options.srcUrl || 'http://www.colgate.com/app/CP/US/EN/OC/Information/Articles/Oral-and-Dental-Health-Basics/Oral-Hygiene/Oral-Hygiene-Basics/article/What-is-Good-Oral-Hygiene.cvsp';
            srcUrl = window.obDefaultLocaleUrl; //countryUrls[window.countrycode];
        } else {
            srcUrl = '';
        }

        var widget = $(document.createElement('div'));
        widget.addClass('OUTBRAIN');
        widget.attr('data-src', srcUrl);
        // widget.attr('data-src', 'http://www.colgate.com/app/CP/US/EN/OC/Information/Articles/Oral-and-Dental-Health-Basics/Oral-Hygiene/Oral-Hygiene-Basics/article/What-is-Good-Oral-Hygiene.cvsp');
        widget.attr('data-widget-id', widgetId);
        widget.attr('data-ob-template', obTemplate);

        return widget;
    };

}(window.App));
/**
* ProductGrid component
* Creates a column layout for products based on breakpoint
* Dependencies: Jquery, App.Responsive
**/

/**
* 	USAGE: call this component adding a call to its Initialize method on the html code
*          You can pass over options using data-component-options Warning: must put inside a valid Json object
*   EXAMPLE: <div data-component='App.Foo.Initialize' data-options='{}'></div>
**/
;(function(App){

	App.ProductGrid.activeFilters = [];
	// ###  Example for module initialization
	// @param: options
	App.ProductGrid.Initialize = function(options){
		//options.componentCaller references the DOM element that contains the data-component

		//Use App.log instead of console.log it checks the App.debug variable and turns off all log in production mod
		// App.Log('<!-- Initializing App.ProductGrid');

		App.ProductGrid.$productPool = $(options.source);
		App.ProductGrid.$container = $(options.productsContainer);
		App.ProductGrid.$filters = $('.col-first li.list-group-item');
		App.ProductGrid.$buttonsContainer = $('#filters-list');

		App.ProductGrid.SetLayout();
		App.ProductGrid.BindEvents();
	};

	//bind events
	App.ProductGrid.BindEvents = function(){
		$(document).ready(function(){
			//do not hook this up before
			setTimeout(function(){
				App.onBreakpointChange(function(){
					// App.Log('<-- colsPerRow: '+App.ProductGrid.columnsPerRow());
					App.ProductGrid.SetLayout();
				});
			},1000);
		});

		App.ProductGrid.$filters.bind('click', function(event){
			event.preventDefault();
			event.stopPropagation();
			// App.Log($(this));
			var tag = $(this).find('input[type=checkbox]').val();
			App.ProductGrid.toggleTag(tag);
		});

		$('.clear-all, .clear-all-filters').click(function(){
			App.ProductGrid.clearAllTags();
		});

	};

	App.ProductGrid.clearAllTags = function(){

		//clear the active tags array
		App.ProductGrid.activeFilters = [];
		
		//find the filters <li> and toggle class backChecked
		App.ProductGrid.$filters.each(function(){
			$(this).removeClass('backChecked');
		});

		$('.clear-all, .icon.filter, .filter-count').hide();
		
		//toggle tag button
		App.ProductGrid.$buttonsContainer.html('');

		//reset the product layout
		App.ProductGrid.SetLayout();
	};

	App.ProductGrid.toggleTag = function(tag){

		var index = $.inArray(tag, App.ProductGrid.activeFilters);
		if(index >= 0){
			App.ProductGrid.activeFilters.splice(index,1);
		}else{
			App.ProductGrid.activeFilters.push(tag);
		}
		
		//find the <li> corresponding to the tag and toggle class backChecked
		var tagName = '';
		App.ProductGrid.$filters.each(function(){
			if($(this).find('input[type=checkbox]').val() === tag){
				$(this).toggleClass('backChecked');
				tagName = $(this).find('label').text();
			}
		});
		
		//toggle tag button
		App.ProductGrid.toggleTagButton(tag, tagName);

		//reset the product layout
		App.ProductGrid.SetLayout();
	};

	// add/removes the tag buttons at the top of the page
	App.ProductGrid.toggleTagButton = function(tagValue, tagText){
		//if the element is there, remove, if not create
		if(App.ProductGrid.$buttonsContainer.find('a[data-tag="'+tagValue+'"]').length > 0){
			App.ProductGrid.$buttonsContainer.find('a[data-tag="'+tagValue+'"]').remove();
		}else{
			App.ProductGrid.$buttonsContainer.append(App.ProductGrid.createTagButton(tagValue, tagText));
		}

		if(App.ProductGrid.activeFilters.length > 0){
			$('.clear-all, .icon.filter, .filter-count').show();
		}else{
			$('.clear-all, .icon.filter, .filter-count').hide();
		}
	};

	//creates the filter inicators at the top
	App.ProductGrid.createTagButton = function(tags, text) {
      var e = $(document.createElement('a')).attr('href', '#');
      var s = $(document.createElement('span')).addClass('icon remove-circle');
      e.html(text).append(s);
      e.data('tags',  tags);
      e.attr('data-tag', tags);
      // e.attr('data-tags', '["'+ tags.join('","') +'"]' );
      e.addClass('clear-filter');
      e.bind('click', function(){
        App.ProductGrid.toggleTag(tags);
        return false;
      });

      return e;
    };

    //updates the products shown count
    App.ProductGrid.updateCount = function(count){
		$('.products-count').html(count);
		$('.filter-count').html('(' + App.ProductGrid.activeFilters.length + ')');
    };

	App.ProductGrid.SetLayout = function(){
		//first, empty conteainer
		App.ProductGrid.$container.html('');
		App.ProductGrid.$container.parent().find('.no-items-msg').hide();

		var colPerRow = App.ProductGrid.columnsPerRow();
		var count=0;
		var images = [];
		var links = [];
		App.ProductGrid.$productPool.each(function(index, element){

			if(App.ProductGrid.hasTags($(element))){
				
				images.push(App.ProductGrid.createImage($(element)));
				// App.Log('<-- Pushing image into the array');
				links.push(App.ProductGrid.createLink($(element)));
				// App.Log('<-- Pushing link into the array');

				//every productPerRow loops flush the acumulated elements into the DOM
				if( images.length === colPerRow){
					App.ProductGrid.flushRow(images,links);
					images = [];
					links = [];
				}

				count +=1;
			}
		});

		//if no elements are displayed, show the message
		if(count===0){
			App.ProductGrid.$container.parent().find('.no-items-msg').show();
		}

		//flush any remaining elements
		if( images.length !== 0 ){
			App.ProductGrid.flushRow(images,links);
		}

		//update counter
		App.ProductGrid.updateCount(count);
	};

	App.ProductGrid.hasTags = function($product){
		var productTags = JSON.parse($product.attr('data-tags'));
		
		// App.Log(productFilters);
		if(App.ProductGrid.activeFilters.length > 0){
			var found = 0;
			for(var i=0; i<App.ProductGrid.activeFilters.length; i+=1){
				if($.inArray(App.ProductGrid.activeFilters[i], productTags) >= 0){
					found +=1;
				}
			}

			if(found === App.ProductGrid.activeFilters.length){
				return true;
			}

			return false;
		}
		return true;
	};

	App.ProductGrid.flushRow = function(images, links){
		var $row = $(document.createElement('div')).addClass('row');
		var $imagesRow = $(document.createElement('div'));
		var $linksRow = $(document.createElement('div'));

		$imagesRow.addClass('row').addClass('product-img').append(images);
		// App.Log('<-- Appending images to imageRow');
		$linksRow.addClass('row').addClass('product-link').append(links);
		// App.Log('<-- Appending links to linkRow');

		$row.append($imagesRow,$linksRow);
		// App.Log('<-- Appending rows to row');
		App.ProductGrid.$container.append($row);
		// App.Log('<-- Appending row to container');
		// App.Log('Final row code:');
		// App.Log($row.html());
	};

	//returns a jquery element, a products image with it's corresponding column container
	App.ProductGrid.createImage = function($product){
		// App.Log('<-- Creating image for product' + $product.attr('data-name'));
/*
		console.log($product.attr('quick-view'));

		if($product.attr('quick-view') === 'false' ) {
			console.log('in!');
		} else {
			console.log('out!');
		}*/


		var $imgCol = $(document.createElement('div'))
							.addClass('col-'+ App.Responsive.getBreakpointCode() + '-' + App.ProductGrid.columnWith())
							.addClass('text-center')
							.addClass('product-img-col');

		//if the element is marked as new
		if($product.attr('data-new') === 'true'){
			$imgCol.append('<div class="product-float"><span class="product-new"></span></div>');
		}
		//on the desktop and tablet clicking opens the quickview modal
		
		if( ($product.attr('data-url') === '#' || ($product.attr('data-url')) === undefined ) && $product.attr('quick-view') === 'false' ) {
			$imgCol.addClass('no-link');
		}

		if(App.currentBreakpoint !== 'mobile' && $product.attr('quick-view') !== 'false' ){
			$imgCol.attr('data-toggle','modal')
					.attr('data-target',$product.attr('data-target'));
		}

		var $img = $(document.createElement('img'))
				.attr('src', $product.attr('data-img'))
				.attr('alt',$product.attr('data-name'))
				.attr('data-tracking','product-quick-view')
				.attr('data-tracking-attr',$product.attr('data-name'));

		var $intermediateDiv = $(document.createElement('div'));
		$intermediateDiv.append($img);

		//on mobile devices clickin on the image should take you to the PDP
		// also if it has the no-link attr on true it will not be added

		if( ( App.currentBreakpoint === 'mobile' || ($product.attr('quick-view') === 'false') ) && !( $product.attr('data-url') === '#' && $product.attr('quick-view') === 'false' ) ){
			var $link = $(document.createElement('a'))
						.attr('href', $product.attr('data-url'));
			$link.append($intermediateDiv);
			$imgCol.append($link);
		}else{
			$imgCol.append($intermediateDiv);
		}
		
		$imgCol.attr('data-tracking','product-quick-view').attr('data-tracking-attr',$product.attr('data-name'));
		$imgCol.click(function(){
			window.fireTracking(this);
		});

		if(App.Responsive.getBreakpointCode() === 'lg' && $product.attr('quick-view') !== 'false' ){
			$imgCol.append('<span class="square-link border-radius">'+$product.attr('data-button')+'</span>');

			$imgCol.on('mouseover',function(){
				$(this).find('span.square-link').show();
			});
				
			$imgCol.on('mouseout',function(){
				$(this).find('span.square-link').hide();
			});
		}

		return $imgCol;
	};

	//returns a jquery element, a products link with it's corresponding column container
	App.ProductGrid.createLink = function($product){
		// App.Log('<-- Creating link for product' + $product.attr('data-name'));
		var $linkCol = $(document.createElement('div'))
						.addClass('col-'+ App.Responsive.getBreakpointCode() + '-' + App.ProductGrid.columnWith())
						.addClass('text-center')
						.addClass('product-link-col');


		if($product.attr('data-external') === 'true'){
			$linkCol.addClass('external-link');
		}

		//on the desktop and tablet clicking opens the quickview modal
		if(App.currentBreakpoint !== 'mobile' && $product.attr('quick-view') !== 'false' ){
			$linkCol.attr('data-toggle','modal')
					.attr('data-target',$product.attr('data-target'));
		}

		$linkCol.attr('data-tracking','product-quick-view').attr('data-tracking-attr',$product.attr('data-name'));
		$linkCol.click(function(){
			window.fireTracking(this);
		});

		/* create a link if the text should be a link */
		var $link;

		if(($product.attr('data-url') === '#' || ($product.attr('data-url')) === undefined ) && $product.attr('quick-view') === 'false' ) {
			$link = $(document.createElement('span'));
			$linkCol.addClass('no-link');
		} else {
			$link = $(document.createElement('a'));

			//on mobile only, the click must redirect to the PDP, rather than opening the quickview
			if(App.currentBreakpoint === 'mobile' || $product.attr('quick-view') === 'false' ){
				$link.attr('href', $product.attr('data-url'));
			}

		}


		
		$link.html($product.attr('data-name'));

		$linkCol.append($link);

		if(App.Responsive.getBreakpointCode() === 'lg' && $product.attr('quick-view') !== 'false' ){
			$linkCol.on('mouseover',function(){
				//using the data-target to locate the matching img container
				var target = $product.attr('data-target');
				App.ProductGrid.$container.find('div[data-target="'+target+'"] span.square-link').show();
			});
				
			$linkCol.on('mouseout',function(){
				//using the data-target to locate the matching img container
				var target = $product.attr('data-target');
				App.ProductGrid.$container.find('div[data-target="'+target+'"] span.square-link').hide();
			});
		}

		return $linkCol;
	};

	//returns the ammount of columns per row, according to the current breakpoint
	App.ProductGrid.columnsPerRow = function(){
		var columnsPerRow = 2;
		if(App.Responsive.getBreakpointCode() === 'lg'){
			columnsPerRow = 3;
		}

		return columnsPerRow;
	};

	//returns the with of the columns relative to 12, bootstrap-wise
	App.ProductGrid.columnWith = function(){
		return ( 12 / App.ProductGrid.columnsPerRow() );
	};
}(window.App));
/**
*	Responsive module, sets some methods and variables for handling responsiveness across modules
*   The idea is that you can have your breakpoints in the html and read them into the App using a component
*   Creates a document custom event to warn about breakpoint changes
**/

;(function(App){

	//initialize the array to store callbacks for the breakpointChangeEvent
	App.Responsive.eventCallbacks = [];

	//@param options   json object, should have breakpoints inside
	//eg: { "desktop": { "min": "980" }, "tablet": { "min": "767" }, "mobile": { "min": "321" } }
	App.Responsive.Initialize = function(options){

		if(options){
			//set breakpoints into the App
			App.breakpoints = options;
			//define global breakpoints into the App object
			if(options){
				App.currentBreakpoint = App.Responsive.getBreakpoint();
				App.currentOrientation = App.Responsive.getOrientation();
			}

			//Add event for windows resize to handle breakpoint changes
			App.Responsive.bindHandlers();
		}else{
			App.Log('<--  App.Responsive:  No breakpoints provided  -->');
		}
	};

	App.Responsive.bindHandlers = function(){

		window.onresize = function(event){
			//store old breakpoint
			var oldB = App.currentBreakpoint,
				newB = App.Responsive.getBreakpoint(),
				oldO = App.currentOrientation,
				newO = App.Responsive.getOrientation();

			if(oldB !== newB || oldO !== newO){
				App.Responsive.triggerBreakpointChange(event);
				App.currentBreakpoint = newB;
				App.currentOrientation = newO;
			}
		};
	};

	//Returns the breakpoint according to the screen width
	App.Responsive.getBreakpoint = function(){
		if(App.breakpoints !== null){
			//no IE8 support for innerWidth property
			var w = $(window).width(); //window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

			if(w >= App.breakpoints.desktop.min){ return 'desktop'; }
			if(w >= App.breakpoints.tablet.min){ return 'tablet'; }
			return 'mobile';
		}
	};

	App.Responsive.getBreakpointCode = function(){
		var codes = {
			desktop: 'lg',
			tablet: 'md',
			mobile: ($(window).width > 320)?'sm':'xs'
		};
		return codes[App.currentBreakpoint];
	};

	//Returns the orientation of the screen
	App.Responsive.getOrientation = function(){
		var w = $(window).innerWidth(),  //window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
			h = $(window).innerHeight();

		if(h > w){ return 'portrait'; }
		return 'landscape';
	};

	//triggers a breakpoint change event
	App.Responsive.triggerBreakpointChange = function(event){
		//loop throu callbacks and call them all
		App.currentBreakpoint = App.Responsive.getBreakpoint();

		if(App.Responsive.eventCallbacks.length > 0){
			//this interval is just to make the calls asynchronous
			setTimeout(
					function(){
						for(var i=0; i < App.Responsive.eventCallbacks.length; i+=1){
							var callback = App.Responsive.eventCallbacks[i];
							callback(event,{
								'breakpoints': App.breakpoints,
								'currentBreakpoint': App.currentBreakpoint
							});
						}
					}
				, 0);
		}
	};

	//Returns true if device detected is Android
	App.Responsive.IsAndroid = function () {
		return navigator.userAgent.match(/Android/i);
	};

	/*
	App.Responsive.IsMobile()
		Checks if the user is using a mobile device.
	@params:
		none
	*/
	App.Responsive.IsMobile = function () {
		var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
		return isMobile;
	};//-- App.Header.IsMobile()

	//attaches a callback
	//note that this event belongs in the App object, not App.Responsive
	App.onBreakpointChange = function(callback){
		App.Responsive.eventCallbacks.push(callback);
	};

	//patch to remove elements from the DOM on certain breakpoints
	App.Responsive.removeOnBreakpoint = function(options){
		var $target = $(options.dataComponentCaller);

		if(options && options.length > 0 && options.indexOf(App.currentBreakpoint)){
			$target.remove();
		}
	};

}(window.App));
/**
*  Basic Functionality for Search Inputs
**/

/**
* 	USAGE: call this component adding a call to its Initialize method on the html code
*          You can pass over options using data-component-options Warning: must put inside a valid Json object
*   EXAMPLE: <div data-component='App.Foo.Initialize' data-options='{}'></div>
**/

;(function(App){

	App.SearchInput.inputs = [];
	App.SearchInput.Initialize = function(options){
		
		App.SearchInput.$searchComponent = $(options.dataComponentCaller);
		App.SearchInput.$search = App.SearchInput.$searchComponent.find(options.inputSearch);
		App.SearchInput.engineCode = options.searchEngineCode;
		App.SearchInput.placeholder = options.placeholder;

		App.SearchInput.inputs.push({
					container: options.dataComponentCaller,
					placeholder:options.placeholder
		});
		
		App.SearchInput.googleEngine();
		
		App.SearchInput.bindEvents(options);

		if( navigator.userAgent.match(/(iPad|iPhone|iPod|Android)/g)){
			App.SearchInput.moveSearchBox();
		}

	};//-- App.SearchInput.Initialize()

	App.SearchInput.bindEvents = function(){
		//only run this once
		if(!App.bindEventsFirst){
			$(document).ready(function(){
				setTimeout(function(){
					var containers = App.SearchInput.inputs;
					for(var i = 0; i<containers.length; i+=1){
						$(containers[i].container).find('input.gsc-input').attr('placeholder',containers[i].placeholder);
						$(containers[i].container).find('input.gsc-input').placeholder();
						// if($(containers[i].container).find('input.gsc-input').val()){
						// 	$(containers[i].container).find('input.gsc-input').val('');
						// }
					}
				},3000);
			});
			App.bindEventsFirst = 1;
		}
	};

	App.SearchInput.googleEngine = function(){
		var cx = App.SearchInput.engineCode;
		var gcse = document.createElement('script'); gcse.type = 'text/javascript'; gcse.async = true;
		gcse.src = (document.location.protocol === 'https' ? 'https:' : 'http:') + '//www.google.com/cse/cse.js?cx=' + cx;
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(gcse, s);
	};//-- App.SearchInput.googleEngine()
		

	App.SearchInput.moveSearchBox = function(){
		
		var parentSearch = $('.mobile-bar');
		var input = $('.mobile-bar input');
		var bottomContainer = $('.wrapper').height() + parentSearch.height();
		var body = $('html, body');

		input.focus( function() {
			body.animate({scrollTop:bottomContainer}, '500', 'swing');
		});
	};//-- App.SearchInput.moveSearchBox()


}(window.App));
/**
*	ShowMore module
**/

;(function(App){
	
	//@param options   json object, should have max and min number of elements to show. Min for mobile, Max for desktop and tablet
	//eg: { "desktop": { "maxNumber": "0" , "minNumber": "0" }
	//Handles component initialization
	App.ShowMore.Initialize = function(options) {

		//First load the component options
		App.ShowMore.$container = jQuery(options.dataComponentCaller);
		App.ShowMore.$showMore = App.ShowMore.$container.find(options.showMore);
		App.ShowMore.$originalResult = App.ShowMore.$container.find(options.original);
		App.ShowMore.$maxNumber = App.ShowMore.$container.find(options.maxNumber).selector;
		App.ShowMore.$minNumber = App.ShowMore.$container.find(options.minNumber).selector;
		App.ShowMore.$originalResultStructure = $(App.ShowMore.$originalResult).html();
		App.ShowMore.$breakpoint = App.Responsive.getBreakpoint();

		App.ShowMore.toggle();
		App.ShowMore.clickBtn();
		App.ShowMore.bindHandlers();
	};


	App.ShowMore.toggle = function() {

		$(App.ShowMore.$originalResult).html(App.ShowMore.$originalResultStructure);
		
		var maxLimit = parseInt(App.ShowMore.$maxNumber, 10); //min number of elements to show on mobile
		var minLimit = parseInt(App.ShowMore.$minNumber, 10); // max number of elements to show on desktop
		var resultsBox = App.ShowMore.$originalResult.find('.result');
		var i = 0;
		var a = 0;
		var wrap;

		$('html').find('.information').css({
			'border-top': 'none',
			'margin-top': 0
		});
		

		if( App.ShowMore.$breakpoint === 'mobile'){
			for(a; a < resultsBox.length; a+=minLimit) {
				resultsBox.slice(a, a+minLimit).wrapAll('<div class="wrap"></div>');
			}
			if( resultsBox.length <= minLimit ){
				$(App.ShowMore.$showMore).hide();
			}
		}else{
			for( a; a < resultsBox.length; a+=maxLimit) {
				resultsBox.slice(a, a+maxLimit).wrapAll('<div class="wrap"></div>');
			}
			if( resultsBox.length <= maxLimit ){
				$(App.ShowMore.$showMore).hide();
			}
		}

		
		wrap = $('.wrap');
	    $(wrap[i]).toggleClass('toggle');
	    $(resultsBox).toggleClass('toggle');
	    $(wrap[i]).css({
			'border': 'none',
			'padding-top': '0'
	    });
	};//-- App.ShowMore.toggle()

	App.ShowMore.clickBtn = function(){
		
		var j = 0;

		App.onBreakpointChange(function(){
			j = 0;
		});
		$(App.ShowMore.$showMore).on('click',function(event){

			event.preventDefault();

			var wrap = $('.wrap');
			var position;
			var body;

			if( App.ShowMore.$breakpoint === 'mobile'){
				$(wrap[j+1]).toggleClass('toggle');
			}else{
				$(wrap[j+1]).toggleClass('toggle');
			}
			
			position = $(wrap[j+1]).offset().top - $('.nav-bar-content').height();
			body = $('html, body');

			body.animate({scrollTop:position}, '500', 'swing');

			j = j + 1;

			if( j === ($(wrap).length - 1)){
				$(App.ShowMore.$showMore).hide();
			}

		});
	};
	App.ShowMore.bindHandlers = function(){
		
		App.onBreakpointChange(function(){
			App.ShowMore.$breakpoint = App.Responsive.getBreakpoint();
			App.ShowMore.toggle();
		});
	};

}(window.App));
/**
*	ShowMore module
**/

;(function(App){

	//@param options   json object, should have max and min number of elements to show. Min for mobile, Max for desktop and tablet
	//eg: { "desktop": { "maxNumber": "0" , "minNumber": "0" }
	//Handles component initialization
	App.ShowMoreAjax.Initialize = function(options) {

		//First load the component options
		App.ShowMoreAjax.$container = jQuery(options.dataComponentCaller);
		App.ShowMoreAjax.$showMore = App.ShowMoreAjax.$container.find(options.showMore);
		App.ShowMoreAjax.$results = App.ShowMoreAjax.$container.find(options.resultsContainer);
		App.ShowMoreAjax.resultsURL = options.resultsURL;
		App.ShowMoreAjax.$breakpoint = App.Responsive.getBreakpoint();

		App.ShowMoreAjax.toggleFirstResults();
		App.ShowMoreAjax.clickBtn();
	};

	App.ShowMoreAjax.toggleFirstResults = function() {

		$(App.ShowMoreAjax.$showMore).show();

		var results = App.ShowMoreAjax.$results.find('.result');
		var wrap;

		results.wrapAll('<div class="wrap"></div>');

		wrap = $('.wrap');
		$(wrap).toggleClass('toggle');
		$(results).toggleClass('toggle');

		$(wrap).css({
			'border': 'none',
			'padding-top': '0'
		});

		if( results.length < 9 ){
			App.ShowMoreAjax.$showMore.fadeOut();
		}

	};//-- App.ShowMore.toggle()

	App.ShowMoreAjax.clickBtn = function(){


		$(App.ShowMoreAjax.$showMore).on('click',function(event){

			event.preventDefault();
			var postUrl = App.ShowMoreAjax.resultsURL; //'http://dev.colgate.com/en/us/oc/more-search-results';
			var newSearch = $('html').find('input[name="searchtext"]').val();

			var request = $.ajax({
				url: postUrl,
				method: 'POST',
				data: { searchtext : newSearch },
				dataType: 'html'
			});

			request.done(function( data ) {
				 if( data!=='' || data!== undefined){
					App.ShowMoreAjax.ShowMoreResults(data);
				}else{
					console.log('No results ');
					$(App.ShowMoreAjax.$showMore).hide();
				}
			});

			request.fail(function( jqXHR, textStatus ) {
				console.log( 'No results ' + textStatus );
				$(App.ShowMoreAjax.$showMore).hide();
			});
		});
	};//-- App.ShowMoreAjax.clickBtn()

	App.ShowMoreAjax.ShowMoreResults = function( data ){

		// event.preventDefault();

		var j = 0;
		var position;
		var body;
		var wrap;
		var resultsBox;
		var $lastWrap = $('<div class="wrap"></div>');

		App.ShowMoreAjax.$results.append( $lastWrap );

		$lastWrap.append( data );

		$lastWrap.toggleClass('toggle');
		$lastWrap.children('toggle');

		position = $lastWrap.offset().top - $('.nav-bar-content').height();

		body = $('html, body');

		body.animate({ scrollTop: position}, '500', 'swing');

		var lastResults = $lastWrap.find('.result').length < 9;
		
		if( lastResults ){
			App.ShowMoreAjax.$showMore.fadeOut();
		}

	};//-- App.ShowMoreAjax.ShowMoreResults()

}(window.App));
/**
*	ShowMore Hide
**/

;(function(App){
	
	//Handles component initialization
	App.ShowMoreHide.Initialize = function(options) {

		//First load the component options
		App.ShowMoreAjax.$button = jQuery(options.dataComponentCaller);

		App.ShowMoreAjax.$button.click(function(){
			$(this).fadeOut();
		});

	};

}(window.App));
/**
*	ShowMore module
**/

;(function(App){
	
	//@param options   json object, should have max and min number of elements to show. Min for mobile, Max for desktop and tablet
	//eg: { "desktop": { "maxNumber": "0" , "minNumber": "0" }
	//Handles component initialization
	App.ShowMoreMobile.Initialize = function(options) {

		//First load the component options
		App.ShowMoreMobile.$container = jQuery(options.dataComponentCaller);
		App.ShowMoreMobile.$showMore = App.ShowMoreMobile.$container.find(options.showMore);
		App.ShowMoreMobile.$originalResult = App.ShowMoreMobile.$container.find(options.original);
		App.ShowMoreMobile.$maxNumber = App.ShowMoreMobile.$container.find(options.maxNumber).selector;
		App.ShowMoreMobile.$minNumber = App.ShowMoreMobile.$container.find(options.minNumber).selector;
		App.ShowMoreMobile.$originalResultStructure = $(App.ShowMoreMobile.$originalResult).html();
		App.ShowMoreMobile.$breakpoint = App.Responsive.getBreakpoint();

		if( App.ShowMoreMobile.$breakpoint === 'mobile'){
			App.ShowMoreMobile.toggle();
			App.ShowMoreMobile.clickBtn();
		}else{
			App.ShowMoreMobile.toggleRestore();
		}
		App.ShowMoreMobile.bindHandlers();
	};


	App.ShowMoreMobile.toggle = function() {

		$(App.ShowMoreMobile.$originalResult).html(App.ShowMoreMobile.$originalResultStructure);
		$(App.ShowMoreMobile.$showMore).show();
		var maxLimit = parseInt(App.ShowMoreMobile.$maxNumber, 10); //min number of elements to show on mobile
		var minLimit = parseInt(App.ShowMoreMobile.$minNumber, 10); // max number of elements to show on desktop
		var resultsBox = App.ShowMoreMobile.$originalResult.find('.result');
		var i = 0;
		var a = 0;
		var wrap;

		if( App.ShowMoreMobile.$breakpoint === 'mobile'){
			for(a; a < resultsBox.length; a+=minLimit) {
		      resultsBox.slice(a, a+minLimit).wrapAll('<div class="wrap"></div>');
		    }
		}else{
		    for( a; a < resultsBox.length; a+=maxLimit) {
		      resultsBox.slice(a, a+maxLimit).wrapAll('<div class="wrap"></div>');
		    }
		}

		wrap = $('.wrap');
	    $(wrap[i]).toggleClass('toggle');
	    $(resultsBox).toggleClass('toggle');
	    $(wrap[i]).css({
			'border': 'none',
			'padding-top': '0'
	    });
	};//-- App.ShowMoreMobile.toggle()

	App.ShowMoreMobile.clickBtn = function(){
		
		var j = 0;

		App.onBreakpointChange(function(){
			j = 0;
		});
		$(App.ShowMoreMobile.$showMore).on('click',function(event){

			event.preventDefault();

			var wrap = $('.wrap');
			var position;
			var body;

			if( App.ShowMoreMobile.$breakpoint === 'mobile'){
				$(wrap[j+1]).toggleClass('toggle');
			}else{
				$(wrap[j+1]).toggleClass('toggle');
			}
			
			position = $(wrap[j+1]).offset().top - $('.nav-bar-content').height();
			body = $('html, body');

			body.animate({scrollTop:position}, '500', 'swing');

			j = j + 1;

			if( j === ($(wrap).length - 1)){
				$(App.ShowMoreMobile.$showMore).hide();
			}

		});
	};

	App.ShowMoreMobile.toggleRestore = function(){
		
		$(App.ShowMoreMobile.$originalResult).html(App.ShowMoreMobile.$originalResultStructure);

	};
	App.ShowMoreMobile.bindHandlers = function(){
		
		App.onBreakpointChange(function(){
			App.ShowMoreMobile.$breakpoint = App.Responsive.getBreakpoint();
		
			if( App.ShowMoreMobile.$breakpoint === 'mobile'){
				App.ShowMoreMobile.toggle();
				App.ShowMoreMobile.clickBtn();
			}else{
				App.ShowMoreMobile.toggleRestore();
			}
		});


	};

}(window.App));
/**
* Foo component 
* Use the examples below to create you own module
**/

/**
* 	USAGE: call this component adding a call to its Initialize method on the html code
*          You can pass over options using data-component-options Warning: must put inside a valid Json object
*   EXAMPLE: <div data-component='App.Foo.Initialize' data-options='{}'></div>
**/

;(function(App){

	/*
	App.SimpleAnchor.ScrollToPosition
		Scrolls to a desire element on the screen
	@params: 
		None
	*/
	App.SimpleAnchor.ScrollToPosition = function (element) {
		var position = element.offset().top - $('.nav-bar-content').height();
		var body = $('html, body');
		body.animate({scrollTop:position}, '500', 'swing');
	};

	/*
	App.SimpleAnchor.Initialize()
		Initializes the click behavior
	@params: 
		options.scrollTo : element
	*/
	App.SimpleAnchor.Initialize = function(options){
		var link = $(options.dataComponentCaller);

		link.click( function (event) {
			event.preventDefault();
			App.SimpleAnchor.ScrollToPosition($(options.scrollTo));
		});
		
	};//-- App.SimpleAnchor.Initialize()
	

}(window.App));

/**
* SimpleSlider component
* Use the examples below to create you own module
**/

/**
*       USAGE: call this component adding a call to its Initialize method on the html code
*          You can pass over options using data-component-options Warning: must put inside a valid Json object
*   EXAMPLE: <div data-component='App.Slider.Initialize' data-options='{}'></div>
**/
;(function(App){


        /*
        App.SimpleSlider.setbxSlider();
                Initilizes or destroys the bxslider plugin depending on the size of the screen.
        @params:
                sliderObject :  the basic html structure for the slider.
        */
        App.SimpleSlider.setbxSlider = function (options) {
          var windowSize = $(window).width();
          var sliderObject = $(options.dataComponentCaller);
          delete options.dataComponentCaller;
          sliderObject.bxSlider(options);
        };//-- App.SimpleSlider.setbxSlider();

        /*
        App.SimpleSlider.Initialize();
                Initilizes the functionality for the bxslider plugin-
        @params:
                options :  to know the data-component-caller
        */
        App.SimpleSlider.Initialize = function(options){

            //check if the slider is hidden 


            App.SimpleSlider.$sliderParent =  $(options.dataComponentCaller).parent().parent();

            if ( App.SimpleSlider.$sliderParent.is(':hidden')) {
                App.SimpleSlider.$sliderParent.show();
                App.SimpleSlider.setbxSlider(options);
                App.SimpleSlider.$sliderParent.hide();
            } else {
                App.SimpleSlider.setbxSlider(options);
            }

            
        };//-- App.SimpleSlider.Initialize();

}(window.App));

/**
* Slider component 
* Use the examples below to create you own module
**/

/**
* 	USAGE: call this component adding a call to its Initialize method on the html code
*          You can pass over options using data-component-options Warning: must put inside a valid Json object
*   EXAMPLE: <div data-component='App.Slider.Initialize' data-options='{}'></div>
**/
;(function(App){


	/*
	App.Slider.setbxSlider();
		Initilizes or destroys the bxslider plugin depending on the size of the screen. 
	@params: 
		sliderObject :  the basic html structure for the slider.
	*/
	App.SliderDesk.setbxSliderDesk = function ($slider) {

		var windowSize = $(window).width();
		var sliderObject = $slider;

		if (windowSize > 767) {  //the sliders are not for mobile
			sliderObject.bxSlider({
				touchEnabled: true,
				controls: true,
				infiniteLoop: true,
				onSliderResize: function (){
					windowSize = $(window).width();
					if (windowSize <= 768) {
						this.destroySlider();   // to destroy the slider when you resize from mobile to tablet
						sliderObject.isInitialized = false;
					}
				}
			});
			sliderObject.isInitialized = true;
		}
	};//-- App.Slider.setbxSlider();


	/*
	App.Slider.resetSliders();
		Initilizes bxslider plugin if the user is in mobile.
	@params: 
		sliderObject :  the basic html structure for the slider.
	*/
	App.SliderDesk.resetSliders =  function (sliderObject, currentBreakpoint) {

		if (currentBreakpoint === 'mobile') {
			App.SliderDesk.setbxSliderDesk(sliderObject);
		}

	};//-- App.Slider.resetSliders();

	

	/*
	App.Slider.bindHandlers();
		attach handler for the breakpoint change
	@params: 
		options :  to know the data-component-caller
	*/
	App.SliderDesk.bindHandlers = function(sliderObject){
		App.onBreakpointChange(
			function(event, breakpoints){
				App.SliderDesk.resetSliders(sliderObject, breakpoints.currentBreakpoint);
			}
		);
	};//-- App.Slider.bindHandlers();

	/*
	App.Slider.Initialize();
		Initilizes the functionality for the bxslider plugin-
	@params: 
		options :  to know the data-component-caller
	*/
	App.SliderDesk.Initialize = function(options){
		App.SliderDesk.bindHandlers($(options.dataComponentCaller));
		App.SliderDesk.setbxSliderDesk($(options.dataComponentCaller));
	};//-- App.Slider.Initialize();

}(window.App));
/**
* Slider component 
* Use the examples below to create you own module
**/

/**
* 	USAGE: call this component adding a call to its Initialize method on the html code
*          You can pass over options using data-component-options Warning: must put inside a valid Json object
*   EXAMPLE: <div data-component='App.Slider.Initialize' data-options='{}'></div>
**/
;(function(App){


	/*
	App.Slider.setbxSlider();
		Initilizes or destroys the bxslider plugin depending on the size of the screen. 
	@params: 
		sliderObject :  the basic html structure for the slider.
	*/
	App.Slider.setbxSlider = function ($slider) {

		var windowSize = $(window).width();
		var sliderObject = $slider;

		if (windowSize < 768) {  //the sliders are only on mobile
			sliderObject.bxSlider({
				touchEnabled: true,
				controls: true,
				infiniteLoop: true,
				onSliderResize: function (){
					windowSize = $(window).width();
					if (windowSize >= 768) {
						this.destroySlider();   // to destroy the slider when you resize from mobile to tablet
						sliderObject.isInitialized = false;
					}
				}
			});
			sliderObject.isInitialized = true;
		}
	};//-- App.Slider.setbxSlider();


	/*
	App.Slider.resetSliders();
		Initilizes bxslider plugin if the user is in mobile.
	@params: 
		sliderObject :  the basic html structure for the slider.
	*/
	App.Slider.resetSliders =  function (sliderObject, currentBreakpoint) {

		if (currentBreakpoint === 'mobile') {
			App.Slider.setbxSlider(sliderObject);
		}

	};//-- App.Slider.resetSliders();

	/*
	App.Slider.bindHandlers();
		attach handler for the breakpoint change
	@params: 
		options :  to know the data-component-caller
	*/
	App.Slider.bindHandlers = function(sliderObject){
		App.onBreakpointChange(
			function(event, breakpoints){
				App.Slider.resetSliders(sliderObject, breakpoints.currentBreakpoint);
			}
		);
	};//-- App.Slider.bindHandlers();

	/*
	App.Slider.Initialize();
		Initilizes the functionality for the bxslider plugin-
	@params: 
		options :  to know the data-component-caller
	*/
	App.Slider.Initialize = function(options){
		App.Slider.bindHandlers($(options.dataComponentCaller));
		App.Slider.setbxSlider($(options.dataComponentCaller));
	};//-- App.Slider.Initialize();

}(window.App));
/**
*  Alphabetical sort for columns 
**/

/**
* 	USAGE: Take each group of links, read its content, aphabetically sort it and create 3 columns to append the new array
**/

;(function(App){

	App.SortTopic.Initialize = function(componentData){

		App.SortTopic.$container = jQuery(componentData.dataComponentCaller);
		App.SortTopic.$categoryList = App.SortTopic.$container.find(componentData.categoryList);

		console.log('Initializing: ' + App.SortTopic.$container.attr('id'));

		App.SortTopic.sortLinks(App.SortTopic.$categoryList);
		
	};

	App.SortTopic.sortLinks = function($categoryList){

		console.log('Sorting: ' + App.SortTopic.$container.attr('id'));

		var cols;	//Col counter
		var qByCol;		//Quantity of links per column
		var qByColArr;		//Quantity of links per column counter
		var a;		//SubArray index

		// console.log('$categoryList');
		// console.log($categoryList);

		for (var i = 0; i < $categoryList.length; i+=1) {

			// Each box of conditions page links Ej. Oral Health, Medical, etc.
			var listBoxI = $($categoryList[i]);
			var	topicList = listBoxI.find('a');

			//var arrText = [];
			cols = 0;
			qByCol = 0;
			a = 0;

			topicList.sort(function(a,b){
				var an = a.text,
					bn = b.text;

				if(an > bn) {
					return 1;
				}
				if(an < bn) {
					return -1;
				}
				return 0;
			});

			//Calculate the items of each columns according to the total of items
			qByCol = Math.ceil(topicList.length / 3);
			qByColArr = qByCol;

			//Empty old box to append new ones in aphabetic order
			listBoxI.empty();
			
			//Create number of columns, in this case 3 and append subarray of items
			while( cols < 3 ){
				
				var colText = topicList.slice( a, qByColArr );

				listBoxI.append('<div class="col-list-' + cols + ' slide col-sm-4"></div>');

				App.SortTopic.appendLinks(listBoxI, colText, cols, qByCol);

				//Update counters to next col
				a = qByColArr;
				qByColArr = qByColArr + qByCol;
				cols = cols + 1;
			}
		}
	};

	App.SortTopic.appendLinks = function(listBoxI, topicList, cols, qByCol){

		
		//console.log('qByColArr');
		//console.log(qByColArr);

		//append subarray to col #cols
		$.each( topicList, function( i, v ){
			if( topicList.length !== 0){


				// console.log(v);

				var	topicContainer = $('<div class="topic slider-item"></div');
				topicContainer.append(v);
				listBoxI.find('.col-list-'+ cols).append(topicContainer);

				//break when the items are complete for this column
				
				if( i === qByCol ){
					i = qByCol;
					return false;
				}
			}
		});
	};

}(window.App));

/**
*  Basic Functionality for Forms
**/

/**
* 	USAGE: call this component adding a call to its Initialize method on the html code
*          You can pass over options using data-component-options Warning: must put inside a valid Json object
*   EXAMPLE: <div data-component='App.SubmitForm.Initialize' data-options='{}'></div>
**/

;(function(App){

	/*
	App.SubmitForm.SetSubmitFunctionality()
		Adds the basic funtionality for the form button and its validation
	@params:
		submitButton =  The form's submit input.
	*/
	App.SubmitForm.SetSubmitFunctionality = function (submitButton) {

		var xTriggered = 0;
		$( '.search-form .styled-form' ).keypress(function( event ) {
			if ( event.which === 13 ) {
				event.preventDefault();
				App.SubmitForm.validateForm();
			}
		});

		submitButton.click( function (event) {
			//event.preventDefault();
			return App.SubmitForm.validateForm();
		});

	}; //-- App.SubmitForm.SetSubmitFunctionality();

	/*
	App.SubmitForm.validateForm()
		Assings the nil value to the inputs if it is epty or its value is the same as the default value.
		After the validation, the form is submited.
	@params:
		none
	*/
	App.SubmitForm.validateForm = function() {

		var i;
		var inputs = App.SubmitForm.$form.find('input');

		for (i = 0; i < inputs.length ; i = i + 1) {
			if($(inputs[i]).attr('type') !== 'submit' ) {

				if (inputs[i].value === '' || inputs[i].value === App.SubmitForm.$defaultValues[i] ) {

					inputs[i].value = ''; //assign the nil value
				}

				//console.log('the value for the input number ' + i + ' is: ' + inputs[i].value);
			}
		}

		//validate required field Zip Code
		var $fieldInput = App.SubmitForm.$form.find('input[name="IN_ZIP"]').first();
		var reg = new RegExp(/^\d+$/);
		if(!$fieldInput.val() || $fieldInput.val().length !== 5 || !reg.test($fieldInput.val())){
			$fieldInput.parent().find('.error').show();
			return false;
		}

		//App.SubmitForm.$form.submit(); // Submits the form.

	};//-- App.SubmitForm.validateForm();

	/*
	App.SubmitForm.saveDefaultValues()
		Loads all the default values of the inputs inside an array
	@params:
		none
	*/
	App.SubmitForm.saveDefaultValues = function (){
		var inputs = App.SubmitForm.$form.find('input');
		var i;

		for (i = 0; i < inputs.length ; i = i + 1) {
			if($(inputs[i]).attr('type') !== 'submit' ) {

				App.SubmitForm.$defaultValues[i] = inputs[i].value;

			}
		}

	};//-- App.SubmitForm.saveDefaultValues()

	App.SubmitForm.ScrollToResults = function () {

		//if there are any results in the first load, scroll down to the results section
		setTimeout(function(){
			var $resultsSection = $('section.p-results');
			if($resultsSection.length > 0){
				$('html, body').stop().animate({
					scrollTop: $('section.p-results').offset().top
				}, 2000);
			}
		}, 1000);

	};

	/*
	App.SubmitForm.Initialize()
		Initialize the basic functionality for a search input.
	@params:
		none
	*/
	App.SubmitForm.Initialize = function(options){

		App.SubmitForm.$form = $(options.dataComponentCaller);  //Main form
		App.SubmitForm.$defaultValues = []; // array of default values
		var submitButton = App.SubmitForm.$form.find('input[type="submit"]');

		//adds placeholder functionality using a polyfill
		App.SubmitForm.$form.find('input[type="text"]').placeholder();

		App.SubmitForm.saveDefaultValues();
		App.SubmitForm.SetSubmitFunctionality(submitButton);
		App.SubmitForm.ScrollToResults();

	};//-- App.SubmitForm.Initialize()
}(window.App));

//TODO: Move this to the HTML, but carefoully, because it takes controll over all the inputs in all the pages

/**
* switchTitles component 
* Use the examples below to switch with animation each child element from the dataComponentCaller (parent)
**/


;(function(App){

	// ###  Example for module initialization
	// @param: options 
	App.SwitchTitles.Initialize = function(options){
		
		App.SwitchTitles.$parent = jQuery(options.dataComponentCaller);
		App.SwitchTitles.$children = App.SwitchTitles.$parent.children();

		//hide all children
		App.SwitchTitles.$children.hide();

		//show only first one
		App.SwitchTitles.$children.first().show();

		App.SwitchTitles.FadeLoop(App.SwitchTitles.$children.first());

	};

	//Function to fade in-out elements in a synchronized manner (recursive)
	App.SwitchTitles.FadeLoop = function($swich) {
	    $swich.fadeOut(4000, function() {
	        var $next = $swich.next();
	        if ($next.length === 0) {
	            $next = $swich.siblings(':first');
	        }
	        $next.fadeIn(1000, function() {
	            App.SwitchTitles.FadeLoop($next);
	        });
	    });
	};

}(window.App));
/**
* ThumbSelectorZoom component 
* Handles PDP thumb selection and zoom
* @dependency: anythingZoomer
**/

;(function(App){

	// ###  Example for module initialization
	// @param: options 
	App.ThumbSelectorZoom.Initialize = function(options){
		App.ThumbSelectorZoom.$dataComponent = jQuery(options.dataComponentCaller);
		App.ThumbSelectorZoom.$triggers = App.ThumbSelectorZoom.$dataComponent.find('.triggers a');
		App.ThumbSelectorZoom.$targets = App.ThumbSelectorZoom.$dataComponent.find('.image');

		//Sets the first slide as active.
		App.ThumbSelectorZoom.$targets.currentSlide = $(App.ThumbSelectorZoom.$targets[0]);
		jQuery(App.ThumbSelectorZoom.$triggers[0]).addClass('active'); //adds the active class to the first thumbnail at initializacion.

		var first=true;
		App.ThumbSelectorZoom.$targets.each(function(index){
			var $element = jQuery(this);
			if(first){
				first = false;
			}else{
				$element.hide();
			}
		});

		App.ThumbSelectorZoom.bindHandlers();
	};

	App.ThumbSelectorZoom.bindHandlers = function(){
		//bind click on each trigger to its corresponding event 
		App.ThumbSelectorZoom.$triggers.each(function(index){
			var $element = jQuery(this);
			$element.click(function(event){
				event.preventDefault();
				if (!$element.hasClass('active')) {  // Check if the element is already active.
					App.ThumbSelectorZoom.triggerClick($element);
				}
			});
		});
	};

	App.ThumbSelectorZoom.triggerClick = function($trigger){
		
		var slideIndex = $trigger.attr('data-slide-index');
		var $slide = jQuery(App.ThumbSelectorZoom.$targets.get(slideIndex));

		//Adds the active class to the button.
		App.ThumbSelectorZoom.$triggers.removeClass('active');
		$trigger.addClass('active');
		
		App.ThumbSelectorZoom.$targets.currentSlide.fadeOut('slow', function () {
			//DO NOT fadeIn AFTER anythingZoomer
			$slide.fadeIn();
			$slide.find('.zoom-container').anythingZoomer();
			App.ThumbSelectorZoom.$targets.currentSlide = $slide;

		});

	};

	App.ThumbSelectorZoom.imageLoaded = function(event){
		var $image = jQuery(event.currentTarget);
		var $zoom = $image.parents('.zoom-container');
		App.ThumbSelectorZoom.$dataComponent.show(); /* Shows the component when the images are loaded */
		
		$zoom.anythingZoomer();
	};

}(window.App));
/**
* 	ToggleComponent 
*
* 	USAGE: call this component adding a call to its Initialize method on the html code
*          You can pass over options using data-component-options Warning: must put inside a valid Json object
*   EXAMPLE: <div data-component='App.Foo.Initialize' data-options='{}'></div>
*
*	STRUCTURE:
*
*	<div data-component="App.ToggleComponent.Initialize">
*		<div>									//First Section
*			<h3 class="toggle">TITLE 1</h3>
*			<div class="collapsed">
*				CONTENT 1
*			</div>
*		</div>	
*		<div>									//Second Section
*			<h3 class="toggle">TITLE 2</h3>
*			<div class="collapsed">
*				CONTENT 2
*			</div>
*		</div>	
*	</div>	
**/

;(function(App){

	/*
	App.ToggleComponent.HideSiblings()
		Hiddes all the elements in the toggle menu.
	@params:
		none
	*/
	App.ToggleComponent.HideSiblings = function () {
		var siblingMenus = App.ToggleComponent.$elements;

		siblingMenus.next().slideUp();
		siblingMenus.parent().removeClass('active');
		siblingMenus.parent().removeClass('active-sibling');
		siblingMenus.next().addClass('collapsed');
	};//-- App.ToggleComponent.HideSiblings()

	/*
	App.ToggleComponent.Resize()
		Initializes the Toggle Functionality.
	@params:
		none
	*/
	App.ToggleComponent.Resize = function() {

		App.onBreakpointChange( function(event, breakpoints) {
			App.ToggleComponent.RemoveFunctionality();

			if (breakpoints.currentBreakpoint === 'mobile') {
				App.ToggleComponent.SetFunctionality();
			}
			
		});

	};//-- App.ToggleComponent.Resize()

	/*
	App.ToggleComponent.SetFunctionality()
		Initializes the Toggle Functionality.
	@params:
		none
	*/
	App.ToggleComponent.SetFunctionality = function() {
		var menuHeader;
		var menuParent;
		var menu;
		App.ToggleComponent.HideSiblings();

		App.ToggleComponent.$elements.click(function(){
			menuHeader = $(this);
			menuParent = $(this).parent();
			menu = $(this).next();
			if ( menu.hasClass('collapsed')) {
				App.ToggleComponent.HideSiblings();
				menu.slideDown(function () {
					if ( !App.ToggleComponent.$goToPosOnInit ) {
						console.log('in!');
						App.ToggleComponent.ScrollToPosition($('header'));
						App.ToggleComponent.$goToPosOnInit = true;
					} else {
						App.ToggleComponent.ScrollToPosition(menuParent);
					}
					
				});

			} else {
				menu.slideUp();
			}
			menu.toggleClass('collapsed');
			menuParent.toggleClass('active');
			menuParent.parent().prev().find('.container').toggleClass('active-sibling');
		});

		if ( !App.ToggleComponent.$isSimpleToggle) {
			setTimeout( function() {
				App.ToggleComponent.$elements[0].click(); //Activates the first menu.				
			}, 2500);
		}

	};//-- App.ToggleComponent.SetFunctionality()

	/*
	App.ToggleComponent.RemoveFunctionality()
		Removes the Toggle Functionality off the template.
	@params:
		none
	*/
	App.ToggleComponent.RemoveFunctionality = function () {
		App.ToggleComponent.$elements.unbind('click');
		App.ToggleComponent.$elements.next().css('display','');
	};

	/*
	App.ToggleComponent.ScrollToPosition();
		Scrolls to the selected position
	@params: 
		None
	*/
	App.ToggleComponent.ScrollToPosition = function (element) {
		var position = element.offset().top - $('.nav-bar-content').height();
		var body = $('html, body');
		body.animate({scrollTop:position}, '500', 'swing');
	};// App.ToggleComponent.ScrollToPosition();

	/*
	App.ToggleComponent.ToggleMenu()
		Sets the main variables an initializes the component.
	@params:
		none
	*/
	App.ToggleComponent.Initialize = function (options) {

		App.ToggleComponent.$nav = $(options.dataComponentCaller);
		App.ToggleComponent.$elements = $(options.dataComponentCaller).find('.toggle');
		App.ToggleComponent.$isSimpleToggle = options.simpleToggle;
		App.ToggleComponent.$goToPosOnInit = options.goToPosOnInit;


		 if ( App.ToggleComponent.$isSimpleToggle ) {

			App.ToggleComponent.SetFunctionality();

		 } else {

			if (App.currentBreakpoint === 'mobile') {
				App.ToggleComponent.SetFunctionality();
			}

			App.ToggleComponent.Resize();

		 }



	};//-- App.ToggleComponent.ToggleMenu()

}(window.App));
/**
* Foo component 
* Use the examples below to create you own module
**/

/**
* 	USAGE: call this component adding a call to its Initialize method on the html code
*          You can pass over options using data-component-options Warning: must put inside a valid Json object
*   EXAMPLE: <div data-component='App.Foo.Initialize' data-options='{}'></div>
**/

;(function(App){


	/*
	App.ToggleList.setButtonsForDesktop();
		Initializes the click funtionality of each button in the component
	@params: 
		@buttons :  an object with the handlers for the click functionality.
	*/
	App.ToggleList.setButtonsForDesktop = function (buttons, collapsedMenu) {
		var contentItems = collapsedMenu.find('.content-item');

		buttons.click(function () {
				
			var parentBox = $('.option-links');
			var currentMenuName = $(this).data('content'); //get the menu name you want to open
			var menuContent = $('#'+ currentMenuName );
			var buttonBox = $(this);
			var buttonImage = buttonBox.find('img');


			if(buttonBox.hasClass('external-link')) {

				var url = buttonBox.attr('data-url');
				App.ToggleList.goToUrl(url);

			} else {

				buttons.unbind('click'); // remove the handler until the menu opens or closes

				App.ToggleList.moveIndicator(currentMenuName);

				if (App.ToggleList.$isOpen) {   //if the collapsed menu is open

					if (!menuContent.hasClass('active-menu')) {

						// open another section
						parentBox.find('.active').removeClass('active');
						buttonImage.removeClass('active');

						$('.active-menu').fadeOut(500, function () {
							contentItems.removeClass('active-menu');
							menuContent.addClass('active-menu');
							buttonBox.addClass('active');
							buttonImage.addClass('active');
							menuContent.fadeIn(500);
							App.ToggleList.setButtonsForDesktop(buttons, collapsedMenu);
							App.ToggleList.ScrollToPosition(buttonBox);
						});
					
					} else {

						//collapse the component
						App.ToggleList.$indicator.fadeOut( function () {
							collapsedMenu.slideUp(500, function () {
								contentItems.removeClass('active-menu');
								parentBox.find('.active').removeClass('active');
								buttonImage.removeClass('active');
								contentItems.hide(0);
								App.ToggleList.setButtonsForDesktop(buttons, collapsedMenu);
							});
						});
						App.ToggleList.$isOpen = false;



					}
				
				} else {

					//if the menu is collapsed

					contentItems.removeClass('active-menu');
					menuContent.addClass('active-menu');
					buttonBox.addClass('active');
					buttonImage.addClass('active');
					menuContent.show( 0 , function () {
						collapsedMenu.slideDown(500,function () {
							App.ToggleList.setButtonsForDesktop(buttons, collapsedMenu);
							App.ToggleList.$indicator.fadeIn();
							App.ToggleList.ScrollToPosition(buttonBox);
						});  //shows the slide menu once the content is available
					});
					App.ToggleList.$isOpen = true;
				}

			}

		});
	};//-- App.ToggleList.setButtonsForDesktop();

	/*
	App.ToggleList.SetButtonsForMobile();
		Initializes the pluggin when it has the "mobile" parameter.
	@params: 
		None
	*/
	App.ToggleList.SetButtonsForMobile = function (buttons) {

		var contentItems = buttons.next();
		var contentParents = buttons.parent();

		buttons.click(function () {


			var currentButton = $(this);
			var currentMenu = currentButton.next();//get the menu name you want to open

			if(currentButton.hasClass('external-link')) {

				var url = currentButton.attr('data-url');

				console.log(url);

				App.ToggleList.goToUrl(url);

			} else {

				buttons.unbind('click'); // remove the handler until the menu opens or closes

				if (!$(this).parent().hasClass('active-menu')) {

					contentParents.removeClass('active-menu');
					buttons.removeClass('active');
					buttons.addClass('inactive');
					contentItems.slideUp(500);
				
					currentMenu.slideDown(500, function () {
						App.ToggleList.SetButtonsForMobile(buttons);
						App.ToggleList.ScrollToPosition(currentButton);
					});

					currentButton.parent().addClass('active-menu');
					currentButton.removeClass('inactive');
					currentButton.addClass('active');
			
				} else {

					currentMenu.slideUp(500, function () {
						App.ToggleList.SetButtonsForMobile(buttons);
					});

					contentParents.removeClass('active-menu');
					buttons.addClass('inactive');
					buttons.removeClass('active');
				}
			}

		});
	};//-- App.ToggleList.SetButtonsForMobile();

	/*
	App.ToggleList.setCorrectComponentStyles();
		Hides the correct elements when the plugin is initialized, so there is not need for additional CSS code.
	@params: 
		None
	*/
	App.ToggleList.setCorrectComponentStyles = function (collapsedMenu) {
		collapsedMenu.css('display','none');
		collapsedMenu.find('.content-item').css('display','none');
		$('.content-item').css('display','none');
	};//-- App.ToggleList.setCorrectComponentStyles();

	App.ToggleList.setIndicatorAmountClass = function () {
		var elementsAmount = $('.list-item').length / 2;
		$('#indicator').parents('.subcontainer').addClass('elems-' + elementsAmount);
	};
/*
	App.ToggleList.showIndicator = function () {
		
	};

	App.ToggleList.hideIndicator = function () {
		App.ToggleList.$indicator.fadeOut();
	};
*/
	App.ToggleList.moveIndicator = function (currentMenuName) {
		App.ToggleList.$indicator.removeClass();
		App.ToggleList.$indicator.addClass(currentMenuName);
	};

	App.ToggleList.ScrollToPosition = function (element) {

		var position = element.offset().top - $('.nav-bar-content').height();
		var body = $('html, body');

		body.on('scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove', function(){
			body.stop();
		});

		body.animate({scrollTop:position}, '500', 'swing', function(){
			body.off('scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove');
		});

		return false;
	};

	/*
	App.ToggleList.goToUrl()
		Opens an url in a new window
	@params: 
		None
	*/
	App.ToggleList.goToUrl = function (url) {
		window.open(url);
	};//-- App.ToggleList.goToUrl()

	/*
	App.ToggleList.Initialize()
		Initializes the functionality of the main toggle list in the project
	@params: 
		None
	*/
	App.ToggleList.Initialize = function(options){
		
		App.ToggleList.$indicator = $('#indicator');

		var listComponent = $(options.dataComponentCaller);
		var collapsedMenu = listComponent.find('.toggle-content');
		var listElements = listComponent.find('.list-item');

		App.ToggleList.$isOpen = false;
		App.ToggleList.setCorrectComponentStyles(collapsedMenu);
		App.ToggleList.setIndicatorAmountClass();

		if ( options.size === 'mobile' ) { // mobile structure

			App.ToggleList.SetButtonsForMobile(listElements);

		} else {  // desktop structure

			App.ToggleList.setButtonsForDesktop(listElements, collapsedMenu);

		}

		
	};//-- App.ToggleList.Initialize()
	

}(window.App));

    /**
*   Tooltip module
**/

;(function(App){
    
    //Handles component initialization
    App.Tooltip.Initialize = function(options) {

        //First load the component options
        App.Tooltip.$container = jQuery(options.dataComponentCaller);
        App.Tooltip.$btnTooltip = App.Tooltip.$container.find(options.btnTooltip);
        App.Tooltip.$btnClose = App.Tooltip.$container.find(options.btnClose);
        App.Tooltip.$tooltipBox = App.Tooltip.$container.find(options.tooltipBox);
        App.Tooltip.toggleTooltip();
    };

    App.Tooltip.toggleTooltip = function () {

        $(App.Tooltip.$btnTooltip).bind('mouseenter mouseleave touchstart', function(event){
            event.preventDefault();
            $(App.Tooltip.$tooltipBox).toggleClass('toggle');

        });
        $(App.Tooltip.$btnClose).bind('touchend', function(event){
            event.stopPropagation();
            event.preventDefault();
            $(App.Tooltip.$tooltipBox).toggleClass('toggle');
        });

    }; //-- App.Utils.consoleDebugger()
}(window.App));
    /**
* This is required for the usage of components, please do not remove
**/

// ## App.Utils
// ### Utility functions
// __All Utility functions are PUBLIC and callable via App.Utils__
;(function (App) {
    // #### App.Utils.getHash()
    // Returns a cleansed hash value if one exists, otherwise returns false.
    App.Utils.getHash = function () {
        var currentHash = location.hash.match(/^#?(.*)$/)[1];
        return currentHash === '' ? false : currentHash;
    }; //-- App.Utils.getHash()

    // #### App.Utils.addParam(@paramName, @paramValue)
    // Adds passed @paramName=@paramValue to URL and saves current parameter if one exists.
    App.Utils.addParam = function (paramName, paramValue) {
        var paramDivider = '&', currentParam = location.search;
        if (currentParam === '') { paramDivider = ''; }
        location.search = currentParam + paramDivider + paramName + '=' + paramValue;
        return 'App.Utils.addParam(' + paramName + ', ' + paramValue + ')';
    }; //-- App.Utils.addParam(@paramName, @paramValue)



    // #### App.Utils.queryParam(@paramName)
    // Returns @paramName value, otherwise returns false.
    App.Utils.queryParam = function (paramName) {
        var query = {}, m, v, k;
        for (v = location.href.split(/[?&]/), k = v.length - 1; k > 0; k -= 1) {
            query[(m = v[k].split(/[=#]/))[0]] = m.length > 1 ? decodeURI(m[1]) : '';
        }
        return query[paramName] !== undefined ? query[paramName] : false;
    }; //-- App.Utils.queryParam(@paramName)



    // #### App.Utils.consoleDebugger()
    // __Should be called on Initialize__
    // * Checks if 'debugging' param is true and sets App.debug to true if so.
    // * Captures all console.log data and displays in console only if App.debug is set to true
    // * Disables console errors if not supported allowing you to retain console data in your code.
    // * Also allows the replacement of 'console.method' with 'debug.method'
    App.Utils.consoleDebugger = function () {
        try {
            var noop = function () {};
            log = (window.console === undefined) ? noop
                : (Function.prototype.bind !== undefined) ? Function.prototype.bind.call(console.log, console)
                : function() { Function.prototype.apply.call(console.log, console, arguments); };
            return log;
        } catch (err) {
            throw new Error('<!>App.Utils.consoleDebugger: ' + err);
        }
    }; //-- App.Utils.consoleDebugger()



    // #### App.Utils.stringToFunction(@stringAsFunction, @context, [@args])
    // * Takes a string 'foo.bar.init', and splits into array at '.'
    // * Checks if each iteration of the array for a namespace
    // * Takes the last iteration as a function
    // * Requires @context scope
    // * Accepts arguments passed as third parameter
    App.Utils.stringToFunction = function(stringAsFunction, context) {
        try {
            var i = 0, args = [],
                namespaces = stringAsFunction.split('.'),
                func = namespaces.pop(),
                callback = null;
            args.push(arguments[2]);
            for (i = 0; i <= namespaces.length; i += 1) {
                if (namespaces[i] === undefined) {
                    context = context;
                } else {
                    context = context[namespaces[i]];
                }
                if (context !== undefined) {
                    callback = context[func];
                    if (typeof callback === 'function') {
                        return callback.apply(context, args);
                    }
                }
            }
        } catch (err) {
            throw new Error('<!>App.Utils.stringToFunction: ' + err);
        }
    }; //-- App.Utils.stringToFunction(@stringAsFunction, @context, [@args])



    // #### App.Utils.componentDispatchRecord()
    App.Utils.componentDispatchRecord = {
        dispatcher: {},
        setNewDispatch: function (component, id) {
            this.dispatcher[component] = id;
        },
        removeDispatch: function (component) {
            delete this.dispatcher[component];
        },
        dispatchExists: function (component) {
            if (this.dispatcher.hasOwnProperty(component)) {
                return true;
            }
            return false;
        }
    }; //-- App.Utils.componentDispatchRecord()


    // #### App.Utils.componentDispatch()
    // Looks for data attributes *__data-component__* and sends the string to __App.Util.stringToFunction(@string, window, args)__
    // * Arguments are passed via *__data-component-options__* and should be sent as a __JSON Object__
    // * The DOM element calling data-component will be passed via componentData.dataComponentCaller
    // * Example:
    // `<div data-component='Foo.Bar.Init' data-component-options='{'greeting': 'hello', 'response': 'goodbye'}'>`
    App.Utils.componentDispatch = function () {
        try {
            var components = document.querySelectorAll('[data-component]'),
                component = null, option = null, options = {}, o = null, j = null, i = null;

            /* IE8 fix for window.hasOwnProperty - set to ignore error from jshint */
            /* jshint -W001 */
            components.hasOwnProperty = components.hasOwnProperty || Object.prototype.hasOwnProperty;

            for (o in components) {
                if (
                    components.hasOwnProperty(o) &&
                    typeof components[o] === 'object' &&
                    typeof components[o].getAttribute('data-component') !== undefined
                ) {
                    component = [];
                    component = components[o].getAttribute('data-component').split(' ');
                    if (components[o].getAttribute('data-component-options') !== null) {
                        options = JSON.parse(components[o].getAttribute('data-component-options'));
                    }
                    options.dataComponentCaller = components[o];
                    for (i = 0; i < component.length; i += 1) {
                        App.Utils.componentDispatchRecord.setNewDispatch(component[i], o);
                        App.Utils.stringToFunction(component[i], window, options);
                    }
                }
            }
        } catch (err) {
            throw new Error('<!>App.Utils.componentDispatch: ' + err);
        }
    }; //-- App.Utils.componentDispatch()



    // #### App.Utils.windowResizeDebounce(@callback, [@options])
    // Only call @callback after window.resize has ended
    // * @callback must be of type string
    // * @options must be a json object
    App.Utils.windowResizeDebounce = function (callback, options) {
        if (App.debug) { debug.log('windowResizeDebounce called'); }
        var rTime = new Date(),
            timeout = false,
            delta = 500;

        var resizeSend = function () {
            if (new Date() - rTime < delta) {
                setTimeout(resizeSend, delta);
            } else {
                timeout = false;
                App.Utils.stringToFunction(callback, window, options);
            }
        };

        App.Window.on('resize', function () {
            rTime = new Date();
            if (timeout === false) {
                timeout = true;
                setTimeout(resizeSend, delta);
            }
        });
    }; //-- App.Utils.windowResizeDebounce()



    // #### App.Utils.isInView(@elem)
    // Returns true if an element is within the viewport
    App.Utils.isInView = function (elem) {
        try {
            if (typeof elem !== 'object') {
                elem = $(elem);
            }

            var windowTop = App.Window.scrollTop(),
                windowHeight = windowTop + App.Window.height(),
                elemTop = elem.offset().top,
                elemBottom = elemTop + elem.height();

            return ((elemBottom <= windowHeight) && (elemTop >= windowTop));
        } catch (err) {
            throw new Error('<!>App.Utils.isInView: ' + err);
        }
    }; //-- App.Utils.isInView(@elem)

    // #### App.Utils.Initialize()
    // Used to call any App.Utils methods needing immediate invocation.
    // Accepts @callback which will be called after return method call.
    // Initializes App.Utils.consoleDebugger()
    App.Utils.Initialize = (function (callback) {
        try {
            setTimeout(function () {
                App.Utils.componentDispatch();
                if (callback) { callback.call(this); }
            }, 0);
            return App.Utils.consoleDebugger();
        } catch (err) {
            throw new Error('<!>App.Utils.Initialize: ' + err);
        }
    }()); //-- App.Utils.Initialize()

    return App.Utils;

}(window.App)); //-- App.Utils

/**
* VideoController component 
* Use the examples below to create you own module
**/

/**
* 	USAGE: call this component adding a call to its Initialize method on the html code
*          You can pass over options using data-component-options Warning: must put inside a valid Json object
*   EXAMPLE: <div data-component='App.Slider.Initialize' data-options='{}'></div>
**/

;(function(App){


	/*
	App.VideoController.Initialize();
		Initilizes the functionality for the YTvideo plugin.
	@params: 
		options :  to know the data-component-caller
	*/

	App.VideoController.Initialize = function (options) {

		App.VideoController.$container = jQuery(options.dataComponentCaller);
		App.VideoController.loadVideoModule();
	};

	App.VideoController.initVideoMod = function (options) {
		
		YTVideoLoader.buildPlayer(App.VideoController.$container);

	};

	App.VideoController.loadVideoModule = function () {
		
		setTimeout(function () {
			App.VideoController.initVideoMod();
		}, 2000);

	};

}(window.App));
/**
* Loads Youtube API and provides various functionalities
**/

/**
* 	USAGE: call this component adding a call to its Initialize method on the html code
*          You can pass over options using data-component-options Warning: must put inside a valid Json object
*   EXAMPLE: <div data-component='App.Foo.Initialize' data-options='{}'></div>
**/
;(function(App){

	// ###  Example for module initialization
	// @param: options 
	App.YoutubeAPILoader.Initialize = function(options){
		
		//element in which the player will be placed
		App.YoutubeAPILoader.playerContainer = options.dataComponentCaller;
		App.YoutubeAPILoader.videoId = options.videoId;
		
		App.YoutubeAPILoader.autostart = options.autostart || false;


		App.YoutubeAPILoader.load();
		App.YoutubeAPILoader.bindHandlers();
	};

	// loads youtube api according to documentation at: https://developers.google.com/youtube/iframe_api_reference
	App.YoutubeAPILoader.load = function(){
		var tag = document.createElement('script');

		tag.src = 'https://www.youtube.com/iframe_api';
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	};

	App.YoutubeAPILoader.bindHandlers = function(){
		window.onYouTubeIframeAPIReady = function(){
			App.YoutubeAPILoader.player = new YT.Player(App.YoutubeAPILoader.playerContainer, {
				height: '390',
				width: '640',
				videoId: App.YoutubeAPILoader.videoId,
				playerVars: {
					modestbranding:1,
					autohide:1,
					showinfo:0,
					controls:0
				},
				events: {
					'onReady': window.onPlayerReady,
					'onStateChange': (window.tagManagement && window.tagManagement.YTStateChange)? window.tagManagement.YTStateChange : undefined,
					'onPlaybackQualityChange': (window.tagManagement && window.tagManagement.YTQualityChange)? window.tagManagement.YTQualityChange : undefined,
					'onPlaybackRateChange': (window.tagManagement && window.tagManagement.YTRateChange)? window.tagManagement.YTRateChange : undefined,
					'onError': (window.tagManagement && window.tagManagement.YTError)? window.tagManagement.YTError : undefined
				}
	        });
		};

		window.onPlayreReady = function(event){
			if(App.YoutubeAPILoader.autostart){
				event.target.playVideo();
			}
		};

		// window.onPlayerStateChange = function(event){
		// 	var done;
		// 	if (event.data === YT.PlayerState.PLAYING) {
                
  //               var videoNameStandard = $('section.condition.video div.container div.first-col.content-condition h1.title').text().trim();

  //               window.dataLayer = window.dataLayer || [];
  //               window.dataLayer.push({
  //                   'event': 'YouTubePlay',
  //                   'videoName': videoNameStandard
  //               });
  //               done = true;
  //           }
		// };
	};



}(window.App));
/**
* YoutubeVideoInfo component 
* Use the examples below to create you own module
**/

/**
* 	USAGE: call this component adding a call to its Initialize method on the html code
*          You can pass over options using data-component-options Warning: must put inside a valid Json object
*   EXAMPLE: <div data-component='App.Slider.Initialize' data-options='{}'></div>
**/
;(function(App){

	/*
	App.YoutubeVideoInfo.getVideoinfo();
		Makes the request for the json
	@params: 
		Id: Video Id
		Key: key of the video owner
	*/
	App.YoutubeVideoInfo.getVideoinfo = function (id, key) {

		$.ajax({
			url: 'https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id='+ id + '&key='+ key,
			dataType: 'jsonp',
			success: function (data) {
				App.YoutubeVideoInfo.parseresults(data);
			},
			error: function () {
				console.log('Error retrieving video data from youtube');
			}
		});
	};//-- App.YoutubeVideoInfo.getVideoinfo();


	/*
	App.YoutubeVideoInfo.parseresults();
		Parses the json and pastes the info on the frontend.
	@params: 
		data: json data returned from the request
	*/
	App.YoutubeVideoInfo.parseresults = function (data) {

		if (data.error !== undefined) {
			console.log('Youtube Video Message Error:');
			console.log(data.error.message);
			App.YoutubeVideoInfo.$infoContainer.parent().hide();
		} else {
			var viewCountNumber = data.items[0].statistics.viewCount;
			viewCountNumber = Number(viewCountNumber).toLocaleString('en');
			$(App.YoutubeVideoInfo.$infoContainer).html(viewCountNumber);
		}

	};//-- App.YoutubeVideoInfo.parseresults();


	/*
	App.YoutubeVideoInfo.Initialize();
		Gets the info from a youtube video json
	@params: 
		options :  to know the data-component-caller
	*/
	App.YoutubeVideoInfo.Initialize = function(options){

		App.YoutubeVideoInfo.$infoContainer = $(options.dataComponentCaller).find('.videoInfoContainer span');
		App.YoutubeVideoInfo.getVideoinfo(options.videoId, options.videoKey);

	};//-- App.YoutubeVideoInfo.Initialize();

}(window.App));
/**
* YoutubeVideoThumb component 
* 
**/

/**
* 	USAGE: call this component adding a call to its Initialize method on the html code
*          You can pass over options using data-component-options Warning: must put inside a valid Json object
*   EXAMPLE: <div data-component='App.Slider.Initialize' data-options='{}'></div>
**/
;(function(App){

	/*
	App.YoutubeVideoInfo.Initialize();
		Gets the thumbnail from a youtube video
	@params: 
		options :  to know the data-component-caller
	*/
	App.YoutubeVideoThumb.Initialize = function(options){
		var $caller = $(options.dataComponentCaller);
		var videoId = options.videoId;

		if(videoId){
			$caller.attr('src', 'http://img.youtube.com/vi/'+videoId+'/mqdefault.jpg');
		}
	};//-- App.YoutubeVideoInfo.Initialize();

}(window.App));
/**
* Zoom component
* Use the examples below to create you own module
**/

/**
*       USAGE: call this component adding a call to its Initialize method on the html code
*          You can pass over options using data-component-options Warning: must put inside a valid Json object
*   EXAMPLE: <div data-component='App.Zoom.Initialize' data-options='{}'></div>
**/
;(function(App){

        /*
        App.Zoom.setZoomStructure();
                Initilizes or destroys the anythingZoomer plugin.
        @params:
                zoomerObject :  the basic html structure for the zoomer.
        */
        App.Zoom.setZoomStructure = function ($zoomer) {
          $zoomer.anythingZoomer();
        };//-- App.Zoom.setZoomStructure();

        /*
        App.Zoom.Initialize();
                Initilizes the functionality for the anythingZoomer plugin-
        @params:
                options :  to know the data-component-caller
        */
        App.Zoom.Initialize = function(options){
                App.Zoom.setZoomStructure($(options.dataComponentCaller));
        };//-- App.Zoom.Initialize();

}(window.App));
