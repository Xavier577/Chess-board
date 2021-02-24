const boardParts = Array.from(document.querySelectorAll("[data-board-parts]"));

function drawChessBoard(color) {
  let i = 0;
  for (i; i < boardParts?.length; ) {
    switch (i) {
      case 8:
        i++;
        break;
      case 17:
        i--;
        break;
      case 24:
        i++;
        break;
      case 33:
        i--;
        break;
      case 40:
        i++;
        break;
      case 49:
        i--;
        break;
      case 56:
        i++;
        break;
    }
    boardParts[i].style.backgroundColor = color;
    i += 2;
  }
}
drawChessBoard("#2e2c2c");
