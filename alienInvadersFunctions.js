function addShoot(){
  player.fire = true;
  fireme.classList.remove("hide");
  fireme.xpos = (myShip.offsetLeft + (myShip.offsetWidth / 2) - 2);
  fireme.ypos = myShip.offsetTop - 10;
  fireme.style.left = fireme.xpos + "px";
  fireme.style.top = fireme.ypos + "px";
  fireme.style.height = 25 + "px";
}

function clearAliens(){
  let tempAliens = document.querySelectorAll(".alien");
  for(let i = 0; i < tempAliens.length; i++){
    tempAliens[i].parentNode.removeChild(tempAliens[i]);
  }
}
function clearPowerUps(){
  let tempPowerUps = document.querySelectorAll(".powerUp");
  for(let i = 0; i < tempPowerUps.length; i++){
   tempPowerUps[i].parentNode.removeChild(tempPowerUps[i]);
  }
}

function isCollide(x,y){
  let xRect = x.getBoundingClientRect();
  let yRect = y.getBoundingClientRect();

  return !(
    (xRect.bottom < yRect.top) ||
    (xRect.top > yRect.bottom) ||
    (xRect.right < yRect.left) ||
    (xRect.left > yRect.right)
  )
}

function gameOver(){
  player.gameOver = true;
  player.fire = false;
  fireme.classList.add("hide");
  btn_start.style.display = "block";
  if(player.score > parseInt(highscoreOutput.textContent)){
  highscoreOutput.textContent = player.score;
  newHighscore.classList.remove("hide");
}
}

function AddPowerUp(x, y, rnd){
  let div = document.createElement("div");
  div.classList.add("powerUp");
  div.style.backgroundColor = "gold";
  div.xpos = x;
  div.ypos = y;
  div.style.left = div.xpos + "px";
  div.style.top = div.ypos + "px";
  if(rnd <= 2){
    div.style.backgroundColor = "#ffd700";
  }
  else{
     if(rnd <= 4){
       div.style.backgroundColor = "#87bbff";
     }
     else{
       div.style.backgroundColor = "#ff0000";
     }
  }
  container.appendChild(div);
}

function addLaser(){
  fireme.classList.remove("hide");
  fireme.xpos = (myShip.offsetLeft + (myShip.offsetWidth / 2) - 2);
  fireme.ypos = myShip.offsetTop - containerDim.height;
  fireme.style.left = fireme.xpos + "px";
  fireme.style.top = fireme.ypos + "px";
  fireme.style.height = containerDim.height - 5 + "px";
}
