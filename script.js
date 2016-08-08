/*
$(window).scroll(function() {
   if($(window).scrollTop() < 100) {
       $(".header").css("visibility", "hidden");
   }
});


$(window).scroll(function() {
   if($(window).scrollTop() > 100) {
       $(".header").show("slow");
   }
});

*/

/*
$(window).scroll(function() {
   if($(window).scrollTop() > 100) {
       $(".header").css("visibility", "visible");
   }
});
*/

$(document).ready(function () {
		$(document).on("scroll", onScroll);
 
		$('a[href^="#"]').on('click', function (e) {
			e.preventDefault();
			$(document).off("scroll");
 
			$('a').each(function () {
				//$(this).removeClass('active');
			})
			//$(this).addClass('active');
 
			var target = this.hash;
			$target = $(target);
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top+2
			}, 500, 'swing', function () {
				window.location.hash = target;
				$(document).on("scroll", onScroll);
			});
		});
	});
 
 	
	function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.nav-bar a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.nav-bar ul li a').removeClass("active");
            //currLink.addClass("active");
        }
        else{
            //currLink.removeClass("active");
        }
    });
	}
	


// placeholder hide/show on focus/focus out
$('#message-area').focus(function(){
  $(this).attr('placeholder','');
});
$('#message-area').focusout(function(){
  $(this).attr('placeholder','Please type a message...');
});


// JQuery validate for contact-form
$(function(){
	$("#contact-form").validate({
		rules: {
			name:{
				required: true,
			},
			email:{
				required: true,
				email: true
			},
			subject:{
				required: true,
				minlength: 2
			},
			message:{
				required: true,
				minlength: 20
			}
		},
		messages:{
			name:{
				required: "Please enter your name!"
			},
			email:{
				required: "Please enter your email address!",
				email: "Please enter a valid email address!"
			},
			subject:{
				required: "Please enter a subject!",
				minlength: "Your subject is too short!"
			},
			message:{
				required: "Please enter your message!",
				minlength: "Please enter a longer message, at least 20 characters!"
			}
		}
	});

});

