"use strict";
$.ajaxSetup({
    cache: !0
}), $.getScript("https://connect.facebook.net/en_US/sdk.js", function() {
    FB.init({
        appId: $(".facebook-share").data("app-id"),
        xfbml: !0,
        version: "v2.10"
    })
}), $(".facebook-share").click(function() {
    FB.ui({
        method: "share",
        hashtag: $(this).data("share-tags"),
        quote: $(this).data("share-quote"),
        href: $(this).data("share-url"),
        mobile_iframe: !0
    }, function() {})
});