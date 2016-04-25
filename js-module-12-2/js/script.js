$(function() {
	
	var aboutMe = $('#aboutme').html();

	var data = {
			name: 'Arkadiy Shukh',
			position: 'Frontend developer trainee',
			reasons: ['<li>Making websites is cool</li>', 
								'<li>I want to work amongst like-minded persons</li>' 
							],
			phone: '+38 066 7 066 775',
			fb: '<a target="blank" href="https://www.facebook.com/profile.php?id=100008145850782">Arkadiy on Facebook</a>',
			feedback: 'Do you want a "knock-knock" joke?'
		};

	var content = tmpl(aboutMe, data);
	$('.sheet1').append(content);

});