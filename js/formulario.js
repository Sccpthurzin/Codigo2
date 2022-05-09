class formulario {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Digite seu nome");
    this.button = createButton("Play");
    this.title = createImg("./assets/TITULO.png", "nome do jogo");
    this.welcome = createElement("h2");
  }

  Posicoesdeelemento() {
    this.title.position(120,50);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.button.position(width / 2 - 90, height / 2 - 20);
    this.welcome.position(width / 2 - 300, height / 2 - 100);
  }

  Estilodeelemento() {
    this.title.class("gameTitle");
    this.input.class("customInput");
    this.button.class("customButton");
    this.welcome.class("greeting");
  }

  hide() {
    this.welcome.hide();
    this.button.hide();
    this.input.hide();
  }

  clicarnobutao() {
    this.button.mousePressed(() => {
      this.input.hide();
      this.button.hide();
      var message = `
      Olá, ${this.input.value()}
      </br>espere o outro jogador entrar...`;
      this.welcome.html(message);

      quantidadesdejogadores=quantidadesdejogadores+1 
      jogador1.name=this.input.value();
      jogador1.index=quantidadesdejogadores
      jogador1.adicionarjogadores();
      jogador1.atualizarquantidadedejogadores(quantidadesdejogadores)
    });
  }

  display() {
    this.Posicoesdeelemento();
    this.Estilodeelemento();
    this.clicarnobutao();
  }
}
