import express from 'express';
const router = express.Router();

let jobs = [
    {
        "id": 1,
        "title":"bjy,hCN" ,
        "role": "bku",
        "description" : "lorem10"
    },
    {
        "id": 2,
        "title":"bjy,hCN" ,
        "role": "bku",
        "description" : "lorem10"
    },

]

//i wan t to be able to get the job but as like a daynaic valkue that i would loop over so i think using for  and an if statement if ther is no job
router.get('/', (req, res) => {
    res.render("admin")
}).post('/', (req, res) =>{
    const { title, role, description } = req.body;
    const newJob = {
        id: jobs.length + 1,
        title,
        role,
        description
    };
    jobs.push(newJob);
    res.status(201).redirect("/admin/jobs");

})

router.delete("/jobs/:id", (req,res) =>{
    const Jobid = req.params.id
    //i want to first of all find the job that has that id then delete it from the array of jobs
    jobs = jobs.filter((job) => job.id != Jobid)
    //i want to now render the page woth the updated jobs 
    // res.redirect("/admin/jobs")
    res.json(jobs)})
//.put("/jobs/:id", (req,res)=>{
//     const Jobid = req.params.id
//     const jobIndex = jobs.findIndex((job) => job.id == Jobid)
    
//    const { id, title, role, description } = req.body;
//    const updatedJob = {
//     id: jobs[jobIndex].id,
//     title: jobs[jobIndex].title,
//     role: jobs[jobIndex].role,
//     description: jobs[jobIndex].description
//    }
//     res.json(updatedJob)
// })

router.get("/jobs", (req,res) =>{
    res.render("adminJobs", {jobs})
})



export default router