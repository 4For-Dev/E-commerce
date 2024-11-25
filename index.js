const express = require("express");
const DBConnection = require("./config/DBConnection")
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const authRouter =require("./routes/authRoute");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
DBConnection();
// Middleware to parse JSON
app.use(express.json());
app.use('/api/user',authRouter)
app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
})