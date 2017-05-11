/*!
 * SlickNav Responsive Mobile Menu v1.0.7
 * (c) 2016 Josh Cope
 * licensed under MIT
 */
!function(e,n,t){function a(n,t){this.element=n,this.settings=e.extend({},i,t),this.settings.duplicate||t.hasOwnProperty("removeIds")||(this.settings.removeIds=!1),this._defaults=i,this._name=s,this.init()}var i={label:"MENU",duplicate:!0,duration:200,easingOpen:"swing",easingClose:"swing",closedSymbol:"&#9658;",openedSymbol:"&#9660;",prependTo:"body",appendTo:"",parentTag:"a",closeOnClick:!1,allowParentLinks:!1,nestedParentLinks:!0,showChildren:!1,removeIds:!0,removeClasses:!1,removeStyles:!1,brand:"",init:function(){},beforeOpen:function(){},beforeClose:function(){},afterOpen:function(){},afterClose:function(){}},s="slicknav",l="slicknav";a.prototype.init=function(){var t,a,i=this,s=e(this.element),o=this.settings;if(o.duplicate?i.mobileNav=s.clone():i.mobileNav=s,o.removeIds&&(i.mobileNav.removeAttr("id"),i.mobileNav.find("*").each(function(n,t){e(t).removeAttr("id")})),o.removeClasses&&(i.mobileNav.removeAttr("class"),i.mobileNav.find("*").each(function(n,t){e(t).removeAttr("class")})),o.removeStyles&&(i.mobileNav.removeAttr("style"),i.mobileNav.find("*").each(function(n,t){e(t).removeAttr("style")})),t=l+"_icon",""===o.label&&(t+=" "+l+"_no-text"),"a"==o.parentTag&&(o.parentTag='a href="#"'),i.mobileNav.attr("class",l+"_nav"),a=e('<div class="'+l+'_menu"></div>'),""!==o.brand){var r=e('<div class="'+l+'_brand">'+o.brand+"</div>");e(a).append(r)}i.btn=e(["<"+o.parentTag+' aria-haspopup="true" tabindex="0" class="'+l+"_btn "+l+'_collapsed">','<span class="'+l+'_menutxt">'+o.label+"</span>",'<span class="'+t+'">','<span class="'+l+'_icon-bar"></span>','<span class="'+l+'_icon-bar"></span>','<span class="'+l+'_icon-bar"></span>',"</span>","</"+o.parentTag+">"].join("")),e(a).append(i.btn),""!==o.appendTo?e(o.appendTo).append(a):e(o.prependTo).prepend(a),a.append(i.mobileNav);var d=i.mobileNav.find("li");e(d).each(function(){var n=e(this),t={};if(t.children=n.children("ul").attr("role","menu"),n.data("menu",t),t.children.length>0){var a=n.contents(),s=!1,r=[];e(a).each(function(){return e(this).is("ul")?!1:(r.push(this),void(e(this).is("a")&&(s=!0)))});var d=e("<"+o.parentTag+' role="menuitem" aria-haspopup="true" tabindex="-1" class="'+l+'_item"/>');if(o.allowParentLinks&&!o.nestedParentLinks&&s)e(r).wrapAll('<span class="'+l+"_parent-link "+l+'_row"/>').parent();else{var p=e(r).wrapAll(d).parent();p.addClass(l+"_row")}o.showChildren?n.addClass(l+"_open"):n.addClass(l+"_collapsed"),n.addClass(l+"_parent");var c=e('<span class="'+l+'_arrow">'+(o.showChildren?o.openedSymbol:o.closedSymbol)+"</span>");o.allowParentLinks&&!o.nestedParentLinks&&s&&(c=c.wrap(d).parent()),e(r).last().after(c)}else 0===n.children().length&&n.addClass(l+"_txtnode");n.children("a").attr("role","menuitem").click(function(n){o.closeOnClick&&!e(n.target).parent().closest("li").hasClass(l+"_parent")&&e(i.btn).click()}),o.closeOnClick&&o.allowParentLinks&&(n.children("a").children("a").click(function(n){e(i.btn).click()}),n.find("."+l+"_parent-link a:not(."+l+"_item)").click(function(n){e(i.btn).click()}))}),e(d).each(function(){var n=e(this).data("menu");o.showChildren||i._visibilityToggle(n.children,null,!1,null,!0)}),i._visibilityToggle(i.mobileNav,null,!1,"init",!0),i.mobileNav.attr("role","menu"),e(n).mousedown(function(){i._outlines(!1)}),e(n).keyup(function(){i._outlines(!0)}),e(i.btn).click(function(e){e.preventDefault(),i._menuToggle()}),i.mobileNav.on("click","."+l+"_item",function(n){n.preventDefault(),i._itemClick(e(this))}),e(i.btn).keydown(function(e){var n=e||event;13==n.keyCode&&(e.preventDefault(),i._menuToggle())}),i.mobileNav.on("keydown","."+l+"_item",function(n){var t=n||event;13==t.keyCode&&(n.preventDefault(),i._itemClick(e(n.target)))}),o.allowParentLinks&&o.nestedParentLinks&&e("."+l+"_item a").click(function(e){e.stopImmediatePropagation()})},a.prototype._menuToggle=function(e){var n=this,t=n.btn,a=n.mobileNav;t.hasClass(l+"_collapsed")?(t.removeClass(l+"_collapsed"),t.addClass(l+"_open")):(t.removeClass(l+"_open"),t.addClass(l+"_collapsed")),t.addClass(l+"_animating"),n._visibilityToggle(a,t.parent(),!0,t)},a.prototype._itemClick=function(e){var n=this,t=n.settings,a=e.data("menu");a||(a={},a.arrow=e.children("."+l+"_arrow"),a.ul=e.next("ul"),a.parent=e.parent(),a.parent.hasClass(l+"_parent-link")&&(a.parent=e.parent().parent(),a.ul=e.parent().next("ul")),e.data("menu",a)),a.parent.hasClass(l+"_collapsed")?(a.arrow.html(t.openedSymbol),a.parent.removeClass(l+"_collapsed"),a.parent.addClass(l+"_open"),a.parent.addClass(l+"_animating"),n._visibilityToggle(a.ul,a.parent,!0,e)):(a.arrow.html(t.closedSymbol),a.parent.addClass(l+"_collapsed"),a.parent.removeClass(l+"_open"),a.parent.addClass(l+"_animating"),n._visibilityToggle(a.ul,a.parent,!0,e))},a.prototype._visibilityToggle=function(n,t,a,i,s){var o=this,r=o.settings,d=o._getActionItems(n),p=0;a&&(p=r.duration),n.hasClass(l+"_hidden")?(n.removeClass(l+"_hidden"),s||r.beforeOpen(i),n.slideDown(p,r.easingOpen,function(){e(i).removeClass(l+"_animating"),e(t).removeClass(l+"_animating"),s||r.afterOpen(i)}),n.attr("aria-hidden","false"),d.attr("tabindex","0"),o._setVisAttr(n,!1)):(n.addClass(l+"_hidden"),s||r.beforeClose(i),n.slideUp(p,this.settings.easingClose,function(){n.attr("aria-hidden","true"),d.attr("tabindex","-1"),o._setVisAttr(n,!0),n.hide(),e(i).removeClass(l+"_animating"),e(t).removeClass(l+"_animating"),s?"init"==i&&r.init():r.afterClose(i)}))},a.prototype._setVisAttr=function(n,t){var a=this,i=n.children("li").children("ul").not("."+l+"_hidden");t?i.each(function(){var n=e(this);n.attr("aria-hidden","true");var i=a._getActionItems(n);i.attr("tabindex","-1"),a._setVisAttr(n,t)}):i.each(function(){var n=e(this);n.attr("aria-hidden","false");var i=a._getActionItems(n);i.attr("tabindex","0"),a._setVisAttr(n,t)})},a.prototype._getActionItems=function(e){var n=e.data("menu");if(!n){n={};var t=e.children("li"),a=t.find("a");n.links=a.add(t.find("."+l+"_item")),e.data("menu",n)}return n.links},a.prototype._outlines=function(n){n?e("."+l+"_item, ."+l+"_btn").css("outline",""):e("."+l+"_item, ."+l+"_btn").css("outline","none")},a.prototype.toggle=function(){var e=this;e._menuToggle()},a.prototype.open=function(){var e=this;e.btn.hasClass(l+"_collapsed")&&e._menuToggle()},a.prototype.close=function(){var e=this;e.btn.hasClass(l+"_open")&&e._menuToggle()},e.fn[s]=function(n){var t=arguments;if(void 0===n||"object"==typeof n)return this.each(function(){e.data(this,"plugin_"+s)||e.data(this,"plugin_"+s,new a(this,n))});if("string"==typeof n&&"_"!==n[0]&&"init"!==n){var i;return this.each(function(){var l=e.data(this,"plugin_"+s);l instanceof a&&"function"==typeof l[n]&&(i=l[n].apply(l,Array.prototype.slice.call(t,1)))}),void 0!==i?i:this}}}(jQuery,document,window);

