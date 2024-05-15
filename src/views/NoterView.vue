<template>
    <div id="conteudo">
        <h1>FAÇA AS SUAS ANOTAÇÕES AQUI</h1>
        <div id="entradas">
            <input type="text" placeholder="Nome" class="inpot"  v-model="nome">
            <input type="date" class="inpot" v-model="data">
            <textarea type="text" placeholder="Descrição" class="inpot" id="desc" v-model="descricao"/>
            <button class="btn btn-outline-success" @click="anotar">Anotar</button>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                nome: '',
                data: '',
                descricao: ''
            }
        },
        methods:{
            anotar(){
                if(!this.nome || !this.data || !this.descricao){
                    alert('Por favor, preencha todos os campos!');
                    return;
                }
                const anotacao = {
                    nome: this.nome,
                    data: this.data,
                    descricao: this.descricao
                };
                let anotacoes = JSON.parse(localStorage.getItem('anotacoes')) || [];
                anotacoes.push(anotacao);
                localStorage.setItem('anotacoes', JSON.stringify(anotacoes));

                this.nome = '';
                this.data = '';
                this.descricao = '';
            },
        }
    }
</script>

<style>
#conteudo{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
#entradas{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.inpot{
    width: 500px;
    margin: 5px;
    padding: 5px;
}
#desc{
    height:35px;
}
button{
    margin-top: 10px;
}
</style>