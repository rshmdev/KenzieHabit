import HabitosAPI from "../controller/renderizarHabitos.controller.js"
import HabitRequest from "../controller/HabitRequest.controller.js"

export default class tabelaEvent {

    constructor(){

        this.tabela__body = document.querySelector(".tabela__body")

        this.tabela__body.addEventListener("click", this )
    }

    handleEvent( event ){

        const { target:{ name, className, checked } } = event

        const id = event.path[2].id

        this.checkbox( checked, name, id )

        this.editar( event, className )        

    }

    async checkbox( checked, name, id ){  

        if( name === "habit_status" && checked === true){
            
            await HabitRequest.completeHabit( id )
            
            await HabitosAPI.renderiarHabitos()
        }

    }

    editar( event, className ){
        
        if( className === "botaoEditar__imagem" ){
         
            const id = event.path[3].id

            const modalEditar = document.querySelector(".modal")
            modalEditar.style.display = "unset"
            modalEditar.id = id
        }
    }
}