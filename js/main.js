---
layout: null
---
$(docuent).ready(function(){$("a.blog-button").click(function(a){$(".panel-cover").hasClass("panel-cover--collapsed")||(currentWidth=$(".panel-cover").width(),currentWidth<960?($(".panel-cover").addClass("panel-cover--collapsed"),$(".content-wrapper").addClass("animated slideInRight")):($(".panel-cover").css("max-width",currentWidth),$(".panel-cover").animate({"max-width":"530px",width:"40%"},400,swing="swing",function(){})))}),window.location.hash&&"#blog"==window.location.hash&&$(".panel-cover").addClass("panel-cover--collapsed"),"/"!==window.location.pathname&&"/index.html"!==window.location.pathname&&$(".panel-cover").addClass("panel-cover--collapsed"),$(".btn-mobile-menu").click(function(){$(".navigation-wrapper").toggleClass("visible animated bounceInDown"),$(".btn-mobile-menu__icon").toggleClass("icon-list icon-x-circle animated fadeIn")}),$(".navigation-wrapper .blog-button").click(function(){$(".navigation-wrapper").toggleClass("visible"),$(".btn-mobile-menu__icon").toggleClass("icon-list icon-x-circle animated fadeIn")})});


// register the service worker if available
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then(function(reg) {
        console.log('Successfully registered service worker', reg);
    }).catch(function(err) {
        console.warn('Error whilst registering service worker', err);
    });
}

window.addEventListener('online', function(e) {
    // re-sync data with server
    console.log("You are online");
    Page.hideOfflineWarning();
    Arrivals.loadData();
}, false);

window.addEventListener('offline', function(e) {
    // queue up events for server
    console.log("You are offline");
    Page.showOfflineWarning();
}, false);

// check if the user is connected
if (navigator.onLine) {
    Arrivals.loadData();
} else {
    // show offline message
    Page.showOfflineWarning();
}

// set knockout view model bindings
ko.applyBindings(Page.vm);