const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;


let client = new JSO({
    providerID: "instagram",
    client_id: "b2285c09b317452785b78df9f5822c87",
    redirect_uri: "http://your-redirect-uri?code=CODE", // The URL where you is redirected back, and where you perform run the callback() function.
    authorization: "https://api.instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=code",
    scopes: { request: ["https://www.googleapis.com/auth/userinfo.profile"] }
})

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});