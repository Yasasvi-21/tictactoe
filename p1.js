let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector('#reset');

let winnerMessage = document.querySelector("#winnerMessage");
let PlayerXScore = document.querySelector("#playerXScore");
let PlayerOScore = document.querySelector("#playerOScore");

let playerXWins = 0;
let playerOWins = 0;

let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText.trim() !== "") return;

        if (turn0) {
            box.innerText = "0";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }

        win(winPatterns);
    });
});

function resetGame() {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    turn0 = true;
    winnerMessage.textContent = "";
    console.log("Game has been Reset!!");
};

resetBtn.addEventListener("click", resetGame);

function win(winPatterns) {
    for (let pattern of winPatterns) {
        let [a, b, c] = pattern;

        let v1 = boxes[a].innerText.trim();
        let v2 = boxes[b].innerText.trim();
        let v3 = boxes[c].innerText.trim();

        if (v1 !== "" && v1 === v2 && v2 === v3) {
            winnerMessage.textContent = `Player ${v1} wins!`;

            if (v1 === "X") {
                playerXWins++;
                PlayerXScore.textContent = `Player X Wins: ${playerXWins}`;
            } else {
                playerOWins++;
                PlayerOScore.textContent = `Player O Wins: ${playerOWins}`;
            }

            boxes.forEach(box => box.disabled = true);
            return true;
        }
    }
    return false;
}
