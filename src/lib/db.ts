import mongoose from "mongoose";

export const connected: { isConnected?: number } = {};

const url = process.env.MONGO_URL;

export const DbConnection = async () => {
  try {
    if (connected.isConnected) {
      return;
    }
    // @ts-ignore
    const connection = await mongoose.connect(url);
    // @ts-ignore
    connected.isConnected = connection.connections[0].readyState;
  } catch (err) {
    console.log(err);
  }
};
