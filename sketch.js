var corpo = [], chao
var atrito = []
var perguntas = []
var resetButton, confirmButton, calculoButton, calculo=[]
var Forca=[], Tracao
var ccf
var form
var TdF
var Resp
var Massa = [], Aceleration
var G
// Polia movel
//Peso com 3 corpos
//Colados com duas forças opostas

function preload() {
  calculo[0]=-1
  resetButton = createButton("Reset");
    resetButton.class("customButton");
    resetButton.style('font-size', Math.sqrt((windowWidth/8)*2,(windowHeight/4)*2)+'px')
    resetButton.size(windowWidth/4 , windowHeight/16)
    resetButton.position(windowWidth/2 - resetButton.width/2, 0 + resetButton.height/8);

    confirmButton = createButton("Enter");
    confirmButton.class("customButton");
    confirmButton.style('font-size', Math.sqrt((windowWidth/8)*2,(windowHeight/4)*2)+'px')
    confirmButton.size(windowWidth/6 , windowHeight/16)
    confirmButton.position(windowWidth/2+windowWidth/8,(windowHeight/4)*3);

    calculoButton = createButton("Calculo:");
    calculoButton.class("customButton");
    calculoButton.style('font-size', Math.sqrt((windowWidth/8)*2,(windowHeight/4)*2)+'px')
    calculoButton.size(windowWidth/6 , windowHeight/16)
    calculoButton.position(0,0);

    Massa[0]=[Math.round(random(10,100)),0]
    Massa[1]=[Math.round(random(10,100)),0]
    Massa[2]=[Math.round(random(10,100)),0]

    Aceleration=random(1,10); Aceleration=Aceleration.toFixed(1)

perguntas.push([
"Qual é a força resultante?",
"Qual a massa do corpo? ",
"Qual a aceleração do sistema?",

"Qual é o atrito do sistema?"
],["AB","BA","BC","CB"])

}

