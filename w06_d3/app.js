const toDoItems = []

const toDoUpdate = () =>{


    //change background color of item
    $(event.currentTarget).parent().css("background","#ED6495")


    //append item to completed list
    $('#completed').append($(event.currentTarget).parent())

}

const formSubmit = () => {
    console.log($('#input-box').val())

    //new to do item uses input value and adds appropriate class
    $newToDo = $('<div>').text($('#input-box').val()).addClass("to-do-item")
    toDoItems.push($newToDo);

    //adds completed button to do item
    $completedButton = $('<button>').addClass("completed-Button").text("COMPLETED").css("background","#c2c3c2").css("color","#003300")
    $newToDo.append($completedButton)

    //adds event listener to completed button
    $completedButton.on('click',toDoUpdate)

    //appends item to to-do-list container
    $('#to-do-list').append(toDoItems)
    event.preventDefault();
}

$(() => {
    $('#to-do-list').append(toDoItems)
    $('#submit').on('click', formSubmit)


})