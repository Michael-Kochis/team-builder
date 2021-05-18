import React, { useState } from 'react'
import { MemberForm } from './Form'
import { TeamMember } from './team-member'

function TeamList(props) {
    const [teamlist, setTeamlist] = useState([{
        name: "Michael Kochis",
        email: "rhishisikk@gmail.com",
        role: "God-King of the Universe"
    }]);
    
    function submit(who) {
        if (who.name && who.email && who.role) { 
            setTeamlist([...teamlist, who]);
        }
    }

    return(
        <div className="team-list">
            {teamlist && teamlist.map((member) => {
                return <TeamMember member={member} />
            })  }
            <MemberForm onSubmit={submit}></MemberForm>
        </div>
    )
}

export {
    TeamList
}