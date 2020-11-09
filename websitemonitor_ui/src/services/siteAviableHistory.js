import { http } from './config';

export default {

    listHistory: (id) => {
        return http.get('site/aviablehistory/'+id)
    },
}