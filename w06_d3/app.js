const formSubmit = () => {
    console.log($('#input-box').val())
    $newToDo = $('#input-box').val()
    $('#to-do-list').append($newToDo)
    event.preventDefault();
}

$(() => {

    $('#submit').on('click', formSubmit)


})