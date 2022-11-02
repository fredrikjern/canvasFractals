window.addEventListener('load', function() {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth * 0.8;
    canvas .height = window.innerHeight * 0.8;
    //Canvas settings
    ctx.fillStyle = 'green';
    ctx.strokeStyle = 'gold';
 
    ctx.lineCap = 'round';


    //effect settings
    let size = canvas.width < canvas.height ? canvas.width*0.3 :canvas.height*0.3;
    let sides = 6; // Jämna tal ser bra ut, borde gå att justera för ojämna tal (ändra hur första linjen ritas)
    let maxLevel = 4; // många levels = långsamt
    let scale  = 0.5;
    let spread = 0.49;
    let branches = 2;
                                                    

    // controls
    const randomizeButton = document.getElementById('randomizeButton')
    let lineWidth = Math.floor(Math.random() * 20) + 10
;   let color ='hsl('+ Math.random() * 360 + ',100%,50%)';     


    function drawBranch(level) {
        if (level > maxLevel) return;
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(size,0);
        ctx.stroke();
        if (level>2) {
            ctx.shadowColor = 'rgba(0,0,0.7)';
            ctx.shadowOffsetX = 10;
            ctx.shadowOffsetY = 5;
            ctx.shadowBlur = 10;
        }
        for (let index = 0; index < branches; index++) {
	        ctx.save()
	        ctx.translate(size-(size/branches)*index,0)
	        ctx.scale(scale,scale);
	        ctx.rotate(spread)
	        drawBranch(level+1);
	        ctx.restore();
	
	        ctx.save()
	        ctx.translate(size-(size/branches)*index,0)
	        ctx.scale(scale,scale);
	        ctx.rotate(-spread)
	        drawBranch(level+1);
	        ctx.restore();
        };
    };
   
    function drawFractal(level) {
        ctx.clearRect(0,0,canvas.width,canvas.height)
        ctx.save();
        ctx.lineWidth = 10;
        ctx.strokeStyle = color;
        ctx.translate(canvas.width/2,canvas.height/2)
        // if (sides%2 !== 0 && level===0) {
        //     console.log("nu körs ifen")
        //     ctx.rotate((Math.PI/180)*15)
            
        // }
        for (let index = 0; index < sides; index++) {
            ctx.rotate((Math.PI*2)/sides)
            drawBranch(0);
        };     
        ctx.restore();
    }
    
    function randomizeFractal() {
        sides = Math.floor(Math.random()*7) + 2;
        scale = Math.random()*0.2 + 0.4;
        spread = Math.random()*2.9 + 0.1;
        color ='hsl('+ Math.random() * 360 + ',100%,50%)'; 
    }
    
    randomizeButton.addEventListener('click', function() {
        randomizeFractal();
        drawFractal();
    });
    //ctx.restore()

});