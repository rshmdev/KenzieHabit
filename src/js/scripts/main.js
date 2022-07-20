import tabelaEvent from "../controller/tabelaEvento.controller.js"
import HabitosAPI from "../controller/renderizarHabitos.controller.js"
import FiltroMain from "../controller/filtroMain.controller.js"
import EditarHabito from "../controller/modalEditarHabito.controller.js"
import ModalExcluir from "../controller/modalExcluir.controller.js"
import PegarInfHabito from "../controller/pegarInfHabito.js"
import LoginMain from "../controller/loginMain.controller.js"
import DropDown from "../controller/dropdown.controller.js"
import CarregarMais from "../controller/carregarMais.controller.js"
import Editar from "../controller/editarPerfil.controller.js"

const botoesTabela = new tabelaEvent()

const navegacaoTabela = new FiltroMain()

const navegacaoModalEditar = new EditarHabito()

const navegacaoModalExcluir = new ModalExcluir()

const navegacaoDropdown = new DropDown()

const navegacaoModalCriarHabite = new PegarInfHabito()

const botaoCarregarMais = new CarregarMais()

const navegacaoEditarPefil = new Editar()

HabitosAPI.renderiarHabitos()

LoginMain.renderizar()


