const express = require('express');
require('dotenv').config()
var methodOverride = require('method-override')
const route = require('./routes/client/index.route');
const routeAdmin = require('./routes/admin/index.route');
const database = require('./config/database');
const bodyParser = require('body-parser');
const flash = require('express-flash');
const cookieParser = require('cookie-parser');
const session = require("express-session");

const app = express();

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }))
const port = process.env.PORT;

app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');

//flash
app.use(cookieParser('hellomau'));
app.use(session({ cookie: { maxAge: 60000 }}));
app.use(flash());
const systemConfig = require('./config/system');

// bien toan cuc
app.locals.prefixAdmin = systemConfig.prefixAdmin;
database.connect();

// Dùng __dirname bởi vì nếu public lên mạng nó không hiểu mình đang làm gì
app.use(express.static(`${__dirname}/public`));
// Router
route(app);
routeAdmin(app);

app.listen(port, () => {
    console.log(`Example vai nho ${port}`)
})