import React from 'react'
import styled from 'styled-components'

function TeamMember(props) {
    let { name, email, role } = props.member;

    const MemberCard = styled.div `
        border: 2px solid black;
        border-radius: 1rem;
        background-color: #9f9f9f;
        width: 60%;
        justify-self: center;
        margin: 0 auto;
    `

    return (
        <MemberCard>
            <p>Member: {name}</p>
            <p>Email: {email}</p>
            <p>Role: {role}</p>
        </MemberCard>
    )
}

export {
    TeamMember
}
