export function authHeader() {
    // return authorization header with basic auth credentials
    let responseData = JSON.parse(sessionStorage.getItem('responseData'));
    let token = responseData.token;
     console.log(token)
    if (user && user.authdata) {
        return { 'Authorization': 'Basic ' + user.authdata };
    } else {
        return {};
    }
}