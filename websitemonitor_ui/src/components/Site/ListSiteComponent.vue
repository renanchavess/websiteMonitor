<template>
    <div class="col-12 col-lg-8 offset-lg-2">
        <h1>Listagem dos sites</h1>
        <table class="table">
        <thead class="thead-light">
            <tr>
            <th scope="col">Nome</th>
            <th scope="col">Url</th>
            <th scope="col">Ação</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for=" site in list" :key="site._id">
                <td>{{ site.name }}</td>
                <td>{{ site.url }}</td>
                <td>
                    <router-link tag="button" 
                        class="btn btn-success btn-sm ml-1 mb-1" 
                        :to="`/aviablehistory/${site._id}`">Historico
                    </router-link>
                    <router-link tag="button" 
                        class="btn btn-primary btn-sm ml-1 mb-1" 
                        :to="`/site/${site._id}`">Editar
                    </router-link>
                    <button type="button" class="btn btn-secondary btn-sm ml-1 mb-1" @click="this.delete(site._id)">Excluir</button>
                </td>
            </tr>            
        </tbody>
        </table>     
    </div>
</template>

<script>

import Site from '../../services/site'

export default {
    data() {
        return {
            list: []
        }
    },
    methods: {        

        delete: id => {
            console.log(id);
            Site.delete(id).then( response => {
                console.log(response.data)
                this.$router.push('/site');
            })
            .catch( response => {
                alert('fail'+ response.data);
            });
        }
    },
    mounted(){
         Site.listAll().then( response => {                
            console.log(response.data);  
            this.list = response.data              
        });
    }
}
</script>