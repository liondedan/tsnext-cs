"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const nextFrame = require('next');
const url = require('url');
require('dotenv').config();
// import moment from 'moment'
const models_1 = require("./models");
const routes_1 = __importDefault(require("./routes"));
const mail_1 = __importDefault(require("@sendgrid/mail"));
const paymentRequest_1 = __importDefault(require("./emailTpl/paymentRequest"));
const basicContact_1 = __importDefault(require("./emailTpl/basicContact"));
mail_1.default.setApiKey(process.env.SG_MAIL || '');
const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = nextFrame({ dir: '.', dev });
const nextHandler = nextApp.getRequestHandler();
nextApp.prepare().then(() => {
    // Create express server and setup middleware
    const server = express_1.default();
    server.use(express_1.default.json());
    server.use(express_1.default.urlencoded({ extended: true }));
    // Routing
    server.use('/users', routes_1.default.user);
    server.use('/messages', routes_1.default.message);
    server.get('/', (req, res) => {
        return nextApp.render(req, res, '/', req.query);
    });
    server.get('/api/a', ({ res }) => {
        res.end(JSON.stringify({ a: 1 }));
    });
    server.post('/api/email', (req, res) => {
        res.send({ express: 'Reserve your booking' });
        console.log(req.body);
        const reqBody = {
            arrival: '12-02-2019',
            departureDate: '12-02-2019',
            remainder: 12,
            deposit: 123,
            total: 34,
        };
        const emailHtml = paymentRequest_1.default(reqBody);
        const msg = {
            // to: req.body.to,
            to: 'info@thinkdan.co.uk',
            from: 'info@coastalstay.co.uk',
            subject: 'Coastal Stay: Reserve your booking',
            text: 'Coastal Stay: Reserve your booking',
            html: emailHtml,
        };
        mail_1.default
            .send(msg)
            .then(() => {
            return res.send('Email has been sent!');
        })
            .catch((error) => {
            return res.send('There was an error sending the email', error);
        });
    });
    //@ts-ignore
    server.use('/api/contact', (req, res) => {
        const emailHtml = basicContact_1.default(req.body);
        const msg = {
            to: 'info@thinkdan.co.uk',
            from: 'info@coastalstay.co.uk',
            subject: 'Coastal Stay: Reserve your booking',
            text: 'Coastal Stay: Reserve your booking',
            html: emailHtml,
        };
        mail_1.default
            .send(msg)
            .then(() => {
            res.status(200).send('Oh uh, something went wrong');
        })
            .catch((error) => {
            res.status(404).send('There was an error sending the email', error);
        });
        // if (!req.body) return res.sendStatus(400);
        // res
        //   .status(200)
        //   .send('Success, Your registration has been saved to the database!');
        // console.log(res);
        // console.log('submitted contact form');
    });
    // Default catch-all renders Next app
    server.get('*', (req, res) => {
        const parsedUrl = url.parse(req.url, true);
        nextHandler(req, res, parsedUrl);
    });
    // Connect to DB and seed with fake data
    models_1.connectDb().then(async () => {
        server.listen(port, () => {
            // tslint:disable-next-line:no-console
            console.log(`server started at http://localhost:${port}`);
        });
    });
});
//# sourceMappingURL=index.js.map