import app from "./app";
import { client } from "./config/mongodb";

let server;

const port = 5000;

const bootstarp = async () => {
  await client.connect();
  console.log("Connected to Mongodb");
  server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
}

bootstarp();