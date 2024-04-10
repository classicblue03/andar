$(function () {
    // 탑 배너 슬라이드
    bannerSlide = new Swiper('.top-banner .banner-slide', {
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        }
    });

    // gnb
    $(window).scroll(function () {
        curr = $(this).scrollTop();
        console.log(curr);

        if (curr > 0) {
            $('.header .header-inner').addClass('fixed')
        } else {
            $('.header .header-inner').removeClass('fixed')
        }
    })
    // $(window).trigger('scroll');


    $('.gnb .btn-more').click(function (e) {
        e.preventDefault();
        $('.gnb').toggleClass('show');
        $('.gnb .nav-wrap').slideToggle();
    })


    // 서치버튼 open
    $('.header .btn-search').click(function (e) {
        e.preventDefault();
        $('.header .hidden-search').addClass('on');
    })

    // 서치버튼 close
    $('.header .btn-back').click(function (e) {
        e.preventDefault();
        $('.header .hidden-search').removeClass('on');
    })

    // 햄버거 메뉴 - 히든 슬라이드 메뉴
    $('.header .btn-menu').click(function (e) {
        e.preventDefault();
        $('.hidden-menu').addClass('on');
        $('body').addClass('hidden');
    })

    $('.hidden-menu .btn-close, .dimmed').click(function (e) {
        e.preventDefault();
        $('body').removeClass('hidden');
        $('.hidden-menu').removeClass('on')
    })


    $('.hidden-menu .nav-flex').click(function (e) {
        e.preventDefault();
        $(this).next().slideToggle();
        $(this).toggleClass('show');
    });


    // 메인슬라이드
    visualSlide = new Swiper('.visual-slide', {
        effect: 'fade',
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.pagination',
        }
    })

    // BEST 제품 탭메뉴
    var bestTab = $('.sc-best .tab-list .tab');

    $(bestTab).click(function (e) {
        e.preventDefault();

        target = $(this).data('target');

        $(bestTab).removeClass('active');
        $(this).addClass('active');

        $(target).addClass('active').siblings('.prd-wrap').removeClass('active');
    })

    // 쿠폰 슬라이드
    bannerSlide = new Swiper('.sc-banner .swiper', {
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.fraction',
            type: 'fraction'
        },
        navigation: {
            nextEl: '.btn-next',
            prevEl: '.btn-prev'
        }
    });

    // 레깅스, 세트 freemode    
    cateSlide = new Swiper(".sc-cate .cate-slide", {
        slidesPerView: 2.2,
        spaceBetween: 10,
        freeMode: true,
    });

    recomSlide = new Swiper(".recom-slide", {
        slidesPerView: 2,
        slidesPerColumn: 2,
        loop: true,
        slidesPerGroup: 2,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });


    // 스크롤 시 탑버튼 제어
    let lastScroll = 0;

    $(window).scroll(function () {
        curr = $(this).scrollTop(); //현재스크롤바의 위치
        target = $('.container').offset().top;

        if (curr < lastScroll) {
            $('.fixed-btn').removeClass('show');
        } else {
            $('.fixed-btn').addClass('show');
        }
        lastScroll = curr;
    });


    // 히든메뉴 오픈시 
    if ($('.hidden-menu').hasClass('on')) {
        $('.fixed-btn').addClass('tt');
    } else {
        $('.fixed-btn').removeClass('bb');
    }

    // 맨위로
    $('.fixed-btn a').click(function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    });

}); // end