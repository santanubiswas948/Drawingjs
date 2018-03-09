
document.onreadystatechange = () =>
    {
      if(document.readyState === 'complete')
       {
			var canvas_elm={
				prev_x: 0,
				prev_y :0,
				flag : 0,
				start : function()
				{
					this.canvas=document.getElementById('canvas');
					this.ctx=canvas_elm.canvas.getContext("2d");
					this.canvas.addEventListener('mousedown',function(){
						if(canvas_elm.flag==0)
						{
								canvas_elm.canvas.style.cursor="pointer";
								canvas_elm.canvas.addEventListener('mousemove',draw);
						}
					});
					this.canvas.addEventListener('click',function(){
						if(canvas_elm.flag==1)
						{
							canvas_elm.canvas.removeEventListener('mousemove',draw);
							canvas_elm.flag=0;
							canvas_elm.prev_x=0;
							canvas_elm.prev_y=0;
						}	
					});
				},
				clear : function()
				{
					this.ctx.clearRect(0, 0, canvas.width, canvas.height);
				}
			}
//draw-----------------------------------------
			function draw(evt)
			{	
				var x=evt.pageX-getPositionX(canvas_elm.canvas);
				var y=evt.pageY-getPositionY(canvas_elm.canvas);
				
				if(canvas_elm.prev_x==0 && canvas_elm.prev_y==0)
				{
					canvas_elm.ctx.fillStyle="#000";
					canvas_elm.ctx.fillRect(x,y,2,2);
				}
				else
				{
					canvas_elm.ctx.beginPath();
					canvas_elm.ctx.moveTo(canvas_elm.prev_x,canvas_elm.prev_y);
					canvas_elm.ctx.lineTo(x,y);
					canvas_elm.ctx.lineWidth=2;
					canvas_elm.ctx.strokeStyle="5px solid #000";
					canvas_elm.ctx.stroke();
					canvas_elm.ctx.closePath();
				}
				canvas_elm.prev_x=x;
				canvas_elm.prev_y=y;
				canvas_elm.flag=1;
			}

//For getting X position-----------------
			function getPositionX(elem)
			{
				var x=0;
				do{
					if(!isNaN(elem.offsetLeft))
					{
						x +=elem.offsetLeft;
					}
				}while(elem=elem.offsetParent);
				return x;
			}

//For getting Y Position---------------------------
			function getPositionY(elem)
			{
				var y=0;
				do{
					if(!isNaN(elem.offsetTop))
					{
						y +=elem.offsetTop;
					}
				}while(elem=elem.offsetParent);
				return y;
			}
//start---------------------
			canvas_elm.start();
			
	   }
	}