import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Toggle = () => {
    const [on,setOn] = useState(true)

    const handleClick = ()=>{
          setOn(!on)
    }
     
  return (
    <div>
        <button onClick={handleClick}>{on?'on':'off'}</button>
    </div>
  )
}

ReactDOM.render(
    <Toggle/>,
    document.getElementById('root')
)