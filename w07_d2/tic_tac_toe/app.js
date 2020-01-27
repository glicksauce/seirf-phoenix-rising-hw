let turnNumber = 0

const placePiece = () =>{
    if (turnNumber % 2 == 0){
        $(event.currentTarget).text("X").addClass("x-piece")
    } else {
        $(event.currentTarget).text("O").addClass("o-piece")
    }
    $(event.currentTarget).off()
    turnNumber++;
}



$(()=>{
    

    console.log("up and running")

    for (i=0;i<9;i++){
        $gameSquare = $("<div>").addClass("game-square")
        $gameSquare.on("click",placePiece)
        $('.game-board').append($gameSquare)
    }



})