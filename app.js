import  express  from "express";
import user from "./routers/user.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use("/user", user);

const config ={
    port:5138,
    hostname: 'localhost'
}

app.listen(config,()=>{
    console.log(`http://${config.hostname}:${config.port}`);
})