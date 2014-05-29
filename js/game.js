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
	'avocado0': 'http://25.media.tumblr.com/8d42269baf4ea9626b7041aae7dcdae0/tumblr_mltoi5MFC01r1vzzeo1_500.jpg',
	'avocado1': '../img/avocado1.jpg',
	'avocado2': 'http://www.tropicalfloridagardens.com/wp-content/uploads/2011/06/avocado-tree.jpg',
	'avocado3': '../images/avocado1.jpg',
	'avocado4': 'https://lh5.googleusercontent.com/-JamfMFjEfwc/T6tmd86WO3I/AAAAAAABzLc/9EUbyDmUfT4/s800/avocado-egg-cups-9.jpg',
	'avocado5': 'http://cookingstoned.tv/wp-content/uploads/2013/02/Avocado-Fried-Egg-790x570.jpg',
	'avocado6': 'http://feastsandfotos.files.wordpress.com/2008/08/avocado-slices-fix.jpg',
	'avocado7': 'http://www.acozykitchen.com/wp-content/uploads/2011/02/Avocado-Fries-4.jpg',
	'avocado8': 'http://img4-3.myrecipes.timeinc.net/i/may1/avocado-x.jpg',
	'avocado9': 'http://4.bp.blogspot.com/_KqgyI425p8Y/S9TOqGM9UFI/AAAAAAAABcY/Z9x9FNhbpUs/s400/DSC_0981.JPG',
	'avocado10': '../images/avocado1.jpg',
	'avocado11': 'http://www.austinchronicle.com/binary/40a7/food_feature3-1.jpg',
	'avocado12': 'http://www.monsterpiggybank.com/wp-content/uploads/2012/10/Avocado-Seed-out-of-water.jpg',
	'avocado13': 'http://homecookingmemories.com/wp-content/uploads/2013/03/Mash-Up-Avocado-for-Deviled-Eggs.jpg',
	'avocado14': '../images/avocado1.jpg',
	'avocado15': 'http://thefoodaddicts.com/wp-content/uploads/2010/05/salmon_avocado01.jpg',
	'avocado16': 'http://www.swiss-miss.com/wp-content/uploads/2013/06/20130313-247951-sunday-brunch-eggs-baked-avocado-480x360.jpg',
	'avocado17': 'http://thefoodaddicts.com/wp-content/uploads/2010/05/salmon_avocado06.jpg',
	'avocado18': '../images/avocado1.jpg',
	'avocado19': 'http://www.mnn.com/sites/default/files/Avocado_main_0511.jpg',
	'avocado20': '../images/avocado1.jpg'
};

var av_not_images = {
	'Evgeny Morozov' : 'http://static.guim.co.uk/sys-images/Guardian/Pix/audio/video/2013/3/20/1363793799049/Author-Evgeny-Morozov-of--005.jpg',
	'Google\'s Glasses': 'http://www.droid-life.com/wp-content/uploads/2013/04/google-glass1.jpg',
	'Cucumbre': 'http://www.foodsubs.com/Photos/cucumber-American.jpg',
	'Pig': 'http://ksj.mit.edu/sites/default/files/images/tracker/2009/pig.jpg',
	'Adobo Illustrator®': 'http://logoblink.com/wp-content/uploads/2012/03/adobe-illustrator-1-pic1.jpg',
	'Chayote': 'http://www.revuemag.com/wp-content/uploads/2009/09/09-Stone-chayote-f2.jpg',
	'Guy': 'http://31.media.tumblr.com/6a12aef9ba9c4b2981a48232e7ed05b2/tumblr_mjx9d3dfqT1rs54coo1_1280.jpg',
	'"Innovation"': 'http://24.media.tumblr.com/dded1dab8b6a308da2ddfad02ad46086/tumblr_mtaugxQLyR1qhh2mzo1_1280.jpg',
	'Photograph': 'http://24.media.tumblr.com/5fba85a5ebf86200d463a0c188a26bb9/tumblr_mgfoqj72I81qg996lo1_1280.jpg',
	'Crocs': 'http://www.bargainbininvesting.com/images/crocs.jpg',
	'Obelisk': 'http://31.media.tumblr.com/f479353de4d2a3e564a1f333137f9770/tumblr_mhf02qyw5U1qa7p7fo1_500.jpg',
	'’nanas': 'http://25.media.tumblr.com/tumblr_m5czfeytf31qzce7oo1_500.jpg',
	'Friendship': 'http://25.media.tumblr.com/271fe3925aa7031ca80efa63b149b494/tumblr_mmldjl0GQ61qzoj6fo1_500.jpg',
	'Gogles Glass': 'http://31.media.tumblr.com/1cdf2e440874fcf7dddff862b31b8243/tumblr_mnbkbrAsqd1qdnflqo1_500.jpg',
	'Technology': 'http://31.media.tumblr.com/6a8b8ae233c81a9467c4293f804f42b0/tumblr_mniq65RLlr1qdnflqo1_500.jpg',
	'Broken Promises': 'http://31.media.tumblr.com/5289f540384815c53c7b5d23811b6ca5/tumblr_mo4bqkBDYz1qdnflqo1_500.jpg'
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
