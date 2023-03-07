import mongoose from 'mongoose';

const Conn = async (username, password) => {

    const URL = `mongodb://${username}:${password}@ac-wzhf50f-shard-00-00.5hmb3qg.mongodb.net:27017,ac-wzhf50f-shard-00-01.5hmb3qg.mongodb.net:27017,ac-wzhf50f-shard-00-02.5hmb3qg.mongodb.net:27017/?ssl=true&replicaSet=atlas-ep9blz-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Databse connect ')
    }
    catch (error) {
        console.log(`error while connect on database!!!!`, error);
    }
}

export default Conn;