import  { useEffect, useState } from 'react'
function UseEffect() {
const [clicked,setClicked ] = useState()
const [count, setCount] = useState(null)

  useEffect(() => {
    console.log('we are in use state')
    
            // code to run after render update 
        return (
            () => { 
                console.log("return of use state")
            }
        )
  },[clicked])
  
  
    return (
    <div className='flex-row align-middle justify-center'>
        <button className='outline' onClick={() => setClicked('subscribe')}>Subscribe</button>
        <hr />
        <br />
        <button className='outline' onClick={() => setClicked('To')}>To</button>
        <hr />
        <br />
        <button className='outline' onClick={() => setClicked('Drop X Out')}>DropXout</button>

        <h1>{clicked}</h1>
        <hr />
        <button onClick={() => setCount(count + 1)}>increment</button>
        <h1>{count}</h1>
    </div>
  )
}

export default UseEffect