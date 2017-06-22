(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

/*----------add submenu class to lis with submenu depending on screen width and updates position of submenu---*/

function addSubmenuLi() {
    if ($("#menu").css("display") == "none") {
        $(".nav ul li:has(ul)").addClass("submenu-li");
        $(".submenu-li").each(updatePosition);
    } else {
        $(".nav ul li:has(ul)").addClass("smSubmenuLi");
        $(".smSubmenuLi").each(updatePositionSm);
    };
}



/*---------toggles main menus to be used on click hamburger at max-width 740px--------------*/



/*---toggles submenu on expanded widths----*/
function toggleSubmenu() {
    $(this).children("ul").toggleClass("submenu");
    console.log("added submenu");
    e.stopPropogation();
}

/*-----------toggles submenu-sm class for max-width: 740px-----*/

function toggleSmSubmenu() {
    $(this).children("ul").toggleClass("submenu-sm");
    console.log("you added submenu-sm class");
    e.stopPropogation();

}



/*--------Timeout function to remove menu after s seconds-----------*/
function timeout(s) {
    timer = setTimeout(function () {
        $(".submenu").removeClass('submenu');
        $(".submenu-sm").removeClass('submenu-sm');
        console.log("you executed timeout");
    }, s);
}

/*----remove .menu-respond class at max-width 740px----*/
function timeoutMenu() {
    timer = setTimeout(function () {
        $(".nav").removeClass("menu-respond");
        $(".submenu-sm").removeClass('submenu-sm');
        console.log("you executed timeout menu respond");
    }, 4000);
}

/*---------shows submenu to be used on hover----------------*/
function showSubmenu(e) {
    clearTimeout(timer);
    $(this).children("ul").addClass('submenu');
    e.stopPropogation();
}

/*-------------removes submenu and menu-respond classes--------------*/

function removeMenuClass() {
    $(".submenu-li ul").removeClass('submenu');
    $(".smSubmenuLi ul").removeClass('submenu-sm');
    $(".menu-respond").removeClass("menu-respond");
}



/*------updates position of DOM element relative to parent----------*/
function updatePosition() {
    var element = $(this).children("ul")
    var elePos = $(this).position();
    var top = elePos.top + $(this).height();
    var left = elePos.left;
    var docHt = $(document).height();
    $(element).css({
        "top": top + "px",
        "left": left + "px"
    });
    console.log("updated position for submenu-li");
}

function updatePositionSm() {
    var element = $(this).children("ul")
    var elePos = $(this).position();
    var top = elePos.top;
    var docHt = $(document).height();
    var left = 140;
    $(element).css({
        "top": top + "px",
        "left": left + "px"
    });
    console.log("YOU ARE FREE YOU ARE FREE YOU ARE FREE update the submenu position");
}

function calcFrontPageHt(){
  var width = $(window).width();
  var img_ht = $("#deb-main-img").height();
  var img_width = $("#deb-main-img").width();
  var logo_ht = $("img#logo-main-img").height();
  /*have to include nav because fixed and therefore removed from dom*/
  var body_content_ht = img_ht - logo_ht;
  var body_content_width = width - img_width+80;
  console.log("bodyContent: " + body_content_ht);
  console.log("logoHeight:" + logo_ht);
  if (width > 740) {
    var scrollbar = Scrollbar.init($(".body-content").get(0));
    console.log(scrollbar.getSize(scrollbar));

    $("main.front-page").css("height", img_ht+"px");
    $(".body-content").css({"height": body_content_ht + "px", "top": logo_ht+10+"px", "width": body_content_width+"px"});
  }
}

/*using scroll to to navigate to an id appended with "anchor"*/
function anchorBodyContent($id){
  var $to = "#" + $id + "-anchor";
  if ($(window).width() > 740) {
  // $(".body-content").scrollTo($to, {duration:800});
  // jQuery(window).scrollTo(0);
  } else {
    // jQuery(window).scrollTo($to, {
    //     // offset: -38,
    //     duration:800
    //   });
  }
}

function calcMainPosition() {
    var header = "";
    var nav = "";
    if ($("#logo").css("display") == 'none') {
        header = 0;
    } else {
        header = $("#logo").height();
    };
    if ($(window).width() < 679) {
        nav = 56;
    } else {
        var nav = $(".nav").height();
    };
    height = header + nav;
    console.log("nav height: " + nav)
    console.log("Header height: " + header)
    console.log("totalheight: " + height)
    $("main").css("padding-top", height + "px");
}

/*---------get JSON testimonials and filter --------------------*/
function getTestimonials() {

    $.getJSON("js/testimonials.json", function (data) {
        var template = $("#testimonialtpl").html();
        var carouseltpl = $("#carouseltpl").html();

        //filter data.testimonials records foe nested category and it returns an array array
        var ielem = $.grep(data.testimonials, (function (el) {
            return (el.category == 'individual');
        }));

        var telem = $.grep(data.testimonials, (function (el) {
            return (el.category == "team");
        }));

        //for mustache template to work need object key that contains array that looks original JSON data
        var individual = {
            testimonials: ielem
        };
        var team = {
            testimonials: telem
        };
        var html = Mustache.to_html(carouseltpl, data);
        var ihtml = Mustache.to_html(template, individual);
        var thtml = Mustache.to_html(template, team);

        //add individual testimonials to #i-carousel
        $("#i-carousel").html(ihtml);

        //add team testimonials to #t-carousel
        $("#t-carousel").html(thtml);

        $("#carousel").html(html);

        $("#carousel").cycle({
            fx: 'fade',
            pause: 1,
            next: '#next_btn',
            prev: '#prev_btn',
            speed: 1000,
            timeout: 5000,
            random: 1,
            fit: 0
        });
        console.log("is cycle working");
    }); //get JSON
} //fxn

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

},{}]},{},[1])