window.addEventListener('load', function() {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth * 0.8;
    canvas .height = window.innerHeight * 0.8;
    //Canvas settings
    ctx.fillStyle = 'green';
    ctx.strokeStyle = 'yellow';
    ctx.lineWidth = 30;
    ctx.lineCap = 'round';

    //effect settings
    let size = 200;
    let sides = 2;
    ctx.save();
    ctx.translate(canvas.width/2,canvas.height/2); // translate, scale and rotate adds upp when executed multiple times.
    ctx.scale(1,1);
    ctx.rotate(0);
    //ctx.fillRect(0,0,canvas.width,canvas.height);

    //ctx.restore();
    for (let i= 0; index < sides; i++) {
	    ctx.beginPath();
	    ctx.moveTo(0,0);
	    ctx.lineTo(size,0);
	    ctx.stroke();
        ctx.rotate(Math.PI*2);
    };

    ctx.restore()
});