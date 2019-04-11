
        var myCanvas = document.getElementsByClassName('my-canvas')[0],
            newPoint = {},
            startPoint = {};
        var ctx = myCanvas.getContext('2d');
        // 灰色遮罩
        ctx.fillStyle = "#eee";
        ctx.fillRect(0,0,500,500);
        // 设置 destination-out 使 canvas 后面画出的部分透明
        ctx.globalCompositeOperation = 'destination-out';

        bindEvent();
        function bindEvent(){
            myCanvas.addEventListener('mousedown', myFoo, false);
        }
        function myFoo(e){
            // 鼠标按下的起点
            startPoint.x = e.clientX - myCanvas.offsetLeft;
            startPoint.y = e.clientY - myCanvas.offsetTop;
            myCanvas.addEventListener('mousemove', moveFoo, false);
            document.addEventListener('mouseup', upFoo, false);
        }
        function moveFoo(e){
            // 保存新的终点
            newPoint.x = e.clientX - myCanvas.offsetLeft,
            newPoint.y = e.clientY - myCanvas.offsetTop;

            // 线
            ctx.beginPath();
            ctx.lineWidth = '20';
            // 线两端圆化
            ctx.lineCap = 'round';
            // 连接起点与终点
            ctx.moveTo(startPoint.x, startPoint.y);
            ctx.lineTo(newPoint.x, newPoint.y);
            ctx.stroke();
            
            // 圆
            // ctx.arc(newPoint.x, newPoint.y, 10, 0, Math.PI * 2, 1);
            // ctx.closePath();
            // ctx.fill();

            // 画完一段，把终点赋给起点
            startPoint.x = newPoint.x;
            startPoint.y = newPoint.y;
        }
        function upFoo(){
            myCanvas.removeEventListener('mousemove', moveFoo, false);
            document.removeEventListener('mouseup', upFoo, false)
        }
