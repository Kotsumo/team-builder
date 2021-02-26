import './App.css';
import './Form';
import './User';
import Form from './Form';
import { useState } from 'react';
import User from './User';


const initialFormValues = {
  name: '',
  email: '',
  role: ''
}

export default function App() {
  const [user, setUser] = useState([])

  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue
    })
  }

  const submitForm = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
    }
  
    if(!newUser.name || !newUser.email || !newUser.role) {
      return;
    }
  
    
    setUser([...user, newUser])

    setFormValues(initialFormValues)
  }

  return (
    <div className='container'>
      <h1>Form App</h1>
    
      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      {
        user.map(user => {
          return (
            <User key={user.id} details={user} />
          )
        })
      }
    </div>
  )
}