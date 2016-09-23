$(document).ready(function () {
	PopupGalleryPhoto();
	$('.menu_main .menutree > ul > li > a').append('<span class="down"></span>');	
	$(".newletter_footer .newsletterform .labemail").addClass('fa fa-envelope-o');
	
	$(".List_Articel .warp:nth-child(2) .single_blog .Avarta").removeClass("Avarta");
	$(".List_Articel .warp:nth-child(5) .single_blog .Avarta").removeClass("Avarta");
	$(".List_Articel .warp:nth-child(7) .single_blog .Avarta").removeClass("Avarta");
	$(".List_Articel .warp:nth-child(10) .single_blog .Avarta").removeClass("Avarta");
	$(".List_Articel .warp:nth-child(12) .single_blog .Avarta").removeClass("Avarta_tal");
	$(".List_Articel .warp:nth-child(2) .single_blog > div").addClass("Avarta_tal");
	$(".List_Articel .warp:nth-child(5) .single_blog > div").addClass("Avarta_tal");
	$(".List_Articel .warp:nth-child(7) .single_blog > div").addClass("Avarta_tal");
	$(".List_Articel .warp:nth-child(10) .single_blog > div").addClass("Avarta_tal");
	$(".List_Articel .warp:nth-child(12) .single_blog > div").addClass("Avarta_tal");

	$(".gui_cau_hoi .formbuilder ul li.ho_ten input").attr("placeholder", "Họ vA  tA�n");
	$(".gui_cau_hoi .formbuilder ul li.email input").attr("placeholder", "Email");
	$(".gui_cau_hoi .formbuilder ul li.dien_thoai input").attr("placeholder", "Điện thoại");
	$(".gui_cau_hoi .formbuilder ul li.tieu_de_cau_hoi input").attr("placeholder", "TiA�u đề cA�u hỏi");
	$(".gui_cau_hoi .formbuilder ul li.noidung_cauhoi textarea").attr("placeholder", "Nội dung cA�u hỏi");
	
	$(".menu_main .menutree > ul > li.gioithieu > a").removeAttr("href");
	$(".menu_main .menutree > ul > li.tintuc > a").removeAttr("href");
	$(".menu_main .menutree > ul > li.media > a").removeAttr("href");
	
	$(".PL_Acticel_FQA ul li div").click(function(){
		var _ul = $(this).next("ul");
		var _li = $(this).parent();
		if(_ul.length >0 && _ul.is(":hidden")){
			_li.parent("ul").find("ul").slideUp();
			_ul.slideDown();
		}
		else {
			_ul.slideUp();
		}
	});
});
$(window).load(function(){
		$('.List_Articel .Avarta_tal').imagefit({	
				mode : 'outside',
				force : 'true',
				halign : 'center',
				valign : 'middle'					
		});				
		$('.slider-avatar .zoomie').imagefit({	
				mode : 'outside',
				force : 'true',
				halign : 'center',
				valign : 'middle'					
		});
		
		$('.Product_Xemnhanh .default_ava').imagefit({	
				mode : 'outside',
				force : 'true',
				halign : 'center',
				valign : 'middle'					
		});	
		$('.slider-avatar .item.avata').imagefit({	
				mode : 'outside',
				force : 'true',
				halign : 'center',
				valign : 'middle'					
		});			
		$('.slider-avatar-thumb .avata').imagefit({	
				mode : 'outside',
				force : 'true',
				halign : 'center',
				valign : 'middle'				
		});

	$('.articlebox').hover(
		function() 
		{	
			$(this).addClass('active');
			$('.articlebox.active .box-om-testimo').css({display:'block'});
			$('.articlebox.active .box-om-testimo').stop().animate({top:'0%'},{queue:false,duration:400});
		}, 
		function() 
		{
			$(this).removeClass('active');
			$('.box-om-testimo').css({display:'none'});
			$('.box-om-testimo').stop().animate({top:'100%'},{queue:false,duration:400});

		}
	)
	$('.productbox').hover(
		function() 
		{	
			$(this).addClass('active');
			$('.productbox.active .box-om-testimo').css({display:'block'});
			$('.productbox.active .box-om-testimo').stop().animate({top:'0%'},{queue:false,duration:400});
		}, 
		function() 
		{
			$(this).removeClass('active');
			$('.box-om-testimo').css({display:'none'});
			$('.box-om-testimo').stop().animate({top:'100%'},{queue:false,duration:400});

		}
	)	
	
});
var PopupGalleryPhoto = function(){
	$("a.photoClick").click(function(e){
		e.preventDefault();
		$.ajax({
			type : "GET",
			cache : false,
			url : $(this).attr('href'),
			success: function(data) {
				var arr = [];
				var _data = data.split("[|-|]");
				if(_data.length > 1){
					for(var i = 1; i<= _data.length - 1;i++){
						var $arr = _data[i].split("[-]");
						var item = {};
						item.href = $arr[0];
						item.title = $arr[1];
						arr.push(item);
					}
					function formatTitle(title, currentArray, currentIndex, currentOpts) {
						return '<div id="title">' + (title && title.length ? '' + title + '<span id="position-title">' : '' ) + (currentIndex + 1) + '/' + currentArray.length + '</span></div>';
					}
					var timer;
					$.fancybox.open(arr,{
						autoPlay:true,
						padding: 5,
						margin: 5,
						playSpeed: 4000,
						nextEffect : 'none',
						prevEffect : 'none',
						padding    : 0,
						helpers    : {
							title : null,
							thumbs : {
								width  : 75,
								height : 50,								
								source : function( item ) {
									return item.href;
								}
							}
						}
					});
				}
						
			}
		}); 
		return false;
	 });
}
/*-- Contact Form --*/
contactForm = function(id){
	if($(id).size() > 0){
		var Init = function(){
			$("input[type='text'],textarea",id).each(function(){
				if($(this).val()== ""){
					$(this).prev().show();
				}
			});
		}
		Init();
		$("input[type='text'],textarea").on("focus",function(){
			if($(this).val() == ""){
				$(this).prev().hide();
			}
		});
		$("input[type='text'],textarea").on("focusout",function(){
			if($(this).val() == ""){
				$(this).prev().show();
			}
		});
		$("label",id).on("click",function(){
			$(this).next().trigger("focus");
		});
		$(".reset",id).on("click",function(){
			$("input[type='text'],textarea",id).each(function(){
				$(this).val("").trigger("focusout");				
			});
		});
	}
}

/*-- End  Contact Form --*/
