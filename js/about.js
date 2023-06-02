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

    // Start modal section
    $("#intro_video_cover_btn").click(function(){
        $(".intro_video_modal").addClass("active");
    })
    $("#intro_close_btn").click(function(){
        $(".intro_video_modal").removeClass("active");
    })
    // end modal section
})
// end jquery area

// Start Modal section
document.querySelector(".intro_video_modal").addEventListener("click",function(e){
    if(!e.target.classList.contains("intro_video")){
        document.querySelector(".intro_video_modal").classList.remove("active");
    }
})

// end modal section

// start wow js
new WOW().init();
// end wow js