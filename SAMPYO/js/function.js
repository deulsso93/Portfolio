
// header - menu, section - main slide
$(function(){
  //var
  var $mainMnu = $('header nav>.gnb>li');
  var $subMnu = $('.sub');

  var $container = $('section>#slides>.slides-container');
  var $indicator = $('section>#slides>.slides-pagination li>a');
  var $play = $('section>#slides>.slides-btn');//누르면 일시정지로 바뀌어야함.on
  var $prev = $('section>#slides>.prev');
  var $next = $('section>#slides>.next');
  var intervalKey = null;

  var nowIdx = 0;
  
  //function
  function slideMove(){
    $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
    $container.stop().animate({left:-(nowIdx*940)});
  }

  function nextIdx(){
    if(nowIdx<2){
      nowIdx++;
    }else{
      nowIdx = 0;
    }
  }

  function autoPlay(){
    intervalKey = setInterval(function(){
      nextIdx();
      slideMove();
    },2000);
  }

  function autoStop(){
    clearInterval(intervalKey);	  
  }

  //event
  $mainMnu.on('mouseenter',function(){
    nowIdx = $mainMnu.index(this);

    $mainMnu.eq(nowIdx).find('.sub').show();
  });

  $mainMnu.on('mouseleave',function(){
    $subMnu.hide();
  }); //end of mainMnu

  $('header nav>.gnb>li>a').focus(function(){
    $('.sub').stop().slideUp();
    $(this).parent().find('.sub').stop().slideDown();
  });


  $indicator.on('click',function(event){
    event.preventDefault();
    nowIdx = $indicator.index(this);

    autoStop();
    slideMove();
    $play.removeClass('on');
  }); //end of slide indicator

  $('#slides').on('mouseenter',function(){
    $prev.stop().animate({left:0}).show();
    $next.stop().animate({right:0}).show();
  });

  $('#slides').on('mouseleave',function(){
    $prev.stop().animate({left:-42}).hide();
    $next.stop().animate({right:-42}).hide();
  });
  
  $prev.on('click',function(){
    autoStop();

    if(nowIdx>0){
      nowIdx--;
    }else{
      nowIdx = 2;
    }

    slideMove();
    $play.removeClass('on');
  });

  $next.on('click',function(){
    autoStop();

    nextIdx();
    slideMove();
    $play.removeClass('on');
  }); //end of slide next/prev

  $play.on('click',function(){ //on == pause
    if($play.hasClass('on')==true){
      autoStop();
      $play.removeClass('on');
    }else{
      autoPlay();
      $play.addClass('on');
    }
  }); //end of slide play;

  autoPlay();
});


//나머지
$(function(){

	var $stop=$('a.stp');
	var $play=$('a.ply');
	var $slides=$('.cont2_slides>ul>li');
	var $indicator=$('.cont2_slides>ul>li>a');
	nowIdx=0;
	
	
	//삼표인 슬라이드

	
	
	var IntervalKey=null;
	
	function autoPlay(){
		
		intervalKey=setInterval(function(){
			if(nowIdx<1){
				nowIdx++;
			}else{
				nowIdx=0;
				}

				$slides.filter('.on').stop().fadeOut(1000).removeClass('on');
				$slides.eq(nowIdx).stop().fadeIn(1000).addClass('on');
			
		
		},2000);
			$('a').addClass('on');
	}
	function autoStop(){
		clearInterval(intervalKey);
	}
	
	autoPlay();
	
	$play.on('click',function(evt){
		evt.preventDefault();
		
		$slides.filter('.on').stop().fadeOut(300).removeClass('on');
		$slides.eq(nowIdx).stop().fadeIn(300).addClass('on');
		autoPlay();
	});
	$stop.on('click',function(evt){
		evt.preventDefault();
		autoStop();
		$('a').removeClass('on');
	});
	$indicator.on('click',function(evt){
		evt.preventDefault();
		autoStop();
		if(nowIdx<1){
				nowIdx++;
			}else{
				nowIdx=0;
				}

				$slides.filter('.on').stop().fadeOut(500).removeClass('on');
				$slides.eq(nowIdx).stop().fadeIn(500).addClass('on');
		
		
	});
			//패밀리사이트
		$('footer>ul>li:nth-child(4)>a').on('click',function(evt){
			evt.preventDefault();
			$('footer>nav').stop().toggle();
		});

});


