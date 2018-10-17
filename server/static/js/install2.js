$(function(){
	var WIDTH = $(document).width()
	var m_warpW = $(".m_warp").outerWidth(true)
	$('.m_conten').css({
		'height': $('.m_conten > div').eq(0).height() + 20 + 'px'
	})
	$('.main .m_header > div').on('click',function(){
		var index = $(this).index()	
		var div = $('.m_conten > div');
		$(this).addClass('active').siblings('div').removeClass('active')
		div.eq(index).css('opacity','1').siblings().css('opacity','0')
	})
			var sUserAgent = navigator.userAgent;
			var isAppleMobile = /iphone|ipod|ipad|Macintosh/i.test(sUserAgent.toLowerCase());
			var isAndroidMobile = /android/i.test(sUserAgent.toLowerCase());
			var LEFT = 0
			if(isAppleMobile || isAndroidMobile){
				LEFT = (WIDTH - m_warpW)/2 + 'px';
			}else{
				LEFT = (WIDTH - m_warpW)/2 + (m_warpW*0.05)/2 + 27 + 'px';
			}
setTimeout(function(){
		for(var i = 0; i < $('.icon').length; i++) {
		var y = $('.icon').eq(i).offset().top
		$('.icon').eq(i).data('y', y)

	}
	for(var i = 0; i < $('.icon1').length; i++) {
		var y = $('.icon1').eq(i).offset().top
		$('.icon1').eq(i).data('y', y)

	}
	for(var i = 0; i < $('.icon2').length; i++) {
		var y = $('.icon2').eq(i).offset().top
		$('.icon2').eq(i).data('y', y)
	}
	for(var i = 0; i < $('.icon3').length; i++) {
		var y = $('.icon3').eq(i).offset().top
		$('.icon3').eq(i).data('y', y)
	}	
},30)

	

	$(function() {
		for(var i = 0; i < $('.icon').length; i++) {
			(function(i) {
				$(".icon").eq(i).click(function() {
					$("html, body").animate({
						scrollTop: $(".img").eq(i).offset().top
					}, {
						duration: 500,
						easing: "swing"
					});
					return false;
				});
			})(i)
		}
		for(var i = 0; i < $('.icon1').length; i++) {
			(function(i) {
				$(".icon1").eq(i).click(function() {
					$("html, body").animate({
						scrollTop: $(".img1").eq(i).offset().top
					}, {
						duration: 500,
						easing: "swing"
					});
					return false;
				});
			})(i)
		}
		for(var i = 0; i < $('.icon2').length; i++) {
			(function(i) {
				$(".icon2").eq(i).click(function() {
					$("html, body").animate({
						scrollTop: $(".img2").eq(i).offset().top
					}, {
						duration: 500,
						easing: "swing"
					});
					return false;
				});
			})(i)
		}
		for(var i = 0; i < $('.icon3').length; i++) {
			(function(i) {
				$(".icon3").eq(i).click(function() {
					$("html, body").animate({
						scrollTop: $(".img3").eq(i).offset().top
					}, {
						duration: 500,
						easing: "swing"
					});
					return false;
				});
			})(i)
		}		
	})

	$(window).scroll(function() {
		//输出垂直的滚动距离
		var scrollY = $(this).scrollTop()
		for(var i = 0; i < $('.icon').length; i++) {
			var disY = $('.icon').eq(i).offset().top
			if(disY - scrollY < (30 * i)) {
				$('.icon').eq(i).css({
					position: 'fixed',
					left: LEFT,
					top: 30 * i
				})
			}

			if($('.icon').eq(i).data('y') - scrollY > (30 * 2 * i)) {
				$('.icon').eq(i).css({
					position: '',
					left: 0,
					top: 0
				})
			}
		}
		for(var i = 0; i < $('.icon1').length; i++) {
			var disY = $('.icon1').eq(i).offset().top
			if(disY - scrollY < (30 * i)) {
				$('.icon1').eq(i).css({
					position: 'fixed',
					left: LEFT,
					top: 30 * i
				})
			}

			if($('.icon1').eq(i).data('y') - scrollY > (30 * 2 * i)) {
				$('.icon1').eq(i).css({
					position: '',
					left: 0,
					top: 0
				})
			}
		}
		for(var i = 0; i < $('.icon2').length; i++) {
			var disY = $('.icon2').eq(i).offset().top
			if(disY - scrollY < (30 * i)) {
				$('.icon2').eq(i).css({
					position: 'fixed',
					left: LEFT,
					top: 30 * i
				})
			}

			if($('.icon2').eq(i).data('y') - scrollY > (30 * 2 * i)) {
				$('.icon2').eq(i).css({
					position: '',
					left: 0,
					top: 0
				})
			}
		}
		for(var i = 0; i < $('.icon3').length; i++) {
			var disY = $('.icon3').eq(i).offset().top
			if(disY - scrollY < (30 * i)) {
				$('.icon3').eq(i).css({
					position: 'fixed',
					left: LEFT,
					top: 30 * i
				})
			}

			if($('.icon3').eq(i).data('y') - scrollY > (30 * 2 * i)) {
				$('.icon3').eq(i).css({
					position: '',
					left: 0,
					top: 0
				})
			}
		}		
	});
		
})
