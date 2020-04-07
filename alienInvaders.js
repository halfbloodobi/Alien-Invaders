  function addShoot(){
    player.fire = true;
    fireme.classList.remove("hide");
    fireme.xpos = (myShip.offsetLeft + (myShip.offsetWidth / 2));
    fireme.ypos = myShip.offsetTop - 10;
    fireme.style.left = fireme.xpos + "px";
    fireme.style.top = fireme.ypos + "px";
  }
