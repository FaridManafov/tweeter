/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const tweetData = []

function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function createTweetElement(objectOfTweets){
    let $tweet = `
    <article class="tweet">
    <header>
      <img class="tweet-picture" src="${objectOfTweets.user.avatars.small}">
      <h2 class="tweeter-name">${objectOfTweets.user.name}</h2>
      <p class="tweeter-handler">${objectOfTweets.user.handle}</p>
    </header>
      <p class="tweet-content">${escape(objectOfTweets.content.text)}</p>
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

  //get tweets function
  function fetchTweets(){
    $.ajax({
      method: "GET",
      url: "/tweets",
      success: renderTweets
    })
  }

  fetchTweets()

  $(".new-tweet form").on("submit", function(event){
    event.preventDefault();

    let xssDeny = $(".textarea").text()
    let input = $(".textArea").serialize()

    function postTweet(){
      $.ajax({
        method: "POST",
        url: "/tweets",
        data: input, 
        success: fetchTweets
      })
    }

    //Validator
    if ($(".textArea").val() === "" || $(".textArea").val() === null){
      alert("Nothing is written")
    } else if($(".textArea").val().length > 140){
      alert("Too many characters written!")
    } else {
      postTweet();
    }

    // .done()
    //parsing the input
    //ajax call
    //response success and response failed
  })  
  
});

