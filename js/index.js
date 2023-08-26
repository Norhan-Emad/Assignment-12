/// <reference types="../@types/jquery" />

//sideBar

//open sideBar
$('.sideButton').on("click" , function(){
    $('#home .homeContent .sideBar').css('left' , '0');
})

//close sideBar
$('.closeButton').on("click" , function(){
    $('#home .homeContent .sideBar').css('left' , '-300px');
})

$('.headOne , .headTwo , .headThree , .headFour').on("click" , function(){
    $(this).next().removeClass("d-none");
    $('.headOne , .headTwo , .headThree , .headFour').next().not($(this).next()).addClass("d-none");
})

//time
let second = document.querySelector(".second");
let count = Number(second.innerHTML);
let idNum = setInterval(() => {
        count -=1;
        second.innerHTML = count;
        if(count == 0){
            clearInterval(idNum);
        }
}, 1000);

//inputLength
$('.textArea').on("input" ,function () {
    let valueLength = $('.textArea').val().length;
    $('.form .num').html(100-valueLength)
    let value =$('.form .num').html() ;
    if(value <= 0){
        $('.textArea').attr("disabled" ,"disabled" );
    }
})