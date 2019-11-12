$(function () { //header

  var $gnb = $(".gnb>li");
  var $sub = $(".sub");

  $gnb.on("mouseenter", function () {
    var nowIdx = $gnb.index(this);
    $gnb.eq(nowIdx).addClass("on");
    $sub.hide().eq(nowIdx).fadeIn();
    $gnb.children("a").append("<span class='bar'></span>");
    var bar = $gnb.eq(nowIdx).find("span").first().width();

    $gnb.eq(nowIdx).find(".bar").css({
      "width": bar,
      "margin-left": -bar / 2
    }).fadeIn();
  });

  $gnb.mouseleave(function () {
    $gnb.removeClass("on");

    $gnb.find(".bar").remove();
    $sub.hide();
  });

});

$(function () { //section 메인 슬라이드 배너
  var $indicator = $('section>.mainSlides>.slides-pagination>li>a');
  // var $container = $('section>.mainSlides>.slides-container');
  var $slides = $('section>.mainSlides>.slides-container>li');
  var nowIdx = 0;
  var oldIdx = nowIdx;//이전 슬라이드 번호
  var intervalKey = null;

  var $btnPrev = $('section>.mainSlides>.prev');
  var $btnNext = $('section>.mainSlides>.next');

  //공동 함수
  // function moveFn() {
  //   $indicator.eq(nowIdx + 1).parent().addClass('on').siblings().removeClass('on');
  //   $container.stop().animate({ left: -940 * nowIdx }, 500);
  // }


  //indicator 클릭 이벤트
  $indicator.on('click', function (evt) {
    $(".btn_auto").removeClass("on");
    autoStop();

    evt.preventDefault();

    oldIdx = nowIdx;
    nowIdx = $indicator.index(this);


    if (nowIdx > oldIdx) {//오른쪽에서 이동

      //인디케이터 활성화
      $indicator.eq(nowIdx).parent().addClass("on")
        .siblings().removeClass("on");

      //보여질 슬라이드를 오른쪽으로 이동  
      $slides.eq(nowIdx).css({
        left: "100%",
        zIndex: 300
      })


      $slides.eq(nowIdx).stop().animate({
        left: 0
      }, function () {

        $(this).siblings().css({
          left: "100%"
        })

        $slides.eq(nowIdx).css({
          zIndex: 200
        })
      })

    } else if (nowIdx < oldIdx) {//왼쪽에서 이동

      //인디케이터 활성화
      $indicator.eq(nowIdx).parent().addClass("on")
        .siblings().removeClass("on");

      //보여질 슬라이드를 왼쪽으로 이동
      $slides.eq(nowIdx).css({
        left: "-100%",
        zIndex: 300
      })

      $slides.eq(nowIdx).stop().animate({
        left: 0
      }, function () {

        $(this).siblings().css({
          left: "-100%"
        })

        $slides.eq(nowIdx).css({
          zIndex: 200
        })
      });

    } else {

      return false;//함수종료

    }

    // moveFn();
  });

  //prev버튼 클릭 이벤트
  $btnPrev.on('click', function () {
    $(".btn_auto").removeClass("on");
    autoStop();

    if (nowIdx > 0) {
      nowIdx--;
    } else {
      nowIdx = 2;
    }

    //인디케이터 활성화
    $indicator.eq(nowIdx).parent().addClass("on")
      .siblings().removeClass("on");

    //보여질 슬라이드를 왼쪽으로 이동
    $slides.eq(nowIdx).css({
      left: "-100%",
      zIndex: 300
    })

    $slides.eq(nowIdx).stop().animate({
      left: 0
    }, function () {

      $(this).siblings().css({
        left: "-100%"
      })

      $slides.eq(nowIdx).css({
        zIndex: 200
      })
    });

  });

  //next버튼 클릭 이벤트
  $btnNext.on('click', function () {
    $(".btn_auto").removeClass("on");
    autoStop();

    if (nowIdx < 2) {
      nowIdx++;
    } else {
      nowIdx = 0;
    }

    //인디케이터 활성화
    $indicator.eq(nowIdx).parent().addClass("on")
      .siblings().removeClass("on");

    //보여질 슬라이드를 오른쪽으로 이동  
    $slides.eq(nowIdx).css({
      left: "100%",
      zIndex: 300
    })


    $slides.eq(nowIdx).stop().animate({
      left: 0
    }, function () {

      $(this).siblings().css({
        left: "100%"
      })

      $slides.eq(nowIdx).css({
        zIndex: 200
      })
    })

  });



  function autoPlay() {

    //자동 실행 setInterval()
    intervalKey = setInterval(function () {
      if (nowIdx < 2) {
        nowIdx++;
      } else {
        nowIdx = 0;
      }


      //인디케이터 활성화
      $indicator.eq(nowIdx).parent().addClass("on")
        .siblings().removeClass("on");

      //보여질 슬라이드를 오른쪽으로 이동  
      $slides.eq(nowIdx).css({
        left: "100%",
        zIndex: 300
      })


      $slides.eq(nowIdx).stop().animate({
        left: 0
      }, function () {

        $(this).siblings().css({
          left: "100%"
        })

        $slides.eq(nowIdx).css({
          zIndex: 200
        })
      })

    }, 3000);
  }

  autoPlay();


  function autoStop() {
    clearInterval(intervalKey);
  }

  $(".btn_auto").on("click", function (evt) {
    evt.preventDefault();

    if ($(this).hasClass("on")) {//재생중

      $(this).removeClass("on")
      autoStop();

    } else {//멈춰있는 중

      $(this).addClass("on")
      autoPlay();
    }
  });
});