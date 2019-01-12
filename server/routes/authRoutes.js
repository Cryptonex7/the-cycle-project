const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('users');


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
        
    // Local auth routes
    app.post('/login/',
        passport.authenticate('local', { 
            successRedirect: `/dashboard?username=`, 
            failureRedirect: '/err'
         })
    );

    app.post('/local/signup', (req, res) => {
        const user = new User({ 
            googleID: '1234',
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            joined: new Date()
        })
        user.save()

        res.send({sent: req.body});
    })


    
}


