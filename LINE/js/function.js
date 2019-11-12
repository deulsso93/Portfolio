//슬라이드

$(function(){
	var $indicator=$('.slides>.slides-pagination>li>a');
	var $slides=$('.slides>.slides-container>li');
	var $prev=$('button.prev');
	var $next=$('button.next');
	var nowIdx=0;
	var intervalKey;
	
	function fadeMov(){
		
		$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
		
		//on 클래스를 가진 li는 fadeOut과 동시에 on을 제거
		$slides.filter('.on').stop().fadeOut(1000).removeClass('on');
		
		//li자식들은 fadeIn 동시에 on을 추가
		$slides.eq(nowIdx).stop().fadeIn(1000).addClass('on');
		
		
	}
	
	function autoStop(){
		
		clearInterval(intervalKey);
	}
	
	function autoPlay(){
		
	intervalKey=setInterval(function(){
		nextIdx();
		fadeMov();
			
		},2000);
	}

	function nextIdx(){
		if(nowIdx<3){
		   nowIdx++;
		   }else{
		   nowIdx=0;
		   }
	}
	
	autoPlay();
/*	
	$indicator.on('click',function(evt){
		evt.preventDefault();
		//이번에 클릭한 indicator의 부모(li)가 .on이 없다면
		
		if($(this).parent().hasClass('on')==false){
			
			//인덱스 추출
			nowIdx=$indicator.index(this);
			
			$(this).parent().addClass('on')
				   .siblings().removeClass('on');
			
			//on 클래스를 가진 li는 fadeOut과 동시에 on을 제거
			$slides.filter('.on').stop().fadeOut(500).removeClass('on');

			//li자식들은 fadeIn 동시에 on을 추가
			$slides.eq(nowIdx).stop().fadeIn(500).addClass('on');
			}
			
	});//end of $indicator 클릭 이벤트
	*/
	$next.on('click',function(){
		autoStop();
		if(nowIdx<3){
		   nowIdx++;
		   }else{
		   nowIdx=0;
		   }
		fadeMov();
		autoPlay();
	});//end of $next 클릭 이벤트
	$prev.on('click',function(){
		autoStop();
		if(nowIdx>0){
			nowIdx--;
			}else{
			nowIdx=3;
			}
		fadeMov();
		autoPlay();
	});//end of $prev 클릭 이벤트	
});