// ==UserScript==
// @name         DeviantArt Eclipse - Extras
// @namespace    http://tampermonkey.net/
// @description  Redesign
// @author       Isi-Daddy
// @include      https://www.deviantart.com/
// @include      https://www.deviantart.com/*
// @version      1.1.14
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


//feedback
var noteCount = '';
if($("button._76cOQ._1jO0k").find("span").hasClass("_2g-3V")){
    noteCount = '<span class="_2g-3V">' + $("._3ykoX._32NlD._1DiCV span._2g-3V").text()+  '</span>' ;
}
$("button._76cOQ._1jO0k").remove();
$("div._3ykoX._32NlD._1DiCV").append('<a class="_76cO _1jO0k" href="https://www.deviantart.com/notifications/notes/"><span><span class="_1MJER _3N3is _3wBuq"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path fill-rule="evenodd" d="M19.914 4a1 1 0 011 1v12.586a1 1 0 01-.293.707l-1.414 1.414A1 1 0 0118.5 20h-15a.5.5 0 01-.5-.5 1 1 0 01.4-.8L5 17.5l.02-11.089a1 1 0 01.29-.703l1.396-1.411A1 1 0 017.417 4h12.497zM9 11a1 1 0 100 2 1 1 0 000-2zm4 0a1 1 0 100 2 1 1 0 000-2zm4 0a1 1 0 100 2 1 1 0 000-2z"></path></svg></span>'+noteCount+'<span class="_2IZ0h">Chat</span></span></a>');
var theColorIs = $('._1jO0k').css("color");
$("._1MJER._3N3is._3wBuq svg").css("fill", theColorIs);
$("._1MJER._3N3is._3wBuq").css({
      "margin-bottom": "-10px"
    });


//chat
var noteCountChat = '';
if($("button._6bR9h._29ksA").find("span").hasClass("_1XPtL")){
    noteCountChat = '<span class="_1XPtL">' + $("._3Po3V._3-z6A.Ha0AC span._1XPtL").text()+  '</span>' ;
}
$("button._6bR9h._29ksA").remove();
$("div._3Po3V._3-z6A.Ha0AC").append('<a class="_6bR9h _29ksA" href="https://www.deviantart.com/notifications/notes/"><span><span class="_2Ae1S _2JjnE _2fqBI"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path fill-rule="evenodd" d="M19.914 4a1 1 0 011 1v12.586a1 1 0 01-.293.707l-1.414 1.414A1 1 0 0118.5 20h-15a.5.5 0 01-.5-.5 1 1 0 01.4-.8L5 17.5l.02-11.089a1 1 0 01.29-.703l1.396-1.411A1 1 0 017.417 4h12.497zM9 11a1 1 0 100 2 1 1 0 000-2zm4 0a1 1 0 100 2 1 1 0 000-2zm4 0a1 1 0 100 2 1 1 0 000-2z"></path></svg></span>'+noteCountChat+'<span class="_1xfU3">Chat</span></span></a>');
var theColorIs = $('.iRyVV svg').css("color");
$("._2Ae1S._2JjnE._2fqBI svg").css("fill", theColorIs);
$("._2Ae1S._2JjnE._2fqBI").css({
      "margin-bottom": "-10px"
    });


//profile
var noteCountProfile = '';
if($("button._31n9h.rDcsd").find("span").hasClass("_1UHKo")){
    noteCountProfile = '<span class="_1UHKo">' + $("._3ZzBG._3_-De._2Bu5u span._1UHKo").text()+  '</span>' ;
}
$("button._31n9h.rDcsd").remove();
$("div._3ZzBG._3_-De._2Bu5u").append('<a class="_31n9h rDcsd" href="https://www.deviantart.com/notifications/notes/"><span><span class="_3HH04 _3s0_v YU6Gg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path fill-rule="evenodd" d="M19.914 4a1 1 0 011 1v12.586a1 1 0 01-.293.707l-1.414 1.414A1 1 0 0118.5 20h-15a.5.5 0 01-.5-.5 1 1 0 01.4-.8L5 17.5l.02-11.089a1 1 0 01.29-.703l1.396-1.411A1 1 0 017.417 4h12.497zM9 11a1 1 0 100 2 1 1 0 000-2zm4 0a1 1 0 100 2 1 1 0 000-2zm4 0a1 1 0 100 2 1 1 0 000-2z"></path></svg></span>'+noteCountProfile+'<span class="_3c9b0">Chat</span></span></a>');
var theColorIs = $('._21ei1 svg').css("color");
$("._3HH04._3s0_v.YU6Gg svg").css("fill", theColorIs);
$("._3HH04._3s0_v.YU6Gg").css({
      "margin-bottom": "-10px"
    });

$("button.ucOYB._1u2kK._1Q3Tp").remove();
var user = top.location.pathname.substring(1)
$("div.tdh7l").append('<a class="ucOYB _1u2kK _1Q3Tp" href="https://www.deviantart.com/notifications/notes/#to='+user.split('/')[0]+'">Note</a>');



//pictures
var noteCountPicture = '';
if($("button._3GQOh._2uHE2").find("span").hasClass("ytR2V")){
    noteCountPicture = '<span class="ytR2V">' + $(".Rfy8Q._2vTIN._3rpge span.ytR2V").text()+  '</span>' ;
}
$("button._3GQOh._2uHE2").remove();
$("div.Rfy8Q._2vTIN._3rpge").append('<a class="_3GQOh _2uHE2" href="https://www.deviantart.com/notifications/notes/"><span><span class="_1jxju _1UM_Z ysYD1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M19.914 4a1 1 0 011 1v12.586a1 1 0 01-.293.707l-1.414 1.414A1 1 0 0118.5 20h-15a.5.5 0 01-.5-.5 1 1 0 01.4-.8L5 17.5l.02-11.089a1 1 0 01.29-.703l1.396-1.411A1 1 0 017.417 4h12.497zM9 11a1 1 0 100 2 1 1 0 000-2zm4 0a1 1 0 100 2 1 1 0 000-2zm4 0a1 1 0 100 2 1 1 0 000-2z"></path></svg></span>'+noteCountPicture+'<span class="_1fSuN">Chat</span></span>');
var theColorIs = $('._1jxju svg').css("color");
$("._1jxju._1UM_Z.ysYD1 svg").css("fill", theColorIs);