function setup() {
  createCanvas(windowWidth,windowHeight)
  switch(Math.round(random(1,2))){
    case(1): //Sem atrito
    switch(Math.round(random(1,2))){
//Sem gravidade
      case(1):
      switch(Math.round(random(1,2))){
        //Tração
        case(1):
        TdF="Tração"
    switch(Math.round(random(1,2))){
//Dois corpos
case(1):
corpo.push(createSprite(width/4,height/2,width/8,height/4))
corpo.push(createSprite(width/4*3,height/2,width/8,height/4))
corpo[0].shapeColor="black";corpo[1].shapeColor="black"
Forca[0]=(Massa[0][0]+Massa[1][0])*Aceleration; Forca[0]=Forca[0].toFixed(1)
break
//Tres corpos
case(2):
corpo.push(createSprite(width/4,height/2,width/12,height/4))
corpo.push(createSprite(width/4*2,height/2,width/12,height/4))
corpo.push(createSprite(width/4*3,height/2,width/12,height/4))
corpo[0].shapeColor="black";corpo[1].shapeColor="black";corpo[2].shapeColor="black"
Forca[0]=(Massa[0][0]+Massa[1][0]+Massa[2][0])*Aceleration; Forca[0]=Forca[0].toFixed(1)
break}
break

//Colados
case(2):
TdF="Colado"
switch(Math.round(random(1,2))){
  //Dois corpos
  case(1):
  corpo.push(createSprite(width/2-width/8/2,height/2,width/8,height/4))
  corpo.push(createSprite(width/2+width/8/2,height/2,width/8,height/4))
  corpo[0].shapeColor="black";corpo[1].shapeColor="black"
  Forca[0]=(Massa[0][0]+Massa[1][0])*Aceleration; Forca[0]=Forca[0].toFixed(1)
  
  break
  //Tres corpos
  case(2):
  corpo.push(createSprite(width/2-width/8/2,height/2,width/12,height/4))
  corpo.push(createSprite(width/2,height/2,width/12,height/4))
  corpo.push(createSprite(width/2+width/8/2,height/2,width/12,height/4))
  corpo[0].shapeColor="black";corpo[1].shapeColor="black";corpo[2].shapeColor="black"
  Forca[0]=(Massa[0][0]+Massa[1][0]+Massa[2][0])*Aceleration; Forca[0]=Forca[0].toFixed(1)
  break}
break
    }
if(Math.round(random(1,2))==1){ccf=0}
else{ccf=(corpo.length-1)}
break

//Gravidade
case(2):
G=10
chao=createSprite(width/2,height/2,width/4,height/4);chao.shapeColor="gray"

  //Dois corpos
  ccf=Math.round(random(1,2));ccf=ccf-1
  corpo.push(createSprite(chao.position.x-chao.width+width/12,chao.position.y,width/12,height/4))
corpo.push(createSprite(chao.position.x,chao.position.y-chao.height,width/12,height/4))
corpo[0].shapeColor="black";corpo[1].shapeColor="black"
Forca[0]=(Massa[0][0]+Massa[1][0])*Aceleration; Forca[0]=Forca[0].toFixed(1)



break
    }

 break


 case(2): //Atrito
 atrito[0]=random(0.1,1);atrito[0]=atrito[0].toFixed(1)

 switch(Math.round(random(1,2))){
//Sem gravidade
   case(1):
   switch(Math.round(random(1,2))){
     //Tração
     case(1):
     TdF="Tração"
 switch(Math.round(random(1,2))){
//Dois corpos
case(1):
corpo.push(createSprite(width/4,height/2,width/8,height/4))
corpo.push(createSprite(width/4*3,height/2,width/8,height/4))
corpo[0].shapeColor="black";corpo[1].shapeColor="black"
Forca[0]=(Massa[0][0]+Massa[1][0])*Aceleration + (Massa[0][0]+Massa[1][0])*atrito[0]; Forca[0]=Forca[0].toFixed(1)
break
//Tres corpos
case(2):
corpo.push(createSprite(width/4,height/2,width/12,height/4))
corpo.push(createSprite(width/4*2,height/2,width/12,height/4))
corpo.push(createSprite(width/4*3,height/2,width/12,height/4))
corpo[0].shapeColor="black";corpo[1].shapeColor="black";corpo[2].shapeColor="black"
Forca[0]=(Massa[0][0]+Massa[1][0]+Massa[2][0])*Aceleration + (Massa[0][0]+Massa[1][0]+Massa[2][0])*atrito[0]; Forca[0]=Forca[0].toFixed(1)
break}
break

//Colados
case(2):
TdF="Colado"
switch(Math.round(random(1,2))){
  //Dois corpos
  case(1):
  corpo.push(createSprite(width/2-width/8/2,height/2,width/8,height/4))
  corpo.push(createSprite(width/2+width/8/2,height/2,width/8,height/4))
  corpo[0].shapeColor="black";corpo[1].shapeColor="black"
  Forca[0]=(Massa[0][0]+Massa[1][0])*Aceleration + (Massa[0][0]+Massa[1][0])*atrito[0]; Forca[0]=Forca[0].toFixed(1)
  
  break
  //Tres corpos
  case(2):
  corpo.push(createSprite(width/2-width/8/2,height/2,width/12,height/4))
  corpo.push(createSprite(width/2,height/2,width/12,height/4))
  corpo.push(createSprite(width/2+width/8/2,height/2,width/12,height/4))
  corpo[0].shapeColor="black";corpo[1].shapeColor="black";corpo[2].shapeColor="black"
  Forca[0]=(Massa[0][0]+Massa[1][0]+Massa[2][0])*Aceleration + (Massa[0][0]+Massa[1][0]+Massa[2][0])*atrito[0]; Forca[0]=Forca[0].toFixed(1)
  break}
break
    }
if(Math.round(random(1,2))==1){ccf=0}
else{ccf=(corpo.length-1)}
break

//Gravidade
case(2):
Forca[0]=(Massa[0][0]*10)+((Massa[0][0]+Massa[1][0])*Aceleration);Forca[0]=Forca[0].toFixed(1)
G=10
chao=createSprite(width/2,height/2,width/4,height/4);chao.shapeColor="gray"

  //Dois corpos
  ccf=Math.round(random(1,2));ccf=ccf-1
  corpo.push(createSprite(chao.position.x-chao.width+width/12,chao.position.y,width/12,height/4))
corpo.push(createSprite(chao.position.x,chao.position.y-chao.height,width/12,height/4))
corpo[0].shapeColor="black";corpo[1].shapeColor="black"




break
    }

 break


  }

}

