const proxy = require('http-proxy-middleware');

if (process.env.NODE_ENV === 'production'){
    module.exports = function(app) {
        app.use(proxy(
            '/auth/google', 
            { target: 'https://cycly-server.herokuapp.com/' }
        ));
        app.use(proxy(
            '/api/*', 
            { target: 'https://cycly-server.herokuapp.com/' }
        ));
        app.use(proxy(
            '/login', 
            { target: 'https://cycly-server.herokuapp.com/' }
        )); 
        app.use(proxy(
            '/local/signup', 
            { target: 'https://cycly-server.herokuapp.com/' }
        ));
        
    }
} 
else {
    module.exports = function(app) {
        app.use(proxy(
            '/auth/google', 
            { target: 'http://localhost:5000' }
        ));
        app.use(proxy(
            '/api/*', 
            { target: 'http://localhost:5000' }
        ));
        app.use(proxy(
            '/login', 
            { target: 'http://localhost:5000' }
        )); 
        app.use(proxy(
            '/local/signup', 
            { target: 'http://localhost:5000' }
        ));
        
    }
}


