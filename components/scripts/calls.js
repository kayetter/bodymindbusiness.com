$(document).ready(function () {
    var timer
    getTestimonials();

    addSubmenuLi();

    calcMainPosition();

    /*---reloads window when width changes only ---- */
    var width = $(window).width();
    $(window).resize(function () {
        if ($(this).width() != width) {
            window.location.reload();
            calcMainPosition();
        };
    });



    /*---re loads page on orientation or size change to update submenu classes ---------*/

    //    $(window).on("resize orientationChange", function () {
    //        location.reload();
    //    });


    /** Open the drawer when the menu icon is clicked.
     */
    $("#menu").click(toggleMenu);


    /*-----------event handlers for submenu------------*/

    $(".submenu-li").click(toggleSubmenu);
    $(".submenu-li ul").mouseout(function () {
        timeout(3000);
    });
    $(".smSubmenuLi").click(toggleSmSubmenu);


    /*  event handlers for submenu-sm   */

    $(".smSubmenuLi ul").mouseout(function () {
        timeout(4000);
        console.log("executed 4s");
    });
    $(".smSubmenuLi ul").mouseout(function () {
        timeout(4000);
        console.log("executed 4s");
    });

    $(".nav").mouseout(timeoutMenu);

    $("main").click(removeMenuClass);

    /*-----------selecting back-to-top button will send you to top-----------*/

    $(".back-to-top")
        .click(function () {
        $(window).scrollTop(0);
    });


    /* script for displaying back-to-top link as long as you are not at the bottom the back-to-top will be positioned at bottom of screen and will disapear after 6 seconds of no scrolling */

    $(window).scroll(function () {
        var footer = $("footer").height();
        var myHeight = $(window).scrollTop() + $(window).height() + footer;

        if (myHeight >= $(document).height()) {
            $("div.back-to-top").css({
                "bottom": footer + "px",
                "display": "block"
            });
        } else {

            /*------places a back to top link at bottom of screen when user scrolls ----*/
            $("div.back-to-top").css({
                "display": "block",
                "bottom": "0"
            });

            /*----I don't know how this works but basically it sets a timeout function so when user stops scrolling for 600ms the it will remove the back-to-top link*/
            clearTimeout($.data(this, 'scrollTimer'));
            $.data(this, 'scrollTimer', setTimeout(function () {
                $("div.back-to-top").css("display", "none");
            }, 6000));
        };
    });
}); /* end of document ready*/