  var width = $(window).width();
$(document).ready(function() {
    var timer
    getTestimonials();

    addSubmenuLi();

    calcFrontPageHt();

    // Scrollbar.initAll({
    //   thumbMinSize: 10
    // });

    console.log("pathname: " + window.location.pathname);
    localStorage.setItem("width", width);
    stored_width = localStorage.getItem("width");
    console.log("stored width: " + stored_width)




  /** Open the drawer when the menu icon is clicked.
     */
    $("#menu").on("click", function(e){
      $(".nav").toggleClass("menu-respond");
      e.stopPropogation();
    });


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
        $(".body-content-div").scrollTop(0);
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

    });/*back to top scrolling*/





    /*need to store the navigation id in local storage and then recall it. If element_id is null than don't do anything. only execute anchorBodyContent if there is and element_id which would indicate that user selected menu item. then reset element_id*/
    element_id = localStorage.getItem("element_id");
    if(element_id == null){
      console.log("element id is null");
    } else {
      console.log(element_id);
      anchorBodyContent(element_id);
      element_id = null;
      localStorage.setItem("element_id", element_id);
    }

    /*if website is in production change window.location.pathname = "/"*/
    /*if website is on drd_client then pathname = client_portal/client_websites/bmb.com/index.php */
    $('.scroll-to').click(function() {
      $this = $(this);
      $id = $this.attr("data-anchor");
      console.log("data-attribute: " + $id);
      localStorage.setItem("element_id", $id);
      if(window.location.pathname!="/"){
        window.location.pathname = "/";

      } else {
        console.log($id);
        anchorBodyContent($id);

      }
        });
}); /* end of document ready*/

    /*---reloads window when width changes only ---- */
    $(window).on('resize orientationchange', function() {

      if ($(this).width() != width) {
        window.location.reload();
        calcFrontPageHt();
      }
      /*calcMainPosition();*/
    });
