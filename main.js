function createTweet() {
					var tweetContainer = $('<div></div>');
					tweetContainer.addClass('container box');
					tweetContainer.html('<div class="row"><div class="col-md-2 col-sm-2"><img class="profile-pic" src="profile-pic.png"></div><div class="col-md-10 col-sm-10"><h4>Username</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div></div>');
					tweetContainer.css('display', 'none');
					$('#all-tweets').prepend(tweetContainer);
				 }



 setInterval(function() {
 	createTweet();
 	$('.box').first().fadeIn(800);
 }, 6000);

