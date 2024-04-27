const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');
const Color = require('canvas-sketch-util/color');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const degToRad =(degrees) => {
  return degrees / 180 * Math.PI;
} ;

const randomRange = (min, max) => {
  return Math.random() * (max - min) + min;
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    const cx = width * 5;
    const cy = height * 5;
    const w = width * 1;
    const h = height * 1;
    let x, y;

    const num = 50; 
    const radius =  width * 0.3;

    for (let i = 0; i < num; i++){
      context.fillStyle = 'black';

      context.save();
      context.beginPath();
      context.arc(0, 0, 1000, 0, 2 * Math.PI);
      
      context.stroke();
      context.restore();

      context.save();
      context.beginPath();
      context.arc(0, 0, 500, 0, 5 * Math.PI);
      
      context.stroke();
      context.restore();
    };

  };
};

canvasSketch(sketch, settings);
