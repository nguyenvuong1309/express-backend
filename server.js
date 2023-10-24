// https://www.youtube.com/watch?v=H9M02of22z4&t=469s



const express = require("express")
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

connectDb()

const app = express();

const port = process.env.PORT || 5000;


app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

