export default class TTTModel {
  #lista = [];
  #index;
  #lepesszam;
  #allapot;
  constructor() {
  
    this.#allapot = "X";
    this.#lepesszam = 0;
    this.#lista = [".", ".", ".", ".", ".", ".", ".", ".", "."];
   
  }

  setAllapot(index) {
    this.#lista[index] = this.#allapot;
    console.log(this.#allapot)
    if (this.#allapot === "X") {
      this.#allapot = "O";
    } else {
      this.#allapot = "X";
    }
   
    console.log(this.#lista);
    this.#lepesszam++;
    console.log(this.#lepesszam);
  }

  

  getErtek() {
    return this.#allapot;
  }
  getVegeVanE() {
    let vEll = this.#vizszintesGyozelem();
    let fEll = this.#fuggolegesGyozelem();
    let aEll = this.#atlosGyozelem();


    if (vEll.indexOf("OOO") > -1 || fEll.indexOf("OOO") > -1 || aEll.indexOf("OOO") > -1) {
      return "O nyert";
    } else if (vEll.indexOf("XXX") > -1 || fEll.indexOf("XXX") > -1 || aEll.indexOf("XXX") > -1) {
      return "X nyert";
    } else if (this.#lepesszam === 9) {
      return "Döntetlen!";
    }
    return "tovabb";
}

#vizszintesGyozelem() {
    let vEll = "";
    for (let i = 0; i < 9; i++) {
      vEll += this.#lista[i];
      if (i % 3 === 2) {
        vEll += "@";
      }
    }
    vEll += "@";
    return vEll;
}

#fuggolegesGyozelem() {
    let fEll = "";
    for (let i = 0; i < 3; i++) {
      fEll += this.#lista[i] + this.#lista[i + 3] + this.#lista[i + 6] + "@";
    }
    return fEll;
}

#atlosGyozelem() {
    let aEll = "";
    aEll += this.#lista[0] + this.#lista[4] + this.#lista[8] + "@";
    aEll += this.#lista[2] + this.#lista[4] + this.#lista[6] + "@";
    return aEll;
}

}

