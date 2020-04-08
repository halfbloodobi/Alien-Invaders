const btn_start = document.querySelector(".startButton");
const myShip = document.querySelector(".myShip");
const container = document.querySelector(".container");
const fireme = document.querySelector(".fireme");
const scoreOutput = document.querySelector(".score");
const highscoreOutput = document.querySelector(".highscore");
const bottom = document.querySelector(".bottomBar");
const containerDim = container.getBoundingClientRect();
let laser = 10;

function startGame(){
  if(player.gameOver){
    clearAliens();
    player.score = 0;
    player.powerUp = 0;
    player.powerUpLaser = 0;
    player.powerUpSlowEnemies = 0;
    scoreOutput.textContent = player.score;
    player.gameOver = false;
    btn_start.style.display = "none";
    player.alienSpeed = 10;
    player.fire = false;
    fireme.classList.add("hide");
    setupAliens(20);
    player.animFrame = requestAnimationFrame(update);
  }
}

function update(){
  if(!player.gameOver){
    let tempAliens = document.querySelectorAll(".alien");
    let tempPowerUps = document.querySelectorAll(".powerUp");
    if(tempAliens.length == 0){
      gameOver();
      btn_start.innerHTML = "You Won! Click here to play again";
    }
    for(let i = tempAliens.length - 1; i >= 0; i--){
      let al = tempAliens[i];
      if(isCollide(al,fireme)){
        let rnd = Math.floor(Math.random() * 3);
        if(rnd == 0){
          console.log("powerUp");
          AddPowerUp(al.xpos, al.ypos);
        }
        player.alienSpeed++;
        player.score += Math.abs(al.directionMove);
        scoreOutput.textContent = player.score;
        player.fire = false;
        fireme.classList.add("hide");
        al.parentNode.removeChild(al);
        fireme.ypos = containerDim.height + 100;
      }
      if(al.xpos > (containerDim.width - al.offsetWidth + 155) || al.xpos < containerDim.left + 10){
        al.directionMove *= -2;
        al.ypos += 40;
        if(al.ypos > myShip.offsetTop - 40){
          gameOver();
          btn_start.innerHTML = "You lost! Click here to play again";
        }
      }
      if(al.directionMove < 0){
        al.xpos += -player.alienSpeed;
      }
      else{
        al.xpos += player.alienSpeed;
      }
      al.style.left = al.xpos + "px";
      al.style.top = al.ypos + "px";
    }

    for(let i = 0; i < tempPowerUps.length; i++){
      let pu = tempPowerUps[i];

      if(isCollide(pu,myShip)){
        rnd = Math.floor(Math.random() * 3);
        if(rnd == 2){
          player.score += 500;
          scoreOutput.textContent = player.score;
        }
        else{
          if(rnd == 1){
            player.powerUpLaser = 1;
          }
          else{
            player.powerUpSlowEnemies = 1;
          }
        }
        pu.parentNode.removeChild(pu);
      }
      if(isCollide(pu,bottom)){
        pu.parentNode.removeChild(pu);
      }
      pu.ypos += 10;
      pu.style.top = pu.ypos + "px";
    }

    if(player.powerUpSlowEnemies == 1){
      player.alienSpeed = 1;
    }
    if(player.powerUpLaser == 1){
      fireme.style.height = containerDim.height + "px";
      laser = containerDim.height / 1.5 + 100;
    }


    let tempPos = myShip.offsetLeft;

    if(player.fire){
      if(fireme.ypos > 0){
      fireme.ypos -= 15;
      fireme.style.top = fireme.ypos + "px";
    }else {
      player.fire = false;
      fireme.classList.add("hide");
      fireme.ypos = containerDim.height + 100;
    }
  }
    if(keyV.left && tempPos > containerDim.left){
      tempPos -= player.speed;
    }
    if(keyV.right && tempPos < containerDim.right - myShip.offsetWidth){
      tempPos += player.speed;
    }
    myShip.style.left = tempPos + "px";
    player.animFrame = requestAnimationFrame(update);
  }
}
