/* swiper */
var swiper = new Swiper(".mySwiper", {
    loop:true,
	loopedSlides: 1,
    centeredSlides: true,
    speed:700,
    autoplay: {
        delay: 4000,
        disableOnInteraction: true
    }
});

/* web gnb */
$(".gnb").on("mouseover", function () {
    $('.gnbBg').addClass('on');
})
$(".gnb").on("mouseleave", function () {
    $('.gnbBg').removeClass('on');
});

/* subPage tab */
let tabBtn = $(".tabMenu > ul > li")
$(tabBtn).on("click" , function (e) {
    let item = $(".item")

    e.preventDefault()
    $(tabBtn).removeClass('on')
    $(this).addClass('on')
    
    let idx = $(tabBtn).index(this)
    $(item).removeClass('on')
    $(item).eq(idx).addClass('on')
})

/* mobile Gnb */
let hamburgerBtn = $(".hamburgerBtn");
let closeBtn =$(".closeBtn")
let mobileGnb = $(".mobileGnb");
let mobileGnbBg = $(".mobileGnbBg");

$(hamburgerBtn).on("click" , function () {
    $(mobileGnb).addClass("on")
    $(mobileGnbBg).addClass("on")
});

$(closeBtn).on("click" , function () {
    $(mobileGnb).removeClass("on")
    $(mobileGnbBg).removeClass("on")
});

$(mobileGnbBg).on("click" , function () {
    $(mobileGnb).removeClass("on")
    $(mobileGnbBg).removeClass("on")
});

let menuOpenBtn = $(".menuOpenBtn");
$(menuOpenBtn).on("click" , function (e) {
    e.preventDefault()
    $(this).toggleClass("on")

    let subMenu = $(this).next();
    if($(this).hasClass("on")) {
        $(subMenu).css("height", subMenu[0].scrollHeight + "px");
    } else {
        $(subMenu).css("height", "");
    }
})

/* compMap height 조절 */
let companyMap = $("#compMap iframe")

let mapHeightCalc = () => {
    let mapHeight = companyMap.width() * 0.5
    companyMap.height(mapHeight)
}
mapHeightCalc()
window.addEventListener('resize',mapHeightCalc)


/* comunity > notice */
let noticeToggleBtn = $(".noticeItem .title > p > a")

$(noticeToggleBtn).on('click',function() {
    let noticeTitle = $(this).parent().parent()
    let noticeContent = $(noticeTitle).next()
    $(noticeTitle).toggleClass('on')

    if($(noticeTitle).hasClass('on')) {
        $(noticeContent).css('height' , noticeContent[0].scrollHeight + 'px')
    } else {
        $(noticeContent).css('height' , "")
    }
})
