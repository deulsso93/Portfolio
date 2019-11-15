

//이벤트 발생

	var $windowW=$(window).width();	
	var chkmobile=false;

$(function(){
	var $nav=$('header>nav>.header_container>li');
	var $navH=$('header>nav');	
	var $sub=$('header>nav>.header_container>li>.sub');	
	var $btnNav=$('header>.btn_mnu>.btn-folded');
	var nowIdx=0;
	var $img=$('#slides>.slides-container>div>a');
	
	
	
//이벤트 클리어
function clearPc(){
 $nav.off('mouseenter');
 $nav.off('mouseleave');
 

	
}
	
function clearMobile(){
 $btnNav.off('click');	
 $nav.off('click');	
}			
	
//이벤트 발생 (각자)	
function pcEvent(){
		$nav.on('mouseenter',function(){
			nowIdx=$nav.index(this);
			$sub.eq(nowIdx).stop().slideDown(200);

		});	
		$nav.on('mouseleave',function(){
			nowIdx=$nav.index(this);
			$sub.eq(nowIdx).stop().slideUp(200);

		});	
		clearMobile();
	}	

function mobileEvent(){

		$btnNav.on('click',function(evt){
			evt.preventDefault();
			$navH.stop().slideToggle(200);
			});
		$nav.on('click',function(evt){
			evt.preventDefault();
			nowIdx=$nav.index(this);
			$nav.eq(nowIdx).toggleClass('on');
			$sub.eq(nowIdx).stop().slideToggle(200);
			});		
		clearPc();
		
}	



	
if($windowW<1200){
		clearPc();
		mobileEvent(); // mobile only
	}else{
		clearMobile();
		pcEvent(); // pc only
	}	


$(window).on('resize',function(){
		var $windowW=$(window).width();	
		if($windowW>1200 && chkmobile===true){
			chkmobile=false;
			pcEvent();

		}else if($windowW<1200 && chkmobile===false){
			chkmobile=true;
			mobileEvent();
		}
	});

});



	


$(function(){

//top으로 가기

$('.navi>.navi_wrap>a.top').on('click',function(evt){
	evt.preventDefault();
	
	$('html, body').animate({
		'scrollTop' : 0
		
	},1000);
});	
	
//slides	
//owl 슬라이드
$(".owl-carousel").owlCarousel({
	loop: true, 
	 autoplay:true,
	 responsive:{ 
		 0:{ items:1}, 
		 480:{ items:1}, 
		 768:{ items:1}, 
		 1200:{ items:1} 
	
	}	
});



	$('.owl-next').click(function() {
		$('.slides-container1').trigger('next.owl.carousel');
		});
	$('.owl-prev').click(function() {
		$('.slides-container1').trigger('prev.owl.carousel');
		});	
	$('.owl-next').click(function() {
		$('.slides-container2').trigger('next.owl.carousel');
		});
	$('.owl-prev').click(function() {
		$('.slides-container2').trigger('prev.owl.carousel');
		});		


});
