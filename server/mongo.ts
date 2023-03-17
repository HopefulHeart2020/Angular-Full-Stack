import * as mongoose from 'mongoose';

const connectToMongo = async (): Promise<void> => {
  let mongodbURI: string;
  if (process.env.NODE_ENV === 'test') {
    mongodbURI = process.env.MONGODB_TEST_URI as string;
  } else {
    mongodbURI = process.env.MONGODB_URI as string;
  }
  await mongoose.connect(mongodbURI);
  console.log(`Connected to MongoDB (db: ${mongodbURI.split('/').pop()})`);
};

const disconnectMongo = async (): Promise<void> => {
  await mongoose.connection.close();
};

export { connectToMongo, disconnectMongo };
