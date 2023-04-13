import axios from 'axios';
import {Platform} from 'react-native';

const api = axios.create({
  baseURL: 'https://example.com/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

function Config(){
    var instance = axios.create({
        baseURL: 'http://113.20.108.96:7890',
        timeout: 60000,
        headers: {
            'Content-Type': 'application/json',
            // '_ip': idAddress,
            // '_device': deviceInfo,
            '_lang': 'vi',
            '_device_type': Platform.OS === 'ios' ? 3 : 4,
            // '_user': globalStore.accountName,
            // '_version': Config.version_app,
            // 'Authorization': `Bearer ${token}`,
        }
    });
    return instance;
}

async function postAPI(url, json, isLoading) {
    // if (!globalStore.isConnectInternet) {
    //     return;
    // }
    var config = Config();
    try {
        var response = await config.post(url, json);
        console.log('=======POST=========');
        console.log(url);
        console.log(response);

        return handleResponseSuccess(response, isLoading);
    } catch (error) {
        console.log(url);
        if (axios.isCancel(error)) {
            console.log('Request canceled', error.message);
            return;
        }
        return handleResponseError(error, isLoading);
    }
}

async function handleResponseSuccess(response, isLoading) {
    // if (isLoading && isLoading == true) {
    //     RootNavigation.pop();
    // }
    // if (response.status == 200) {
    //     if (response.data.data) {
    //         var result = await Function.decryptAES(response.data.data);
    //         console.log('result');
    //         console.log(result);
    //         if (result.code == 0) {
    //             return successResponse = {
    //                 'code': 0,
    //                 'message': result.data.description,
    //                 'response': result.data
    //             }
    //         } else {
    //             return failure = {
    //                 'code': 1,
    //                 'message': 'Đã có lỗi xảy ra trong quá trình giải mã.',
    //             }
    //         }
    //     } else {
    //         return successResponse = {
    //             'code': 0,
    //             'message': response.data.description,
    //             'response': response.data
    //         }
    //     }

    // } else {
    //     return failure = {
    //         'code': 1,
    //         'message': 'Đã có lỗi xảy ra',
    //     }
    // }
}

exports.postAPI = postAPI;