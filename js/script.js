// 屏幕适配
(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (clientWidth > 750) {
                clientWidth = 750;

            }
            docEl.style.fontSize = clientWidth / 75 * 10 + "px";
            console.log(clientWidth)
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

//实例化
var loading = $('.loading');
loading.addClass('fadeOut'); //没实例化完之前不让其滑动
var mySwiper = new Swiper('.swiper', {
    // autoplay: false,
    updateOnImagesReady: true, //当所有的内嵌图像（img标签）加载完成后Swiper会重新初始化
    lazyLoading: true, // 设为true开启图片延迟加载
    direction: 'vertical',
    initialSlide: 0,
    updateOnImagesReady: true, //加载完成后Swiper会重新初始化
    lazyLoadingInPrevNext: true, //将延迟加载应用到最接近的slide的图片
    progress: true,
    slideActiveClass: 'active', //给每一个当前的块添加一个class
    lazyLoading: true,
    onSlideChangeStart: function(swiper) {}
})
setTimeout(function() {
    loading.remove();
}, 1000);

// var wrapper = $('.wrapper');
// var btn = $('.lookUp');
// btn.on('click', function() {
//     wrapper.removeClass('swiper-no-swiping');
//     mySwiper = new Swiper('.swiper', {
//         autoplay: 1500,
//         updateOnImagesReady: true, //当所有的内嵌图像（img标签）加载完成后Swiper会重新初始化
//         lazyLoading: true, // 设为true开启图片延迟加载
//         direction: 'vertical',
//         initialSlide: 0,
//         updateOnImagesReady: true, //加载完成后Swiper会重新初始化
//         lazyLoadingInPrevNext: true, //将延迟加载应用到最接近的slide的图片
//         progress: true,
//         slideActiveClass: 'active', //给每一个当前的块添加一个class
//         lazyLoading: true,
//         onSlideChangeStart: function(swiper) {}
//     })
//     //实例化
//     var loading = $('.loading');
//     loading.addClass('fadeOut'); //没实例化完之前不让其滑动
//     setTimeout(function() {
//         loading.remove();
//     }, 1000);


// })
//music
var music = document.getElementById('music');
if (!music.src) {
    music.src = "/Resource/swiperH5/mp3/mp3.mp3"
}
music.play(); // 默认播放

var onmusic = $('.music');
onmusic.on('click', function() {
    if ($(this).hasClass("play")) {
        $(this).removeClass("play");
        music.pause();
    } else {
        $(this).addClass("play");
        music.play();
    }
})

// pc样式兼容
/*var browser = {
 versions: function() {
  var u = navigator.userAgent,
  app = navigator.appVersion;
  return { //移动终端浏览器版本信息    
   mobile: !!u.match(/AppleWebKit.*Mobile/) || !!u.match(/Windows Phone/) || !!u.match(/Android/) || !!u.match(/MQQBrowser/),
   ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  };
 } (),
 language: (navigator.browserLanguage || navigator.language).toLowerCase()
}

if(!browser.versions.mobile){ 
    var BotImgs = document.querySelectorAll(".BotImg"); 

    for(var i =0;i<BotImgs.length;i++){
    }
}*/