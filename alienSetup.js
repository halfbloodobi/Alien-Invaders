function setupAliens(num){
  let tempWidth = 90;
  let lastCol = containerDim.width - tempWidth;
  let row ={
    x: containerDim.left + 30,
    y: 50
  }
  let directionMove = 100;
  for(let i=0; i < num; i++){
    if(row.x > (containerDim.width - tempWidth) || row.x < (containerDim.left + 30)){
      row.y += 70;
      if(directionMove > 0){
        row.x = containerDim.width - tempWidth;
      }
      else{
        row.x = containerDim.left + 30;
      }
      directionMove *= -2;
    }
    alienMaker(row, tempWidth, directionMove);
    if(directionMove > 0){
      row.x += tempWidth + 20;
    }
    else{
      row.x -= (tempWidth + 20);
    }
  }
}

function alienMaker(row, tempWidth, directionMove){
  if(row.y > containerDim.height - 200){
    return;
  }
  let div = document.createElement("div");
  div.classList.add("alien");
  eyeMaker(div, "left");
  eyeMaker(div, "right");
  mouthMaker(div);

  div.style.backgroundColor = randomColor();
  div.style.width = tempWidth + "px";
  div.xpos = Math.floor(row.x);
  div.ypos = Math.floor(row.y);
  div.style.left = div.xpos + "px";
  div.style.top = div.ypos + "px";
  div.directionMove = directionMove;
  container.appendChild(div);
}

function eyeMaker(div,position){
  let eye = document.createElement("span");
  eye.classList.add("eye");
  position==="left" ? eye.style.left = "15px" : eye.style.right = "15px"
  eye.style.top = "5px";
  div.appendChild(eye);
}

function mouthMaker(div){
  let mouth = document.createElement("span");
  mouth.classList.add("mouth");
  mouth.style.left = "17px";
  div.appendChild(mouth);
}

function randomColor(){
  return "#" + Math.random().toString(16).substr(-6);
}
