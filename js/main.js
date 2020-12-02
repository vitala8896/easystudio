particlesJS.load('particles', 'js/particlesjs-config.json')
particlesJS.load('particles_footer', 'js/particlesjs-config.json')
$('#burger').click(function() {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
        $('.burger_menu').addClass('active');
    } else {
        $('.burger_menu').removeClass('active');
    }
});
$('.sec4_blocks').hover(    
    function(){
        if($(this).hasClass('active')){
        }else{
            $(this).addClass('active');
            $(this).html("<img src='img/block4_"+($(this).index()-3)+".png' alt='' class='sec4_block"+($(this).index()-3)+"_img'><p class='sec4_blocks_text1'>spartapro</p><p class='sec4_blocks_text2'>Landing page по развитию твоей настоящей личности</p><button class='btn btn2'><a href='#'>посмотреть кейс</a></button>")
        }
        if($(this).hasClass('active')){
            $(".sec4_block"+($(this).index()-3)+"_img").addClass('zoom'); 
        }   
    }, 
    function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(".sec4_block"+($(this).index()-3)+"_img").removeClass('zoom');  
            $(this).html("<img src='img/block4_"+($(this).index()-3)+".png' alt='' class='sec4_block"+($(this).index()-3)+"_img'>")
        }
    }
)
let num = 2
$('.prev').click(function(){
        $('.sec8_blocks').each(function(index){
            let a = index + num;  
            console.log($("#sec8_block"+check(a)).html());                    
            $("#sec8_block"+(index+1)).html("<img src='img/bl8_img"+check(a)+".png' alt='' class='sec8_imgs_all'>");
        })
        if(num >= 4){
            num = 1
        }else{
            num++;
        } 
        $('#sec8_img3').attr("src", "img/point_active.png");
        $('#sec8_img4').attr("src", "img/point_dis.png")
});
$('.next').click(function(){
    $('.sec8_blocks').each(function(index){
        let a = index + num;  
        console.log($("#sec8_block"+check(a)).html());                    
        $("#sec8_block"+(index+1)).html("<img src='img/bl8_img"+check(a)+".png' alt='' class='sec8_imgs_all'>");
    })
    if(num >= 4){
        num = 1
    }else{
        num++;
    } 
    $('#sec8_img3').attr("src", "img/point_dis.png");
    $('#sec8_img4').attr("src", "img/point_active.png")
});

function check(a){
    if (a == 5){
        a = 1
    }else if(a==6){
        a=2
    }else if(a==7){
        a=3
    }else if(a==8){
        a=4
    }
    return a
}