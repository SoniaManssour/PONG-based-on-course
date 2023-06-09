class Ball {
    constructor() {
      this.x = BALL_START_X;
      this.y = BALL_START_Y;
      this.dx = BALL_START_DX;
      this.dy = BALL_START_DY;
    }

    move(p1, p2) {
      if (this.shouldBounceFromTopWall() || this.shouldBounceFromBottomWall()) {
        this.bounceFromWall();
      }
      if (this.shouldBounceFromLeftPaddle(p1.paddle) || this.shouldBounceFromRightPaddle(p2.paddle)) {
        this.bounceFromPaddle();
      }

      if (this.isOutsideOnLeft()) {
        this.moveToStart();
        p2.points++;
      } else if (this.isOutsideOnRight()) {
        this.moveToStart();
        p1.points++;
      }

      this.x += this.dx;
      this.y += this.dy;
    }

    draw() {
      drawCircle(this.x, this.y, BALL_R);
    }

    shouldBounceFromTopWall() {
      return this.y < BALL_R && this.dy < 0;
    }

    shouldBounceFromBottomWall() {
      return this.y + BALL_R > CANVAS_HEIGHT && this.dy > 0;
    }

    bounceFromWall() {
      this.dy = -this.dy;
    }

    bounceFromPaddle() {
      this.dx = -this.dx;
    }

    moveToStart() {
      this.x = BALL_START_X;
      this.y = BALL_START_Y;
    }

    isOutsideOnLeft() {
      return this.x + BALL_R < 0;
    }

    isOutsideOnRight() {
      return this.x - BALL_R > CANVAS_WIDTH;
    }

    isOnTheSameHeightAsPaddle(paddleY) {
      return isInBetween(this.y, paddleY, paddleY + PADDLE_HEIGHT);
    }

    shouldBounceFromLeftPaddle(paddle) {
      return this.dx < 0 &&
        isInBetween(this.x - BALL_R, PADDLE_P1_X, PADDLE_P1_X + PADDLE_WIDTH) &&
        this.isOnTheSameHeightAsPaddle(paddle.y);
    }

    shouldBounceFromRightPaddle(paddle) {
      return this.dx > 0 &&
        isInBetween(this.x + BALL_R, PADDLE_P2_X, PADDLE_P2_X + PADDLE_WIDTH) &&
        this.isOnTheSameHeightAsPaddle(paddle.y);
    }
  }
