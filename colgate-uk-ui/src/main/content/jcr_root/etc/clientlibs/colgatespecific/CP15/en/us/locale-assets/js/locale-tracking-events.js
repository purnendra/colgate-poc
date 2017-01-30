/*

Create data-tracking attributes on tags that need to be tracked. Eg: data-tracking="home-logo".
This will automatically fire the associate case below. If additional info is needed add
data-tracking-attr tags to the same object.

*/

var fireTracking = function(element,moreData){
	//console.log($(element).attr('data-tracking'));
	var thisTracker = $(element).attr('data-tracking');
	var attr = $(element).attr('data-tracking-attr');
	//console.log(thisTracker);
	switch(thisTracker) {
		case 'home-logo':
			window.setOmnitureProperty('event6', 'events');
			window.trackOmnitureEvent();
            window.ga('send', 'event', 'Logo', 'Click', 'Home Logo');
			break;
		case 'coupon-click':
			window.setOmnitureProperty('event7', 'events');
			window.trackOmnitureEvent();
            window.ga('send', 'event', 'Coupon', 'Click', 'Home Logo');
			break;
		case 'social-link':
			window.setOmnitureProperty($(element).attr('data-tracking-attr'), 'prop16');
			window.setOmnitureProperty($(element).attr('data-tracking-attr'), 'eVar16');
			window.trackOmnitureEvent();
            window.ga('send', 'event', 'Social', 'Click', attr);

			break;
		case 'homepage-pod':
			window.setOmnitureProperty('event2', 'events');
			var thisPod = $(element).find('h5 strong').text();
			window.setOmnitureProperty('colgate/homepage/'+thisPod,'pageName');
			window.trackOmnitureEvent();
            window.ga('send', 'event', 'Pod', 'Click', thisPod);
			break;
		case 'menu-item':
			window.setOmnitureProperty('event6', 'events');
			window.setOmnitureProperty($(element).attr('data-tracking-attr'), 'prop18');
			window.setOmnitureProperty($(element).attr('data-tracking-attr'), 'eVar18');
			window.trackOmnitureEvent();
            window.ga('send', 'event', 'Menu', 'Click', attr);
			break;
		case 'footer-link':
			window.setOmnitureProperty($(element).attr('data-tracking-attr'), 'prop19');
			window.setOmnitureProperty($(element).attr('data-tracking-attr'), 'eVar19');
			window.trackOmnitureEvent();
			break;
		case 'article':
			//console.log('tracking article');
			window.setOmnitureProperty('event3', 'events');
			window.trackOmnitureEvent();
			break;
		case 'video':
			//console.log('tracking video');
			window.setOmnitureProperty('event7', 'events');
			window.trackOmnitureEvent();
			break;
		case 'product-quick-view':
			//console.log('tracking product-quick-view');
			window.setOmnitureProperty('event4', 'events');
			window.setOmnitureProperty('productpage:' + attr + ':quickview', 'prop22');
			window.setOmnitureProperty('productpage:' + attr + ':quickview', 'eVar22');
			window.trackOmnitureEvent();
			break;
		case 'product-external':
			//console.log('tracking product external view');
			window.setOmnitureProperty('event4', 'events');
			window.setOmnitureProperty('productpage:' + attr + ':link', 'prop22');
			window.setOmnitureProperty('productpage:' + attr + ':link', 'eVar22');
			window.trackOmnitureEvent();
			break;
		case 'product-external-sitewide':
			//console.log('tracking product external view');
			window.setOmnitureProperty('event4', 'events');
			var thisPage = $('h1').first().text();
			window.setOmnitureProperty(thisPage + ':productclick:' + attr, 'prop21');
			window.setOmnitureProperty(thisPage + ':productclick:' + attr, 'eVar21');
			window.trackOmnitureEvent();
			break;
		case 'topic-choice':
			//console.log('topic choice');
			window.setOmnitureProperty($(element).attr('data-tracking-attr'), 'prop20');
			window.setOmnitureProperty($(element).attr('data-tracking-attr'), 'eVar20');
			window.trackOmnitureEvent();
			break;
		case 'search-form':
			//console.log('search-form');
			window.setOmnitureProperty(moreData, 'prop17');
			window.setOmnitureProperty(moreData, 'eVar17');
			window.trackOmnitureEvent();
			break;
		case 'oral-health-topic':
			//console.log('search-form');
			var trackingCat = $(element).closest('.toggle-group').find('h3');
			var trackElem = 'colgate/homepage/' + $(trackingCat).text() + '/' + $(element).attr('data-tacking-attr');
			window.setOmnitureProperty(trackElem, 'pageName');
			window.trackOmnitureEvent();
			break;
		default:
			console.log('tracker was fired but no specific events set for this item');
	}
};

/*
// Specific tracking clicks that can't be defined as a data-tracking element inline for various reasons
*/

var linksToColgateCom = $('nav.nav-menu a[href="/en/us/oc"]');
linksToColgateCom.click(function(){
	window.setOmnitureProperty('event6', 'events');
	window.trackOmnitureEvent();
});

var linksToBSBF = $('nav.nav-menu a[href*="BrightSmilesBrightFutures"]');
linksToBSBF.click(function(){
	window.setOmnitureProperty('event5', 'events');
	window.trackOmnitureEvent();
});

//Find all links to articles on a page and apply tracking data
var articleTracking = function(){};
articleTracking.prototype.init = function(){
	var articlesTracked = $('a[href*="/article/"]');
	//console.log(articlesTracked.length);
		if(articlesTracked.length > 0){
			for(var i=0; i<articlesTracked.length; i+=1){
				var element = articlesTracked[i];
				var articleName = $(element).text();
				//console.log(articleName);
				$(element).attr('data-tracking','article');
				$(element).attr('data-tracking-attr',articleName);
				$(element).click(function(){
					window.fireTracking(this,articleName);
					//return false;
				});
			}
		}
};
var articleTracking = new articleTracking();
articleTracking.init();

//Find all links to articles on a page and apply tracking data
var videoTracking = function(){};
videoTracking.prototype.init = function(){
	var videoTracked = $('a[href*="/video/"]');
	//console.log(videoTracked.length);
		if(videoTracked.length > 0){
			for(var i=0; i<videoTracked.length; i+=1){
				var element = videoTracked[i];
				var videoName = $(element).text();
				//console.log(videoName);
				$(element).attr('data-tracking','video');
				$(element).attr('data-tracking-attr',videoName);
				$(element).click(function(){
					window.fireTracking(this,videoName);
					//return false;
				});
			}
		}
};
var videoTracking = new videoTracking();
videoTracking.init();

//Find all links to products on a page and apply tracking data
var productTracking = function(){};
productTracking.prototype.init = function(){
	var productTracked = $('a[href*="/products/"]');
	//console.log(videoTracked.length);
		if(productTracked.length > 0){
			for(var i=0; i<productTracked.length; i+=1){
				var element = productTracked[i];
				var productName = $(element).text();
				//console.log(videoName);
				$(element).attr('data-tracking','product-external-sitewide');
				$(element).attr('data-tracking-attr',productName);
				$(element).click(function(){
					window.fireTracking(this,productName);
					//return false;
				});
			}
		}
};
var productTracking = new productTracking();
productTracking.init();

//Search results tracking
function searchResultsTracking(queryString){
	window.setOmnitureProperty(queryString, 'prop17');
	window.setOmnitureProperty(queryString, 'eVar17');
	window.trackOmnitureEvent();
}
