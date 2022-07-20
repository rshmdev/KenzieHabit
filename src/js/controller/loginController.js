import UserRequest from "./UserRequest.controller.js"


export default  class pegarDadosDoUsuario{
    static dadosLogin(event){
        event.preventDefault()
        const data = {}
        const formDados = document.querySelectorAll('.linhas')
        data.email = formDados[0].value
        data.password = formDados[1].value
        UserRequest.login(data)
        .then(res=>{
            const token = localStorage.getItem('@habits-kenzie:token')
            if(JSON.parse(token) === (res.token)){
                window.location.href="./src/views/main.view.html"
            }
        })
        .catch(err=>{
            alert('Usuário ou senha invalidos')
        })     
}
}















