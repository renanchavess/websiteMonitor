<template>
    <div class="col-12 col-lg-8 offset-lg-2">
        <h1>Cadastro</h1>
        <form>
            <div class="form-group">
                <label for="name">Nome do site</label>
                <input type="text" class="form-control" id="name" v-model="name">            
            </div>
            <div class="form-group">
                <label for="url">Url</label>
                <input type="text" class="form-control" id="url" v-model="url">
            </div>
            <button type="button" class="btn btn-primary" @click="save()">Gravar</button>
        </form>
    </div>
</template>

<script>

import Site from '../../services/site'

export default {
    data() {
        return {
            name: '',
            url: ''
        }
    },
    methods: {
        
        save() {
            console.log("entrou");
            let body = { name:this.name, url: this.url }

            Site.save(body).then( response => {
                alert("salvou");
                console.log(response);
                this.$router.push('/');

            }).catch( response => {
                alert("fail");
                console.log(response);
            })
        }
    }
}
</script>