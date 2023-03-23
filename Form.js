class Form {
  constructor() {
this.input=createInput("").attribute("placeholder", "")
this.input.size(width/4,height/16)
this.input.position(width/2-this.input.width/2,(height/4)*3)
this.texto()

  }
texto(){
  if(atrito[0]==undefined && G==undefined){
    var l = 3
    while(l==3){
     l=Math.round(random(0,(perguntas[0].length-1)))
      this.message=perguntas[0][l]
      if(l==1){
        this.message2="a = "+Aceleration
        switch(Math.round(random(0,(corpo.length-1)))){
          case(0):this.message+="(A)";Resp=Massa[0][0];Massa[0][1]=1;break
          case(1):this.message+="(B)";Resp=Massa[1][0];Massa[1][1]=1;break
          case(2):this.message+="(C)";Resp=Massa[2][0];Massa[2][1]=1;break
        }
      }
      if(l==0){
        Forca[1]=0;this.message2="a = "+Aceleration
        var ll
        Resp=Forca[0]
        if(Math.round(random(1,2))==2){
          if(corpo.length==2){ll=Math.round(random(0,1))
            this.message="Qual é a força? ("+perguntas[1][ll]+")"}
          else{ll=Math.round(random(0,3))
            this.message+=" ("+perguntas[1][ll]+")"}
            //"AB","BA","BC","CB"
            if(ll==0){Resp=(Massa[1][0]+Massa[2][0])*Aceleration}
            if(ll==1){Resp=(Massa[0][0])*Aceleration}
            if(ll==2){Resp=(Massa[2][0])*Aceleration}
            if(ll==3){Resp=(Massa[1][0]+Massa[0][0])*Aceleration}

      }
      }
    }
  }

  if(l==2 && G==undefined){Resp=Aceleration}


  if(atrito[0]==undefined && G!=undefined){
    var l = 3
    while(l==3){
     l=Math.round(random(0,(perguntas[0].length-1)))
      this.message=perguntas[0][l]

      if(l==1){
        this.message2="a = "+Aceleration
        switch(Math.round(random(0,(corpo.length-1)))){
          case(0):this.message+="(A)";Resp=Massa[0][0];Massa[0][1]=1;break
          case(1):this.message+="(B)";Resp=Massa[1][0];Massa[1][1]=1;break
          case(2):this.message+="(C)";Resp=Massa[2][0];Massa[2][1]=1;break
        }

      }
      if(l==0){
        Forca[1]=0;this.message2="a = "+Aceleration
        this.message="Qual a tração da corda?"
        if(ccf==0){Resp=Massa[1][0]*Aceleration}
        if(ccf==1){Resp=Massa[0][0]*Aceleration+Massa[0][0]*10}
        
      }
      if(l==2){Resp=Aceleration}
    }
  }


  if(atrito[0]!=undefined && G==undefined){
     l=Math.round(random(0,(perguntas[0].length-1)))
      this.message=perguntas[0][l]
      if(l==1){
        this.message2="a = "+Aceleration
        switch(Math.round(random(0,(corpo.length-1)))){
          case(0):this.message+="(A)";Resp=Massa[0][0];Massa[0][1]=1;break
          case(1):this.message+="(B)";Resp=Massa[1][0];Massa[1][1]=1;break
          case(2):this.message+="(C)";Resp=Massa[2][0];Massa[2][1]=1;break
        }
      }
      if(l==0){
        Forca[1]=0;this.message2="a = "+Aceleration
        var ll
        Resp=Forca[0]
        if(Math.round(random(1,2))==2){
          if(corpo.length==2){ll=Math.round(random(0,1))
            this.message="Qual é a força? ("+perguntas[1][ll]+")"}
          else{ll=Math.round(random(0,3))
            this.message+=" ("+perguntas[1][ll]+")"}
            //"AB","BA","BC","CB"
            if(ll==0){Resp=(Massa[1][0]+Massa[2][0])*Aceleration + (Massa[1][0]+Massa[2][0])*atrito[0]}
            if(ll==1){Resp=(Massa[0][0])*Aceleration + (Massa[0][0])*atrito[0]}
            if(ll==2){Resp=(Massa[2][0])*Aceleration + (Massa[2][0])*atrito[0]}
            if(ll==3){Resp=(Massa[1][0]+Massa[0][0])*Aceleration + (Massa[1][0]+Massa[0][0])*atrito[0]}
        }
        
      }
  }
  if(l==2 && G==undefined){Resp=Aceleration}


  if(atrito[0]!=undefined && G!=undefined){
     l=Math.round(random(0,(perguntas[0].length-1)))
      this.message=perguntas[0][l]

      if(l==1){
        this.message2="a = "+Aceleration
        switch(Math.round(random(1,2))){
          case(1):
        switch(Math.round(random(0,(corpo.length-1)))){
          case(0):this.message+="(A)";Resp=Massa[0][0];Massa[0][1]=1;break
          case(1):this.message+="(B)";Resp=Massa[1][0];Massa[1][1]=1;break
          case(2):this.message+="(C)";Resp=Massa[2][0];Massa[2][1]=1;break
        };break
case(2):
if(corpo.length==2){this.message="Qual o peso de A?";Resp=Massa[0][0] * 10;Massa[0][1]=1}
else{
  switch(Math.round(random(1,2))){
    case(1):this.message="Qual o peso de A?";Resp=Massa[0][0] * 10;Massa[0][1]=1;break
    case(2):this.message="Qual o peso de A?";Resp=Massa[2][0] * 10;Massa[2][1]=1;break
  }
}
break
      }
    }
      if(l==0){
        Forca[1]=0;this.message2="a = "+Aceleration
        this.message="Qual a tração da corda?"
        //B puxado
        //A puxado
        if(ccf==0){Resp=Massa[1][0]*Aceleration+Massa[1][0]*atrito[0]}
        if(ccf==1){Resp=Massa[0][0]*Aceleration+Massa[0][0]*10+Massa[1][0]*atrito[0]}
        
      }
      if(l==2){Resp=Aceleration}
  }
if(atrito[0]!= undefined && l!=3){if(this.message2==undefined){this.message2=" "}else{this.message2+="</br>"};this.message2+="Fatd = "+atrito[0]}

  this.text = createElement("h2");
  this.text.style('font-size', Math.sqrt(corpo[0].width*2+corpo[0].height*2)+'px')
  this.text.size(width , height/16)
  this.text.position(width/2 - width/2, height/4 - height/8);
  this.text.class("greeting");
  
  this.text.html(this.message);   

  this.text2 = createElement("h2");
  this.text2.style('font-size', Math.sqrt(corpo[0].width*2+corpo[0].height*2)+'px')
  this.text2.size(width , height/16)
  this.text2.position(width/2 - width/2, height/4 - height/12);
  this.text2.class("greeting");
  if(this.message2==undefined){this.message2=""}
  this.text2.html(this.message2);   
}
      
 
   
Res(){
  if(this.input.value()==Resp||this.input.value()==Resp.toFixed(1)||this.input.value()==Resp.toFixed(0)){
    reset()
  }
}
}
