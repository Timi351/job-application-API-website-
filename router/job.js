import express from 'express';
const router = express.Router();

const jobs = []

//i wan t to be able to get the job but as like a daynaic valkue that i would loop over so i think using for  and an if statement if ther is no job
router.get('/', (req, res) => {
    res.render("job", {jobs})
}).post('/', (req, res) =>{
    const { title, role, description } = req.body;
    const newJob = {
        id: jobs.length + 1,
        title,
        role,
        description
    };
    jobs.push(newJob);
    res.status(201).redirect("/jobs");

})


export default router;