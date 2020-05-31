const options = {
    auth: {
        redirectUrl: 'http://localhost:CHANGE-TO-YOUR-PORT/callback',
        params: {
            audience: 'https://YOUR_DOMAIN/userinfo',
            scope: 'openid profile'
        }
    }
};
const lock = new Auth0Lock('YOUR_CLIENT_ID', 'YOUR_DOMAIN', options);

function signin() {
    lock.show();
}
