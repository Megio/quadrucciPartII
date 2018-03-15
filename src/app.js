import p5 from 'p5';
import 'p5/lib/addons/p5.sound';

const sketch = p => {
  let canvas;

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = () => {
    p.background(255);
    const x = p.mouseX
    const y = p.mouseY

    p.stroke(0)
    p.strokeWeight(4)
    p.noFill()
    p.ellipse(x, y, 40, 40)
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.mousePressed = () => {
  };
};

new p5(sketch);
