import HabitRequest from "../controller/HabitRequest.controller.js"
import Habito from "../models/cardHabito.model.js"

export default class HabitosAPI {

    static tabela = document.querySelector(".tabela__body")

    static quantidadeRenderizar = 10

    static async renderiarHabitos(){

        const todosHabitos = ( await HabitRequest.readAll() ).sort( ( a, b ) => b.habit_id - a.habit_id )

        const ordenarDadosdez = todosHabitos.slice(0, HabitosAPI.quantidadeRenderizar )

        HabitosAPI.tabela.innerHTML = ""
        
        ordenarDadosdez.forEach( Habito.criar )
    }

    static async renderizarHabitosConcluidos(){

        const todosHabitos = ( await HabitRequest.readAll() ).sort( ( a, b ) => b.habit_id - a.habit_id )

        const habitosConcluidos = todosHabitos.filter( objHabito => objHabito.habit_status === true )

        const ordenarDadosdez = habitosConcluidos.slice(0, HabitosAPI.quantidadeRenderizar )

        HabitosAPI.tabela.innerHTML = ""

        ordenarDadosdez.forEach( Habito.criar )
    }

    static async quantidadeRenderizacao(){

        HabitosAPI.quantidadeRenderizar += 10
    }
}