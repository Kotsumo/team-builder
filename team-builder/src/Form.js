import React from 'react'

export default function Form(props) {

    const {values, update, submit} = props


    const onChange = evt => {
        const {name, value} = evt.target
    
        update(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <label>Name
                    <input
                        name='name'
                        type='text'
                        onChange={onChange}
                        value={values.name}
                        placeholder='type a name...'
                        maxLength=''
                    />
                </label>

                <label>Email
                    <input
                        name='email'
                        type='email'
                        onChange={onChange}
                        value={values.email}
                        placeholder='type an email...'
                        maxLength='30'
                    />
                </label>

                <label>Role
                    <select value={values.role} name='role' onChange={onChange}>
                        <option value=''>--- Select role.. ---</option>
                        <option value='BACKEND ENGINEER'>backend engineer</option>
                        <option value='FRONTEND ENGINEER'>frontend engineer</option>
                        <option value='DESIGNER'>designer</option>
                    </select>
                </label>

                <div className='submit'>
                    <button disabled={!values.name || !values.email || !values.role}>submit</button>
                </div>
            </div>
        </form>
    )
}