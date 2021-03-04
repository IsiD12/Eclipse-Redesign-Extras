// ==UserScript==
// @name         DeviantArt Eclipse - Extras
// @namespace    http://tampermonkey.net/
// @description  Redesign
// @author       Isi-Daddy
// @include      https://www.deviantart.com/
// @include      https://www.deviantart.com/*
// @version      1.1.10
// @grant GM_getValue
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
    $("._3j4Pa").addClass("button");
    $(".button").css({
        "height" : "100px",
        "width" : "100px",
        "background" : "none"
    });

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
        //event.stopPropagation()
        $(this).children().addClass("show");
        $(".time.show, .after.show").css({"visibility": "visible"});
    }).mouseleave(function(event){
        //event.stopPropagation()
        $(this).children().removeClass("show");
        $(".time,.after").css({"visibility": "hidden"});
    });
}



var noteCount = '';
console.log("variable " + noteCount);
console.log($("button._3ARPi._1jO0k").find("span").hasClass("_2g-3V"));
if($("button._3ARPi._1jO0k").find("span").hasClass("_2g-3V")){

console.log($("button._3ARPi._1jO0k").find("span").hasClass("_2g-3V"));
    noteCount = '<span class="_2g-3V">' + $("span._2g-3V").text()+  '</span>' ;
}
//feedback
$("button._3ARPi._1jO0k").remove();
$("div._3ykoX._32NlD._1DiCV").append('<a class="_3ARPi _1jO0k" href="https://www.deviantart.com/notifications/notes/"><span><span class="_1MJER _3N3is _3wBuq"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M19.914 4a1 1 0 011 1v12.586a1 1 0 01-.293.707l-1.414 1.414A1 1 0 0118.5 20h-15a.5.5 0 01-.5-.5 1 1 0 01.4-.8L5 17.5l.02-11.089a1 1 0 01.29-.703l1.396-1.411A1 1 0 017.417 4h12.497zM9 11a1 1 0 100 2 1 1 0 000-2zm4 0a1 1 0 100 2 1 1 0 000-2zm4 0a1 1 0 100 2 1 1 0 000-2z"></path></svg></span>'+noteCount+'<span class="_2IZ0h">Chat</span></span></a>');


var noteCountChat = '';
if($("button._1W4CQ._29ksA").find("span").hasClass("_1XPtL")){
    noteCountChat = '<span class="_1XPtL">' + $("span._1XPtL").text()+  '</span>' ;
}
//chat
$("button._1W4CQ._29ksA").remove();
$("div._3Po3V._3-z6A.Ha0AC").append('<a class="_1W4CQ _29ksA" href="https://www.deviantart.com/notifications/notes/"><span><span class="_2Ae1S _2JjnE _2fqBI"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M19.914 4a1 1 0 011 1v12.586a1 1 0 01-.293.707l-1.414 1.414A1 1 0 0118.5 20h-15a.5.5 0 01-.5-.5 1 1 0 01.4-.8L5 17.5l.02-11.089a1 1 0 01.29-.703l1.396-1.411A1 1 0 017.417 4h12.497zM9 11a1 1 0 100 2 1 1 0 000-2zm4 0a1 1 0 100 2 1 1 0 000-2zm4 0a1 1 0 100 2 1 1 0 000-2z"></path></svg></span>'+noteCountChat+'<span class="_1xfU3">Chat</span></span></a>');

var noteCountProfile = '';
if($("button._2nRKR.rDcsd").find("span").hasClass("_1UHKo")){
    noteCountProfile = '<span class="_1UHKo">' + $("span._1UHKo").text()+  '</span>' ;
}
//profile
$("button._2nRKR.rDcsd").remove();
$("div._3ZzBG._3_-De._2Bu5u").append('<a class=" _2nRKR rDcsd" href="https://www.deviantart.com/notifications/notes/"><span><span class="_3HH04 _3s0_v YU6Gg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M19.914 4a1 1 0 011 1v12.586a1 1 0 01-.293.707l-1.414 1.414A1 1 0 0118.5 20h-15a.5.5 0 01-.5-.5 1 1 0 01.4-.8L5 17.5l.02-11.089a1 1 0 01.29-.703l1.396-1.411A1 1 0 017.417 4h12.497zM9 11a1 1 0 100 2 1 1 0 000-2zm4 0a1 1 0 100 2 1 1 0 000-2zm4 0a1 1 0 100 2 1 1 0 000-2z"></path></svg></span>'+noteCountProfile+'<span class="_3c9b0">Chat</span></span></a>');


$("button.ucOYB._1u2kK._1Q3Tp").remove();
var user = top.location.pathname.substring(1)
$("div.tdh7l").append('<a class="ucOYB _1u2kK _1Q3Tp" href="https://www.deviantart.com/notifications/notes/#to='+user.split('/')[0]+'">Note</a>');

