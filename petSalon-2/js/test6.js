$(function(){
    'use strict';

    $('main').on({
        click: function(){
            $(this).addClass('red-bg');
        },
        mouseenter: function(){
            $(this).addClass('active');
        },
        mouseleave: function(){
            $(this).removeClass('active red-bg')
        }

        
    });

    var text=$('main h2').text();
    console.log(text);
    $('main h2').text("<h1>Hello World</h1>");
    $('main h2').html("<h1>Hello World</h1>");

    // click on the footer and change the h2
    $('footer').on('click',function(){ 
       $('main h2').html("<h1>I have changed</h1>");
    


    });
    // attr

    // 1. sense the click
        // execute the action. change the attr by
        // new img $(this)
    $('header img').on('click',function(){
        $(this).attr('src','img/fish.png');
    });


});