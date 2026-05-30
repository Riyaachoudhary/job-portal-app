// import mongoose from "mongoose";

// // Function to connect to the MongoDB database
// const connectDB = async()=>{
//     mongoose.connection.on('connected',()=> {console.log('Database Connected');

//     })

//     await mongoose.connect(`${process.env.MONGODB_URI}/job-portal`)
    
// }

// export default connectDB

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Database Connected");
    });

    mongoose.connection.on("error", (err) => {
      console.log("MongoDB Connection Error:", err);
    });

    await mongoose.connect(process.env.MONGODB_URI);

  } catch (error) {
    console.log("DB Connection Failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;