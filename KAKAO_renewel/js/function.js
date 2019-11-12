//본문
$(function(){
	
	
	//header nav
	var $header=$('header');
	var $nav=$('header>.header_container>nav>.gnb>li');
	var $sub=$('.sub');
	var $lang=$('.header_container>nav>.lang>li>a');
	var scrollTop=0;
	var number=0;
	
	//slides
	
	var $slides=$('section>.main_slides>.slides-container>li');
	var $indicator=$('section>.main_slides>.slides-pagination>li>a');
	var $next=$('button.next');
	var $prev=$('button.prev');
	var nowIdx=0;
	var intervalKey=null;
	
	//함수
	function headerOn(){
		$('.header_container>.logo').css('background-image','url(images/logo_black.png)');
		$('.header_container>nav>.gnb>li>a>.link').css({backgroundPosition :'-155px 0'});
		$nav.children('a').css('color','#1e1e1e');		
		$lang.css('color','#1e1e1e');	
	}
	
	function headerOff(){
		$('.header_container>.logo').css('background-image','url(images/logo_white.png)');
		$('.header_container>nav>.gnb>li>a>.link').css('background-position','-175px 0');		
		$nav.children('a').css('color','#fff');		
		$lang.css('color','#fff');	
	}


	function changeNav(){	
//		number=parseInt($slides.index(nowIdx));
		if(nowIdx%2==0 && $header.height()>$(window).scrollTop()){
			headerOff();
		}else{
			headerOn();
		}
}	
	
	
	$header.on({
	  mouseenter: function() {

		$(this).addClass('on');
		headerOn();
	  },
	  mouseleave: function() {
		
		$(this).removeClass('on');
		headerOn();
		if($(this).height()>$(window).scrollTop()){
		$(this).removeClass('on');
		changeNav();
		}else{
		$(this).addClass('on');	
		headerOn();
		}  
	  }
	});
	
	//scroll 
	$(window).on('scroll',function(){
		scrollTop=$(this).scrollTop();
		
		if(scrollTop>$header.height()){
			$header.addClass('on');
			headerOn();
			
		}else{
			$header.removeClass('on');
			changeNav();
		}
		
	});
	

	
	$nav.on('mouseenter',function(){
		$(this).addClass('on');	
	});	
	
	$nav.on('mouseleave',function(){
		$sub.parent().removeClass('on');
			

	});
	


	
	function slideMov(){
		$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
		
		//이전 슬라이드 사라짐
		$slides.filter('.on').stop().fadeOut(1000).removeClass('on');
		
		//다음 슬라이드 나타남
		$slides.eq(nowIdx).stop().fadeIn(1000).addClass('on');
		
		
	}
	
	function nextIdx(){
		if(nowIdx<3){
			nowIdx++;
		}else{
			nowIdx=0;
		}		
		
	}
		
	//자동 재생, 자동 정지
	
	function autoPlay(){
	
	intervalKey=setInterval(function(){
		nextIdx();
		slideMov();
		changeNav();
	},3000);		
		
	}
	
	function autoStop(){
		clearInterval(intervalKey);
	}
	
		

		
	autoPlay();	
	
	//다음,이전 버튼
	$next.on('click',function(){
		autoStop();
		nextIdx();
		slideMov();
		changeNav();
		autoPlay();
	});
	$prev.on('click',function(){
		autoStop();
		if(nowIdx>0){
		   nowIdx--;
		   }else{
		   nowIdx=3;
		   }
		slideMov();
		changeNav();
		autoPlay();
	});	



});


	
//footer
$(function(){

	//about,site 메뉴
	var $aboutBtn=$('footer .about>li.mnu');
	var $siteBtn=$('footer .site>h3>a');
	var nowIdx=0;

	$aboutBtn.on('click focusout',function(evt){
		evt.preventDefault();
		nowIdx=$aboutBtn.index(this);
		$(this).children('.about-list').toggle();
		$('footer .about>li.mnu>a').eq(nowIdx).toggleClass('on').parent().toggleClass('on');
	});

	//site 메뉴

	$siteBtn.on('click focusout',function(evt){
		evt.preventDefault();
		$('.site-list').toggle();
		$('footer .site>h3>a>span').parent().toggleClass('on');
	});
});