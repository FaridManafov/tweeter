$(document).ready(function() {
  $(".textArea").on("keyup", function(){
    let value = $(this).val().length
    charLimit = 140 - value;

    let counter = $(this).siblings(".counter")
    counter.text(charLimit);

    let overLimit = $(".counter").text() < 0
    $(".counter").toggleClass("overLimit", overLimit) 
  });
});












    //alternatively I could have done on line 6:
    // 1: let counter = 
    // $(this).siblings(".counter").text(charlimit)

    // 2: $(".counter").text(charlimit)

    //Line 9
    //this is cheeki, where it assigns overLimit to boolean
    //and assigns the toggleClass to the boolean, thus
    //resulting to a false or true, which is what .toggle()
    //anything takes in