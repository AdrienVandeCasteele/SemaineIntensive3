var perso = document.querySelector("div#perso"),
    positionX = "0px",
    positionY = "0px",
    map = document.querySelector("div#map"),
    mapTable = new Array;

for(i=0; i<10; i++){
  mapTable[i] = new Array;
  for(j=0; j<10; j++){
    if((i||j)==0 || (i||j)==9){
      mapTable[i][j] = 5;
    }else{
      mapTable[i][j] = 0;
    }
  }
}


window.onkeydown = function(){
  var e = event || window.event;
  var key = e.which || e.keyCode;
  if(key==40){
    if(notEmpty(parseInt(positionX),parseInt(positionY)+10)){
      positionY = parseInt(positionY)+10+"px";
      perso.style.top = positionY;
      return false;
    }
  }else if(key==38){
    if(notEmpty(parseInt(positionX),parseInt(positionY)-10)){
      positionY = parseInt(positionY)-10+"px";
      perso.style.top = positionY;
      return false;
    }
  }else if(key==37){
    if(notEmpty(parseInt(positionX)-10,parseInt(positionY))){
      positionX = parseInt(positionX)-10+"px";
      perso.style.left = positionX;
      return false;
    }
  }else if(key==39){
    if(notEmpty(parseInt(positionX)+10,parseInt(positionY))){
      positionX = parseInt(positionX)+10+"px";
      perso.style.left = positionX;
      return false;
    }
  }
  
}

function notEmpty(posX, posY){
  if(mapTable[Math.floor(posY/60)][Math.floor(posX/60)]!=0){
    return false;
  }else{
    return true;
  }
}