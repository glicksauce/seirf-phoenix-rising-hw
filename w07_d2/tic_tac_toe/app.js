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

    winwin = winCheck.map((x,y) => x == 'XXX')
    console.log(winwin)

    for (let element of winCheck) {
        if (element === 'XXX') {
            console.log (element, "X wins!")
            celebrateWin('x-piece')
        } else if (element === 'OOO'){
            console.log (element,"O wins!")
            celebrateWin('o-piece')
        }
    }   
    console.log(winCheck)
    
}

const celebrateWin = (winner) => {
    //remvoe all event liseteners
    $('div').off()

    //change winner color
    $('.'+winner).addClass("winner")
}

$(()=>{
    

    console.log("up and running")

    for (i=0;i<9;i++){
        $gameSquare = $("<div>").addClass("game-square").attr("id",i)
        $gameSquare.on("click",placePiece)
        $('.game-board').append($gameSquare)
    }



})