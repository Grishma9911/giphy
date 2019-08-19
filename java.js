var animals = ["cat", "mouse", "dog", "butterfly", "ostrich", "elephant", "birds", "bear", "pig", "insects", "snake", "fox", "rabbit", "peacock", "duck", "funnyfaces", "swan", "honeybee", "penguine", "seal", "nody", "shark", "bluewhale", "unicorn", "elsa", "despicable"] // to define var
function makeBtn() { // function to make new button directly in jquery
    $("#animal-btn").empty() // 
    for (i = 0; i < animals.length; i++) {
        var btn = $("<button>") // creating a button element
        btn.addClass("gifBtn") // adding a class to that button
        btn.text(animals[i]) // adding text to button
        btn.attr("data-type", animals[i]) // add attribute to button
        $("#animal-btn").append(btn) // puting button inside of html

    }
}
makeBtn();

function clearResult() {
    $('#animals').empty();
}

// $(document).on("click", "#animal-btn", function() { // 
function disGif() {
    $("#animals").empty()
    var dataType = $(this).attr("data-type")
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + dataType + "&api_key=hN8gsnbwbc7624LZSFocXUyl6tVdYVMB&limit=10&offset=0&rating=G&lang=en";


    $.ajax({
        url: queryURL,
        method: "GET"

    }).then(function (response) {
        console.log(response)
        var result = response.data
        for (i = 0; i < result.length; i++) {
            var animalDiv = $('<div class ="row animalItem">')  // creating div, class to it.
            var rating = result[i].rating // holding rating
            var p = $("<p>").text("rating;" + rating) // add text
            var enimatedImage = result[i].images.fixed_width.url // grbbing data
            var stillImage = result[i].images.original_still.url
            var animalImages = $("<img>") // creating img tag
            animalImages.attr("src", stillImage) // src goes with img tag
            animalImages.attr("data-still", stillImage) // add to attr
            animalImages.attr("data-animate", enimatedImage) // add to attr
            animalImages.attr("data-state", stillImage) // add name 
            animalImages.addClass("animalImages") // add class
            animalDiv.append(p) // to put things by tag 
            animalDiv.append(animalImages) // add img 
            $("#animals").append(animalDiv) // add class
        }
    })
};

$("#addAnimal").on("click", function () {
    var newGif = $("#animalInput").val().trim()
    animals.push(newGif);
    makeBtn();
});

function animateStop() {
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $(this).attr("data-state");
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
}
$(document).on("click", ".gifBtn", disGif);
$(document).on("click", ".animalImages", animateStop);
