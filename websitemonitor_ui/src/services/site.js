import { http } from './config';

export default {
    save: body => {
        return http.post('site', body)
    },
    listAll: () => {
        return http.get('site')
    },
    delete: id => {
        return http.delete('site/'+id)
    },
    update: body => {
        return http.put('site', body)
    },
    edit: id => {
        return http.get('site/'+id)
    }
}