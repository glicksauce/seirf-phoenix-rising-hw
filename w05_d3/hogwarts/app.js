
$(() => {
        
    if (typeof jQuery == 'undefined'){
        console.log('oops! I still have to link my jQuery properly!');
    } else {console.log('I did it! I linked jQuery and this js file!')};

    //functions:
   
    //brings in new wand:
    const bringBackWand = () => {
        $newWand = $("<h4>").text("Wand: Unicorn Tusk with Dragon's Tooth core")
        $newWand.css("color","indigo")
        $newWand.css("display","none")
        setTimeout(function(){
            $("h4").eq(0).after($newWand)
            $newWand.fadeIn(2000);
        },4000)
    }

    //bring back the Pet to original spot
    const bringPetBack = () => {
        $('h4').eq(0).after($petMission).css("display","hidden");
        $petMission.fadeIn(1000);
    }

    //buy Butter Beer
    const buyButterBeer = () =>{
        $("ul").prepend($moreButterBeer).hide().fadeIn(1000);
    }

    //change season
    const changeSeason = () =>{
        $("h5").fadeOut(function(){
            $(this).text("Fall 2018").fadeIn();
            buyButterBeer();
        });
    }

    //Year 1
    const $container =  $('#container')
    const $h1 = $("<h1>").text("Hogwarts");
    
    $($container).append($h1);


    //Year 2
    const $h2 = $("<h2>").text("Jay G")
    const $h3 = $("<h3>").text("House: Hufflepuff")
    const $pet = $("<h4>").addClass("quokka").text("Pet : Henry")
    const $wand = $("<h4>").text("Wand: Hornbeam Wand with Dragon Heartstring Core")

    $($container).append($h2)
    $($container).append($h3)
    $($container).append($pet)
    $($container).append($wand)

    //Year 3
    const $list = $("<ul>").attr("storage","trunk")
    const $listItems1 = $("<li>").text("butter beer");
    const $listItems2 = $("<li>").text("invisibility cloak").addClass("secret")
    const $listItems3 = $("<li>").text("magic map").addClass("secret")
    const $listItems4 = $("<li>").text("time turner").addClass("secret")
    const $listItems5 = $("<li>").text("leash").addClass("quokka");
    const $listItems6 = $("<li>").text("Bertie Bott's Every Flavor [Jelly] Beans.")

    $($container).append($list);
    for (i=1;i<=6;i++){
        let strToAppend = ('$listItems' + i)
        $($list).append(eval(strToAppend));
    }
    
    //Year 4
    const $table = $("<table>")
    const $season = $("<h5>").text("Spring 2017")
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

    //Year 5
    //declaring new wand here before function calls it
    const newWand = () =>{
        $newWand = $("<h4>").text("Wand: Unicorn Tusk with Dragon's Tooth core")
        $newWand.css("color","indigo")

        $("h4").eq(0).after($newWand);
        $newWand.hide(0);
        $newWand.show(2000);
    }

    //your wand breaks
    $wand.delay(1000).slideUp(1000).delay(2000);
    $wand.queue(function(){
        //keeps new wand from forming before slot is removed
        newWand();
        $(this).dequeue()
    })
    

    

    //you drank all your butter beer
    $("li").eq(0).delay(2000).fadeOut(1000)
    $("li").eq(0).remove();

    //you get a new Wand
    //see above
  

    /*
    setTimeout(function(){
        $("h4").eq(0).after($newWand)
        $newWand.fadeIn(2000);
    },4000)
    setTimeout(function(){
        $("h4").eq(0).after($newWand)
        $newWand.fadeIn(11000);
    },7500)
    */
 
    //pet spy mission
    const $petMission = $("h4").first()
    const $petMoveTo =  $("td").eq(5)
    
  
    
    //pet table disappear function goes here before it is called
    const petTableDisappear = () =>{
        $petMission.fadeOut(1000);
        $petMission.queue(function(){
            bringPetBack()
            $(this).dequeue();
        })
    }

    //pet table appear function goes here before it is called
    const petTableAppear = () =>{
        $petMission.fadeIn(1000).delay(1000);
        $petMoveTo.append($petMission);
        $petMission.queue(function(){
            petTableDisappear();
            $(this).dequeue();
        });

    }

    //pet leaves original spot
    $petMission.delay(6000).fadeOut(2000).delay(500)
    $petMission.queue(function(){
        petTableAppear();
        $(this).dequeue();
    });

    //pet appears on table
    //see above

    //pet leaves table
    //see above

    //pet reappears in original spot
    //see above
    
    //Year 6
    //hide and reveal secret items:
    $("[class='secret']").delay(13000).hide('slow').delay(2000).show(3000)

    //remove cabblage class function
    const removeCabbage = () =>{
        $("ul li:nth-child(5)").removeClass('cabbage');
        $("ul li:nth-child(5)").queue(function (){
            changeSeason();
            $(this).dequeue();
        })
    }

    //leash becomes cabbage
    $("ul li:nth-child(5)").delay(20000)
    $("ul li:nth-child(5)").queue(function(){
        $(this).addClass('cabbage')
        removeCabbage();

        $(this).dequeue();
    });

    
    //Year 7
    
    //update class schedule to Fall 2018
    //see above


    //buying more butter beer
    const $moreButterBeer = $("<li>").text("Butter beer")

    //$("[storage='trunk']").prepend($moreButterBeer)
    $("[storage='trunk']").attr("storage","chest")
    
 


});