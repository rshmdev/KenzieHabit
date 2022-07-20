import HabitRequest from "../controller/HabitRequest.controller.js"
import HabitosAPI from "../controller/renderizarHabitos.controller.js"

export default class ModalExcluir {

    constructor(){

        this.blocoPai = document.querySelector(".fundo-background")

        this.blocoPai.addEventListener("click", this )
    }

    handleEvent( event ){

        const { target:{ innerText, className }, path:[,,,{ id }] } = event

        this.cancelar( innerText )
        this.excluir( innerText, id )
        this.fechar( className )

    }

    cancelar( innerText ){

        if( innerText === "Cancelar"){

            const editarHabito = document.querySelector(".modal")
            this.blocoPai.style.display = "none"
            editarHabito.style.display = "unset"
        }
    }

    async excluir( innerText, id ){

        if( innerText === "Sim, excluir este hábito"){
            
            await HabitRequest.deleteHabit( id )

            this.blocoPai.style.display = "none"

            HabitosAPI.renderiarHabitos()
        }
    }

    fechar( className ){
        
        if( className === "fechar__imagem" || className === "fundo-background" ){
            
            this.blocoPai.style.display = "none"
        }
    }

}