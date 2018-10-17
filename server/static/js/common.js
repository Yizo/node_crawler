$('#header .m-nav li').eq(4).find('p span').off('click')
$('#header .m-nav li').eq(4).find('p span').on('click', function(){
	$(this).addClass('lang').siblings().removeClass('lang')
	var lang = $(this).html() === 'EN' ? 'en' : 'cn'
	SwitchLang(lang)
})


function SwitchLang(val) {
	var url = '/lang/'+val
	var data = {
        lang: val
	}
	$.ajax({
		type:"get",
		url:url,
		async:true,
        success:function(res) {
			window.location.reload(true);
        }
	})	
}