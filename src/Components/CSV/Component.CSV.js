// #devices Component
import axios from 'axios';
import { appConstants } from '../../helpers/constants';


export const uploads = {
    uploadCsv,
    getCsvs,
    getConvertedCsvs
};

function uploadCsv() {
    const result = axios({
        method: 'post',
        url: appConstants.API_URL_DEV + '/api/csv/upload',
        data: {
            user_id: '9857',
            file: "csv_data"
          }
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


function getCsvs() {
    const result = axios({
        method: 'get',
        url: appConstants.API_URL_DEV + '/api/list/csvs',
    })
        .then(response => {
            return (response.data);
        })
        .catch(error => {
            return error
        });

    return result
}

function getConvertedCsvs() {
    const result = axios({
        headers: {
            accept: 'application/json',
          },
        method: 'get',
        url: appConstants.API_URL_DEV + '/api/convert/csv',
    })
        .then(response => {
            return (response.data);
        })
        .catch(error => {
            return error
        });

    return result
}



