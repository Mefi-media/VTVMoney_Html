$(document).ready(function() {
// di chuyển lên đầu trang
    // Thẻ có data-gototop khi click vào sẽ luộn lên top
    // eg: <a href="javascript:;" data-gototop>Lên trên top</a>
    $('body').on('click', '*[data-gototop]', function(e){
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });

// Cuộn chuột
    /*
        Hiệu ứng cuộn xuống 1 id/class duy nhất nào đó trong trang
        data-scroll: id/class box muốn cuộn
        data-top: là một số sẽ đặt một khoảng cách top là giá trị
        eg: <a href="#id" data-scroll="#id" data-top="20">Click cuộn xuống</a>
    */
    $('body').on('click','*[data-scroll]',function(e) {
        e.preventDefault();
        id = $(this).data('scroll');
        offset_top = $(this).data('top');
        if (!check_empty(offset_top)) {
            offset_top = $(id).offset().top-offset_top;
        } else {
            offset_top = $(id).offset().top;
        }
        $('html, body').animate({scrollTop: offset_top}, 500);
    });
});
function openPopup(clickShowBtn, popupShow) {
    $(clickShowBtn).on('click',function(){
        $(popupShow).bPopup({
            speed: 450,
            transition: 'slideDown',
            zIndex:99999,
            onOpen: function() { 
                $(popupShow).css('visibility', 'visible'); 
            },
            onClose: function() { 
                $(popupShow).css('visibility', 'hidden'); 
            }
        });
    });
}
function closePopup(clickCloseBtn, popupClose) {
    $(clickCloseBtn).on('click' ,function() {
        $(popupClose).css('visibility', 'hidden');
        $(popupClose).bPopup().close();
    })
}
// Trả về true nếu rỗng
function check_empty(value) {
    if (value == null) {
        return true;
    } else if (value == 'null') { 
        return true;
    } else if (value == undefined) { 
        return true;
    } else if (value == '') { 
        return true;
    } else if(value == []) {
        return true;
    } else {
        return false;
    }
}
//show form search head mobile
$('body').on('click','*[data-showFormSearch]',function(e){
    $('.form-search-general').slideToggle();
});
$('body').on('click','*[data-showMenuMobile]',function(e){
    let status_menu = $(this).attr('data-showMenuMobile');
    if(status_menu == 'open') {
        $(this).attr('data-showMenuMobile','close');
        $(this).find('.icon').html('<img src="public/assets/image/icons/x-close-menu.png" alt="">');
        $('.menu-mobile').slideDown();
    }else if(status_menu == 'close') {
        $(this).attr('data-showMenuMobile','open');
        $(this).find('.icon').html('<img src="public/assets/image/icons/icon-menu-mb.png" alt="">');
        $('.menu-mobile').slideUp();
    }
    
});
$('.list-cate').owlCarousel({
    loop:false,
    dots:false,
    autoWidth:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            margin:0,
        },
        768:{
            items:3,
            nav:true,
            margin:15,
        },
        1000:{
            items:4,
            nav:true,
            margin:20,
        }
    },
    navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
});
$('.vlight-slides').owlCarousel({
    stagePadding: 20,
    loop:true,
    dots:false,
    responsive:{
        0:{
            items:2,
            nav:true,
            autoplay:true,
            margin:10,
        },
        768:{
            items:3,
            nav:true,
            autoplay:true,
            margin:15,
        },
        1000:{
            items:4,
            nav:true,
            autoplay:true,
            margin:20,
        }
    },
    autoplayTimeout:6000,
    navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
});