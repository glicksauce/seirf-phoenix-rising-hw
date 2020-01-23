const toDoItems = []

const formSubmit = () => {
    console.log($('#input-box').val())
    $newToDo = $('<div>').text($('#input-box').val())
    toDoItems.push($newToDo);
    $('#to-do-list').append(toDoItems)
    event.preventDefault();
}

$(() => {
    $('#to-do-list').append(toDoItems)
    $('#submit').on('click', formSubmit)


})