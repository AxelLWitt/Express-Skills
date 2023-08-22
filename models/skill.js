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
    getOne
}

function getAll(){
    return skills
}

function getOne(id){
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}