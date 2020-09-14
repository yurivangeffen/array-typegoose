import mongoose from 'mongoose';
import { ProjectModel } from './Project';

import dotenv from 'dotenv';
dotenv.config();

const DATABASE_USERNAME = process.env.DATABASE_USERNAME || 'admin';
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || 'admin';

//Set up default mongoose connection
var mongoDB = 'mongodb://' +
  DATABASE_USERNAME + ':' + DATABASE_PASSWORD +
  '@127.0.0.1/test';

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true, authSource: 'admin' }).then(async () => {
  await ProjectModel.create({
    users: [],
  })

})
