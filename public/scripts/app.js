/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const tweetData = []

function createTweetElement(objectOfTweets){
    let $tweet = `
    <article class="tweet">
    <header>
      <img class="tweet-picture" src="${objectOfTweets.user.avatars.small}">
      <h2 class="tweeter-name">${objectOfTweets.user.name}</h2>
      <p class="tweeter-handler">${objectOfTweets.user.handle}</p>
    </header>
      <p class="tweet-content">${objectOfTweets.content.text}</p>
    <footer>
      <p class="release-date">${objectOfTweets.created_at}</p>
    </footer>
  </article>
    `
    return $tweet;
}

function renderTweets(arrayOfTweets){

  arrayOfTweets.forEach(function(individualTweet){
    let $newTweet = createTweetElement(individualTweet)
    $(".tweet-container").prepend($newTweet)
  })
}

$(document).ready(function(){

  // renderTweets(tweetData);

  $.ajax({
    method: "GET",
    url: "/tweets",
    success: renderTweets
  })

  $(".new-tweet form").on("submit", function(event){
    event.preventDefault();
    let input = $(".textArea").serialize()
    console.log(input)
    // console.log(event.target)
    $.ajax({
      method: "POST",
      url: "/tweets",
      data: input, //tried to parse
      success: function(){
        $.ajax({
          method: "GET",
          url: "/tweets",
          success: renderTweets//put into a seperate function
        })
      }
    })
    


    // .done()
    //parsing the input
    //ajax call
    //response success and response failed
  })  
  
});

