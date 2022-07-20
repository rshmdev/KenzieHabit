import UserRequest from "../controller/UserRequest.controller.js"
import LoginMain from "../controller/loginMain.controller.js"

export default class Editar {

    constructor(){

      this.blocoEditar = document.getElementById("modalEditar");
      this.formulario = document.getElementById("editarPerfil");
      this.entradaNome = document.getElementById("formEditarNome");
      this.entradaImagem = document.getElementById("formEditarFoto");

      this.formulario.addEventListener("submit", this )
      this.blocoEditar.addEventListener("click", this )
    }
  
    handleEvent( event ){

      this.atualizar( event )

      this.fechar( event )
    }

    async atualizar( event ){ 

        if( event.type === "submit"){

          event.preventDefault()

          const data = {};
  
          const elementos = [this.entradaNome, this.entradaImagem];
  
          elementos.forEach((elemento) => {
          if (elemento.value !== "") {
          data[elemento.name] = elemento.value;
          }
          });
          console.log(data);
  
          await UserRequest.updateProfile(data)
     
          LoginMain.renderizar()
        }
    }

    fechar( event ){
      
      if( event.target.innerText === "X" || event.target.id === "container" || event.target.id === "btnEditar"){
      
        this.blocoEditar.style.display = "none"
      }
    }

}
  