/**
 * Scroll Reveal 3.14
 * https://github.com/jlmakes/scrollreveal.js
 */
!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t(require,exports,module):e.ScrollReveal=t()}(this,function(e,t,n){return function(){"use strict";var e,t,n;this.ScrollReveal=function(){function i(n){return"undefined"==typeof this||Object.getPrototypeOf(this)!==i.prototype?new i(n):(e=this,e.tools=new t,e.isSupported()?(e.tools.extend(e.defaults,n||{}),o(e.defaults),e.store={elements:{},containers:[]},e.sequences={},e.history=[],e.uid=0,e.initialized=!1):"undefined"!=typeof console&&null!==console,e)}function o(t){var n=t.container;return n&&"string"==typeof n?t.container=window.document.querySelector(n):(n&&!e.tools.isNode(n)&&(t.container=null),null==n&&(t.container=window.document.documentElement),t.container)}function r(){return++e.uid}function s(t,n){t.config?t.config=e.tools.extendClone(t.config,n):t.config=e.tools.extendClone(e.defaults,n),"top"===t.config.origin||"bottom"===t.config.origin?t.config.axis="Y":t.config.axis="X","top"!==t.config.origin&&"left"!==t.config.origin||(t.config.distance="-"+t.config.distance)}function a(e){var t=window.getComputedStyle(e.domEl);e.styles||(e.styles={transition:{},transform:{},computed:{}},e.styles.inline=e.domEl.getAttribute("style")||"",e.styles.inline+="; visibility: visible; ",e.styles.computed.opacity=t.opacity,t.transition&&"all 0s ease 0s"!=t.transition?e.styles.computed.transition=t.transition+", ":e.styles.computed.transition=""),e.styles.transition.instant=l(e,0),e.styles.transition.delayed=l(e,e.config.delay),e.styles.transform.initial=" -webkit-transform:",e.styles.transform.target=" -webkit-transform:",c(e),e.styles.transform.initial+="transform:",e.styles.transform.target+="transform:",c(e)}function l(e,t){var n=e.config;return"-webkit-transition: "+e.styles.computed.transition+"-webkit-transform "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s; transition: "+e.styles.computed.transition+"transform "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s; "}function c(e){var t=e.config,n=e.styles.transform;parseInt(t.distance)&&(n.initial+=" translate"+t.axis+"("+t.distance+")",n.target+=" translate"+t.axis+"(0)"),t.scale&&(n.initial+=" scale("+t.scale+")",n.target+=" scale(1)"),t.rotate.x&&(n.initial+=" rotateX("+t.rotate.x+"deg)",n.target+=" rotateX(0)"),t.rotate.y&&(n.initial+=" rotateY("+t.rotate.y+"deg)",n.target+=" rotateY(0)"),t.rotate.z&&(n.initial+=" rotateZ("+t.rotate.z+"deg)",n.target+=" rotateZ(0)"),n.initial+="; opacity: "+t.opacity+";",n.target+="; opacity: "+e.styles.computed.opacity+";"}function f(t){var n=t.config.container;n&&-1==e.store.containers.indexOf(n)&&e.store.containers.push(t.config.container),e.store.elements[t.id]=t}function u(t,n,i){var o={selector:t,config:n,interval:i};e.history.push(o)}function d(){if(e.isSupported()){p();for(var t=0;t<e.store.containers.length;t++)e.store.containers[t].addEventListener("scroll",y),e.store.containers[t].addEventListener("resize",y);e.initialized||(window.addEventListener("scroll",y),window.addEventListener("resize",y),e.initialized=!0)}return e}function y(){n(p)}function m(){var t,n,i,o;e.tools.forOwn(e.sequences,function(r){o=e.sequences[r],t=!1;for(var s=0;s<o.elemIds.length;s++)i=o.elemIds[s],n=e.store.elements[i],O(n)&&!t&&(t=!0);o.active=t})}function p(){var t,n;m(),e.tools.forOwn(e.store.elements,function(i){n=e.store.elements[i],t=b(n),v(n)?(t?n.domEl.setAttribute("style",n.styles.inline+n.styles.transform.target+n.styles.transition.delayed):n.domEl.setAttribute("style",n.styles.inline+n.styles.transform.target+n.styles.transition.instant),w("reveal",n,t),n.revealing=!0,n.seen=!0,n.sequence&&g(n,t)):h(n)&&(n.domEl.setAttribute("style",n.styles.inline+n.styles.transform.initial+n.styles.transition.instant),w("reset",n),n.revealing=!1)})}function g(t,n){var i=0,o=0,r=e.sequences[t.sequence.id];r.blocked=!0,n&&"onload"==t.config.useDelay&&(o=t.config.delay),t.sequence.timer&&(i=Math.abs(t.sequence.timer.started-new Date),window.clearTimeout(t.sequence.timer)),t.sequence.timer={started:new Date},t.sequence.timer.clock=window.setTimeout(function(){r.blocked=!1,t.sequence.timer=null,y()},Math.abs(r.interval)+o-i)}function w(e,t,n){var i=0,o=0,r="after";switch(e){case"reveal":o=t.config.duration,n&&(o+=t.config.delay),r+="Reveal";break;case"reset":o=t.config.duration,r+="Reset"}t.timer&&(i=Math.abs(t.timer.started-new Date),window.clearTimeout(t.timer.clock)),t.timer={started:new Date},t.timer.clock=window.setTimeout(function(){t.config[r](t.domEl),t.timer=null},o-i)}function v(t){if(t.sequence){var n=e.sequences[t.sequence.id];return n.active&&!n.blocked&&!t.revealing&&!t.disabled}return O(t)&&!t.revealing&&!t.disabled}function b(t){var n=t.config.useDelay;return"always"===n||"onload"===n&&!e.initialized||"once"===n&&!t.seen}function h(t){if(t.sequence){var n=e.sequences[t.sequence.id];return!n.active&&t.config.reset&&t.revealing&&!t.disabled}return!O(t)&&t.config.reset&&t.revealing&&!t.disabled}function x(e){return{width:e.clientWidth,height:e.clientHeight}}function q(e){if(e&&e!==window.document.documentElement){var t=E(e);return{x:e.scrollLeft+t.left,y:e.scrollTop+t.top}}return{x:window.pageXOffset,y:window.pageYOffset}}function E(e){var t=0,n=0,i=e.offsetHeight,o=e.offsetWidth;do isNaN(e.offsetTop)||(t+=e.offsetTop),isNaN(e.offsetLeft)||(n+=e.offsetLeft);while(e=e.offsetParent);return{top:t,left:n,height:i,width:o}}function O(e){function t(){var t=c+a*s,n=f+l*s,i=u-a*s,y=d-l*s,m=r.y+e.config.viewOffset.top,p=r.x+e.config.viewOffset.left,g=r.y-e.config.viewOffset.bottom+o.height,w=r.x-e.config.viewOffset.right+o.width;return g>t&&i>m&&n>p&&w>y}function n(){return"fixed"===window.getComputedStyle(e.domEl).position}var i=E(e.domEl),o=x(e.config.container),r=q(e.config.container),s=e.config.viewFactor,a=i.height,l=i.width,c=i.top,f=i.left,u=c+a,d=f+l;return t()||n()}return i.prototype.defaults={origin:"bottom",distance:"20px",duration:500,delay:0,rotate:{x:0,y:0,z:0},opacity:0,scale:.9,easing:"cubic-bezier(0.6, 0.2, 0.1, 1)",container:null,mobile:!0,reset:!1,useDelay:"always",viewFactor:.2,viewOffset:{top:0,right:0,bottom:0,left:0},afterReveal:function(e){},afterReset:function(e){}},i.prototype.isSupported=function(){var e=document.documentElement.style;return"WebkitTransition"in e&&"WebkitTransform"in e||"transition"in e&&"transform"in e},i.prototype.reveal=function(t,n,i,l){var c,y,m,p,g,w;if(c=n&&n.container?o(n):e.defaults.container,y=e.tools.isNode(t)?[t]:Array.prototype.slice.call(c.querySelectorAll(t)),!y.length)return e;n&&"number"==typeof n&&(i=n,n={}),i&&"number"==typeof i&&(w=r(),g=e.sequences[w]={id:w,interval:i,elemIds:[],active:!1});for(var v=0;v<y.length;v++)p=y[v].getAttribute("data-sr-id"),p?m=e.store.elements[p]:(m={id:r(),domEl:y[v],seen:!1,revealing:!1},m.domEl.setAttribute("data-sr-id",m.id)),g&&(m.sequence={id:g.id,index:g.elemIds.length},g.elemIds.push(m.id)),s(m,n||{}),a(m),f(m),e.tools.isMobile()&&!m.config.mobile||!e.isSupported()?(m.domEl.setAttribute("style",m.styles.inline),m.disabled=!0):m.revealing||m.domEl.setAttribute("style",m.styles.inline+m.styles.transform.initial);return!l&&e.isSupported()&&(u(t,n),e.initTimeout&&window.clearTimeout(e.initTimeout),e.initTimeout=window.setTimeout(d,0)),e},i.prototype.sync=function(){if(e.history.length&&e.isSupported()){for(var t=0;t<e.history.length;t++){var n=e.history[t];e.reveal(n.selector,n.config,n.interval,!0)}d()}return e},i}(),t=function(){function e(){}return e.prototype.isObject=function(e){return null!==e&&"object"==typeof e&&e.constructor==Object},e.prototype.isNode=function(e){return"object"==typeof Node?e instanceof Node:e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},e.prototype.forOwn=function(e,t){if(!this.isObject(e))throw new TypeError('Expected "object", but received "'+typeof e+'".');for(var n in e)e.hasOwnProperty(n)&&t(n)},e.prototype.extend=function(e,t){return this.forOwn(t,function(n){this.isObject(t[n])?(e[n]&&this.isObject(e[n])||(e[n]={}),this.extend(e[n],t[n])):e[n]=t[n]}.bind(this)),e},e.prototype.extendClone=function(e,t){return this.extend(this.extend({},e),t)},e.prototype.isMobile=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},e}(),n=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}.call(this),this.ScrollReveal});


