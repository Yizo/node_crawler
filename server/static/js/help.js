var list = []
var LIMIT = 5
var PAGE = 1		
var TYPE = 0

function applyMiddleware(en){
		var parmsUrl = en === 'cn' ? '/js/help.json' : '/js/help_en.json'
		$.ajax({
		type:"get",
		url: parmsUrl,
		async:true,
		success: function(data){
			list = data
			init(list, 0, PAGE, LIMIT)
		}
	});
}


/**
 * 返回指定页码的数据
 * @pageSize: 分页条数
 * @currentPage: 当前页码
 * @arr: 数据列
 * */
function pagination(pageSize, currentPage, arr) {
    var skipNum = (currentPage - 1) * pageSize;
    var newArr = (skipNum + pageSize >= arr.length) ? arr.slice(skipNum, arr.length) : arr.slice(skipNum, skipNum + pageSize);
    return newArr;
}			
/**
 * 初始化
 * @data: 显示的数据
 * @index: 类型
 * @page: 页码相关信息
 * @limit: 每页显示多少
 * 
 * */
function init(data, index, page, limit){
	var prevData = data[index]['items']
	var items = pagination(limit, page, prevData)					
	var elemts = ''
	var nav = ''	
	for (var i = 0; i < data.length; i++) {
		nav += '<li>'+data[i].type+'</li>'									
	}
	for(var j = 0; j<items.length; j++) {
		elemts += "<dl><dt><i>"+(j+1)+"</i><h3>"+items[j].title+"</h3></dt><dd><h4>"+items[j].content+"</h4></dd></dl>"			
	}					
	elemts += '<div class="u-page"><ul><li class="u-num1"><i>'+PAGE+'</i>/'+Math.ceil(prevData.length/LIMIT)+'</li><li class="u-lt"><i></i></li>'
	for(var k = 1; k<= Math.ceil(prevData.length/limit); k++) {						
		if (k == 1) {
			elemts += '<li class="z-page-active">1</li>'
		} else {
			elemts += '<li>'+k+'</li>'	
		}						
	}
	elemts += '<li class="u-rg"><i></i></li></ul></div>'
	$(".m-section2 .u-snav").html(nav)
	$(".m-section2 .u-ctn").html(elemts)
	bindClick()
}

function bindClick(){		
	$(".m-section2 .u-snav li").eq(0).addClass('z-active')
	$('.m-section2 .u-snav li').on('click', function(e){
		TYPE = $(this).index()
		init(list, TYPE, PAGE, LIMIT)		
		$('.m-section2 .u-snav li').eq(TYPE).addClass('z-active').siblings().removeClass('z-active')
		PAGE = 1
		changPage(TYPE, 1)	
	})			
	$('.m-section2 .u-page li').on('click', function(e){
		if ($(this).index() != 0) {			
			// 后退			
			if ($(this).hasClass('u-lt') && PAGE != 1) {
				PAGE--							
				$('.m-section2 .u-page li').eq(PAGE+1).addClass('z-page-active').siblings().removeClass('z-page-active')
				changPage(TYPE, PAGE)
			}		
			// 前进
			if ($(this).hasClass('u-rg') && PAGE != Math.ceil(list[TYPE]['items'].length/LIMIT)) {
				PAGE++
				$('.m-section2 .u-page li').eq(PAGE+1).addClass('z-page-active').siblings().removeClass('z-page-active')
				changPage(TYPE, PAGE)
			}
			if(!$(this).hasClass('u-num1') && !$(this).hasClass('u-lt') && !$(this).hasClass('u-rg')) {
				PAGE = parseInt($(this).html())
				$('.m-section2 .u-page li').eq(PAGE+1).addClass('z-page-active').siblings().removeClass('z-page-active')
				changPage(TYPE, PAGE)
			}
		}
	})
}

/**
 * 页码改变时
 * @index: 类型
 * @page: 页码
 * */
function changPage(index, currentPage){
	var items = pagination(LIMIT, PAGE, list[index]['items'])
	var elemts = ''
	$(".m-section2 .u-ctn dl").remove()
	for(var j = 0; j<items.length; j++) {
		var current = parseInt(currentPage - 1) * LIMIT + j + 1
		elemts += "<dl><dt><i>"+current +"</i><h3>"+items[j].title+"</h3></dt><dd><h4>"+items[j].content+"</h4></dd></dl>"			
	}										
	$('.m-section2 .u-ctn .u-page').before(elemts)
	$('.m-section2 .u-ctn .u-page .u-num1 i').text(PAGE)
}