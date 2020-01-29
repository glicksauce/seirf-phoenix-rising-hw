//to do: better win formatting for verticle and diagnol wins

let turnNumber = 0

const placePiece = () =>{

    //x goes on even turns
    if (turnNumber % 2 == 0){
        $(event.currentTarget).text("X").addClass("x-piece")
    //o goes on odd turns
    } else {
        $(event.currentTarget).text("O").addClass("o-piece")
    }
    console.log($(event.currentTarget).attr("id"))

    //check for win after play
    checkForWin();

    //turns off event listener so square cant be played again
    $(event.currentTarget).off()

    //next turn
    turnNumber++;
}

const checkForWin = () => {
    let boxCheck = $('<div>')
    let winCheck = ['','','','','','','','']
    let winPosition = -1


    for (i=0;i<3;i++) {
        winCheck[0] += $('#'+i).text();
    }

    for (i=3;i<6;i++) {
        winCheck[1] += $('#'+i).text();
    }

    for (i=6;i<9;i++) {
        winCheck[2] += $('#'+i).text();
    }

    for (i=0;i<7;i+=3) {
        winCheck[3] += $('#'+i).text();
    }

    for (i=1;i<8;i+=3) {
        winCheck[4] += $('#'+i).text();
    }

    for (i=2;i<9;i+=3) {
        winCheck[5] += $('#'+i).text();
    }

    for (i=0;i<9;i+=4) {
        winCheck[6] += $('#'+i).text();
    }

    for (i=2;i<7;i+=2) {
        winCheck[7] += $('#'+i).text();
    }


    for (let element of winCheck) {
        if (element === 'XXX') {
            winPosition = winCheck.indexOf(element)
            console.log (element, "X wins!")
            celebrateWin('x-piece',winPosition)
        } else if (element === 'OOO'){
            winPosition = winCheck.indexOf(element)
            console.log (element,"O wins!")
            celebrateWin('o-piece',winPosition)
        }
    }   
    console.log(winCheck)
    
}

const celebrateWin = (winner, winPosition) => {
    //remvoe all event liseteners
    $('div').off()

    //formatting for hozintal wins
    if (winPosition <=2 ){
        winPosition = winPosition *3
        $('#'+winPosition).css("text-decoration","line-through").addClass("winner")
        $('#'+(winPosition+1)).css("text-decoration","line-through").addClass("winner")
        $('#'+(winPosition+2)).css("text-decoration","line-through").addClass("winner")
        
    //formatting for verticle wins
    } else if (winPosition > 2 && winPosition < 6){
        $vertLine = $('<div>').addClass("vert-line")
        $('#'+(winPosition-3)).append($vertLine)
        $vertLine = $('<div>').addClass("vert-line")
        $('#'+winPosition).append($vertLine)
        $vertLine = $('<div>').addClass("vert-line")
        $('#'+(winPosition+3)).append($vertLine)
    }

    //change winner color
    //$('.'+winner).addClass("winner")
}

$(()=>{
    

    console.log("up and running")

    for (i=0;i<9;i++){
        $gameSquare = $("<div>").addClass("game-square").attr("id",i)
        $gameSquare.on("click",placePiece)
        $('.game-board').append($gameSquare)
    }



})