  const btn_start = document.querySelector(".startButton");
  const myShip = document.querySelector(".myShip");
  const container = document.querySelector(".container");
  const fireme = document.querySelector(".fireme");
  const scoreOutput = document.querySelector(".score");

  const containerDim = container.getBoundingClientRect();
  btn_start.addEventListener("click", startGame);
  let player ={
    score: 0,
    speed: 5,
    gameOver: true,
    fire: false,
    alienSpeed: 5
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
      player.fire = true;
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

  function startGame(){
    console.log("start game");
    player.animFrame = requestAnimationFrame(update);
  }

  function update(){
    let tempPos = myShip.offsetLeft;
    if(keyV.left){
      tempPos -= player.speed;
    }
    if(keyV.right){
      tempPos += player.speed;
    }
    myShip.style.left = tempPos + "px";
    player.animFrame = requestAnimationFrame(update);
  }
