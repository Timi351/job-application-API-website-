import express from "express";
const app = express()
import router from "./router/job.js"
app.use(express.urlencoded({extended: true}))

app.set("view engine", "ejs");

//we would want to build a job application that allows users to create a job posting and apply for jobs.

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/admin", (req, res) => {
    res.render("admin")

})

app.use("/jobs", router)








app.listen(3000, () =>{
    console.log("Server is running on port 3000")
})