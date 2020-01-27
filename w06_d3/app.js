//https://git.generalassemb.ly/ira/SEIR-FLEX-123/blob/master/unit_1/w06d3/student_labs/afternoon.md

let toDoNumber = 0;
let completedNumber = 0;
const toDoItems = []

//functions

//retrieves items from local storage
const loadFromLocalStorage = () =>{
    for (i = 0;i< localStorage.length;i++){
        //console.log(localStorage[i])
        if (localStorage.key(i).slice(0,5) == "to-do" || localStorage.key(i).slice(0,5) =="compl") {
            console.log("match")
            let item = localStorage.getItem(localStorage.key(i))
            $('#input-box').val(item)
            formSubmit()
        }
        console.log(localStorage.getItem(localStorage.key(i)))
        
    }
}

const removeItem = () =>{
    //removes div from list
    $(event.currentTarget).parent().remove();
}

//moves from Things to Do to Things that are done
const toDoUpdate = () =>{
    let itemID = $(event.currentTarget).parent().attr("id")
    let completedID = "completed" + completedNumber

    //remove item from localStorage
    console.log(itemID)
    localStorage.removeItem(itemID)

    //re-add item to local storage as done
    let textValue = $(event.currentTarget).parent().text()
    console.log(textValue.length);
    textValue = textValue.slice(0,textValue.length-9);
    console.log(textValue)
    window.localStorage.setItem(completedID,textValue)

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

    //increment completed number
    completedNumber++
}

const formSubmit = () => {
    //console.log($('#input-box').val())
    let itemID = "to-do" + toDoNumber

    //new to do item uses input value and adds appropriate class
    $newToDo = $('<div>').text($('#input-box').val()).addClass("to-do-item")
    $newToDo.attr("id",itemID)

    //adds item to array
    toDoItems.push($newToDo);

    //adds item to localStorage
    window.localStorage.setItem(itemID,$newToDo.text())

    //adds completed button to do item
    $completedButton = $('<button>').addClass("completed-Button").text("COMPLETED").css("background","#c2c3c2").css("color","#003300")

    $newToDo.append($completedButton)

    //adds event listener to completed button
    $completedButton.on('click',toDoUpdate)

    //appends item to to-do-list container
    //$('#to-do-list').append(toDoItems) //if using an array use this.

    $('#to-do-list').append($newToDo)
    
    //increment toDoNumber
    toDoNumber++

    //prevent page refresh
    event.preventDefault();
}

$(() => {
    loadFromLocalStorage()
    $('#to-do-list').append(toDoItems)
    $('#submit').on('click', formSubmit)


})