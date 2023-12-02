import React, { useState } from 'react';

import {
  form,
  submitInput,
  textInput
} from './SimpleForm.module.scss';

export const SimpleForum = () => {
 
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log(name, email)
    }

  return (
      <form className={`${form}`}>
        <input value={name} onChange={handleNameChange} className={`${textInput}`} type='text' placeholder='Name' ></input>
        <input value={email} onChange={handleEmailChange} className={`${textInput}`} type='text' placeholder='E-mail'></input>
        <input onClick={handleFormSubmit} className={`${submitInput}`} type='submit' value="Submit" />
      </form>
  );
};

