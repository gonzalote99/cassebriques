function Level4() {
  var rows = 5;
  var columns = 13;
  var brickWidth = 50;
  var brickHeight = 20;
  var bricks = [];

  for (var r = 0; r < rows; r++) {
    for (var c = 0; c < columns; c++) {
      if(r == 0 || r == rows - 1) {
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

      else if ( r == 1 || r == rows - 2) {
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