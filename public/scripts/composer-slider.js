//.ready

$(document).ready(function(){
//.on "click" button
    $(".compose-button").on("click", function(){
        $(".new-tweet").slideToggle("medium", function(){
            $(".textArea").focus();
        })
    })
})



//toggle slider (medium)

//.focus (the text area)

//dont forget to implement this to index.html