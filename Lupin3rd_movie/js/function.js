/*img 스크롤 이벤트*/
$(function(){
   	$('.history>.his_bg').parallax({ speed: 0.5, axis: 'y' });
   	$('.main_top').parallax({ speed: 0.5, axis: 'y' });    
    
/*
custom parllax event -  나중에 써먹어보아요
    $('.img-parallax').each(function(){
      var img = $(this);
      var imgParent = $(this).parent();
      function parallaxImg () {
        var speed = img.data('speed');
        var imgY = imgParent.offset().top;
        var winY = $(this).scrollTop();
        var winH = $(this).height();
        var parentH = imgParent.innerHeight();


        // The next pixel to show on screen      
        var winBottom = winY + winH;

        // If block is shown on screen
        if (winBottom > imgY && winY < imgY + parentH) {
          // Number of pixels shown after block appear
          var imgBottom = ((winBottom - imgY) * speed);
          // Max number of pixels until block disappear
          var imgTop = winH + parentH;
          // Porcentage between start showing until disappearing
          var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
        }
        img.css({
          top: imgPercent + '%',
          transform: 'translate(-50%, -' + imgPercent + '%)'
        });
      }
      $(document).on({
        scroll: function () {
          parallaxImg();
        }, ready: function () {
          parallaxImg();
        }
      });
    });
    */
});



/*동영상 슬라이드*/
$(function(){
  var $container=$('.tvcm>.video>.video_slides>.video_wrap');
  var $indicator=$('.tvcm>.list>li>a');
  var nowIdx=0;


function movFn(){
    /*indicator 활성화*/
    $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
    $container.stop().animate({
       left:-960*nowIdx 
    },800,'easeInOutCubic');
}

    $indicator.on('click',function(evt){
       evt.preventDefault(); 

        nowIdx=$indicator.index(this);
        movFn();
    });
});