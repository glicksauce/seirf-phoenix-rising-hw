
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
    
    //Year 4
    const $table = $("<table>")
    const $season = $("<h5>").text("Spring 2020")
    const $thead = $("<thead>")
    const $th1 = $("<th>").text("day")
    const $th2 = $("<th>").text("Classes")
    let $row = $("<tr>")
    const $day1 = $("<td>").text("Monday")
    const $day2 = $("<td>").text("Tuesday")
    const $day3 = $("<td>").text("Wednesday")
    const $day4 = $("<td>").text("Thursday")
    const $day5 = $("<td>").text("Friday")
    const $day1Schedule = $("<td>").text("Herbology, Divination, History of Magic, Charms, Potions, Transfiguration, Defense Against the Dark Arts, Quidditch practice")
    const $day2Schedule = $("<td>").text("Muggle Arts, Map Reading, History of Magic, Charms, Potions, Transfiguration, Defense Against the Dark ARts, Quidditch practice")
    const $day3Schedule = $("<td>").text("Herbology, Vocabulary, History of Magic, Charms, Potions, Transfiguration, Defense Against the Dark ARts, Quidditch practice")
    const $day4Schedule = $("<td>").text("Muggle Arts, Public Speaking, History of Magic, STudy Time, Potions, Transfiguration, Defense Against the Dark Arts, Quidditch practice")
    const $day5Schedule = $("<td>").text("Herbology, Divination, History of Magic, Charms, Poetry, Study Time, Public Speaking, Quidditch practice")


    $($container).append($table);
    $($table).before($season);
    $($table).append($thead);
    $($thead).append($th1);
    $($thead).append($th2);
    for (i=1;i<=5;i++){
        let $row = $("<tr>")
        let td1ToAdd = ('$day' + i)
        let td2ToAdd = ('$day' + i + 'Schedule')
        $($table).append($row);
        $($row).append(eval(td1ToAdd));
        $($row).append(eval(td2ToAdd));
    }





});