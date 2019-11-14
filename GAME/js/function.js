//wow
$(function(){

	$(window).on('load' , function(){
			new WOW().init();	
		});	
	
});

/*
   1. Start 버튼을 누르면 시작
   2. 15초후 게임 자동 종료
   3. 캐릭터의 좌표는 랜덤
      x : 70, 320, 570 (250)
      y : 80, 330, 580 (250)
	  
   4. 캐릭터를 클릭하면 점수획득 - 100점*2 1000점*1
   5. 두더지 이동시간은 사용자 입력
   
   score = 0;// 점수
   intervalID = null; //캐릭터 타이머
   
   #음향효과
   
   시작 후 : 나 잡아봐라!
   잡을때마다 : 으악 잡혔다!
   
*/


//게임

$(function(){
	var $char=$('.game>.frame');
	var intervalId=null;
	var intervalTime=900;
	var $comment=$('h2>span');
	var nowIdx=0;
	var $score=$('.score>.change');
	var score=0;
	
	
//함수

	//인덱스
	function Idx(){
		
		nowIdx = 1 + Math.floor(Math.random() * 3);
	}
	
	//캐릭터별 랜덤
	function randomchar(){
		Idx();
		$char.children('img').attr({
				'src': 'images/char_normal_'+nowIdx+'.png'
			});		
		
	}	
	
		

	//캐릭터 출몰
	
	function start(){
		clearInterval(intervalId);
		
		intervalId=setInterval(function(){
			
			$comment.text('나 잡아봐라!');
			randomchar();		
			
			var coordX = 70 + Math.floor(Math.random() * 3) * 260;//70, 320, 570
			var coordY = 80 + Math.floor(Math.random() * 3) * 260;//80, 330, 580

			$char.css({
				display : 'block',
				left : coordX,
				top : coordY
				
			}).stop().animate({
				top:coordY - 15
			},700,'easeInOutCubic').animate({
				top:coordY
			},250,'easeInOutCubic');
			
		},intervalTime);
		
	}
	
	//버튼 click
	
	$('button').on('click',function(){
		$char.hide();
		score=0; //점수 초기화
		$score.text('0000');
		start();
		setTimeout(function(){
			clearInterval(intervalId);
			$char.hide();
			$comment.text('다시 한번 도전해보는건 어때?');
			
		},15000);
		
	});
	
	//캐릭터 click
	$char.on('click',function(){
		

		
		if(nowIdx===1){
			score += 100;
		}else if(nowIdx===2){
			score += 100;
		}else{
			score += 1000;
		}		
		$score.text(score);
		$(this).css({
			cursor : "url(images/cursor_2.png),auto"
		});
		$comment.text('으악! 잡혔다!');
		$(this).children('img').attr({
			'src' : 'images/char_hit_'+nowIdx+'.png'
		
		});		
	});
	$char.on('mouseover',function(){
		$(this).css({
			cursor : "url(images/cursor_1.png),auto"
		});		
		
	});
});



