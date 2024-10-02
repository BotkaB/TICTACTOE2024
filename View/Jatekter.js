import Elem from "./Elem.js";
export default class Jatekter {
    constructor() {
        $(".jatekter").empty();

        for (let index = 0; index < 9; index++) {
            new Elem($(".jatekter"), index);
        }
    }
}