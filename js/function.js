//초기화
$(function(){
	
	$('.home').height($(window).height());//main 높이 
	$(window).on('load',function(){
		new WOW().init();//WOW 플러그인 연동		
	});
	$.stellar({
      horizontalScrolling: false,
      responsive: true,
      verticalOffset: 50		
	});	
});

//header(헤더)
$(function(){
	
	var arrContTop=[0]; //각 section의 offset().top 값을 저장.
	var $gnb=$('header>.header_container>.gnb>li>a');
	var nowIdx=0;
	var scrollTop=0;
	
	
	//section top값
	{ 
		$('section').each(function(){
		arrContTop.push($(this).offset().top);
		});
		//console.log('arrContTop = ', arrContTop); 
	
	}
	
	
	//스크롤바 
	$(window).on('scroll',function(){
		var scrollTop=$(this).scrollTop();
		
		for(var i=0;i<6;i++){
			if(scrollTop>=arrContTop[i] - 350){
				$gnb.eq(i).parent().addClass('on')
					.siblings().removeClass('on');
			}
		}
		
	});	
	//메인메뉴에 대한 click 이벤트
	$gnb.on('click',function(event){
		event.preventDefault();
		
		nowIdx=$gnb.index(this);
		
		$('html,body').stop().animate({
			scrollTop:arrContTop[nowIdx] - 135
			
		},800,'easeInOutCubic',function(){

		});
	});	
});

//section(본문)
$(function(){
	
	
	//portfolio_illust grid
        $(window).on('resize',function() {
            var options1 =
            {
                srcNode: 'img',             
                margin: '20px',            
                width: '360px',             
                max_width: '', 
                resizable: true,          
                transition: 'all 0' 
            }
/*			var options2 =
            {
                srcNode: 'img',             
                margin: '20px',            
                width: '320px',             
                max_width: '', 
                resizable: true,          
                transition: 'all 0' 
            }*/
				
            	$('.grid').gridify(options1);
			
			
        });	

	
	
	
	$('.merit').height($(window).height()); //aboutme_merit 높이

	$('.chart').on('inview',function(evt,visible){
		if(visible==true){
			$('.chart').easyPieChart({
				easing:'easeInOutCubic',
				animate:1500,
				barColor:'#f04d4e',
				trackColor:'#f2f2f2',
				scaleColor:'#f2f2f2',
				lineWidth:20,
				lineCap:'butt',
				size:190,
				onStep: function(from, to, percent) {
					this.el.children[0].innerHTML = Math.round(percent)+'%';}			
				});			
			}
				
		});//aboutme_skills의 차트 이벤트
	
	
	//portfolio_web 슬라이드
	var $container=$('.portfolio_slides>.portfolio_slides-container');
	var $indicator=$('.portfolio>.portfolio_slides>.portfolio-pagination>li>a');
	var nowIdx=0;
	var IntervalKey;
	
	
	function movFn(){
		
		//indicator 활성화
		$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
		$container.stop().animate({left:-1200*nowIdx},800);
	}
	
	//indicator 클릭이벤트
	$indicator.on('click',function(evt){
		evt.preventDefault();
		
		nowIdx=$indicator.index(this);
		movFn();
		
	});

	
	$('.story').height($(window).height()); //story 높이
	
	
	
	//기획안 lightbox
	
	var $lightbox=$('.lightbox');
	
	$('a.progress1').on('click',function(evt){
		evt.preventDefault();
		
		$lightbox.children('img').attr({
			src:'./MUNGU-LAND/plan/muguland_plan.jpg',
			alt:'문구랜드 기획안'
		});
		$('div.shadow').show();
		$('div.shadow').next().show();
		
	});
	$('a.progress2').on('click',function(evt){
		evt.preventDefault();
		
		$lightbox.children('img').attr({
			src:'./KAKAO_renewel/plan/kakao_renewel_plan.jpg',
			alt:'카카오 리뉴얼 기획안'			
			
		});
		$('div.shadow').show();
		$('div.shadow').next().show();		
		
	});	
	$('a.progress3').on('click',function(evt){
		evt.preventDefault();
		
		$lightbox.children('img').attr({
			src:'./ONEPAGE/plan/onepage_plan.gif',
			alt:'원페이지 FOOLS GARDEN기획안'
		});
		$('div.shadow').show();
		$('div.shadow').next().show();
		
	});	
	$('a.progress4').on('click',function(evt){
		evt.preventDefault();
		
		$lightbox.children('img').attr({
			src:'./GAME/plan/game_plan.jpg',
			alt:'두더지 게임 시안'
		});
		$('div.shadow').show();
		$('div.shadow').next().show();
		
	});			
	//닫힘
	$('div.shadow').on('click',function(){
			$lightbox.hide();
			$lightbox.prev().hide();
		
	});
	
	
});	

