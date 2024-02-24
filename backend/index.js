const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();

require("dotenv").config();

router.use(bodyParser.json());
app.use(express.json());
app.use(cors());


const port = process.env.PORT || 8000;
const uri = process.env.DB_URI;

app.listen(port, () => console.log(`Server running on port ${port}`));

mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Database Connected successfully"))
    .catch((err) => console.log("Database Connection failed", err.message));
