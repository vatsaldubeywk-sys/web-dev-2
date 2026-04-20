function StudentList (){
    const students = ["Rahul","Sahul","Mahul"]
    return (
        <ul>
        {students.map((s,index)=>(
            <li key={index}>{s}</li>
        ))}
        </ul>
    )
}



/* import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
*/
