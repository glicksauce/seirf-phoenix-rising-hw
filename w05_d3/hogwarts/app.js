
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

    //Year 3
    const $list = $("<ul>").attr("storage","truck")
    const $listItems1 = $("<li>").text("butter beer");
    const $listItems2 = $("<li>").text("invisibility cloak").addClass("secret")
    const $listItems3 = $("<li>").text("magic map").addClass("secret")
    const $listItems4 = $("<li>").text("time turner").addClass("secret")
    const $listItems5 = $("<li>").text("leash").addClass("quokka");
    const $listItems6 = $("<li>").text("Bertie Bott's Every Flavor [Jelly] Beans.")

    $($container).append($list);
    //$($list).append($listItems1);
    for (i=1;i<=6;i++){
        let strToAppend = ('$listItems' + i)
        $($list).append(eval(strToAppend));
    }
    

});