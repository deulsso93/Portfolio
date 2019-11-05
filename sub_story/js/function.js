//초입부

$(function(){
	$('.story_home').height($(window).height()); //story_home배경 높이
	$.stellar({
      horizontalScrolling: false,
      responsive: true,
      verticalOffset: 50		
	});	//배경 이미지 stellar
	$(window).on('load',function(){
	new WOW().init();//WOW 플러그인 연동		
	});
});






//배너
$(function(){
	var $slides=$('.slides>.slides-container>li');
	var $indicator=$('.slides>.slides-pagination>li>a');
	var nowIdx=0;
	
	var intervalKey;
	
	
	
	//슬라이드 fade 함수
	function slideMove(){
		$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
		
		//이전 슬라이드 사라짐
		$slides.filter('.on').stop().fadeOut(1000).removeClass('on');
		//다음 슬라이드가 나타남
		$slides.eq(nowIdx).stop().fadeIn(1000).addClass('on');
		
	}
	
	//자동 슬라이드
	intervalKey=setInterval(function(){
		if(nowIdx<3){
		   nowIdx++;
		   }else{
		   nowIdx=0;
		   }
			slideMove();
	},3500);
	
});