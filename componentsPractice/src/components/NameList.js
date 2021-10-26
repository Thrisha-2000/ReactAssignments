import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Thrisha',
            age: 21,
            skill: 'React'

        },
        {
            id: 2,
            name: 'Sravani',
            age: 20,
            skill: 'JavaScript'

        },
        {
            id: 3,
            name: 'Neel',
            age: 22,
            skill: 'Spring'

        }
    ]
    //const names = ['Thrisha','Varsha','Varsha']

    //const personList = persons.map(person => <h4>I am {person.name}. I am {person.age} years old. I know {person.skill}</h4>)

    const personList = persons.map(person => <Person key={person.id} person={person}></Person>)

    //const nameList = names.map((name, index) => <h4 key={index}>{index} {name}</h4>)
    return (
        <div>{personList}</div>
       //<div>{nameList}</div>
    )
}

export default NameList
