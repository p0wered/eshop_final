let menu = 0;

function show_menu () {
    if (menu == 0) {
        $('.bi-x-lg').animate({'opacity': '0'}, 200);
        $('.bi-list').animate({'opacity': '1'}, 200);
        $('.navigation-mobile').animate({'opacity': '0'}, 200);
        setTimeout(function () {
            $('.navigation-mobile').css('display', 'none');
            $('.bi-x-lg').css('display', 'none')
            $('.bi-list').css('display', 'block')
        }, 200)
        menu = 1;
    }
    else {
        $('.bi-x-lg').css('display', 'block')
        $('.bi-list').css('display', 'none')
        $('.navigation-mobile').css('display', 'flex');
        $('.navigation-mobile').animate({'opacity': '1'}, 200);
        $('.bi-x-lg').animate({'opacity': '1'}, 200);
        $('.bi-list').animate({'opacity': '0'}, 200);
        menu = 0;
    }
}
