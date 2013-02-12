// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

function geocoderService(txtFieldID, resultsFieldID, type)
{
    var txtInput = document.getElementById(txtFieldID);
    $.ajax({
        url: "/geocode",
        data: {
            "type": type,
            "url": encodeURI(txtInput.value)
        },
        success: function(resultData) {
            var resultsDiv = document.getElementById(resultsFieldID);
            resultsDiv.innerHTML = resultData;
        }
    });
}

$(document).ready(function() {
    $('div#thumb1').click(function(event){
        document.location = '/api';
    });
})

$(document).ready(function() {
    $('div#thumb2').click(function(event){
        document.location = '/api';
    });
})

$(document).ready(function() {
    $('div#thumb3').click(function(event){
        document.location = '/api';
    });
})

$(document).ready(function() {
    $('div#thumb4').click(function(event){
        document.location = '/pricing';
    });
})

/*
$(document).ready(function(){
    $('div.homeThumb').mouseover(function()
    {
        $(this).css("cursor","pointer");
        $(this).animate({width: "50%", height: "50%"}, 'slow');
    });

    $('div.homeThumb').mouseout(function()
    {
        $(this).animate({width: "28%"}, 'slow');
    });
})
*/