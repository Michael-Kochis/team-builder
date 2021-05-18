import React, { useState } from 'react'
import styled from 'styled-components'

function MemberForm(props) {
    const initialValues = {
        name: "",
        email: "",
        role: ""
    }

    const [formValues, setFormValues] = useState({...initialValues});
    let { onSubmit } = props;

    const MemberForm = styled.form` 
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        
    `

    const update = (inputName, inputValue) => {
        setFormValues({...formValues, [inputName]: inputValue});
    }

    const onChange = event => {
        const {name, value} = event.target;
        update(name, value);    
    };

    function submit(event) {
        event.preventDefault();
        const newMember = {
            name: formValues.name.trim(),
            email: formValues.email.trim(),
            role: formValues.role.trim(),
        }
        onSubmit(newMember);
        setFormValues({initialValues});
    }

    return (
        <MemberForm>
            <label htmlFor="name">name</label>
            <input name="name" type="text" onChange={onChange} value={formValues.name}></input>
            <label htmlFor="email">email</label>
            <input name="email" type="email" onChange={onChange} value={formValues.email}></input>
            <label htmlFor="role">role</label>
            <select name="role" onChange={onChange} value={formValues.role}>
                <option value="">Choose One</option>
                <option value="Back End">Back End</option>
                <option value="Data Science">Data Science</option>
                <option value="Front End">Front End</option>
            </select>
            <input name="submit" type="submit" onClick={submit}></input>
        </MemberForm>
    )
}

export {
    MemberForm
}
