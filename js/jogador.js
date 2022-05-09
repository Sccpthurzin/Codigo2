class jogador {
  constructor() {

  this.name=null
  this.index=null
  this.positionX=0
  this.positionY=0

  }

  pegarquantidadedejogadores(){
  var referenciadojogador=database.ref("Jogadores")
  referenciadojogador.on("value", function (data){
  quantidadesdejogadores=data.val();
  } )
  }

   atualizarquantidadedejogadores(contagem){
   //Barra "/" é diretorio raiz
   database.ref("/").update({
   quantidadesdejogadores:contagem
   })
   }

   adicionarjogadores(){
   var iddojogador= "players/player"+this.index
   if (this.index===1){
   this.positionX=width/2 -100
   }
   else{
     this.positionX=width/2+100
   }
   database.ref(iddojogador).set({
     name:this.name, positionX:this.positionX, positionY:this.positionY
   })
   }
}
