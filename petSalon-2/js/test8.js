$(function(){
    'use strict';

  /*  $('img#logo').on('click',function(){
        $(this).animate({'width':'300px'});
    });*/

    // challenge: mouseenter -> increase the width mouse leave

    $('img#logo').on('mouseenter',getBig);
    $('img#logo').on('mouseleave',getSmall);

    function getBig(){
        $(this).animate({'width':'400px'});
    }

    function getSmall(){
        $(this).animate({'width':'210px'});
    }

});