import HabitRequest from "./HabitRequest.controller.js"

HabitRequest

export default class EditarHabito {

    constructor() {

        this.modal = document.querySelector('.modal')

        this.modal.addEventListener('click', this)
    }

    async handleEvent(event) {

        const data = {}
        
        const id = event.path[5].id
        const innerText = event.target.innerText
        
        const className = event.target.className
        
        if (innerText === 'X') {
            const modal = document.querySelector('.modal')
            modal.style.display = 'none'
        }

        if(className === "container"){
            const modal = document.querySelector('.modal')
            modal.style.display = 'none'
        }
        if(innerText === "Excluir"){
            
            const modalExcluir = document.querySelector('.fundo-background')
            
            this.modal.style.display = 'none'
            modalExcluir.style.display = 'flex'
            modalExcluir.id = id

        }
        if(innerText === 'Salvar alterações'){
            
            event.preventDefault()
            
            const formValue = [...event.srcElement.form]
            formValue.forEach(async (input) =>{
                if(input.value !== '' && input.type != 'checkbox'){
                    data[input.name] = input.value
                }
                if(input.type == 'checkbox' && input.checked == true){

                    await HabitRequest.completeHabit(id)
                }
            })
            await HabitRequest.updateHabit(data, id)
            location.reload()
        }
    }
}
