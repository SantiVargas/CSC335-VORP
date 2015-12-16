var Model = module.exports={};
var positionFilled=[];
var memo ={};
Model.maxVORP = function(playerInfo,amountOfMoney,positionFilled,memo) {
    var copyOfPlayerInfo = [];
    for (var player in playerInfo) {
        copyOfPlayerInfo.push(playerInfo[player]);
    }
    var mVORP = 0;
    for (var key in copyOfPlayerInfo) {
        if (!(copyOfPlayerInfo[key].position in positionFilled)) {
            if (copyOfPlayerInfo[key].salary <= amountOfMoney) {
                var currentPlayer = copyOfPlayerInfo[key];
                copyOfPlayerInfo.remove(copyOfPlayerInfo[key]);
                if (!(([copyOfPlayerInfo][amountOfMoney - currentPlay.salary])in memo)) {
                    Model.maxVORP(copyOfPlayerInfo, amountOfMoney - currentPlay.salary, positionFilled, memo);
                }
                if (mVORP <= ( memo[copyOfPlayerInfo][amountOfMoney - currentPlay.salary].mVORP + currentPlayer.vorp)) {
                    mVORP = ( memo[copyOfPlayerInfo][amountOfMoney - currentPlay.salary].mVORP + currentPlayer.vorp);
                    memo[playerInfo][amountOfMoney].player = memo[copyOfPlayerInfo][amountOfMoney - currentPlay].player.push(currentPlay);
                    memo[playerInfo][amountOfMoney].mVORP = memo[copyOfPlayerInfo][amountOfMoney - currentPlay.salary].mVORP + currentPlayer.vorp;
                }
            }
        }
        positionFilled = []
    }
    return memo[playerInfo][amountOfMoney]
};