// alert(window.innerWidth);
$(window).on("load", function () {
	//Prevent Page Reload on all # links
	$("a[href='#']").click(function (e) {
		e.preventDefault();
	});

	// On scroll header change in mobile
	$(window).scroll(function (e) {
		if ($(window).scrollTop() > 100)
			$("body").addClass("page-scrolled");
		else
			$("body").removeClass("page-scrolled");
	}).scroll();

	// $("body").scroll(function (e) {
	// 	if ($(".widget:first").offset().top < -100)
	// 		$("body").addClass("page-scrolled");
	// 	else
	// 		$("body").removeClass("page-scrolled");
	// }).scroll();


	// hover effect
	var showMenu;
	var hideMenu;
	var waitingTime = 250;

	$(".main-navigation > .main-navigation-scroll > ul > li, .header .login-menu, .main-navigation .apply-btn-outer").hover(function () {
		var $this = $(this);
		if ($(window).outerWidth() >= 1440 && $this.find(".submenu").length) {
			clearTimeout(hideMenu);
			if ($("body").hasClass("menu-hovered"))
				waitingTime = 50;
			else
				waitingTime = 250;

			$("body").addClass("menu-hovered bg-animate");
			showMenu = setTimeout(function () {
				$this.find(".submenu").stop(true, true).fadeIn(200);
				$("body").addClass("menu-hovered");
			}, waitingTime);
		}
	}, function () {
		var $this = $(this);
		if ($(window).outerWidth() >= 1440) {
			clearTimeout(showMenu);
			$("body").removeClass("bg-animate");
			if (!$this.find(".submenu").length)
				clearTimeout(hideMenu);
			hideMenu = setTimeout(function () {
				$("body").removeClass("menu-hovered");
			}, 300);
			$this.find(".submenu").stop(true, true).fadeOut(100);
		}
	});

	// $(".main-navigation > .main-navigation-scroll > ul > li, .header .login-menu, .main-navigation .apply-btn-outer").hover(function(){				
	// 	var $this = $(this);			
	// 	if($(window).outerWidth() >= 1440 && $this.find(".submenu").length){			
	// 		clearTimeout(hideMenu);
	// 		$("body").addClass("menu-hovered bg-animate");
	// 		showMenu = setTimeout(function(){
	// 			$this.find(".submenu").stop(true, true).fadeIn(200);
	// 			$("body").addClass("menu-hovered");
	// 		}, 250);			
	// 	}
	// }, function(){		
	// 	var $this = $(this);
	// 	if($(window).outerWidth() >= 1440){					
	// 		$("body").removeClass("bg-animate");						
	// 		if(!$this.find(".submenu").length)
	// 			clearTimeout(hideMenu);	
	// 		hideMenu = setTimeout(function(){
	// 			$("body").removeClass("menu-hovered");				
	// 		}, 300);
	// 		clearTimeout(showMenu);			
	// 		$this.find(".submenu").stop(true, true).fadeOut(100);
	// 	}
	// });

	// $(".main-navigation > .main-navigation-scroll > ul > li, .header .login-menu, .main-navigation .apply-btn-outer").hover(function(){
	// 	var $this = $(this);
	// 	clearTimeout(hideMenu);
	// 	showMenuWait = setTimeout(function(){
	// 		console.log("aa");
	// 		clearTimeout(hideMenu);
	// 		$("body").addClass("menu-hovered bg-animate");
	// 		showMenu = setTimeout(function(){
	// 			$this.find(".submenu").stop(true, true).fadeIn(200);
	// 			$("body").addClass("menu-hovered");
	// 		}, 250);
	// 	}, waitingTime);
	// }, function(){
	// 	var $this = $(this);
	// 	hideMenu = setTimeout(function(){
	// 		console.log("bb");
	// 	}, waitingTime);
	// });






	// Hide Submenu
	function hideSubmenu() {
		if ($("html, body").hasClass("menu-open")) {
			$(".main-navigation .open").removeClass("open").find(".submenu").stop(true, true).fadeOut(200);
			if ($("html, body").hasClass("submenu-open")) {
				$("body").addClass("submenu-close");
				setTimeout(function () {
					$("body").removeClass("submenu-open menu-hovered bg-animate submenu-close");
				}, 400);
			};
		};
	}


	// Show Hide Menu
	$(".nav-icon").click(function (e) {
		e.preventDefault();
		hideSubmenu();
		if ($("html, body").hasClass("login-menu-open")) {
			$("html, body").removeClass("login-menu-open");
			setTimeout(function () {
				$("html, body").toggleClass("menu-open");
			}, 400);
		}
		else {
			$("html, body").toggleClass("menu-open");
		}
	});


	// Show Hide Login Menu in Mobile
	$(".login-btn").click(function (e) {
		e.preventDefault();
		if ($(window).outerWidth() < 1440) {
			hideSubmenu();
			if ($("html, body").hasClass("menu-open")) {
				$("html, body").removeClass("menu-open");
				setTimeout(function () {
					$("html, body").toggleClass("login-menu-open");
				}, 400);
			}
			else {
				$("html, body").toggleClass("login-menu-open");
			}
		};
	});


	$(".login-menu .submenu a").click(function () {
		$("html, body").removeClass("login-menu-open");
	});




	// Show Hide Submenu in mobile
	$(".main-navigation > .main-navigation-scroll > ul > li > a,  .main-navigation .apply-btn-outer .apply-btn").click(function (e) {
		var $this = $(this);
		if ($(window).outerWidth() < 1440 && !$this.closest(".open").length) {
			if ($this.siblings(".submenu").length) {
				e.preventDefault();
				$(".main-navigation").find(".open").removeClass("open").find(".submenu").stop(true, true).fadeOut(200);
				$this.closest("li, .apply-btn-outer").addClass("open");
				clearTimeout(hideMenu);
				$("body").addClass("submenu-open menu-hovered bg-animate");
				showMenu = setTimeout(function () {
					$this.siblings(".submenu").stop(true, true).fadeIn(200);
					$("body").addClass("menu-hovered");
				}, 250);
			}
		};
	});

	$(".close-submenu").click(function (e) {
		e.preventDefault();
		$(".main-navigation .open").removeClass("open").find(".submenu").stop(true, true).fadeOut(200);
		setTimeout(function () {
			$("body").removeClass("submenu-open menu-hovered bg-animate");
		}, 100);
	});


	// Filter dropdown menu prevent close inside the menu
	$(".filter-dropdown .dropdown-menu, .blog-filter-dropdown .dropdown-menu").click(function (e) {
		e.stopImmediatePropagation();
	});


	// Investment detail carousel
	$(".portfolio-block .owl-carousel").each(function () {
		var $this = $(this);
		$this.owlCarousel({
			responsive: {
				0: { items: 2, margin: 24 },
				375: { items: 3, margin: 24 },
				575: { items: 4, margin: 32 },
				768: { items: 6, margin: 32 },
				1024: { items: 8, margin: 32 },
				1440: { items: 8, margin: 64 }
			},
			mouseDrag: false,
			touchDrag: true,
			nav: false,
			dots: true
		});
	});

	// Investor Carousel
	$(".investor-carousel").owlCarousel({
		responsive: {
			0: { items: 1 },
			575: { items: 2 },
			768: { items: 3 },
			1024: { items: 4 }
		},
		mouseDrag: false,
		touchDrag: true,
		margin: 18,
		nav: false,
		dots: true
	});


	// Read More Button
	$(".action-btn.readmore").click(function (e) {
		e.preventDefault();
		var $this = $(this);
		if (!$this.hasClass("clicked")) {
			$this.addClass("clicked").text("Read Less").attr("title", "Read Less").siblings(".cms-block").find(".read-more-detail").slideDown(function () {
				if ($this.closest(".owl-loaded").length)
					$this.closest(".owl-carousel").resize();
			});
		}
		else {
			$this.removeClass("clicked").text("Read More").attr("title", "Read More").siblings(".cms-block").find(".read-more-detail").slideUp(function () {
				if ($this.closest(".owl-loaded").length)
					$this.closest(".owl-carousel").resize();
			});
		}
	});



	// Carousel in mobile
	var $mobile = false;
	var $mobileW = 768;
	if (window.innerWidth < $mobileW) {
		$mobile = true;
	}
	$(window).resize(function (e) {
		if (window.innerWidth >= $mobileW && !$mobile) {
			$mobile = true;
			$(".carousel-in-mobile").trigger("destroy.owl.carousel");
		}
		else if (window.innerWidth < $mobileW && $mobile) {
			$mobile = false;
			$(".carousel-in-mobile").each(function () {
				var $this = $(this);
				var $dataItems = 1;
				if ($this.attr("data-items"))
					$dataItems = $this.attr("data-items");

				$this.owlCarousel({
					responsive: {
						0: {
							items: 1
						},
						375: {
							items: $dataItems
						}
					},
					mouseDrag: false,
					touchDrag: true,
					nav: false,
					dots: true,
					autoHeight: true
				});
			});
		}
	}).resize();


	// Carousel in tablet 
	$(".bonds-detail-right-column").owlCarousel({
		autoHeight: false,
		responsive: {
			0: {
				autoWidth: true,
			},
			768: {
				autoWidth: false,
				items: 2,
			},
			1024: {
				autoWidth: false,
				items: 4,
			}
		},
		mouseDrag: false,
		touchDrag: true,
		nav: false,
		responsiveRefreshRate: 10,
		dots: true
	});


	// Values Detail Show Hide
	$(".values-listing li a").hover(function (e) {
		e.preventDefault();
		var $this = $(this);
		var $data = $(this).attr("href");
		$this.closest("li").addClass("active").siblings("li.active").removeClass("active");
		$($data).addClass("d-block").siblings(".d-block").removeClass("d-block");
		$($data + "-img").addClass("d-block").siblings(".d-block").removeClass("d-block");
	});

	var $mobileDevice = true;
	var $activeFirst = true;

	$(window).resize(function (event) {
		if ($(window).outerWidth() > 767) {
			$mobileDevice = false;
		}
		else {
			$mobileDevice = true;
			$activeFirst = true;
		}

		if (!$mobileDevice && $activeFirst) {
			var $data = $(".values-listing li:first-child a").attr("href");
			$(".values-listing li.active").removeClass("active");
			$(".values-detail-listing").find(".d-block").removeClass('d-block');
			setTimeout(function () {
				$(".values-listing li:first-child").addClass("active");
			}, 10);
			$($data).addClass("d-block").siblings(".d-block").removeClass("d-block");
			$($data + "-img").addClass("d-block").siblings(".d-block").removeClass("d-block");
			$activeFirst = false;
		};
	});

	$(".values-listing li a").click(function (e) {
		e.preventDefault();
	});


	// Show Hide Plan detail
	var $animateSpeed = 500;
	var $expandW = 69.983;
	var $collapsW = 100 - $expandW;

	$(window).resize(function (event) {
		$expandW = 69.983;
		$collapsW = 100 - $expandW;
		if ($(window).width() < 1440) {
			$expandW = 66.529;
			$collapsW = 100 - $expandW;
		};

		if ($(".plan-detail.active").length) {
			$(".plan-detail.active").css({ width: $expandW + "%" });
			$(".plan-detail.inactive").css({ width: $collapsW + "%" });
		}
	}).resize();


	$(".plan-detail .readmore-btn").click(function (e) {
		e.preventDefault();
		var $this = $(this);
		var $block = $this.closest(".plan-detail");
		if (!$block.hasClass("active")) {
			$block.siblings(".plan-detail").animate({ width: $collapsW + "%" }, $animateSpeed).removeClass("active").addClass("inactive").find(".plan-detail-content").stop().slideUp($animateSpeed, function () {
				$block.siblings(".plan-detail").find(".plan-detail-content-inner").animate({ opacity: 0 });
			});
			$block.animate({ width: $expandW + "%" }, $animateSpeed).removeClass("inactive").addClass("active").find(".plan-detail-content").stop().slideDown($animateSpeed, function () {
				$block.find(".plan-detail-content-inner").animate({ opacity: 1 });
			});
			$block.siblings(".plan-detail").find(".readmore-btn").attr("title", "Read More").find("span").text("Read More");
			$this.attr("title", "Read Less").find("span").text("Read Less");
		} else {
			$block.find(".plan-detail-content-inner").animate({ opacity: 0 }, $animateSpeed);
			$block.animate({ width: "50%" }, $animateSpeed).removeClass("active").find(".plan-detail-content").stop().slideUp($animateSpeed);
			$block.siblings(".plan-detail").animate({ width: "50%" }, $animateSpeed).removeClass("inactive");
			$this.attr("title", "Read More").find("span").text("Read More");
			$("body, html").animate({ scrollTop: $block.offset().top - 100 }, $animateSpeed);
		};
	});


	// Close Filter Button
	$(".filter-dropdown .close-filter, .blog-filter-dropdown .close-filter").click(function (e) {
		e.preventDefault();
		$(this).closest(".dropdown").find(".dropdown-toggle").click();
	});


	// Checkbox Clear on click
	$(".filter-dropdown .clear-checkbox").click(function (e) {
		e.preventDefault();
		$(this).closest("ul").find("input").prop("checked", false);
	});

	// Risk Check class add and remove
	$(".risk-checkbox-listing").find("input").click(function () {
		var $this = $(this);
		if ($this.prop("checked"))
			$this.closest("li").addClass("input-checked")
		else
			$this.closest("li").removeClass("input-checked")
	});

	// Filter Tabs
	$(".filter-dropdown .tab-heading li a").click(function (e) {
		e.preventDefault();
		var $this = $(this);
		$this.closest("li").addClass("active").siblings("li.active").removeClass("active");
		$(".tab-content-detail.active").stop().fadeOut(150, function () {
			$(".tab-content-detail.active").removeClass("active");
			$($this.attr("href")).stop().fadeIn(150, function () {
				$($this.attr("href")).addClass("active");
			});
		});
	});

	// Show Hide Collapse
	$(".portfolio-block .collapse").on("show.bs.collapse", function (e) {
		$(this).closest(".card").addClass("open");
	});
	$(".portfolio-block .collapse").on("hide.bs.collapse", function (e) {
		$(this).closest(".card").removeClass("open");
	});


	// Show Hide Content of Contact
	$(".contact-block .contact-detail li > .large-pera .expand-btn").click(function (e) {
		e.preventDefault();
		var $this = $(this).closest("li");
		if ($(window).innerWidth() < 768) {
			if (!$this.hasClass("open"))
				$this.addClass("open").find(".contact-listing").stop(true, true).slideDown(300);
			else
				$this.removeClass("open").find(".contact-listing").stop(true, true).slideUp(300);
		}
	});


	// Custom Select
	var $mobile = true;
	if (! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		$mobile = false;
	};

	$(".custom-select-input").selectpicker({
		dropupAuto: true,
		mobile: $mobile
	});


	// Values Heding Carousel
	var $vmobile = false;
	var $vmobileW = 768;
	var $sync1 = $(".values-block .values-listing");
	var $sync2 = $(".values-block .values-detail-listing");
	var $firstLoad = true;

	if (window.innerWidth < $vmobileW)
		$vmobile = true;

	$(window).resize(function (e) {
		if (window.innerWidth >= $vmobileW && !$vmobile) {
			$vmobile = true;
			$sync1.trigger("destroy.owl.carousel");
			$sync2.trigger("destroy.owl.carousel");
		}
		else if (window.innerWidth < $vmobileW && $vmobile) {
			$vmobile = false;
			$sync1.owlCarousel({
				mouseDrag: false,
				margin: 68,
				loop: false,
				touchDrag: true,
				nav: false,
				dots: false,
				autoWidth: true,
				items: 1
			});

			$sync2.owlCarousel({
				mouseDrag: false,
				touchDrag: true,
				nav: false,
				dots: true,
				items: 1
			});

			$sync1.find(".active").first().addClass("current");

			$sync2.on("changed.owl.carousel", function (e) {
				$sync1.trigger("to.owl.carousel", e.item.index);
				$sync1.find(".current").removeClass("current");
				$sync1.find(".owl-item").eq(e.item.index).addClass("current");
				if ($firstLoad) {
					setTimeout(function () {
						$sync1.trigger("refresh.owl.carousel");
						$firstLoad = false;
					}, 300);
				};
			});

			$sync1.on("changed.owl.carousel", function (e) {
				$sync2.trigger("to.owl.carousel", e.item.index);
			});


			$sync1.find("li a").click(function (e) {
				var $this = $(this).closest(".owl-item").index();
				$sync2.trigger("to.owl.carousel", $this);
			});
		}
	}).resize();


	// Add remove class when window resize finished
	var $resizeTimer;

	$(window).on("resize", function (e) {
		if (!$("body").hasClass("window-resizing"))
			$("body").addClass("window-resizing");
		clearTimeout($resizeTimer);
		$resizeTimer = setTimeout(function () {
			$("body").removeClass("window-resizing");
		}, 250);
	});

	// Eq height of heading
	function eqHeightHeading() {
		$(".link-block-2-column").each(function () {
			var $this = $(this).find(".eqHeight > h4");
			$this.css("height", "auto");
			var HeightArray = 0; var i = 0; var max = 0;
			$this.each(function () {
				HeightArray = $(this).height();
				max = Math.max(max, HeightArray);
			});
			$this.each(function () {
				$(this).height(max);
			});
		});
	}
	setTimeout(function () {
		eqHeightHeading();
	}, 10);

	$(window).resize(function () {
		eqHeightHeading();
		setTimeout(function () {
			eqHeightHeading();
		}, 10);
	});



	// eqHeight
	function eqHeight() {
		$('[data-type="eqHeight"]').each(function () {
			var $this = $(this).find(".eqHeight");
			$this.css("height", "auto");
			var HeightArray = 0; var i = 0; var max = 0;
			$this.each(function () {
				HeightArray = $(this).height();
				max = Math.max(max, HeightArray);
			});
			$this.each(function () {
				$(this).height(max);
			});
			$(this).addClass("loaded")
			if ($(".download-block-carousel").length)
				$(".download-block-carousel").trigger("refresh.owl.carousel");
		});
	};

	setTimeout(function () {
		eqHeight();
	}, 10);

	$(window).resize(function () {
		eqHeight();
		setTimeout(function () {
			eqHeight();
		}, 10);
	});





	// Logo Slider
	$(".logo-slider").owlCarousel({
		autoHeight: false,
		responsive: {
			0: {
				autoWidth: true,
				margin: 48
			},
			768: {
				items: 3,
				margin: 22
			},
			1024: {
				items: 4,
				margin: 16
			},
			1440: {
				items: 4,
				margin: 56
			}
		},
		mouseDrag: false,
		touchDrag: true,
		nav: false,
		responsiveRefreshRate: 10,
		dots: true
	});


	// Download Block Carousel
	$(".download-block-carousel").owlCarousel({
		autoHeight: true,
		mouseDrag: false,
		nav: false,
		responsiveRefreshRate: 1,
		dots: true,
		touchDrag: true,
		responsive: {
			0: {
				autoWidth: true,
				margin: 25
			},
			768: {
				items: 3,
				margin: 24
			},
			1024: {
				items: 3,
				margin: 32
			},
			1440: {
				items: 3,
				margin: 93
			}
		}
	});


	// Add Remove class on show and hide accordian
	var $classAddTimer;
	$(".faq-block .inner-accordion .collaps-btn").click(function () {
		var $this = $(this);
		clearTimeout($classAddTimer);
		$classAddTimer = setTimeout(function () {
			if (!$this.hasClass("collapsed"))
				$this.siblings('p').addClass("demi").closest(".card-header").addClass('open');
			else
				$this.siblings('p').removeClass("demi").closest(".card-header").removeClass('open');
		}, 10);
	});


	// Notification remove
	$(".notification-close").click(function (e) {
		$("body").addClass("notification-hidden");
	});

	// Push Body content down while notification show	
	function setHeader() {
		var $mt = $(".notification-bar").innerHeight();
		if (!$("body").hasClass("notification-hidden")) {
			$(".header-outer, .header").css({ "margin-top": $mt });
			$(".main-navigation, .header .submenu, .header .close-submenu").css({ "top": $mt });
		}
	};

	var setHeaderResize;
	setHeader();
	$(window).resize(function () {
		setHeader();
		clearTimeout(setHeaderResize);
		setHeaderResize = setTimeout(function () {
			setHeader();
		}, 230);
	});

	// Filter fixed on top in desktop
	$(window).scroll(function () {
		var $this = $(".filter-dropdown-wrapper");
		if ($this.length) {
			if ($this.offset().top - $(".header-outer").innerHeight() <= $(window).scrollTop()) {
				$this.find(".filter-dropdown-outer").addClass('fixed');
			} else {
				$this.find(".filter-dropdown-outer").removeClass('fixed');
			}
		}
	});


	// Add class for touch and non touch devices
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		$("body").addClass("touch");
	} else {
		$("body").addClass("no-touch");
	}


	// iOS Device Header issue when focus on input	
	// if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
	// 	$("input[type='text']").focus(function(){			
	// 		$("body").addClass("input-focused");
	// 		$(".header").css({position:"absolute", top:$("body").scrollTop(), "margin-top":0});
	// 		$(".notification-bar").css({position:"absolute"});
	// 	});
	// 	$("input[type='text']").blur(function(){			
	// 		var $mt = $(".notification-bar").innerHeight();
	// 		$(".header").removeAttr("style").css({"margin-top":$mt});			
	// 		$(".notification-bar").removeAttr("style");
	// 		setTimeout(function(){
	// 			$("body").removeClass("input-focused");
	// 		}, 100);
	// 	});

	// 	$("body").scroll(function(){
	// 		if($("body").hasClass("input-focused")){
	// 			$(".header").css({top:$("body").scrollTop()});
	// 		}
	// 	});
	// };


	// Add tooltip
	$('[data-toggle="tooltip"]').tooltip();

	// Cms Data class added
	$(".cms-data").find("div").addClass("cms-data");

	// Manage class to collapse when show or hide
	$(".my-calculator #info-accordion .card").on('show.bs.collapse', function () {
		$(this).addClass("open");
		$(this).find(".disable-collapse").removeClass("disable-collapse");
	});
	$(".my-calculator #info-accordion .card").on('hide.bs.collapse', function () {
		$(this).removeClass("open");
	});

	// Show Edit Mode
	$(".my-calculator .expense-block .yearly-expense-listing .btn-edit, .my-calculator .expense-block .edit-expense-block .edit-expense-action-btns .btns .btn").click(function (e) {
		e.preventDefault();
		var $this = $(this).closest('li');
		var $headerH = $(".header").innerHeight();
		if (!$("body").hasClass("notification-hidden"))
			$headerH = $headerH + $(".notification-bar").innerHeight();

		$this.siblings('li').find(".edit-expense-block").stop(true, true).slideUp();
		$this.find(".edit-expense-block").stop(true, true).slideToggle(function () {
			$("html, body").animate({ scrollTop: ((($(".widget:first").offset().top * -1) + $this.offset().top - 5) - $headerH) + parseInt($(".widget:first").css("marginTop")) }, 300);
		});
	});

	// RAT Block Widget Show Hide
	$(".rat-block-inner .bottom-btn").click(function () {
		$(".rat-block").hide();
		$(".success-block").show();
	});

	// Manage Classes for steps
	$(".btn-next-step").click(function (e) {
		var $card = $(this).closest(".card");
		$(".delete-child-block.disabled").removeClass("disabled");
		$card.addClass("data-added").find(".card-header-top").addClass("show-action");
		if ($card.hasClass("edit-mode")) {
			e.stopPropagation();
			$card.removeClass("edit-mode").find(".collapse").collapse("hide");
		}
	});

	// Prevent Open collaps
	$('.card-header .plus-icon[data-toggle="collapse"]').click(function (e) {
		if ($(this).closest(".card-header").hasClass("disable-collapse"))
			e.stopPropagation();
	});


	// Edit Mode Setting
	$(".my-calculator .action-btns a.edit-link").click(function () {
		$(this).closest(".card").addClass("edit-mode");
	});

	// Edit approve
	$(".edit-approve-btn").click(function (e) {
		e.preventDefault();
		$("#info-accordion").find(".card.edit-mode").find(".collapse").collapse("show");
	});

	// Edit denied 
	$(".edit-denied-btn").click(function (e) {
		e.preventDefault();
		$("#info-accordion").find(".card.edit-mode").removeClass("edit-mode");
	});

	// On esc Key remove EDIT class
	$(document).keydown(function (e) {
		if (e.keyCode === 27)
			$(".card.edit-mode").removeClass("edit-mode");
	});


	// Expand total description
	$(".total-block .expand-total-description").click(function (e) {
		e.preventDefault();
		var $block = $(this).closest(".total-block");
		if (!$block.hasClass("open")) {
			$block.addClass("open").find(".total-description").stop(true, true).slideDown();
			if ($(window).innerWidth() < 1024) {
				$block.find(".share-btn-outer").stop(true, true).slideDown();
			}
			else {
				$block.find(".share-btn-outer").css("display", "block");
			}
		}
		else {
			$block.removeClass("open").find(".total-description").stop(true, true).slideUp();
			if ($(window).innerWidth() < 1024) {
				$block.find(".share-btn-outer").stop(true, true).slideUp(function () {
					$block.find(".share-btn-outer").removeAttr("style");
				});
			}
			else {
				$block.find(".share-btn-outer").removeAttr("style");
			}
		}
	});

	// On expand page scroll to top in Mobile
	$("#info-accordion .card").on("shown.bs.collapse", function () {
		var $this = $(this);
		var $headerH = $(".header").innerHeight();
		if (!$("body").hasClass("notification-hidden"))
			$headerH = $headerH + $(".notification-bar").innerHeight();
		$("html, body").animate({ scrollTop: ((($(".widget:first").offset().top * -1) + $this.offset().top) - $headerH - 4) + parseInt($(".widget:first").css("marginTop")) }, 300);
	});

	// Custom confirm Modal
	function is_touch_device() {
		try {
			document.createEvent("TouchEvent");
			return true;
		} catch (e) {
			return false;
		}
	}
	$(".custom-alert-btn").click(function (e) {
		if (/iPhone|iPad|iPod|Macintosh/i.test(navigator.userAgent) && is_touch_device()) {
			var $this = $(this);
			e.preventDefault();
			$("#custom-alert-modal").find(".redirect-to-other-page-btn").attr("href", $this.attr("href"));
			$("#custom-alert-modal").modal("show");
		}
	});


	// Add class in selectpicker when required
	$(".my-calculator .custom-select-input").on('loaded.bs.select', function (e, clickedIndex, isSelected, previousValue) {
		$(this).find(".dropdown-toggle").addClass("bs-placeholder");
	});

	$(".my-calculator .custom-select-input").on('changed.bs.select', function (e, clickedIndex, isSelected, previousValue) {
		if (clickedIndex == 0)
			$(this).find(".dropdown-toggle").addClass("bs-placeholder");
		else
			$(this).find(".dropdown-toggle").removeClass("bs-placeholder");
	});

	// Show or Hide dropdown 
	function getChildListingWidth() {
		var $width = 0;
		$(".child-listing-outer").removeClass("show-dropdown");
		$(".child-listing-outer .child-listing").find("li").each(function () {
			$width = $width + $(this).outerWidth(true);
		});

		if ($width > ($(".child-listing-outer .child-listing").innerWidth() + 20))
			$(".child-listing-outer").addClass("show-dropdown");

	};
	getChildListingWidth();
	$(window).resize(function () {
		getChildListingWidth();
	});


	// Modal show hide Header set
	$('.modal').on('show.bs.modal', function (e) {
		$(".header").css({ transition: "none", marginLeft: -($(window).outerWidth(true) - $("body").innerWidth()) / 2 });
	});
	$('.modal').on('hidden.bs.modal', function (e) {
		$(".header").css({ marginLeft: "" });
		setTimeout(function () {
			$(".header").css({ transition: "" });
		});
	});

	// Add Class to body once page load
	setTimeout(function () {
		$("body").addClass("page-loaded");
	}, 100);


});

