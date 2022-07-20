export default class Habito {

    static tabela__body = document.querySelector(".tabela__body")

    static criar( objHabito ){

        const body__bloco = document.createElement("tr")
        body__bloco.classList.add("body__bloco")
        body__bloco.id = objHabito.habit_id

        if( objHabito.habit_status === true ){
            body__bloco.style.background = "#F1F3F5"
        }

        const checkbox = Habito.criarCheckbox( objHabito )

        const titulo = Habito.criarTitulo( objHabito )

        const descricao = Habito.criarDescrição( objHabito )

        const categoria = Habito.criarCategoria( objHabito )

        const editar = Habito.criarEditar()

        body__bloco.append( checkbox, titulo, descricao, categoria, editar )

        Habito.tabela__body.appendChild( body__bloco )
    }

    static criarCheckbox( objHabito ){

        const td = document.createElement("td")
        td.classList.add("geralBody", "bloco__checkbox")
        
        const input = document.createElement("input")
        input.classList.add("checkbox__marcar")
        input.type = "checkbox"
        input.name = "habit_status"

        if( objHabito.habit_status === true ){
            input.checked = true
            input.disabled = true
        }

        td.appendChild( input )

        return td
    }

    static criarTitulo( objHabito ){
        
        const td = document.createElement("td")
        td.classList.add("geralBody", "bloco__tituloHabit")
        td.innerText = objHabito.habit_title

        if( objHabito.habit_status === true ){
            td.style.textDecoration = "line-through"
        }

        return td
    }

    static criarDescrição( objHabito ){
        
        const td = document.createElement("td")
        td.classList.add("geralBody", "bloco__descricaoHabit")
        td.innerText = objHabito.habit_description

        return td
    }

    static criarCategoria( objHabito ){
        
        const td = document.createElement("td")
        td.classList.add("geralBody", "bloco__categoriaHabit")

        const p = document.createElement("p")
        p.classList.add("categoriaHabit__categoria")
        p.innerText = objHabito.habit_category

        td.appendChild( p )

        return td
    }

    static criarEditar(){
        
        const td = document.createElement("td")
        td.classList.add("geralBody", "bloco__editarHabit")
        
        const button = document.createElement("button")
        button.classList.add("editarHabit__botaoEditar")

        const imagem = document.createElement("img")
        imagem.classList.add("botaoEditar__imagem")
        imagem.src = "../assets/img/3Pontos.png"
        imagem.alt = "indicador de conteudo"

        button.appendChild( imagem )
        td.appendChild( button )

        return td
    }

}