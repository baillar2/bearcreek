//REQUIREMENTS\\
var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var controller = require('./controllers/controller.js')
var logger = require('morgan')
var express = require('express')

//CREATE EXPRESS APP\\
var app = express();
mongoose.connect('mongodb://localhost/bcDB')

//APP CONFIG\\
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))

//EXPRESS SESSION SETUP\\
var session = require('express-session')
	app.sessionMiddleware = session({
	  secret: 'keyboard cat',
	  resave: false,
	  saveUninitialized: true,
	})
app.use(app.sessionMiddleware)

//PASSPORT CONFIG\\
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;
var User = require('./models/user.js')
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
    done(null, user.id);
});
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

var bcrypt = require('bcryptjs')
passport.use(new LocalStrategy(
    function(username, password, done) {
        User.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false);
            }
            // If we got this far, then we know that the user exists. But did they put in the right password?
            bcrypt.compare(password, user.password, function(error, response){
                if (response === true){
                    return done(null,user)
                }
                else {
                    return done(null, false)
                }
            })
        });
    }
));

//ROUTES\\

app.get('./admin', function(req, res){
	res.sendFile('/admin.html', {root: './public'})
})

//LISTEN\\

var port = 3000
app.listen(port, function(){
	console.log('server running on port ' + port)
})