import React from 'react'
import './NewCollection.css'
import new_collection from '../Assets/new_collections'
import Item from '../Item/Item'
const NewCollection = () => {
  return (
    <div className='newCollection'>
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className="collection">
            {new_collection.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} price={item.price} old_price={item.old_price} image={item.image}/>
            })}
            
        </div>
    </div>
  )
}


export default NewCollection