function draw() {
  background(200);
  textSize(20)
  text("",0,height/100*2.5)
  if(form==undefined){form=new Form();console.log("Resp: "+Resp+"   Atrito: "+atrito[0]+"   Aceleração: "+Aceleration+"   Força: "+Forca[0]+" Massas: "+Massa+"  CCF: "+ccf)}
  resetButton.mousePressed(() => {reset()})
  confirmButton.mousePressed(() => {form.Res()})
  calculoButton.mousePressed(() => {calculo[0]=-calculo[0]})
  if(calculo[0]==1){Calculo()}
Line()
    drawSprites()
Name()
}

function reset(){window.location.reload()}

function Line(){
  fill("black")
  //Corda
  if(TdF=="Tração"){
line(corpo[0].position.x,corpo[0].position.y,corpo[1].position.x,corpo[1].position.y)
if(corpo[2]!=undefined){line(corpo[1].position.x,corpo[1].position.y,corpo[2].position.x,corpo[2].position.y)}
}
if(G!=undefined){
  line(corpo[0].position.x,corpo[1].position.y,corpo[1].position.x,corpo[1].position.y)
  line(corpo[0].position.x,corpo[0].position.y,corpo[0].position.x,corpo[1].position.y)
  ellipse(corpo[0].position.x,corpo[1].position.y,Math.sqrt(corpo[0].width*2+corpo[0].height*2)*2)
  line(corpo[0].position.x,corpo[1].position.y,corpo[0].position.x+corpo[0].width/2,corpo[0].position.y-corpo[0].height/2)
  if(corpo[2]!=undefined){line(corpo[2].position.x,corpo[1].position.y,corpo[1].position.x,corpo[1].position.y)
    line(corpo[2].position.x,corpo[2].position.y,corpo[2].position.x,corpo[1].position.y)
ellipse(corpo[2].position.x,corpo[1].position.y,Math.sqrt(corpo[0].width*2+corpo[0].height*2)*2)
line(corpo[2].position.x,corpo[1].position.y,corpo[2].position.x-corpo[2].width/2,corpo[2].position.y-corpo[2].height/2)}
}



//Triangulo
if(ccf==0 && G==undefined){
line(corpo[0].position.x,corpo[0].position.y,corpo[0].position.x-corpo[0].width,corpo[0].position.y)
triangle(
  corpo[0].position.x-(corpo[0].width)*1.5,corpo[0].position.y,
  corpo[0].position.x-(corpo[0].width),corpo[0].position.y-corpo[0].height/2.5,
  corpo[0].position.x-(corpo[0].width),corpo[0].position.y+corpo[0].height/2.5
  )
  //Valor da força
textSize(20)
if(Forca[1]==undefined){text("F = "+Forca[0],corpo[0].position.x-(corpo[0].width),corpo[0].position.y-corpo[0].height/1.85)
}
}
else if((ccf==1 || ccf==2) &&  G==undefined){
line(corpo[corpo.length-1].position.x,corpo[corpo.length-1].position.y,corpo[corpo.length-1].position.x+corpo[corpo.length-1].width,corpo[corpo.length-1].position.y)
triangle(
corpo[corpo.length-1].position.x+(corpo[corpo.length-1].width)*1.5,corpo[corpo.length-1].position.y,
corpo[corpo.length-1].position.x+(corpo[corpo.length-1].width),corpo[corpo.length-1].position.y-corpo[corpo.length-1].height/2.5,
corpo[corpo.length-1].position.x+(corpo[corpo.length-1].width),corpo[corpo.length-1].position.y+corpo[corpo.length-1].height/2.5
)
//Valor da força
textSize(20)
if(Forca[1]==undefined){text("F = "+Forca[0],corpo[corpo.length-1].position.x+(corpo[corpo.length-1].width),corpo[corpo.length-1].position.y-corpo[corpo.length-1].height/1.85)
}
}



if(ccf==0 && G!=undefined){
  line(corpo[0].position.x,corpo[0].position.y,corpo[0].position.x,corpo[0].position.y+(corpo[0].height/1.5))
  triangle(
    corpo[0].position.x-(corpo[0].width)/2,corpo[0].position.y+corpo[0].height/1.75,
    corpo[0].position.x+(corpo[0].width)/2,corpo[0].position.y+corpo[0].height/1.75,
    corpo[0].position.x,corpo[0].position.y+corpo[0].height/2.5+corpo[0].height/1.75
    )
    //Valor da força
  textSize(20)
  if(Forca[1]==undefined){text("F = "+Forca[0], corpo[0].position.x,corpo[0].position.y+corpo[0].height/2.5+corpo[0].height/1.75)
  }
  }
else if(ccf==1 && G!=undefined){
    line(corpo[corpo.length-1].position.x,corpo[corpo.length-1].position.y,corpo[corpo.length-1].position.x+corpo[corpo.length-1].width,corpo[corpo.length-1].position.y)
    triangle(
    corpo[corpo.length-1].position.x+(corpo[corpo.length-1].width)*1.5,corpo[corpo.length-1].position.y,
    corpo[corpo.length-1].position.x+(corpo[corpo.length-1].width),corpo[corpo.length-1].position.y-corpo[corpo.length-1].height/2.5,
    corpo[corpo.length-1].position.x+(corpo[corpo.length-1].width),corpo[corpo.length-1].position.y+corpo[corpo.length-1].height/2.5
    )
  //Valor da força
  textSize(20)
  if(Forca[1]==undefined){text("F = "+Forca[0],corpo[corpo.length-1].position.x+(corpo[corpo.length-1].width),corpo[corpo.length-1].position.y-corpo[corpo.length-1].height/1.85)
  }
  }
}

