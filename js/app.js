$(document).ready(function(){
	console.log("ready");

	$('.tweet-compose').on('click', function() {
		$(this).animate({height:'7em'});
		$('button').removeClass('init');
		$('#char-count').removeClass('init');
	});



$(document).on('keyup', 'textarea.tweet-compose', function(e){
	var count = 140 - this.value.length;
	$('#char-count').text(count);
	$('#char-count').css('color', count < 10 ? 'red': " ");
		if (count < 0) {
		$('#tweet-submit').attr('disabled', 'disabled');
		} else {
		$('#tweet-submit').removeAttr('disabled');
		}
	});

$('#tweet-submit').on('click', function(){
	var avatarURL = $('#profile-summary').find('img').attr('src');
	var fullName = $('#profile-summary').find('p').text();
	var handle = 'nlahoti';
	var tweetText = $('#dashboard').find('textarea.tweet-compose').val();
	var tweet = $('.tweet:first').clone();
	console.log(tweet);

	tweet.find('.avatar').prop('src', avatarURL);
	tweet.find('.fullname').html(fullName);
	tweet.find('.username').html(handle);
	tweet.find('.tweet-text').html(tweetText);
	console.log(tweetText);

	//$(this).innerHTML("Whatever")

	$('#stream').prepend(tweet);
	console.log($('.tweet-text'));
		
});



});



/* another method to the counter
$('.tweet-compose').on('keyup', function (e) { 
  var count = 140 - $(this)[0].value.length;  
  $('#char-count').text(count)   ;      
  if (count >= 0) {             
  	$('.button').removeAttr('disabled');
  }         
  	if (count <= 10) {             
  		$('#char-count').css('color', 'red');  
  	}         
  		else {             
  			$('#char-count').css('color', 'black');       
  		}          if (count < 0) {             
  			$('.button').prop('disabled', true);   
  			     }      
  			 })

});*/


/*
	var count = $('#char-count').text();
	$('.tweet-compose').keypress(function(){
		
		var keyLeft = $('.tweet-compose').val().length;
		//console.log(keyLeft);
		var keyUsed = count - keyLeft;
		//console.log(keyUsed);

		$('#char-count').text(count -= 1);

		if(count <= 100) {
		$('#char-count').css('color', 'red'); 
		
		} 

		if (count < 90) {
			$('#tweet-submit').prop('disabled', true);
		}
		};
		*/