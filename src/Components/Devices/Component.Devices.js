// #devices Component
import axios from 'axios';
import { appConstants } from '../../helpers/constants';


export const devices = {
    getDevices
};

function getDevices() {
    const result = axios({
        method: 'get',
        url: appConstants.API_URL_DEV + '/fetcinfo/'
    })
        .then(response => {
            console.log(response)
            return (response.data.data);
        })
        .catch(error => {
            return error
        });

    return result
}



