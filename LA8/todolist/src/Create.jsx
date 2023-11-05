import React, {useState} from 'react'
import axios from 'axios'

function Create() {
  const [task, setTask] = useState()
  const handleAdd  = () => {
    axios.post('http://localhost:3001/add',{task: task})
    .then(result => {
      location.reload()
    })
    .catch(err => console.log(err))
  }
  return (
    <div className='create_form'>
      <input type="text" placeholdername="Enter Task" onChange={(e) => setTask(e.target.value)} />
      <button type="button" onClick={handleAdd}><strong>Add</strong></button>
    </div>
  )
}

export default Create