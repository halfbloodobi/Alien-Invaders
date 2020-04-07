const btn_start = document.querySelector(".startButton");
const myShip = document.querySelector(".myShip");
const container = document.querySelector(".container");
const fireme = document.querySelector(".fireme");
const scoreOutput = document.querySelector(".score");
const containerDim = container.getBoundingClientRect();

function startGame(){
  if(player.gameOver){
    player.gameOver = false;
    btn_start.style.display = "none";
    player.alienSpeed = 5;
    setupAliens(5);
    player.animFrame = requestAnimationFrame(update);
  }
}

function update(){

  let tempAliens = document.querySelectorAll(".alien");
  for(let i = tempAliens.length - 1; i >= 0; i--){
    let al = tempAliens[i];
    if(al.xpos > (containerDim.width - al.offsetWidth) || al.xpos < containerDim.left){
      al.directionMove *= -1;
      al.ypos += 40;
    }

    al.xpos += (player.alienSpeed * al.directionMove);
    al.style.left = al.xpos + "px";
    al.style.top = al.ypos + "px";
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
