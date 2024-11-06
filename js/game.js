var av_blur_classes = [ 'blur0', 'blur1', 'blur2', 'blur3', 'blur4', 'blur5', 'blur10', 'blur15', 'blur20', 'blur25', 'blur50', 'blur100']; //names of the css filter classes

var av_level = { // set the level object
	current: 0,
	blur_start: 5,
	increment: function () {
		this.current++;
		if (this.current > this.blur_start) { $('#test_img').removeClass().addClass(av_blur_classes[Math.floor((this.current - this.blur_start) / 3)]); }
		$('h1').html('<img src="img/avocado_color.svg" > ' + Math.floor((av_level.current * 128) + (av_level.current * av_level.current) - 1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
	}
};

var av_avocado_images = { //names of the avocado .jpgs
	'avocado0': './img/avocado-0.jpg',
	'avocado1': './img/avocado-1.jpg',
	'avocado2': './img/avocado-2.jpg',
	'avocado3': './img/avocado-1.jpg',
	'avocado4': './img/avocado-4.jpg',
	'avocado5': './img/avocado-5.jpg',
	'avocado6': './img/avocado-6.jpg',
	'avocado7': './img/avocado-7.jpg',
	'avocado8': './img/avocado-8.jpg',
	'avocado9': './img/avocado-9.jpg',
	'avocado10': './img/avocado-1.jpg',
	'avocado11': './img/avocado-11.jpg',
	'avocado12': './img/avocado-12.jpg',
	'avocado13': './img/avocado-13.jpg',
	'avocado14': './img/avocado-1.jpg',
	'avocado15': './img/avocado-15.jpg',
	'avocado16': './img/avocado-16.jpg',
	'avocado17': './img/avocado-17.jpg',
	'avocado18': './img/avocado-1.jpg',
	'avocado19': './img/avocado-19.jpg',
	'avocado20': './img/avocado-1.jpg'
};

var av_not_images = {
	'Evgeny Morozov' : './img/evgeny-morozov.jpg',
	'Google\'s Glasses': './img/googles-glasses.jpg',
	'Cucumbre': './img/cucumbre.jpg',
	'Pig': './img/pig.jpg',
	'Adobo Illustrator®': './img/adobo-illustrator.jpg',
	'Chayote': './img/chayote.jpg',
	'Guy': './img/guy.jpg',
	'"Innovation"': './img/innovation.jpg',
	'Photograph': './img/photograph.jpg',
	'Crocs': './img/crocs.jpg',
	'Obelisk': './img/obelisk.jpg',
	'’nanas': './img/nanas.jpg',
	'Friendship': './img/friendship.jpg',
	'Gogles Glass': './img/gogles-glass.jpg',
	'Technology': './img/technology.jpg',
	'Broken Promises': './img/broken-promises.jpg'
}; //names of the not avocado .jpgs

var av_not_images_keys = $.map(av_not_images, function (v, i) { //create array of av_not_images' keys
	return i;
});

var av_correct_answer = "avocado"; //current correct answer, set by the av_new_level function

var av_failure = function () {
	var av_final_score = Math.floor((av_level.current * 128) + (av_level.current * av_level.current)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	$('#test_img').removeClass().addClass("blur0");
	$('#twitter').attr("href", "https://twitter.com/share?text=I+helped+the+internet+identify+" + av_final_score + "+correct+avocados+by+playing+a+game%3A&url=http%3A%2F%2Fisitavocadosornot.com%2F&hashtags=isitavocados&related=alecmolloy:Is it Avocados or Not by");
	$("meta[property ='og:description']").attr("content", "I helped the internet identify" + av_final_score + "correct avocados by playing a game:");
	$('#streak').html(av_final_score);
	$('#av_correct_answer').html(av_correct_answer);
	$('#failure').css("display", "block");
};

var av_new_level = function () {
	av_correct_answer = (Math.random() < 0.5 ? "avocados" : av_not_images_keys[Math.floor(Math.random() * 16)]);
	if (av_correct_answer === "avocados") {
		$("#test_img").attr("src", av_avocado_images['avocado' + Math.floor(Math.random() * 21)]);
	} else {
		$("#test_img").attr("src", av_not_images[av_correct_answer]);
	}
};

var av_answer = function (av_user_input) { //
	if (((av_user_input === "avocados") && ("avocados" === av_correct_answer)) || ((av_user_input !== "avocados") && ("avocados" != av_correct_answer))) {
		av_level.increment();
		av_new_level();
	} else {
		av_failure();
	}
};

av_new_level();
