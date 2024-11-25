const { default: mongoose } = require("mongoose")

const DBConnection = () => {
    const conn = mongoose.connect(process.env.MONGODB_URI)
        .then(() => {
            console.log("DB connected successfully!");
        }).catch((err) => console.log(err));
};
module.exports=DBConnection;