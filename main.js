// function createTweet(username, message) {
// 					return `<div style="display:none" class="container box">
// 						<div class="row">
// 							<div class="col-md-2 col-sm-2">
// 								<img class="profile-pic" src="profile-pic.png">
// 							</div>
// 							<div class="col-md-10 col-sm-10">'+
// 							<h4>${username}</h4>
// 							<p>
// 								${message}
// 							</p>
// 						</div>
// 					</div>`;
// 					//$('#all-tweets').prepend(tweetContainer);
// }

function buildTweet(username, message) {
	return `<div style="display:none" class="container box">
		<div class="row">
			<div class="col-md-2 col-sm-2">
				<img class="profile-pic" src="profile-pic.png">
			</div>
			<div class="col-md-10 col-sm-10">
			<h4>${username}</h4>
			<p>
				${message}
			</p>
		</div>
	</div>`;
}

function attachTweet(idOfplaceToAttach, newTweet) {
	$(idOfplaceToAttach).prepend(newTweet);
}


 setInterval(function() {
 	attachTweet(
 		'#all-tweets',
 		buildTweet('john', 'some test message')
 	)
 	$('.box').first().fadeIn(800);
 }, 6000);

