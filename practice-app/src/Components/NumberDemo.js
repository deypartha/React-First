import React,{useState} from 'react'

export default function NumberDemo() {

    let [num, setItems] = useState(0)
    function AddItem(){
        setItems([...items,{id:items.length, value:Math.floor(Math.random()*10)+1}])
    }
    
  return (
    <div>
      <button onClick={AddItem}>Add Item</button>
      <ul>
            {
                items.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))
            }
      </ul>
    </div>
  )
}
