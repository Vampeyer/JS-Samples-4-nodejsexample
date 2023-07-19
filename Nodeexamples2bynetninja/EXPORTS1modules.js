

const people = ['yoshi', 'ryu', 'chun-li', 'mario'  ]; 

console.log(people)

const ages = [ 5 ,10, 15, 20, 25, 30]

/*
module.exports = {
    people: 'people'            //// === is the same as just - people , or [people, age]
}*/

module.exports = { people , ages };    //// EXPORTing the variable individually. 