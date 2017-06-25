
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



/*---------toggles main menus to be used on click hamburger at max-width 744px--------------*/



/*---toggles submenu on expanded widths----*/
function toggleSubmenu() {
    $(this).children("ul").toggleClass("submenu");
    console.log("added submenu");
    e.stopPropogation();
}

/*-----------toggles submenu-sm class for max-width: 744px-----*/

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

/*----remove .menu-respond class at max-width 744px----*/
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
}

function calcFrontPageHt(){
  if($(window).height()>$("#deb-main-img").height()){
    img_ht = $(window).height();
  } else {
    var img_ht = $("#deb-main-img").height();
  }
  var img_width = $("#deb-main-img").width();
  var logo_ht = $("img#logo-main-img").height();
  /*have to include nav because fixed and therefore removed from dom*/
  var body_content_ht = img_ht - logo_ht;
  var body_content_width = width - img_width + 50;
  console.log("bodyContent: " + body_content_ht);
  console.log("logoHeight:" + logo_ht);
  if (ifwidth >= 745) {
    $("main.front-page").css("height", img_ht+"px");
    $(".body-content").css({"height": body_content_ht + "px", "top": logo_ht+10+"px", "width": body_content_width+"px"});
  }
}



//scrolling functions

function defineScrollbar() {
  bodycontent = $(".body-content").get(0);
  if(ifwidth >= 744){
    scrollbar = Scrollbar.init(bodycontent,{
      thumbMinSize: 50
    });
  }
}

/*using scroll to to navigate to an id appended with "anchor"*/
function anchorBodyContent($id){
  var anchor = "";
  // scrollbar = window.scrollbar
  var to = $id + "-anchor";
  var $to = "#" + $id + "-anchor";
  anchor = document.getElementById(to);

  if (ifwidth >= 744) {
    $(window).scrollTo(0);
    scrollbar.scrollIntoView(document.getElementById(to), {
      offsetTop: 0,
      alignToTop: true,
      onlyScrollIfNeeded: true
  });
  } else {
    $(window).scrollTo($to, {
        offset: -56,
        duration:800
      });
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
