const SHAPE_SIZE = 90;
const MAX_ACC = 0.2;
const GAP = 1.8;

const colors = {
  'red': '#FF6666',
  'yellow': '#FFC700',
  'blue': '#4478FF'
};

var animationInterval : string | undefined = undefined;

class Shape {
  accX: number = 0;
  accY: number = 0;
  size: number = SHAPE_SIZE;
  
  constructor(public x: number, public y: number, public color:string, size?: number) {
    this.accX = 0;
    this.accY = 0;
    if (size) { this.size = size; }
  }
  updateSize(size: number) { this.size = size; }
  setXY(x: number, y: number) { this.x = x; this.y = y; }
  render(ctx: CanvasRenderingContext2D) {}
  update() {
    this.x += this.accX;
    this.y += this.accY;
  }
}

class Square extends Shape {
  render(ctx : CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}

class Circle extends Shape {
  render(ctx : CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x + this.size / 2, this.y + this.size / 2, this.size / 2, 0, 2 * Math.PI);
    ctx.fill();
  }
}

class World {

  shapes: Shape[] = [];
  bgColor: string = '#000000';
  private ctx : CanvasRenderingContext2D | undefined;
  private width: number = 0;
  private height: number = 0;
  
  constructor(ctx: CanvasRenderingContext2D) {
    this.shapes = [];
    this.ctx = ctx;
  }

  collision(x: number, y: number, exceptShape: Shape | null) {
    return ! this.shapes.every((shape) => {
      if (shape === exceptShape) return true;
      const distance = Math.sqrt(
        (shape.x - x) ** 2 + (shape.y - y) ** 2
      );
      if (distance >= shape.size * GAP) return true;
    });
  }

  addShape(newShape: Shape) {
    let attempts = 0;
    const maxAttempts = 100;
    let valid = false;
    let x = 0, y = 0;
    while (!valid && attempts < maxAttempts) {
      x = SHAPE_SIZE + Math.floor(Math.random() * (this.width - SHAPE_SIZE*2));
      y = SHAPE_SIZE + Math.floor(Math.random() * (this.height - SHAPE_SIZE*2));
      valid = !this.collision(x,y,null);
      attempts++;
    }
    if (valid) {
      newShape.setXY(x, y);
      this.shapes.push(newShape);
    }
  }

  render() {
    if (!this.ctx) return;
    this.ctx.fillStyle = this.bgColor;
    this.ctx.fillRect(0, 0, this.width, this.height);
    this.shapes.map( (shape) => shape.render(this.ctx!) );
    this.wander();
  }

  updateRandomAcc(acc: number) {
    acc = acc + (Math.random() - 0.5)/4;
    if (Math.abs(acc)>MAX_ACC) {
      return Math.sign(acc) * MAX_ACC;
    }
    return acc;
  }

  wander() {
    this.shapes.forEach( (shape) => {
      shape.accX = this.updateRandomAcc(shape.accX);
      shape.accY = this.updateRandomAcc(shape.accY);
      shape.update();
    });
  }

  updateDimensions(width: number, height: number, bgColor: string) {
    this.width = width;
    this.height = height;
    this.bgColor = bgColor;
  }
  
  reset() { this.shapes = []; }

  getWidth() { return this.width; }
  getHeight() { return this.height; }
  getMinDimension() { return Math.min(this.width, this.height); }
}

function rgbaToHex(rgba: string) {
  const rgbaArray = rgba.replace(/rgba?\(|\s+|\)/g, '').split(',');
  const hexArray = rgbaArray.map((value, index) => {    
    const hexValue = ( index === 3 ?
      Math.round((1-parseFloat(value)) * 255).toString(16).padStart(2, '0') :
      parseInt(value).toString(16)
    );
    return hexValue.padStart(2, '0');
  });
  const hexString = '#' + hexArray.join('');
  return hexString;
}

let world: World | null = null;
let canvas: any = null; 

const updateWorldSize = () => {
  if (! canvas || ! world) return;
  
  let sizeChanged = false;

  const computedStyle = getComputedStyle(canvas);
  const bgColor = rgbaToHex(computedStyle.backgroundColor);

  if (world.getWidth() !== canvas.clientWidth) sizeChanged = true;

  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight; 

  world.updateDimensions(canvas.width, canvas.height, bgColor);
  if (sizeChanged) recreateScene(world);
}

const recreateScene = (world: World) => {
  world.reset();
  const shapeSize = world.getMinDimension() / 7;

  world.addShape(new Circle(0, 0, colors.blue, shapeSize));
  world.addShape(new Circle(0, 0, colors.blue, shapeSize));
  world.addShape(new Circle(0, 0, colors.red, shapeSize));
  world.addShape(new Circle(0, 0, colors.red, shapeSize));
  world.addShape(new Square(0, 0, colors.yellow, shapeSize));
  world.addShape(new Square(0, 0, colors.yellow, shapeSize));
  world.addShape(new Square(0, 0, colors.yellow, shapeSize));
  world.addShape(new Square(0, 0, colors.yellow, shapeSize)); 
}

export const onDestroy = () => {
  if (animationInterval) clearInterval(animationInterval);
  window.removeEventListener('resize', updateWorldSize);
  console.log('World destroyed');
}

export const initWorld = () => {
  canvas = (document.getElementById('myCanvas') as any);
  const ctx = (canvas as any).getContext('2d');

  if (canvas === null || ctx === null) {
    throw new Error('no canvas');
  }

  world = new World(ctx);
  
  updateWorldSize();

  animationInterval = (setInterval(() => {
    requestAnimationFrame(world!.render.bind(world));
  }, 10) as any);
  
  window.addEventListener('resize', () => {
    updateWorldSize();
  });
  console.log('World init');
}



