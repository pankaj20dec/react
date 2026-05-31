import React, { useState } from 'react'

const ItemCategory = ({catTitle, catItems}) => {
    const [tab, setTab] = useState(true);
    const tabHandle = () =>{
        setTab(!tab);
    }
  return (
    <>
       <button onClick={tabHandle}>{catTitle}{catItems.length}</button>
        <div className="item-category">
            {tab && (
                catItems.map((item) => (
                    <div key={item.id} className="item">
                        <h3>{item.name}</h3>
                        {/* <p>{item.description}</p> */}
                        <span>Price: {item.price/100}</span>
                    </div>
                ))
            )}
        </div>
    </>
  )
}

export default ItemCategory
