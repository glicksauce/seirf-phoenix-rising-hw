
$(() => {
        
    if (typeof jQuery == 'undefined'){
        console.log('oops! I still have to link my jQuery properly!');
    } else {console.log('I did it! I linked jQuery and this js file!')};

    const $container =  $('#container')

    console.log($container)

    const $h1 = $("<h1>").text("Hogwarts");
    
    $($container).append($h1);

    console.log($h1)





});