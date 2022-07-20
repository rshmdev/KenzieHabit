export default class LoginMain {

    static imagemCabelhoPrimario = document.querySelector(".botaoPerfil__imagem")

    static imagemCabelhoSecundario = document.querySelector(".blocoImagem__imagem")

    static nomeCabelhoSecundario = document.querySelector(".perfil__nome")

    static renderizar(){

        const informacoesUsuario = JSON.parse( localStorage.getItem( "@habits-kenzie:user" ) )

        this.imagemCabelhoPrimario.src = informacoesUsuario.usr_image

        this.imagemCabelhoSecundario.src = informacoesUsuario.usr_image

        this.nomeCabelhoSecundario.innerText = informacoesUsuario.usr_name

    }
}