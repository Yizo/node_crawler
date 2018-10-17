$(function(){
	$('.m-section2 ul li').on('mouseenter', function(){
		var index = $(this).index()
		var item = $(this).find('.u-wrap .u-icon')	
		var item_img = $(this).find('.u-bg')		
		switch (index){
			case 0:
				item.attr('src', '/images/z_windows.png')
				item_img.attr('src', '/images/windows_bg_a.png')
				break;
			case 1:
				item.attr('src', '/images/z_mac.png')
				item_img.attr('src', '/images/Mac_bg_a.png')
				break;
			case 2:
				item.attr('src', '/images/z_ios.png')
				item_img.attr('src', '/images/iOS_bg_a.png')
				break;
			case 3:
				item.attr('src', '/images/z_andriod.png')
				item_img.attr('src', '/images/Android_bg_a.png')
				break;							
			default:
				break;
		}
	}).on('mouseleave', function(){
		var index = $(this).index()
		var item = $(this).find('.u-wrap .u-icon')
		var item_img = $(this).find('.u-bg')
		switch (index){
			case 0:
				item.attr('src', '/images/windows.png')
				item_img.attr('src', '/images/windows_bg.png')
				break;
			case 1:
				item.attr('src', '/images/mac.png')
				item_img.attr('src', '/images/Mac_bg.png')
				break;
			case 2:
				item.attr('src', '/images/ios.png')
				item_img.attr('src', '/images/iOS_bg.png')
				break;
			case 3:
				item.attr('src', '/images/andriod.png')
				item_img.attr('src', '/images/Android_bg.png')
				break;							
			default:
				break;
		}					
	})
//	$("#header li").eq(1).on('click', function(){  
//		var scroll_offset = $(".m-section2").offset();
//		$("html,body").animate({scrollTop: scroll_offset.top - 10}, 500);
//	})
	$('.m-section2 li .i-a2').on('mouseenter', function(){
		$(this).parent().siblings('.i-rq').css('opacity', '1')
	}).on('mouseleave', function(){
		$(this).parent().siblings('.i-rq').css('opacity', '0')
	})


	$("img.lazy").lazyload({
	  placeholder : "/images/grey.gif",
	  effect: "fadeIn",
	  threshold: 100
	});
})

/**
 * 大图片懒加载
 * @img_arr: 图片地址数组,绝对地址,
 * @callback: 成功回调
 * */
function preloading(img_arr, callback) {
	  var nums = img_arr.length;
	  var start = 0;
	  for (var i in img_arr) {
	    var img = new Image()
	    img.src = img_arr[i];
	    (function (j) {
				if (img.complete) {
					return false;
				}
	      img.onload = function () {
	        start++;
	        console.log((start / nums) * 100 + '%')
	        if (start == nums) {	        	
	        	callback()
	        }
	      };
	      img.onerror = function () {
	        start++;
	      }
	    })(i);
	  }
}

var h_div1 = document.getElementById('potato')
var h_hvttop = 300;
window.onscroll = function () {
	HoverTreeMove(h_div1, h_hvttop)
	//显示信息
	var h_scrollTop = document.documentElement.scrollTop || document.body.scrollTop;//滚动的距离
	};
	function HoverTreeMove(obj,top)
	{
	var h_scrollTop = document.documentElement.scrollTop || document.body.scrollTop;//滚动的距离
	var h_buchang = 20;
	if (obj.offsetTop < h_scrollTop + top - h_buchang)
	{
	obj.style.top = obj.offsetTop + h_buchang + "px";
	setTimeout(function () { HoverTreeMove(obj, top); }, 100);
	}
	else if (obj.offsetTop > h_scrollTop + top + h_buchang)
	{
	obj.style.top = (obj.offsetTop - h_buchang) + "px";
	setTimeout(function () { HoverTreeMove(obj, top); }, 100);
	}
	else {
	obj.style.top = h_scrollTop + top + "px";
	}
}
HoverTreeMove(h_div1, 300)