/**
 * Site Scripts
 */
$(function(){ 
	/**
	 * open external links in new window
	 */
	$('a[rel="external"]').attr('target', '_blank');
	
	/**
	 * Mobile Nav (Slicknav)
	 */
	$('nav ul').slicknav({
		label: "",
		prependTo: "nav",
		closeOnClick : true
	});
	
	/**
	 * Smooth Scroll To Anchors
	 */
	var hashLinks = 'a[href^="#"]';
	$(document).on('click', hashLinks, function (e) {
		e.preventDefault();

		var target = this.hash;
		var $target = $(target);
		if ($target.length) {
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, 400, 'swing', function () {
				window.location.hash = target;
			});
		}
	});
	
	/**
	 * Hide Header on on scroll down
	 */
	var didScroll;
	var lastScrollTop = 0;
	var delta = 20;
	
	var $header = $('header');
	var navbarHeight = $header.outerHeight();
	$header.css({'position': 'fixed', 'height': '40px', 'width': '100%'});
	$header.addClass("hide")
	$(window).scroll(function(event){
	    didScroll = true;
	});
	setInterval(function() {
	    if (didScroll) {
	        hasScrolled();
	        didScroll = false;
	    }
	}, 250);
	function hasScrolled() {
		
	    var st = $(this).scrollTop();

	    //if (st > lastScrollTop && st > navbarHeight){
		if (st > lastScrollTop){
	        $header.removeClass('show').addClass('hide');
	    } else {
	        if(st + $(window).height() < $(document).height()) {
	            $header.removeClass('hide').addClass('show');
	        }
	    }
	    lastScrollTop = st;
	}
	
	/**
	 * Scroll reveal
	 */
	window.sr = ScrollReveal({
	
	});
	sr.reveal('#about h2', {
		delay    : 50,
		  distance : '0px',
		  easing   : 'ease-in-out',
		  scale    : .9
	});
	sr.reveal('.project', {
		delay    : 50,
		  distance : '0px',
		  easing   : 'ease-in-out',
		  scale    : 1
	});
	sr.reveal('#services div img', {
		rotate  : { x: 0, y: 0, z: 60 },
		scale    : 1,
		distance : '0px',
		delay    : 400,
		easing   : 'ease-in-out'
	});
	sr.reveal('#services h3', {
		scale    : 1,
		distance : '0px',
		delay    : 100,
		easing   : 'ease-in-out'
	});
	sr.reveal('#services p', {
		scale    : 1,
		distance : '0px',
		delay    : 100,
		easing   : 'ease-in-out'
	});
	sr.reveal('textarea, input', {
		origin   : 'left',
		opacity  : 0,
		scale    : 1,
		distance : '100%',
		delay    : 10,
		easing   : 'ease-in-out'
	});
	sr.reveal('#contact .button', {
		origin   : 'bottom',
		opacity  : 0,
		scale    : 1,
		distance : '100%',
		delay    : 10,
		easing   : 'ease-in-out'
	});
	
	/**
	 * Analytics Tracking Codes
	 */
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    
	ga('create', 'UA-78696995-1', 'auto');
	ga('send', 'pageview');

}); 