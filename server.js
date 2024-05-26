const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const socketIO = require('socket.io');

//const http = require('http').createServer();
//(http, {
//   cors: { origin: '*' },
//    transports: ['websocket', 'polling'],
//});
// const { createServer } = require('http');
// const { Server } = require('socket.io');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;
//const httpServer = createServer(app);

/* options */
// const WebPORT = process.env.PORT || 8081;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });
const sess = {
    secret: 'Super secret secret',
    cookie: {
        maxAge: 60 * 60 * 1000, //increase time copy from mini project
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

const sessionParser = session(sess);

app.use(sessionParser);

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
// io.engine.use(sessionParser);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));

app.use(routes);

// const wrap = middleware => (socket, next) => middleware(socket.request, {}, next);

// io.use(wrap(sessionParser));

// io.on('connection', (socket) => {
//     socket.on('message', (message) => {
//         io.emit('broadcast', `Player said ${message} ${socket.request.session}`);
//     });
// });

sequelize.sync({ force: false }).then(() => {
    const expressInst = app.listen(PORT, () => console.log('Now listening'));
    const io = socketIO(expressInst, {
        cors: { origin: '*' },
        transports: ['websocket', 'polling'],
    });

    //    httpServer.listen(8081)

    io.on('connection', (socket) => {
        socket.on('message', (message) => {
            io.emit('broadcast', message);
        });
    });
    // http.listen(WebPORT, () => console.log('WebSocket listening'));
});
