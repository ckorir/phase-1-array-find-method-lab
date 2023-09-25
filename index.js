// code your solution here
function superbowlWin(record){
    let gamesWon = record.find(game => game.result === "W");

    if (gamesWon){
        return gamesWon.year;
    }else{
        return undefined;
    }
}
