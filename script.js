let flag = true;
let score = 0;

audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');
  
setTimeout(() => {
    audio.play();
}, 100);

document.onkeydown = function(e){
    console.log(e.key);
    if(e.key=="ArrowUp")
    {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() =>{
            dino.classList.remove('animateDino')
        }, 1000);
    }
    else if(e.key=="ArrowRight")
    {
        dino = document.querySelector('.dino');
        dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = dx + 112+"px";
    }
    else if(e.key=="ArrowLeft")
    {
        dino = document.querySelector('.dino');
        dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = dx - 112+"px";
    }
}

setInterval(() =>{
    dino = document.querySelector('.dino');
    obstacle = document.querySelector('.obstacle');
    gameover = document.querySelector('.gameover');
    yourscore = document.querySelector('.yourscore');

    dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
    
    ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    distancex = Math.abs(dx-ox);
    distancey = Math.abs(dy-oy);

    if(distancex<93 && distancey<52)
    {
        obstacle.classList.remove('obstacleani');
        gameover.innerHTML = "Game Over"
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if((distancex< 145) && flag){
        flag = false;
        score+=1;
        yourscore.innerHTML = "Your Score: " + score
        setTimeout(() => {
           flag=true; 
        }, 1000);        
    }
},100);         /*500*/
