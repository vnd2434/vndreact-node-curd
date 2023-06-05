
import mongoose from 'mongoose';

const Connection =async () =>{
    
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/curdApp')
            console.log('datasbase Connetct');
    } catch (error) {
        console.log('Error While Connecting with the database ',error);
    }
}

export default Connection;
