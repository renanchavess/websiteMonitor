<template>
    <div class="col-12 col-lg-8 offset-lg-2">
        <h1>Editar</h1>
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
            id: this.$route.params.id,
            name: '',
            url: ''
        }
    },
    methods: {
        
        save() {
            console.log("entrou");
            let body = {id: this.id, name: this.name, url: this.url }
            console.log(body);
            Site.update(body).then( response => {
                alert("atualizou");
                console.log(response);
                this.$router.push('/site');
            }).catch( response => {
                alert("fail");
                console.log(response);
            })
        }
    },
    mounted() {
        Site.edit(this.id).then( response => {
            console.log(response.data);
            this.id = response.data._id;
            this.name = response.data.name;
            this.url = response.data.url;
        })
    }
}
</script>