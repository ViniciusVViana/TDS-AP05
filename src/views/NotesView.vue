<template>
  <div id="conteudo">
    <h1>ANOTAÇÕES FEITAS</h1>
    <button class="btn btn-outline-success" @click="excluirAnotacoes">EXCLUIR ANOTAÇÕES</button>
    <div v-for="(anotacao, index) in anotacoes" :key="index" id="anotacao">
      <div id="cabeca">
        <h2>{{anotacao.nome}}</h2>
        <button class="btn btn-outline-success" @click="excluirItem(index)" id="x">X</button>
      </div>
      <p>{{anotacao.data}}</p>
      <p>{{anotacao.descricao}}</p>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        anotacoes: JSON.parse(localStorage.getItem('anotacoes')) || []
      }
    },
    methods:{
      excluirAnotacoes(){
        if(localStorage.length === 0){
          alert('Faça uma anotação antes de querer excluir todas.');
          this.$router.push('/noter');
          return;
        }
        localStorage.clear();
        this.anotacoes = [];
        alert('removidas')
      },
      excluirItem(index){
        this.anotacoes.splice(index, 1);
        localStorage.setItem('anotacoes', JSON.stringify(this.anotacoes));
        if(localStorage.length === 1){
          localStorage.clear();
          this.anotacoes = [];
        }
      }
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
#anotacao{
  display: flex;
  flex-direction: column;
  border: solid 1px black;
  border-radius: 10px;
  width: 500px;
  padding: 10px;
  margin-top: 10px;
}
#cabeca{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>