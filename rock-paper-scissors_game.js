function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rspPlayer(userRsp) {
    const rsp = ["가위", "바위", "보"];
    const playerRsp = rsp[getRandomInteger(0, 2)];

    if (userRsp == playerRsp) { // 비겼을 때
        return {
        userRsp: userRsp,
        playerRsp: playerRsp,
        winner: `비겼습니다.`,
        };
    } else if (userRsp == "가위") { //이겼을 때
        if (playerRsp == "보") {
        return {
            userRsp: userRsp,
            playerRsp: playerRsp,
            winner: `당신이 이겼습니다.`,
        };
        } else { //젔을 때
        return {
            userRsp: userRsp,
            playerRsp: playerRsp,
            winner: `당신이 졌습니다.`,
        };
        }
    } else if (userRsp == "바위") {
        if (playerRsp == "가위") {
        return {
            userRsp: userRsp,
            playerRsp: playerRsp,
            winner: `당신이 이겼습니다.`,
        };
        } else {
        return {
            userRsp: userRsp,
            playerRsp: playerRsp,
            winner: `당신이 졌습니다.`,
        };
        }
    } else if (userRsp == "보") {
        if (playerRsp == "바위") {
        return {
            userRsp: userRsp,
            playerRsp: playerRsp,
            winner: `당신이 이겼습니다.`,
        };
        } else {
        return {
            userRsp: userRsp,
            playerRsp: playerRsp,
            winner: `당신이 졌습니다.`,
        };
        }
    }
}

function rspPlayer2(userRsp) {
const rsp = ["가위", "바위", "보"];
const playerRsp = rsp[getRandomInteger(0, 2)];
const winValue = {
    가위: "보",
    바위: "가위",
    보: "바위",
}};

console.log(rspPlayer("보")); //가위, 바위, 보 중 내고 싶은걸 입력하면 됩니다!