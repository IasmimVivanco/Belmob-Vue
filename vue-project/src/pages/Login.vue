<template>
<body class="body">
    <div class="formulariosLogin">
        <div class="formularioCliente">
            <form class="formCliente">
                <h1 class="titulo">Área Do Cliente</h1>
                <div class="form-group">
                <label for="email">Email</label>
                <input v-model="email" type="email" class="form-control" id="Email" aria-describedby="email" placeholder="Seu email">
                <small id="email" class="form-text text-muted"></small>
                </div>
                <div class="form-group">
                <label for="senha">Senha</label>
                <input v-model="senha" type="password" class="form-control" id="senha" placeholder="Senha">
                </div>
                <button @click="Login()" type="submit" class="btn btn-primary"><RouterLink class="botao" to="/Agendamento">Login</RouterLink></button>
                <button type="button" class="btn btn-primary"><RouterLink class="botao" to="/CadastroCliente">Cadastro</RouterLink></button>
            </form>
        </div>
        
        <div class="formularioProfissional">
            <form class="formProfissional">
                <h1 class="titulo">Área Do Profissional</h1>
                <div class="form-group">
                <label for="email">Email</label>
                <input v-model="email" type="email" class="form-control" id="Email" aria-describedby="email" placeholder="Seu email">
                <small id="email" class="form-text text-muted"></small>
                </div>
                <div class="form-group">
                <label for="senha">Senha</label>
                <input v-model="senha" type="password" class="form-control" id="senha" placeholder="Senha">
                </div>
                <button @click="Login()" type="submit" class="btn btn-primary"><RouterLink class="botao" to="/AreaProfissional">Login</RouterLink></button>
               <button type="button" class="btn btn-primary"><RouterLink class="botao" to="/CadastroProfissional">Cadastro</RouterLink></button>
            </form>
        </div>
    </div>
</body>
</template>

<script>
export default {
    data() {
        return {
            email: null,
            senha: null
        }
    },
    methods: {
        Login: function(){
            var LoginUsuario = {
            email: this.email,
            senha: this.senha
            }
            console.log(LoginUsuario);
        }
    }
}
</script>

<style>
*{box-sizing:content-box}
.body{
    margin:0;
    padding:0;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
}
.formulariosLogin{
    display: flex;
}
#exampleInputEmail1, #exampleInputPassword1{
    width: 60%;
    padding: 5px 30px;
    text-align: left;
    color: #562551;
    margin-left: 20px;
}
.form-group{
    display: flex;
    margin: 0 10px 20px 0;
    justify-content: end;
}
.formularioCliente{
    width: 50%;
    background-image: url(../assets/imagens/beauty.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    border: 1px solid rgba(86, 37, 81, 0.53);
}
.formularioProfissional{
    width: 50%;
    background-image: url(../assets/imagens/manicure.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    border: 1px solid rgba(86, 37, 81, 0.53);
}
.titulo{
    margin-bottom: 0px;
}
.formCliente{
    margin-top: 100%;
    font-family: 'Jacques Francois';
    font-size: 20px;
    color: white;
    text-align:end;
}
.formProfissional{
    margin-top: 100%;
    font-family: 'Jacques Francois';
    font-size: 20px;
    color: #562551;
    text-align:end;
}
.botao{
    font-family: 'Jacques Francois';
    font-size: 20px;
    color: white;
}
.btn-primary{
    background-color: #562551;
    font-family: 'Jacques Francois';
    font-size: 20px;
    border: 1px solid #FFFFFF;
    color: white;
    margin-top: 5px;
}
@media(max-width:480px){
    .header{
        flex-direction: column;
    }
    .entrar{
        margin-top: 10px;
    }
.formularios{
    flex-direction: column;
}

.formularioCliente{
    width: 100%;
    background-size: cover;
    background-position: center center;
}
.formularioProfissional{
    width: 100%;
    background-size: cover;
    background-position: center center;
}
}
</style>