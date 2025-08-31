import mongoose from 'mongoose';


export default async function connectDb() {
    try {
        await mongoose.connect(process.env.MONGODB_URL!);
        const connection = mongoose.connection;
        connection.on("connected", () => { console.log('Mongodb connected Successfully') })

        connection.on('error', () => {
            console.log('Mongodb connection Error:')
            process.exit();
        })
    } catch (error) {
        console.log(error);
        console.log('Something Went Wrong');
        console.log("Database connection failed:")

    }
}