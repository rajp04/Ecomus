const mongoose = require('mongoose')

const Database = async () => {
    try {
        const Connect = await mongoose.connect(`${process.env.DB_URL}`);
        console.log(`\nMongo DB Connected || Host :- ${Connect.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = Database;