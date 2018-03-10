
document.onreadystatechange = () =>
    {
      if(document.readyState === 'complete')
       {
			var canvas_elm={
				prev_x: 0,
				prev_y :0,
				flag : 0,
				flag1 : 0,
				start : function()
				{
					this.canvas=document.getElementById('canvas');
					this.ctx=canvas_elm.canvas.getContext("2d");
					this.array_pointsX=[];
				    this.array_pointsY=[];
					var count_mouse_down=0;
					this.canvas.addEventListener('mousedown',function(){
						if(canvas_elm.flag==0)
						{
								canvas_elm.canvas.style.cursor="pointer";
								canvas_elm.canvas.addEventListener('mousemove',draw);
						}
					});
					canvas_elm.canvas.addEventListener('mouseup',function(){
								canvas_elm.array_pointsX=[];
								canvas_elm.array_pointsY=[];
								canvas_elm.canvas.removeEventListener('mousemove',draw);
								canvas_elm.flag=0;
								canvas_elm.prev_x=0;
								canvas_elm.prev_y=0;
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
				
				if(canvas_elm.flag1==0)
				{
					canvas_elm.flag1=1;
					canvas_elm.array_pointsX.push(x);
					canvas_elm.array_pointsY.push(y);
				}
				else
				{
					canvas_elm.flag=1;
					canvas_elm.array_pointsX.push(x);
					canvas_elm.array_pointsY.push(y);
					for(var i=1;i<canvas_elm.array_pointsX.length;i++)
						{
							var prevX=canvas_elm.array_pointsX[i-1];
							var prevY=canvas_elm.array_pointsY[i-1];
							var currX=canvas_elm.array_pointsX[i];
							var currY=canvas_elm.array_pointsY[i];
							canvas_elm.ctx.beginPath();
							canvas_elm.ctx.moveTo(prevX,prevY);
							canvas_elm.ctx.lineTo(currX,currY);
							canvas_elm.ctx.lineWidth=2.3;
							canvas_elm.ctx.strokeStyle="5px solid #000";
							canvas_elm.ctx.stroke();
							canvas_elm.ctx.closePath();
							
						}
					canvas_elm.array_pointsX.push(x);
					canvas_elm.array_pointsY.push(y);
				}
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