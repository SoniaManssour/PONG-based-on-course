class Paddle {
    constructor(paddleX) {
      this.x = paddleX;
      this.y = PADDLE_START_Y;
    }

    setY(newY) {
      const maxPaddleY = 0;
      const minPaddleY = CANVAS_HEIGHT - PADDLE_HEIGHT;
      this.y = coerceIn(newY, maxPaddleY, minPaddleY);
    }

    stepDown() {
      this.setY(this.y + PADDLE_STEP);
    }

    stepUp() {
      this.setY(this.y - PADDLE_STEP);
    }

    draw() {
      ctx.fillRect(this.x, this.y, PADDLE_WIDTH, PADDLE_HEIGHT);
    }
  }
