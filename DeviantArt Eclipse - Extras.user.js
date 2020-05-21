// ==UserScript==
// @name         DeviantArt Eclipse - Extras
// @namespace    http://tampermonkey.net/
// @description  Redesign
// @author       Isi-Daddy
// @include      https://www.deviantart.com/*
// @include      https://www.deviantart.com/notifications/watch/*
// @version 1.0
// @grant          none
// @require http://code.jquery.com/jquery-3.4.1.min.js
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require https://greasyfork.org/scripts/5392-waitforkeyelements/code/WaitForKeyElements.js?version=115012

// ==/UserScript==

/* timestamp*/
waitForKeyElements (
    "time",
    klassentest
);

function klassentest (subj) {
    var time = subj.attr("datetime").replace("T", " ").slice(0, -5);
    subj.append("<div class='time'>" + time + "</div>");
    subj.append("<div class='after'></div>");

    $(".time").css({
        "visibility" : "hidden",
        "position" : "absolute",
        "color" : "#d6ded4",
        "top": "-26px",
        "border": "1px solid #5c5c5c",
        "padding": "3px 10px",
        "margin-left": "-20px",
        "background" : "#475c4d"
    });

    $(".after").css({
        "visibility":"hidden",
        "width": "0",
        "height": "0",
        "border-left": "5px solid transparent",
        "border-right": "5px solid transparent",
        "border-top": "5px solid #475c4d",
        "position" : "absolute",
        "top": "-5px",
        "margin-left": "30px"
    });

    subj.mouseenter(function(event)
    {
        event.stopPropagation()
        $(this).children().addClass("show");
        $(".time.show, .after.show").css({"visibility": "visible"});
    }).mouseleave(function(event)
    {
        event.stopPropagation()
        $(this).children().removeClass("show");
        $(".time,.after").css({"visibility": "hidden"});
    })
}
