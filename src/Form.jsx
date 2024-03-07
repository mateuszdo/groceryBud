import React from 'react'
import {useState} from 'react'

const Form = ({toast, addItem}) => {

    const [newItemName, setNewItemName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        !newItemName && toast.error('Item name cannot be empty');
        newItemName && addItem(newItemName);
        newItemName && toast.success(`${newItemName} added to the list`);
        //console.log(items);
        setNewItemName('');
    }
    return (
        <form className='form-control' onSubmit={handleSubmit}>
            <input 
                className='form-input' 
                onChange={(e) => setNewItemName(e.target.value)}
                value={newItemName}></input>
            <button className='btn' type='submit'>Add</button>
        </form>
    )
}

export default Form
