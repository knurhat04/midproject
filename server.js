const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = 2000;
app.use(express.static("public"))
app.set('views', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Databse Connected Successfully!!");
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});


// const map = new mapgl.Map('container', {
//     key: 'Your API access key',
//     center: [55.31878, 25.23584],
//     zoom: 13,
// });

app.use("/", require("./routes/index"));
app.use("/men", require("./routes/men"));
app.use("/women", require("./routes/women"));
app.use("/collection", require("./routes/collection"));
app.use("/index", require("./routes/index"));

const UserRoute = require('./routes/UserRoute')
const CartRoute = require('./routes/CartRoute')
const OrderRoute = require('./routes/OrderRoute')
app.use('/user',UserRoute)
app.use('/order',OrderRoute)
app.use('/cart',CartRoute)

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);

