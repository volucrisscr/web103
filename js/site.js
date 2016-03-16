/* Home Page */

$(".accordion").on("click", "dd", function (event) {
$(this).find(".content").slideToggle("normal");
});

/* Exercises Page */
	$('.exercise').click(function(){

		$('.active-type-link').removeClass('active-type-link');
		$(this).addClass('active-type-link');
		link_index = $(this).data('index');

		$('.exercise_text').each(function(){
			var content_index = $(this).data('index');
			if(content_index == link_index) {
				$('.active_exercise').removeClass('active_exercise');
				$(this).addClass('active_exercise');
			}
		});
	});

$('.exercise-list').first().show();
$('.exercise-container > li > span').first().addClass('active');

$('.exercise-container > li > span').click(function() {
	$('.exercise-container > li > span').removeClass('active');
	$('.exercise-list').slideUp();
	$(this).toggleClass('active').parent().children('ul').slideDown().children('li').first().trigger('click');
});

/* Resources Page */

$('.button').click(function(){
	$('.active-button').removeClass('active-button');
	$(this).addClass('active-button');
	btn_index = $(this).data('index');
	
	if(btn_index==1){ // class
		$('.active-list').removeClass('active-list');
		$('.class-list').addClass('active-list');
	} else if(btn_index==2) { // general
		$('.active-list').removeClass('active-list');
		$('.general-list').addClass('active-list');
	} else if(btn_index==3){ // last
		$('.active-list').removeClass('active-list');
		$('.resources-list').addClass('active-list');
	} else if(btn_index==4){ // last
		$('.active-list').removeClass('active-list');
		$('.frontend-list').addClass('active-list');
	} else { // last
		$('.active-list').removeClass('active-list');
		$('.backend-list').addClass('active-list');
	}
});

/* Screencasts */ 

	$('.video_link').click(function(){
		var data_src = $(this).data('src');
		$('.active_video').removeClass('active_video');
		$(this).addClass('active_video');
		$('.video_iframe').attr('src', data_src);
	});