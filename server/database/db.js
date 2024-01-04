import mongoose from "mongoose";

export const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@cluster0.xtxepon.mongodb.net/`;
  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("database connected successfully");
  } catch (error) {
    console.log("error while connecting with the database", error);
  }
};
