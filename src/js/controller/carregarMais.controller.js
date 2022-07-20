import HabitosAPI from "../controller/renderizarHabitos.controller.js"

export default class CarregarMais {

    constructor(){

        this.botaoCarregar = document.querySelector(".carregarMais")

        this.botaoCarregar.addEventListener("click", this )
    }

    async handleEvent( event ){

        await HabitosAPI.quantidadeRenderizacao()        

        await HabitosAPI.renderiarHabitos()
    }
}