class Player {
    constructor(paddleX, boardX) {
      this.points = 0;
      this.boardX = boardX;
      this.action = STOP_ACTION;
      this.paddle = new Paddle(paddleX);
    }

    makeAction() {
      if (this.action === UP_ACTION) {
        this.paddle.stepUp();
      } else if (this.action === DOWN_ACTION) {
        this.paddle.stepDown();
      }
    }

    drawPoints() {
      drawPoints(this.points.toString(), this.boardX);
    }

    draw() {
      this.drawPoints();
      this.paddle.draw();
    }
  }