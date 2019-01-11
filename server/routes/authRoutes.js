const passport = require('passport');

module.exports  = (app) => {
    app.get(
        '/auth/google', 
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );
    
    // app.get(
    //     '/auth/google/callback', 
    //     passport.authenticate('google'),
    //     (req, res) => {
    //         res.redirect('/dashboard');
    //     }
    // );

    app.get('/auth/google/callback', 
        passport.authenticate('google', { failureRedirect: '/auth/goole' }),
        (req, res) => {
            // Successful authentication, redirect home.
            res.redirect('/dashboard');
        });

    app.get('/api/current_user', (req, res) => {
        req.user ? res.send(req.user) : res.send({no: "user"})
    }); 

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');

    });
}
