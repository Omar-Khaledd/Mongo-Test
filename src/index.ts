import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import { MongoClient } from "mongodb";

const app = express();
app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});
const uri =
  "mongodb+srv://omarkhaled:omarkhaled@testcluster.sd47z.mongodb.net/?retryWrites=true&w=majority&appName=TestCluster";

mongoose
  .connect(uri)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error: Error) => console.log({ error }));
mongoose.connection.on("error", (error: Error) => console.log({ error }));

// Replace the uri string with your connection string.
// const client = new MongoClient(uri, {tls: true});
// async function run() {
//   try {
//     const database = client.db('sample_mflix');
//     const movies = database.collection('movies');
//     // Query for a movie that has the title 'Back to the Future'
//     const query = { title: 'Back to the Future' };
//     const movie = await movies.findOne(query);
//     console.log(movie);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
