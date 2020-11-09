<template>
    <div class="col-12 col-lg-8 offset-lg-2">
        <h1>Listagem do historico</h1>
        <table class="table">
            <thead class="thead-light">
                <tr>
                    <th scope="col">Data</th>
                    <th scope="col">Disponibilide</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for=" history in histories" :key="history._id">
                    <td>{{ new Date(history.date).toLocaleString('pt-BR') }}</td>
                    <td>{{ history.aviable? 'Sim' : 'Não'}}</td>                
                </tr>            
            </tbody>
        </table>     
    </div>
</template>

<script>

import SiteAviableHistory from '../../services/siteAviableHistory'

export default {
    data() {
        return {
            site_id: this.$route.params.id,
            histories:[]
        }        
    },
    mounted() {
        SiteAviableHistory.listHistory(this.site_id).then( response => {
            this.histories = response.data
        });
    }
}
</script>
