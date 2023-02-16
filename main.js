const botaoCadastro = document.querySelector(".botao__cadastro")
const telaCadastro = document.querySelector(".tela__cadastro")
const botaoFecharCadastro = document.querySelector(".fechar__cadastro")
let emailCadastro = document.querySelector("#email__cadastro")
let senhaCadastro = document.querySelector("#senha__cadastro")
let senhaCadastro2 = document.querySelector("#senha__cadastro2")
let emailLogin = document.querySelector("#entrada__login")
let senhaLogin = document.querySelector("#senha__login")



function cadastro () {
    telaCadastro.style.display = 'flex'
}

function fechartelacadastro () {
    telaCadastro.style.display = 'none'
}

class cadastroo {
    _email
    _senha
    _senha2

    constructor(emailCadastro, senhaCadastro, senhaCadastro2) {
        this._email = emailCadastro
        this._senha = senhaCadastro
        this._senha2 = senhaCadastro2
    }
}

let pessoacriada = []

function realizarCadastro () {
    let pessoa = new cadastroo(emailCadastro.value, senhaCadastro.value, senhaCadastro2.value)
    pessoacriada = pessoa
}

function logar() {
    if (emailLogin.value == "          " || emailLogin.value == " " || senhaLogin.value == "       " || senhaLogin.value == "         ") {
        alert("Campo senha/login vazio!")
    } else {
        if(emailLogin.value == pessoacriada._email && senhaLogin.value == pessoacriada._senha && senhaLogin.value == pessoacriada._senha2) {
            alert('Login realizado com sucesso!!!')
        } else {
            alert("Senha/Login inválidos!!")
        }
    }
}