function Name(){
  fill("red")
  textSize(Math.sqrt(corpo[0].width*2+corpo[0].height*2))
  text("A",corpo[0].position.x-textSize()/2.5,corpo[0].position.y)
  if(Massa[0][1]==0){text(Massa[0][0],corpo[0].position.x-textSize()/2.5,corpo[0].position.y+corpo[0].height/4)}

  text("B",corpo[1].position.x-textSize()/2.5,corpo[1].position.y)
  if(Massa[1][1]==0){text(Massa[1][0],corpo[1].position.x-textSize()/2.5,corpo[1].position.y+corpo[1].height/4)}

  if(corpo[2]!=undefined){text("C",corpo[2].position.x-textSize()/2.5,corpo[2].position.y)
  if(Massa[2][1]==0){text(Massa[2][0],corpo[2].position.x-textSize()/2.5,corpo[2].position.y+corpo[2].height/4)}}
}

function Calculo(){
if(atrito[0]==undefined){
if(G==undefined){
if(TdF=="Tração"){
if(ccf==0){
  if(corpo.length==2){calculo[1]="F - T = Ma * a\nT = Mb * a\n--------------------------\nF = (Ma + Mb) * a"}
  if(corpo.length==3){calculo[1]="F - Tab = Ma * a\nTab - Tbc = Mb * a\nTbc = Mc * a\n--------------------------\nF = (Ma + Mb + Mc) * a"}
}

if(ccf==(corpo.length-1)){
  if(corpo.length==2){calculo[1]="F - T = Mb * a\nT = Ma * a\n--------------------------\nF = (Ma + Mb) * a"}
  if(corpo.length==3){calculo[1]="F - Tcb = Mc * a\nTcb - Tba = Mb * a\nTba = Ma * a\n--------------------------\nF = (Ma + Mb + Mc) * a"}
}
}


if(TdF=="Colado"){
  if(ccf==0){
    if(corpo.length==2){calculo[1]="F - Fab = Mb * a\nFba = Ma * a\n--------------------------\nF = (Ma + Mb) * a"}
    if(corpo.length==3){calculo[1]="F - Fbc = Mc * a\nFcb - Fab = Mb * a\nFba = Ma * a\n--------------------------\nF = (Ma + Mb + Mc) * a"}
  }
  
  if(ccf==(corpo.length-1)){
    if(corpo.length==2){calculo[1]="F - Fba = Ma * a\nFab = Mb * a\n--------------------------\nF = (Ma + Mb) * a"}
    if(corpo.length==3){calculo[1]="F - Fba = Ma * a\nFab - Fcb = Mb * a\nFbc = Mc * a\n--------------------------\nF = (Ma + Mb + Mc) * a"}
  }
}
}

else{
if(ccf==0){calculo[1]="T = Mb * a\nPa - T = Ma * a\n--------------------------\nPa = (Ma + Mb) * a"}else{calculo[1]="F - Pa = (Ma + Mb) * a\n--------------------------\nT - Pa = Ma * a"}
}
}


if(atrito[0]!=undefined){
  if(G==undefined){
  if(TdF=="Tração"){
  if(ccf==0){
    if(corpo.length==2){calculo[1]="F - T - Fatd(A) = Ma * a\nT - Fatd(B) = Mb * a\n--------------------------\nF - Fatd(A+B) = (Ma + Mb) * a"}
    if(corpo.length==3){calculo[1]="F - Tab - Fatd(A) = Ma * a\nTab - Tbc - Fatd(B) = Mb * a\nTbc - Fatd(C) = Mc * a\n--------------------------\nF - Fatd(A+B+C) = (Ma + Mb + Mc) * a"}
  }
  
  if(ccf==(corpo.length-1)){
    if(corpo.length==2){calculo[1]="F - T - Fatd(B) = Mb * a\nT - Fatd(A) = Ma * a\n--------------------------\nF - Fatd(A+B) = (Ma + Mb) * a"}
    if(corpo.length==3){calculo[1]="F - Tcb - Fatd(C) = Mc * a\nTcb - Tba - Fatd(B) = Mb * a\nTba - Fatd(A) = Ma * a\n--------------------------\nF - Fatd(A+B+C) = (Ma + Mb + Mc) * a"}
  }
  }
  
  
  if(TdF=="Colado"){
    if(ccf==0){
      if(corpo.length==2){calculo[1]="F - Fab - Fatd(B) = Mb * a\nFba - Fatd(A) = Ma * a\n--------------------------\nF - Fatd(A+B) = (Ma + Mb) * a"}
      if(corpo.length==3){calculo[1]="F - Fbc - Fatd(C) = Mc * a\nFcb - Fab - Fatd(B) = Mb * a\nFba - Fatd(A) = Ma * a\n--------------------------\nF - Fatd(A+B+C) = (Ma + Mb + Mc) * a"}
    }
    
    if(ccf==(corpo.length-1)){
      if(corpo.length==2){calculo[1]="F - Fba - Fatd(A) = Ma * a\nFab - Fatd(B) = Mb * a\n--------------------------\nF - Fatd(A+B) = (Ma + Mb) * a"}
      if(corpo.length==3){calculo[1]="F - Fba - Fatd(A) = Ma * a\nFab - Fcb - Fatd(B) = Mb * a\nFbc - Fatd(C) = Mc * a\n--------------------------\nF - Fatd(A+B+C) = (Ma + Mb + Mc) * a"}
    }
  }
  }
  
  else{
  if(ccf==0){calculo[1]="T - Fatd(B) = Mb * a\nPa - T = Ma * a\n--------------------------\nPa - Fatd(B) = (Ma + Mb) * a"}else{calculo[1]="F - Pa - Fatd(B) = (Ma + Mb) * a\n--------------------------\nT - Pa - Fatd(B) = Ma * a"}
  }
  }


textSize(Math.sqrt(corpo[0].width*2+corpo[0].height*2))
text(calculo[1],0,0 + calculoButton.height*2)
}