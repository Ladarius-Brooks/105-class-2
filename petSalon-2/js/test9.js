$(function(){
    'use strict';
    // $('img#logo').on('click',function(){
    //     $('main').load("../register.html");   
    // })
    
    $('main').on('click',loadAjax);

    function loadAjax(){
        $.ajax("js/pets.txt",{
            success:addContent,
            type:"GET",
            dataType: 'text'
        });
    }

    function addContent(data,status,jqxhr){
        $('di#data').text(data);
        console.log(status);
    }
});