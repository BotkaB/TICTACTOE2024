import Jatekter from "../View/Jatekter.js";

import TTTModel from "../Model/TTTModel.js";

export default class TTTController {
  constructor() {
    this.model = new TTTModel();
    this.view = new Jatekter();




    $(window).on("kivalaszt", (event) => {
      const index = event.detail.getIndex();
      console.log(this.model.getErtek());
      const ertek = this.model.getErtek();
      this.model.setAllapot(index);

      console.log(ertek);
      event.detail.setErtek(ertek);

      const vege = this.model.getVegeVanE();
      if (vege !== "tovabb") {

        $("#eredmeny").text(vege);
        $(".elem").off("click");
      }
      else {
        this.melyikJatekosJon();
      }
    });

    $('#start').on('click', () => {
      this.jatekosX = $('#jatekosX').val();
      this.jatekosY = $('#jatekosY').val();
      if (this.jatekosX && this.jatekosY) {
        this.jatekInditasa();
      } else {
        alert('Kérlek, add meg mindkét játékos nevét!');
      }
      this.melyikJatekosJon();
    });
  }

  melyikJatekosJon() {
    const aktualisJatekos = this.model.getErtek() === "X" ? this.jatekosX : this.jatekosY;
    $("#jatekos").text(`Következő játékos: ${aktualisJatekos}`);
  }




  jatekInditasa() {


    $(".info").text("");
    $("#jatekos").text(`Következő játékos: ${this.jatekosX}`);
    $(".elem").css("background-color", "");
    $(".elem p").text("")


    this.model = new TTTModel();
    this.view = new Jatekter();

  }

}
