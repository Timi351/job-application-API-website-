import express from "express";
const app = express()
import router from "./router/admin.js"
app.use(express.urlencoded({extended: true}))

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index")
})


app.use("/admin", router)







app.listen(3000, () =>{
    console.log("Server is running on port 3000")
})