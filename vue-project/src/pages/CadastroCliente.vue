<template>

    <body class="body">
        <nav aria-label="breadcrumb" class="breadcrumb">
            <ul>
                <li><span aria-current="page">Cadastro Cliente</span></li>
            </ul>
        </nav>
        <div class="formularios">
            <div class="sub_titulo">Dados Cadastrais</div>
            <div class="form">
                <div class="dadosCadastrais">
                    <label for="nome">Nome:* </label>
                    <input v-model="nome" type="nome" class="form-control" id="nome">
                    <label for="sobrenome">Sobrenome:* </label>
                    <input v-model="sobrenome" type="name" class="form-control" id="sobrenome">
                    <label for="sobrenome">Sexo:* </label>
                    <select v-model="genero" class="custom-select">
                        <option selected>Escolha uma opção</option>
                        <option value="1">Feminino</option>
                        <option value="2">Masculino</option>
                        <option value="3">Prefiro não informar</option>
                    </select>
                    <label for="cpf">CPF:* </label>
                    <input v-model="cpf" type="text" class="form-control" id="cpf">
                    <label for="telefone">Telefone:</label>
                    <input v-model="telefone" type="tel" class="form-control" id="telefone">
                    <label for="celular">Celular:* </label>
                    <input v-model="celular" type="tel" class="form-control" id="celular">
                    <label for="nascimento">Nascimento </label>
                    <input v-model="nascimento" type="date" class="form-control" id="Nascimento">
                </div>

                <div class="endereco">
                    <label for="cep">CEP:* </label>
                    <input v-model="cep" type="text" class="form-control" id="cep">
                    <label for="logradouro">Logradouro:* </label>
                    <input v-model="logradouro" type="text" class="form-control" id="logradouro">
                    <label for="numero">Numero:* </label>
                    <input v-model="numero" type="text" class="form-control" id="numero">
                    <label for="complemento">Complemento:</label>
                    <input v-model="complemento" type="text" class="form-control" id="complemento">
                    <label for="referencia">Referencia: </label>
                    <input v-model="referencia" type="text" class="form-control" id="referencia">
                    <label for="bairro">Bairro:* </label>
                    <input v-model="bairro" type="text" class="form-control" id="bairro">
                    <label for="estado">Estado:* </label>
                    <select v-model="estado" class="custom-select">
                        <option selected>Escolha uma opção</option>
                        <option value="1">SP</option>
                        <option value="2">RJ</option>
                        <option value="3">MG</option>
                    </select>
                </div>
            </div>
            <div class="sub_titulo">Email e senha:*</div>
            <div class="form">
                <div class="email">
                    <label for="email">Email:* </label>
                    <input v-model="email" type="email" class="form-control" id="email">
                    <label for="emailreply">Digite novamente seu Email:* </label>
                    <input type="name" class="form-control" id="emailreply">
                </div>
                <div class="senha">
                    <label for="senha">Senha:* </label>
                    <input v-model="senha" type="password" class="form-control" id="senha">
                    <label for="emailreply">Digite novamente sua senha:* </label>
                    <input type="password" class="form-control" id="senhareply">
                </div>
            </div>
            <button @click="cadastrar(), Id++" type="button" class="btn btn-primary btn-lg">Finalizar</button>
        </div>
    </body>
</template>
<script>
export default {
    data() {
        return {
            Id: 0,
            nome: null,
            sobrenome: null,
            genero: null,
            cpf: null,
            telefone: null,
            celular: null,
            nascimento: null,
            cep: null,
            logradouro: null,
            numero: null,
            complemento: null,
            referencia: null,
            bairro: null,
            estado: null,
            email: null,
            senha: null
        }
    },
    methods: {

        cadastrar: function(){
            var cadastroUsuario = {
            Id: this.Id,    
            nome: this.nome,
            sobrenome: this.sobrenome,
            genero: this.genero,
            cpf: this.cpf,
            telefone: this.telefone,
            celular: this.celular,
            nascimento: this.nascimento,
            cep: this.cep,
            logradouro: this.logradouro,
            numero: this.numero,
            complemento: this.complemento,
            referencia: this.referencia,
            bairro: this.bairro,
            estado: this.estado,
            email: this.email,
            senha: this.senha
            }
            console.log(cadastroUsuario);
        }
    }
}
</script>
<style>
.body {
    background-image: url(../assets/imagens/unhas.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin: 0;
    padding: 0;
}

h1 {
    margin: 0;
}

.header__linha {
    font-size: 10px;
    margin-left: 25px;
}

a {
    color: #562551;
    text-decoration: inherit;
}

.header__logo:hover {
    color: rgb(235, 197, 222);
    text-decoration: underline;
}

.a:hover {
    color: rgb(235, 197, 222);
    text-decoration: underline;
}

.entrar:hover {
    color: rgb(235, 197, 222);
    text-decoration: underline;
}

a:hover {
    color: rgb(235, 197, 222);
    text-decoration: underline;
}

.breadcrumb ul {
    color: #562551;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 10px 0 0 25px;
    padding: 0;
    font-size: 15px;
}

.breadcrumb li:not(:last-child)::after {
    display: inline-block;
    margin: 0 .25rem;
    content: "»";
}

.form-control {
    width: 80%;
    padding: 5px 30px;
    text-align: left;
    color: #562551;
}

.custom-select {
    width: 30%;
    padding: 5px 30px;
    text-align: left;
    color: #562551;
}

.formularios {
    background: rgba(241, 241, 241, 0.43);
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    width: 90%;
    margin-left: 50px;
    border: 2px solid rgba(86, 37, 81, 0.53);
    font-family: 'Jacques Francois';
    font-style: normal;
    font-size: 15px;
    color: #22031f;
}

.form,
.form1 {
    display: flex;
}

.sub_titulo {
    text-align: center;
    font-family: 'Jacques Francois';
    font-style: normal;
    font-size: 25px;
    color: #562551;
}

.formulario {
    width: 50%;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
}

.dadosCadastrais,
.endereco {
    margin-left: 10px;
    width: 50%;
    display: flex;
    margin-right: 10px;
    flex-direction: column;
    margin-right: 10px;
}

.email {
    width: 50%;
    display: flex;
    margin-right: 10px;
    flex-direction: column;
    margin-left: 10px;
}

.senha {
    margin-left: 10px;
    width: 50%;
    margin-right: 10px;
    display: flex;
    flex-direction: column;
}

.btn-lg {
    margin: 15px;
    background: #22031f;
    text-align: center;
    font-family: 'Jacques Francois';
    font-style: normal;
    font-size: 25px;
    color: white;
}

.estado {
    margin-top: 10px;
}

@media(max-width:480px) {
    .header {
        flex-direction: column;
    }

    .entrar {
        margin-top: 10px;
    }

    .formularios {
        background: rgba(241, 241, 241, 0.43);
        margin-top: 5px;
        width: 90%;
        margin-left: 10px;
        border: 2px solid rgba(86, 37, 81, 0.53);
        font-family: 'Jacques Francois';
        font-style: normal;
        font-size: 15px;
        color: #22031f;
    }

    .form {
        flex-direction: column;
    }

    .sub_titulo {
        margin-top: 20px;
        text-align: center;
        margin-bottom: 20px;
    }

    .formulario,
    .dadosCadastrais,
    .endereco,
    .email,
    .senha {
        width: 90%;
        display: flex;
        flex-direction: column;
        margin-left: 10px;
    }
}
</style>
