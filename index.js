window.addEventListener('load', function() {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth *0.8;
    canvas .height = window.innerHeight *0.8;
    //Canvas settings
    ctx.fillStyle = 'green'
    ctx.strokeStyle = 'yellow';
    ctx.lineWidth = 30;
    ctx.lineCap = 'round'

    //effect settings
    let size = 100;
    ctx.save()
    ctx.translate(200,100);
    ctx.scale(0.5,0.5);
    ctx.rotate(0.3)
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
    ctx.moveTo(canvas.width/2,canvas.height/2);
    ctx.lineTo(size,canvas.height/2);
    ctx.stroke();


});