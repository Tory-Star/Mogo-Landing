$(function(){

    var intro_h = $("#intro").innerHeight();
        
    var header = $("#header");

    var scroll_offset= $(window).scrollTop();

    checkScroll(scroll_offset);
 

    /*fixed Header*/

    $(window).on("scroll", function(){
        scroll_offset = $(this).scrollTop();

        checkScroll(scroll_offset);

        
        
    });


    function checkScroll(scroll_offset) {
        

        if(scroll_offset >= intro_h) {
            header.addClass("header--fixed");
        } else{
            header.removeClass("header--fixed");

        }
        
    }


    /*Smoth scroll*/

    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data("scroll"),
            blockOfset = $(blockId).offset().top;
            $("#nav a").removeClass("active")

            $this.addClass("active");

            console.log(blockOfset);
        
            $("html, body").animate({
                scrollTop: blockOfset
            },500);


    })

    /*Menu nav toggle*/

    $("nav_toggle").on("click", function(event){
        event.preventDefault();

       
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    })



    /*collapse*/

    $("[data-collapse]").on("click", function(event){
        event.preventDefault();

        var $this = $(this)
        var blockid = $this.data('collapse');

        $(this).toggleClass("active");
        $(blockid).slideToggle();
        



    });

    /*slider*/

    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1,

    });  
    
    function getSum(pack, discont=1) {
        var count=4;
        if(pack) {
            var sum = (pack*count)/discont;
            console.log(sum)
        }else{
            console.log("Кол-во пачек не указано")
        }        
    }

    $(".btn").on("click", function(){
        var click_off=1

        var self=$(this)

        self[0].text="ok";

        return false
    });   
});

