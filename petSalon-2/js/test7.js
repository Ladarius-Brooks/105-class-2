$(function(){
    'use strict';

    $('img#logo').css({'width':'200px'});
    $('main h2').css({'color':'#db008d',
                        'text-transform':'uppercase',
                        'padding':'20px'
         });

    $('nav.menu').on('mouseenter',changeColor);
    $('nav.menu').on('mouseleave',defaultColor);

    function changeColor(){
        $('nav.menu').css({'background-color':'red'});
    }

    function defaultColor(){
        $('nav.menu').css({'background-color':'white'});
    }

    

});