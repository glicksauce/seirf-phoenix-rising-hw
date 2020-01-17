
$(() => {
        
    if (typeof jQuery == 'undefined'){
        console.log('oops! I still have to link my jQuery properly!');
    } else {console.log('I did it! I linked jQuery and this js file!')};

    //Year 1
    const $container =  $('#container')
    const $h1 = $("<h1>").text("Hogwarts");
    
    $($container).append($h1);


    //Year 2
    const $h2 = $("<h2>").text("Jay G")
    const $h3 = $("<h3>").text("House: Hufflepuff")
    const $pet = $("<h4>").addClass("quokka").text("Pet: Henry")
    const $wand = $("<h4>").text("Wand: Hornbeam Wand with Dragon Heartstring Core")

    $($container).append($h2)
    $($container).append($h3)
    $($container).append($pet)
    $($container).append($wand)


});