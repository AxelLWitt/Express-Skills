const Skills = require('../models/skill')

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteID,
    learn
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

function deleteID(req, res){
    Skills.deleteID(req.params.id)
    res.redirect('/skills')
}

function learn(req, res){
    Skills.learn(req.params.id)
    res.redirect('/skills')
}