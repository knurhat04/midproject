const express = require("express");
const app = express();
const port = 2000;
app.use(express.static("public"))
app.set('views', 'ejs');



app.use("/", require("./routes/index"));
app.use("/men", require("./routes/men"));
app.use("/women", require("./routes/women"));
app.use("/collection", require("./routes/collection"));
app.use("/index", require("./routes/index"));





app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);

