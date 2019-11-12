$(function(){

	
var $mnu = $(".gnb a");
var mnuIdx = Math.floor(Math.random()*5);
var $indicatorOne=$('.history-slides-pagination>li>a');
var $containerOne=$('.history-slides>.history-slides-container');
var nowIdx=0; //인덱스
//메뉴바 이동
$mnu.eq(mnuIdx).parent().addClass('on');


  //각 article의 top값
  var arrTopVal = [];//빈 배열변수

  $(".cont").each(function (idx) {
    arrTopVal[idx] = $(this).offset().top;
  });

  function pageAni(topVal) {//0, 1000, 1845, 2645, 3245

  $("html,body").stop().animate({
  scrollTop: topVal  
  });

  }


  //메뉴에 대한 click 이벤트 구문
  $mnu.on("click", function (evt) {
    evt.preventDefault();
	  
    mnuIdx = $mnu.index(this);//0~4

	  
    pageAni(arrTopVal[mnuIdx]);
  });

	
	//컨텐츠 내용이 화면에 출력 완료된 시점에 실행.
	$(window).on('load',function(){
		pageAni(arrTopVal[mnuIdx]);
	});

	//스크롤 높이값에 따른 메뉴 활성화.
	
	$(window).on('scroll',function(){
			
		var scrollTop=$(window).scrollTop(); //현재 scrolltop값을 구해온다
		//console.log('scrollTop= ',scrollTop);
		
		for(var i=0;i<5;i++){
			if(scrollTop>=arrTopVal[i]){
		 	$mnu.eq(i).parent().addClass('on').siblings().removeClass('on'); 
			}
		}

	});
//첫번째 배너
	function moveFn(){
		$indicatorOne.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
		
		$containerOne.stop().animate({left:-900*nowIdx},500);
		
	}
	
	
	//indicator 클릭 이벤트
	$indicatorOne.on('click',function(evt){
			evt.preventDefault();
			nowIdx=$indicatorOne.index(this);
			moveFn();
		});
	setInterval(function(){
		
		if(nowIdx<5){
		   nowIdx++;
		   }else{
		   nowIdx=0;
		   }
		moveFn();
	},2000,'easeInOutCubic');

	
//두번째 배너
	var $thmbs=$('.thmbs>li>a');
    
    $thmbs.on('click',function(event){
        event.preventDefault();
        var src=$(this).attr('href');
        
        $('.screen').css({
           backgroundImage:'url('+src+')'
        });
        $('.screen>a').text(cont);
    });
	
//thumbs 클릭시 내용 나오기
	var $cover=$('.album-thmbs>li>a');
	var $list=$('.album-list>.list');


	Idx=[];
	//index 값
	
		$cover.on('click',function(event){
			event.preventDefault();
			$list.eq(Idx).fadeOut();
			Idx=$cover.index(this);
			$list.eq(Idx).fadeIn(function(){$list.addClass('on').siblings().removeClass('on')});
			
	});	

});
	

