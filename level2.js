function Level2() {
  var rows = 5;
  var columns = 13;
  var brickWidth = 50;
  var brickHeight = 20;
  var bricks = [];

  for (var r = 0; r < rows; r++) {
    for (var c = 0; c < columns; c++) {
      if(r == c || c == r || r+2 == c || r+6 == c || r+8 == c) {
        bricks.push({
          color: 'red',
          x: c * (brickWidth + 10) + 10,
          y: r * (brickHeight + 10 ) + 50,
          width: brickWidth,
          height: brickHeight,
          visible: true,
          durability: 3

        });
      }

      else if (r == c || c == r || r+1 == c || r+7 == c) {
        bricks.push({
          color: 'red',
          x: c * (brickWidth + 10) + 10,
          y: r * (brickHeight + 10) + 50,
          width: brickWidth,
          height: brickHeight,
          visible: true,
          durability: 2

        });
      }

      else {
        bricks.push({
          color: 'red',
          x: c * (brickWidth + 10) + 10,
          y: r * (brickHeight + 10) + 50,
          width: brickWidth,
          height: brickHeight,
          visible: true,
          durability: 1
        });
      }





    }
  }

  return bricks;
}