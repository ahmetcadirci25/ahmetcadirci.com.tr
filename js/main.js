---
layout: null
---
$(document).ready(function() {
    $("a.blog-button").click(function(a) {
        $(".panel-cover").hasClass("panel-cover--collapsed") || (currentWidth = $(".panel-cover").width(),
        currentWidth < 960 ? ($(".panel-cover").addClass("panel-cover--collapsed"),
        $(".content-wrapper").addClass("animated slideInRight")) : ($(".panel-cover").css("max-width", currentWidth),
        $(".panel-cover").animate({
            "max-width": "530px",
            width: "40%"
        }, 400, swing = "swing", function() {})))
    }),
    window.location.hash && "#blog" == window.location.hash && $(".panel-cover").addClass("panel-cover--collapsed"),
    "/" !== window.location.pathname && "/index.html" !== window.location.pathname && $(".panel-cover").addClass("panel-cover--collapsed"),
    $(".btn-mobile-menu").click(function() {
        $(".navigation-wrapper").toggleClass("visible animated bounceInDown"),
        $(".btn-mobile-menu__icon").toggleClass("icon-list icon-x-circle animated fadeIn")
    }),
    $(".navigation-wrapper .blog-button").click(function() {
        $(".navigation-wrapper").toggleClass("visible"),
        $(".btn-mobile-menu__icon").toggleClass("icon-list icon-x-circle animated fadeIn")
    })
});
