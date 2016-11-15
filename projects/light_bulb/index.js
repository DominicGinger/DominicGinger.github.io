const getWidth = () => document.body.clientWidth;
let y = 0;
let on = false;

const drawRect = (ctx,colour,x,height,width) => {
    ctx.fillStyle = colour;
    if (!width) {
        ctx.fillRect(200-x,y,x*2,height);
        y += height;
    } else {
        ctx.fillRect(200-x,y-height,width,height);
    }
};

const drawCeilingLamp = ctx => {
    drawRect(ctx, 'black', 5, 100);
    drawRect(ctx, 'black', 25, 20);
    drawRect(ctx, 'black', 75, 100);
};

const drawBulb = ctx => {
    const colour = on ? 'yellow' : 'grey';
    ctx.fillStyle = colour;
    drawRect(ctx, colour, 40, 20);
    drawRect(ctx, colour, 50, 20);
    drawRect(ctx, colour, 60, 10);
    drawRect(ctx, colour, 70, 20);
    drawRect(ctx, colour, 80, 70);
    drawRect(ctx, colour, 70, 20);
    drawRect(ctx, 'white', 40, 20, 30);
    drawRect(ctx, colour, 60, 10);
    drawRect(ctx, colour, 40, 10);
};

const drawLightSwitch = ctx => {
    const leverPosition = on ? 20 : 70;
    ctx.fillStyle = 'grey';
    ctx.fillRect(300,10,100,100);
    ctx.fillStyle = 'black';
    ctx.fillRect(320,20,10,80);
    ctx.fillRect(370,20,10,80);
    ctx.fillStyle = 'red';
    ctx.fillRect(300,leverPosition,100,20);
};

const draw = (ctx, c) => {
    y = 0;
    ctx.clearRect(0, 0, c.width, c.height);
    drawCeilingLamp(ctx);
    drawBulb(ctx);
    drawLightSwitch(ctx);
    on = !on;
};

const c = document.getElementById('canvas');
c.width = document.body.clientWidth;
c.height = document.body.clientHeight;
const ctx = c.getContext('2d');

c.addEventListener('click', e => {
    const switchX = 300;
    const switchY = 10;
    if (e.clientX >= switchX && e.clientX <= (switchX+100) && 
        e.clientY >= switchY && e.clientY <= (switchY+100)) {
        draw(ctx, c);
    }
});

draw(ctx, c);

