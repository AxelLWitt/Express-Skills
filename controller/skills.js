const Skills = require('../models/skill')

module.exports = {
    index,
    show,
    new: newSkill,
    create
}

function index(req, res){
    res.render('skills/index',{
        skills: Skills.getAll(),
        title: 'Accumulated Skills'
    })
}

function show(req, res){
    res.render('skills/show',{
        skill: Skills.getOne(req.params.id),
        title: 'Skill Detail'
    })
}

function newSkill(req, res){
    res.render('skills/new', {
        title: 'Add a New Skill'
    })
}

function create(req, res){
    Skills.create(req.body)
    res.redirect('/skills')
}