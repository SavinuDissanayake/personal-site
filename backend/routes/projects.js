const router = require('express').Router();
let Project = require('../models/project.model');

router.route('/').get((req, res) => {
    Project.find().sort({'_id':-1})
        .then(projects => res.json(projects))
        .catch(err => res.status(400).json('Error' + err));
});

router.route('/add').post((req,res) => {
    const projectTitle = req.body.projectTitle;
    const shortDescription = req.body.shortDescription;
    const description = req.body.description;
    const languages = req.body.languages;
    const gitlink = req.body.gitlink;
    const popularProject = Boolean(req.body.popularProject);
    const date = req.body.date;

    const newProject = new Project({
        projectTitle,
        shortDescription,
        description,
        languages,
        gitlink, 
        popularProject,
        date,
    });

    newProject.save()
        .then(() => res.json('Project added!'))
        .catch(err => res.status(400).json('Error' + err));
});

router.route('/:id').get((req,res) => {
    Project.findById(req.params.id)
        .then(project => res.json(project))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Project.findByIdAndDelete(req.params.id)
        .then(() => res.json('Exercise deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req,res) => {
    Exercise.findById(req.params.id)
        .then(project => {
            project.projectTitle = req.body.projectTitle;
            project.shortDescription = req.body.shortDescription;
            project.description = req.body.description;
            project.languages = req.body.languages;
            project.gitlink = req.body.gitlink;
            project.popularProject = Boolean(req.body.popularProject);
            project.date = req.body.date;

            project.save()
                .then(() => res.json('Project updated!'))
                .catch(err => res.status(400).json('Error: ' +err));
        })
        .catch(err => res.status(400).json('Error: ' +err));
});

module.exports = router;