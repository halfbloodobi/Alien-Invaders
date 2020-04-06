  const btn_start = document.querySelector(".startButton");
  const myShip = document.querySelector(".myShip");
  const container = document.querySelector(".container");
  const fireme = document.querySelector(".fireme");
  const scoreOutput = document.querySelector(".score");

  const containerDim = container.getBoundingClientRect();

  function startGame(){
    console.log("start game");
    player.animFrame = requestAnimationFrame(update);
  }

  function addShoot(){
    player.fire = true;
    fireme.classList.remove("hide");
    fireme.xpos = (myShip.offsetLeft + (myShip.offsetWidth / 2));
    fireme.ypos = myShip.offsetTop - 10;
    fireme.style.left = fireme.xpos + "px";
    fireme.style.top = fireme.ypos + "px";
  }

  function update(){
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
