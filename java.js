
    
    // var animals = ["cat", "mouse", "dog"]
    // function makeBtn(useArray, useClass, useArea){
    //     $(useArea).empty()
    //     for (i = 0; i < useArray.length; i++){
    //         var btn = $("<button>")
    //         btn.addClass(useClass)
    //         btn.attr("data-type", useArray[i])
    //         $(useArea).append(btn)

    //     }
    // }

    // $(document).on("click", "#animal-btn", function() {
    //     $("#animals").empty()
    //     $("#animal-btn").removeClass("active")
    //     $(this).addClass("active")
    //     var dataType = $(this).attr("data-type")
    //     var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + dataType + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
    //     $.ajax({
    //         url: queryURL, 
    //         method: "GET"

    //     }).then(function(response){
    //         var result = response.data
    //         for (i = 0; i < result.length; i++){
    //             var animalDiv = $('<div class = \"animalItem">')
    //             var rating = result[i].rating
    //             var p = $("<p>").text("rating;" + rating)
    //             var enimatedImage = result[i].images.fixed_height.url
    //             var stillImage = result[i].images.fixed_height_still.url
    //             var animalImages = $("<img>")
    //             animalImages.attr("src", stillImage)
    //             animalImages.attr("data-still", stillImage)
    //             animalImages.attr("data-animate", enimatedImage)
    //             animalImages.attr("data-state", stillImage)
    //             animalImages.addClass("animalImages")
    //             animalDiv.append(p)
    //             animalDiv.append(animalImages)
    //             $("#animals").append(animalDiv)
    //         }
    //     })

    $("#addAnimal").on("click", function(){
        event.preventDefault();
        console.log("Inside of onclick")
        var userIn = $("#animalInput").val().trim();
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + userIn + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
        $.ajax({
            url: queryURL, 
            method: "GET"

        }).then(function(response){
        for(let i = 0; i < response.data.length; i++ ){
          console.log("response: " + response.data[0].images.downsized.url);
          var img = $("<img>");
          img.attr("src", response.data[0].images.downsized.url);

          $("#animals").append(img);
        }

        })
    });

    // var giphy1 = 
    

    // console.log(data.users[0])

            

    // });