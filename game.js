
class Game {
    constructor() {
      this.paused = false;
      this.ball = new Ball();
      this.p1 = new Player(PADDLE_P1_X, BOARD_P1_X);
      this.p2 = new Player(PADDLE_P2_X, BOARD_P2_X);
    }

    nextState() {
      this.ball.move(this.p1, this.p2);
      this.p1.makeAction();
      this.p2.makeAction();
    }

    drawState() {
      clearCanvas();
      this.ball.draw();
      this.p1.draw();
      this.p2.draw();
    }

    updateAndDrawState() {
      if (this.paused) {
        return;
      }
      this.nextState();
      this.drawState();
    }

    setupControl() {
      window.addEventListener('keydown', function (event) {
        const code = event.code;
        if (code === P1_UP_BUTTON) {
          this.p1.action = UP_ACTION;
        } else if (code === P1_DOWN_BUTTON) {
          this.p1.action = DOWN_ACTION;
        } else if (code === P2_UP_BUTTON) {
          this.p2.action = UP_ACTION;
        } else if (code === P2_DOWN_BUTTON) {
          this.p2.action = DOWN_ACTION;
        } else if (code === PAUSE_BUTTON) {
          this.paused = !paused;
        }
      }.bind(this));

      window.addEventListener('keyup', function (event) {
        const code = event.code;
        if ((code === P1_UP_BUTTON && this.p1.action === UP_ACTION) || (code === P1_DOWN_BUTTON && this.p1.action === DOWN_ACTION)) {
          this.p1.action = STOP_ACTION;
        } else if ((code === P2_UP_BUTTON && this.p2.action === UP_ACTION) || (code === P2_DOWN_BUTTON && this.p2.action === DOWN_ACTION)) {
          this.p2.action = STOP_ACTION;
        }
      }.bind(this));
    }

    start() {
      setInterval(this.updateAndDrawState.bind(this), STATE_CHANGE_INTERVAL);
      this.setupControl();
    }
  }