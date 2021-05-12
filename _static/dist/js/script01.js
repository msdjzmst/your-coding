//スムーススクロール
$('a[href^="#"]').click(function(){
  let href= $(this).attr("href");
  let target = $(href == "#" || href == "" ? 'html' : href);
  let position = target.offset().top - 94; //header-navの分引く
  $("html, body").animate({scrollTop:position}, 600, "swing");
  return false;
});

//page-top

$(function() {
  var pagetop = $('#js-scroll-fadein');
  //スクロールしたら
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
        pagetop.addClass("is-fadein");
      } else {
        pagetop.removeClass("is-fadein");
      }
  });
  pagetop.on("click",function () {
      $('body,html').animate({ //animate関数を参照
          scrollTop: 0
      }, 500); //0.5秒かけてトップへ移動
      return false; //aタグ遷移無効化用に記述。今回はdivなので正直なくてもいいです。
  });
});

//トグルメニュー


$(function() {
  $('dt').click(function(){
    $(this).next().slideToggle(300);
    $('dt').not($(this)).siblings('dd').slideUp(300);
  });
});

//contact
$(document).ready(function () {

  $('#form').submit(function (event) {
    var formData = $('#form').serialize();
    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScT_j4G7DM17xi42UdDCVkquzZ1M2uQCipaCfrn82qOsM8muA/formResponse",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          $(".end-message").slideDown();
          $(".submit-btn").fadeOut();
          window.location.href = "thanks.html";
        },
        200: function () {
          $(".false-message").slideDown();
        }
      }
    });
    event.preventDefault();
  });

});

$(document).ready(function () {

  const $submitBtn = $('#js-submit')
  $('#form input,#form textarea').on('change', function () {
    if (
      $('#form input[type="text"]').val() !== "" &&
      $('#form input[type="email"]').val() !== "" &&
      $('#form input[type="checkbox"]').val() !== "" &&
      $('#form #privacyCheck').prop('checked') === true
    ) {
      $submitBtn.prop('disabled', false);

    } else {
      $submitBtn.prop('disabled', true);
    }
  });

});

//burger-btn
$(function(){
	$('.burger-btn').on('click', function() {
      $('.burger-btn').toggleClass('cross');
      $('.slide-menu').slideToggle();
  });
  $('.slide-menu-nav__link').click(function(){
      $('.slide-menu').slideToggle();
      $('.burger-btn').toggleClass('cross');
  });
});
