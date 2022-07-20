import HabitosAPI from "../controller/renderizarHabitos.controller.js"

export default class FiltroMain {

    constructor(){

        this.navegacao = document.querySelector(".funcoesTabela__navegacao")

        this.navegacao.addEventListener("click", this )
    }

    handleEvent( event ){ 

        const { target:{ innerText } } = event

        this.carregarTodos( innerText )

        this.carregarConcluidos( innerText )

        this.abrirCriarHabitos(innerText)
    }

    carregarTodos( innerText ){

        if( innerText === "Todos" ){

            HabitosAPI.renderiarHabitos()
        }

    }

    carregarConcluidos( innerText ){

        if( innerText === "Concluidos" ){
            
            HabitosAPI.renderizarHabitosConcluidos()
        }

    }

    abrirCriarHabitos(innerText){
        
        const botaoCriar = document.getElementById('backgroundCriarHabit')
        if(innerText === "Criar"){
            botaoCriar.style.display = "unset"
        }
    }

}

