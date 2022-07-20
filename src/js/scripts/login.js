import pegarDadosDoUsuario from '../controller/loginController.js'

const botao = document.querySelector('#botaoLogin')
botao.addEventListener('click', pegarDadosDoUsuario.dadosLogin)