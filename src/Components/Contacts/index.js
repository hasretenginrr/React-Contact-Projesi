import List from './List';
import Form from './Form';
import React, { useState, useEffect } from 'react';
import './styles.css';

function Contacts(){
    const [contacts,setContacts]=useState([]);

    useEffect(()=>{
        console.log(contacts);

    },[contacts]);


    return(
        <div id="container">
            <h1>Contacts</h1>
            <List contacts= {contacts}></List>
            <Form addContact= {setContacts} contacts={contacts}></Form>
            
        </div>
    )
}
export default Contacts;