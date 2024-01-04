import React from 'react'

const ReactList = () => {
  const students = ['anil', 'sidhu', 'sam', 'rutu'];


  return (
    <div>
      <h1>handle array with list</h1>
      <ul>
        {
          students.map((data,index) =>(
            <li key={index}>{data}</li>
          )
          )
        }
      </ul>

    </div>
  )
}

export default ReactList