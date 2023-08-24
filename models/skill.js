let skills = [
    {id: 0, skill: 'JavaScript', learned: true},
    {id: 1, skill: 'CSS', learned: true },
    {id: 2, skill: 'HTML', learned: true},
    {id: 3, skill: 'Python', learned: true},
    {id: 4, skill: 'Java', learned: false},
    {id: 5, skill: 'C++', learned: false}
]

module.exports ={
    getAll,
    getOne,
    create,
    deleteID,
    learn
}

function create(skill){
    console.log(skill)
    skill.id = Date.now() % 1000000;
    skill.learned = false;
    skills.push(skill)
}

function getAll(){
    return skills
}

function getOne(id){
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}

function deleteID(id){
    id = parseInt(id)
    const index = skills.findIndex(skill => skill.id === id)
    skills.splice(index, 1)
}

function learn(id){
    id = parseInt(id)
    const index = skills.findIndex(skill => skills.id === id)
    skills[index].learned = false ? true : false
}