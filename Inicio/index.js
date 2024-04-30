//Menu Principal
function imprimirMenu(){
    let mensagem = ""
    mensagem += "--SISTEMA DE CADASTRO DE DOADORES--"
    mensagem += "-----------------------------------"
    mensagem += "1. Cadastrar doador"
    mensagem += "2. Listar doadores"
    mensagem += "3. Buscar doador por tipo sanguíneo" 
    mensagem += "4. Buscar doador por data da última doação"
    mensagem += "5. Sair"
    mensagem += "-----------------------------------"
    let opcao = Number(prompt(mensagem))
    return opcao
}
//1. Cadastrando pessoas
function cadastroUsuario(){
   let cadastroNome = prompt("Digite seu nome: ")
   let cadastroIdade = Number(prompt("Digite sua idade: "))
   let cadastroPeso = Number(prompt("Digite seu peso: "))
   let cadastroTSangue = ("Digite seu tipo sanguíneo: ")
   let cadastroUltimaDoacao = ("Digite a data da sua última doação: ")
}  