import React, {useContext} from 'react'
import {UserContext, SkillContext} from '../App'

function E() {
    const user = useContext(UserContext)
    const skill = useContext(SkillContext)
    return (
        <div>
            <h1>I am {user}. I know {skill}</h1>
        </div>
    )
}

export default E
