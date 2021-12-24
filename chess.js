// Create squares
const createSquares = () => {
  var board = document.getElementById('chessboard');
  for(let i=8; i>=1; i--) {
    for(let j=1; j<=8; j++) {
      var el = document.createElement('div');
      var id = i.toString() + "-" + j.toString()
      el.setAttribute("id", id);
      el.classList.add('square');

      if ((i+j) % 2 === 0 ) {
        el.classList.add('dark');
      }
      board.appendChild(el);
    }
  }
}

// Put piece in square, id = "col-row", piece = FEN notation
const piece2Square = (id, pieceFen) => {
  var imgPath = 'img/pieces/' + pieceFen + '.png';
  const piece = document.createElement('div');
  piece.classList.add('piece');
  piece.style.backgroundImage = 'url(' + imgPath + ')';
  piece.setAttribute('draggable', true);

  square = document.getElementById(id);
  square.appendChild(piece);
}

// Transform test
const transformTest = () => {
  const square = document.getElementById('2-1');
  var piece = square.firstChild;
  piece.style.transform = "translate(40px, 40px)";
}

// Create board
createSquares();

// Populates
for(let i=1; i<=8; i++) {
  piece2Square('2-' + i.toString(), 'P');
  piece2Square('7-' + i.toString(), 'p');
}
piece2Square('1-1', 'R');
piece2Square('1-2', 'N');
piece2Square('1-3', 'B');
piece2Square('1-4', 'Q');
piece2Square('1-5', 'K');
piece2Square('1-6', 'B');
piece2Square('1-7', 'N');
piece2Square('1-8', 'R');
piece2Square('8-1', 'r');
piece2Square('8-2', 'n');
piece2Square('8-3', 'b');
piece2Square('8-4', 'q');
piece2Square('8-5', 'k');
piece2Square('8-6', 'b');
piece2Square('8-7', 'n');
piece2Square('8-8', 'r');

//transformTest();