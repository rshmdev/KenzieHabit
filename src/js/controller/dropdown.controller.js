export default class DropDown {

    constructor() {


        this.dropwdown = document.getElementById('dropdown')

        this.dropwdown.addEventListener('click', this)


    }

    handleEvent(event) {
      
        this.abrirEditar(event)
        this.logout(event)

    }




    abrirEditar(event) {
         
        if (event.target.id ==="textEditPerfil") {
            const modalEdit = document.getElementById('modalEditar')
            const botaoPerfil = document.getElementById('textEditPerfil')

               console.log("textEditPerfil")

            if (botaoPerfil.innerText === "Editar Perfil") {
                modalEdit.style.display = "unset"
            }

        }


    }


    logout(event) {

        if (event.target.id ==="textClose") {
                localStorage.removeItem('@habits-kenzie:user')
                localStorage.removeItem('@habits-kenzie:token')
                window.location.href = '/index.html'
            }

  
        }

    }



