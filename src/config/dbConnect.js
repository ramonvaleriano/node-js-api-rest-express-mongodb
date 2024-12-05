import mongoose from "mongoose";

async function conectaNaDataBase() {
  mongoose.connect(process.env.DB_CONECTION_MONGO);

  return mongoose.connection;
}

export default conectaNaDataBase;
