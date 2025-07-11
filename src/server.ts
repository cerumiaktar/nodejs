import app from "./app";

let server;

const port = 5000;

const bootstarp = async () =>{
    server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
}

bootstarp();