btn_start.addEventListener("click", startGame);
let player ={
  score: 0,
  speed: 5,
  gameOver: true,
  fire: false,
  alienSpeed: 5,
  powerUpSlowEnemies: 0,
  powerUpLaser: 0
};
let keyV ={};
document.addEventListener("keydown",function(e){
  let key = e.keyCode;
  if(key===37){
    keyV.left = true;
  }
  else if(key===39){
    keyV.right = true;
  }
  else if(key===38 || key===32){
    if(!player.fire){
      addShoot();
    }
  }
})
document.addEventListener("keyup",function(e){
  let key = e.keyCode;
  if(key===37){
    keyV.left = false;
  }
  else if(key===39){
    keyV.right = false;
  }
})
