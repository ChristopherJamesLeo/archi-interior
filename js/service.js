// start jquery area

// Start Proloader
$(window).on("load",function(){
    $("#preloader").delay("400").fadeOut("slow");
})
// End Proloader

$(document).ready(function(){
    // Start Nav bar
    $(".nav_toggle_btn").click(function(){
        $(this).toggleClass("active");
        $(".navbar-nav").toggleClass("active");
    })
    $(".navbar-toggler").click(function(){
        $(this).toggleClass("active");
    })
    // End Nav bar


    // end banner section

    $(window).scroll(function(){
        // console.log($(this).scrollTop());
        if($(this).scrollTop() > 500){
            $("nav").addClass("active");
        }else{
            $("nav").removeClass("active");
        }
    })


})
// end jquery area


// start wow js
new WOW().init();
// end wow js