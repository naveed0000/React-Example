import { useState } from 'react'
import datas from './datas.json'

function Data() {
    const [data, setData] = useState(datas); 
    function handleClick() { 
        setData([])
    }
    console.log(datas[0]);

    const handleRemove = (itemId) =>  { 
        setData(data.filter(item => item.id!==itemId))
    }
    const handleUpdate = (itemId) => { 
        setData(data.map(items => { 
            if(items.id === itemId) { 
                return {name : "newname"}
            }
            else { 
                return items;
            }
        }))

    }
  return (
        <>
            <ul>
                <li className='flex-row justify-items-center'>
                    {
                        data.map((items) => 
                             <li className='my-5' key={items.id}>
                                {items.name} 
                                <br />
                                 <button onClick={() => handleUpdate(items.id)} className='mx-10 my-5'>Update</button>
                                <button onClick={() => handleRemove(items.id)} className='mx-10 my-5'>Remove</button>
                            </li>
                        )
                    }
                </li>
            </ul>
            <button onClick={() => setData([])}>Clear</button>
        </>
    )
}

export default Data