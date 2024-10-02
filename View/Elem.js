export default class Elem {
    #index; 
  
    constructor(szuloElem, index) {
      this.szuloElem = szuloElem;
      this.#index = index;
      this.kattinthato = true; 
      this.#htmlOsszerak();
     
      this.elem = $(".elem:last-child");
      this.pElem = this.elem.children("p");
      this.elem.on("click", () => {
        if (this.kattinthato) {
          this.#sajatEsemenykezelo("kivalaszt");
          this.kattinthato = false;
          this.elem.css("background-color", "grey");
        }
       
      });
    }
    #htmlOsszerak() {
      let txt = "";
      txt += `
              <div class="elem ">
              <p></p>
              </div>
          `;
      txt += "";
      this.szuloElem.append(txt);
    }
    setErtek(jel) {
      
      this.pElem.html(jel);
    }
    getIndex() {
      return this.#index;
    }
    #sajatEsemenykezelo(esemenynev) {
      const e = new CustomEvent(esemenynev, { detail: this });
      window.dispatchEvent(e);
    }
  }

  