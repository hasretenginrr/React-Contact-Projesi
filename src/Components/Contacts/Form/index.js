import {useState} from 'react';

const initialFormValues= {fullName:'', phoneNumber:''};

function Form({addContact,contacts}){
    console.log(addContact);
    const [form, setForm]= useState(initialFormValues);
    const onChangeInput =(e)=>{
        setForm({...form, [e.target.name]: e.target.value});
    };

    const onSubmit =(e) =>{
        e.preventDefault(); //eventi alarak konsolda görünebilir hale getirdik. 

        if(form.fullName===""|| form.phoneNumber===""){
            return false; // eğer form boş ise formu gönderme. 
        }

        addContact([...contacts,form]);
        setForm(initialFormValues);

    };
    return(
    
        <form onSubmit={onSubmit}>
            <div>
        <input name="fullName" placeholder='Full Name' value={form.fullName} onChange={onChangeInput}></input>
        </div>
        <div>
        <input name="phoneNumber" placeholder='Phone Number' value={form.phoneNumber} onChange={onChangeInput}></input>
        </div>
        <div className='btn'>
            <button>Add</button>
        </div>
        </form>
    )
}

export default Form;