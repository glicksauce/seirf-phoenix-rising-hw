const toDoItems = []

const removeItem = () =>{
    $(event.currentTarget).parent().remove();
}

const toDoUpdate = () =>{


    //change background color of item
    $(event.currentTarget).parent().css("background","#ED6495")

    //append item to completed list
    $('#completed').append($(event.currentTarget).parent())

    //removes completed button listener
    removeEventListener("click",toDoUpdate)

    //updates button text
    $(event.currentTarget).text("REMOVE")

    //removes class from button, replaces with new class
    $(event.currentTarget).removeClass("completed-Button")
    $(event.currentTarget).addClass('remove-Button')

    //adds event listener to button
    event.currentTarget.addEventListener("click",removeItem)
}

const formSubmit = () => {
    console.log($('#input-box').val())

    //new to do item uses input value and adds appropriate class
    $newToDo = $('<div>').text($('#input-box').val()).addClass("to-do-item")
    
    //adds item to array
    toDoItems.push($newToDo);

    //adds completed button to do item
    $completedButton = $('<button>').addClass("completed-Button").text("COMPLETED").css("background","#c2c3c2").css("color","#003300")

    $newToDo.append($completedButton)

    //adds event listener to completed button
    $completedButton.on('click',toDoUpdate)

    //appends item to to-do-list container
    //$('#to-do-list').append(toDoItems) //if using an array use this.

    $('#to-do-list').append($newToDo)

    //prevent page refresh
    event.preventDefault();
}

$(() => {
    $('#to-do-list').append(toDoItems)
    $('#submit').on('click', formSubmit)


})