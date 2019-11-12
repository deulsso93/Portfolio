

//이벤트 발생

	var $windowW=$(window).width();	
	var chkmobile=false;

$(function(){
	var $nav=$('header>nav>.header_container>li');
	var $navH=$('header>nav');	
	var $sub=$('header>nav>.header_container>li>.sub');	
	var $btnNav=$('header>.btn_mnu>.btn-folded');
	var nowIdx=0;

	
	if($windowW<=1200){
		chkMobile = true;
		mobileEvent(); // mobile only
	}else{
		pcEvent(); // pc only
	}
	
			
	
function pcEvent(){
		$nav.on('mouseenter',function(){
			nowIdx=$nav.index(this);
			$sub.eq(nowIdx).stop().slideDown(200);

		});	
		$nav.on('mouseleave',function(){
			nowIdx=$nav.index(this);
			$sub.eq(nowIdx).stop().slideUp(200);

		});			
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
		
}	
	
	
//이벤트 클리어

function clearPc(){
 $nav.off('mouseenter');
 $nav.off('mouseleave');
 

	
}
	
function clearMobile(){
 $btnNav.off('click');	
 $nav.off('click');	
}

$(window).resize(function(){
		var $windowW=$(window).width();	
		if($windowW>1200 && chkmobile===true){
			chkmobile=false;
			clearMobile();
			pcEvent();

		}else if($windowW<=1200 && chkmobile===false){
			chkmobile=true;
			clearPc();
			mobileEvent();
		}	
	});
	

});

	

//slides	
$(function(){
	
//owl 슬라이드
$(".owl-carousel").owlCarousel({
	nav:true,
	loop: true, 
	 autoplay:true,
	 responsive:{ 
		 0:{ items:1,nav:true}, 
		 480:{ items:1,nav:false}, 
		 768:{ items:1,nav:false} 
	 }	
});
	$('.owl-next').click(function() {
		$('.slides-container').trigger('next.owl.carousel');
		});
	$('.owl-prev').click(function() {
		$('.slides-container').trigger('prev.owl.carousel');
		});	


});
