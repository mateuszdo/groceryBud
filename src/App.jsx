import { useState } from 'react'
import Form from './Form'
import Items from './Items'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
};

const defaultList = JSON.parse(localStorage.getItem('list') || '[]');

const App = () => {
  const [items, setItems] = useState(defaultList)
  
  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid()
    }
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
  }

  const removeItem = (itemId) => {
    const newItems = items.filter((singleItem) => singleItem.id !== itemId)
    setItems(newItems);
    setLocalStorage(newItems)
    toast.success(`${item.name} removed from the list.`)
}

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if(item.id === itemId) {
        const newItem = {...item, completed: !item.completed};
        return newItem
      }
      return item
    })
    setItems(newItems);
    setLocalStorage(newItems)
  } 

  return (
    <main className='section-center'>
        <h4>Grocery bud</h4>
        <Form 
          toast={toast} 
          addItem={addItem}/>
        <Items 
          items={items} 
          toast={toast}
          removeItem={removeItem}
          editItem={editItem}/>
        <ToastContainer 
          position='top-center'
          autoClose={1000}
          hideProgressBar={true} 
      />
    </main>
  );
};

export default App;
