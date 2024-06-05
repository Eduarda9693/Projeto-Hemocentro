//Menu Principal
function imprimirMenu(){
    let mensagem = ""
    mensagem += "--SISTEMA DE CADASTRO DE DOADORES--\n"
    mensagem += "-----------------------------------\n"
    mensagem += "1. Cadastrar doador\n"
    mensagem += "2. Listar doadores\n"
    mensagem += "3. Buscar doador por tipo sanguíneo\n" 
    mensagem += "4. Buscar doador por data da última \n"
    mensagem += "5. Sair\n"
    mensagem += "-----------------------------------"
    let opcao = Number(prompt(mensagem))
    return opcao
}
//1. Cadastrando pessoas
usuario = ""
function cadastroUsuario(){ const usuario = {
    cadastroNome: prompt("Digite seu nome: "),
    cadastroIdade:prompt("Digite sua idade:"),
    cadastroPeso: prompt("Digite seu peso: "),
    cadastroTSangue: prompt("Digite seu tipo sanguíneo: "),
    cadastroUltimaDoacao: prompt("Digite a data da sua última doação: (Caso nunca tenha doado, aperte enter)")}
}
    //2. Listando os doadores
function listaDoadores (){ 
    let mensagem = ""
    mensagem += "--Listagem de Doadores--\n"
    mensagem += "------------------------\n"
    mensagem += "NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO\n"
    mensagem += "------------------------"

for (let i = 0; i < usuario.length; i++){
    mensagem += (usuario.cadastroNome, usuario.cadastroIdade, usuario.cadastroPeso, usuario.cadastroTSangue , usuario.cadastroUltimaDoacao)
}


} 
function main() {
    let option = 0
     while(option !== 5){
        option = imprimirMenu()
        switch(option){
            case 1:
                cadastroUsuario()
            break;
            case 2:
                listarDoadores()
            break;
            case 3:
                tipoSanguineo()
            break;
            case 4:
                ultimaDoacao()


            default:
            break
        }
    }

}
main()