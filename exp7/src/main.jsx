function Student(props) {

      return (
        <div className="student-card">
          <h3>{props.name}</h3>
          <p>Course: {props.course}</p>
          <p>Marks: {props.marks}</p>
        </div>
      );
    }

    function App() {
      return (
        <div className="app-container">
          <h2>Student Information</h2>
          <Student name="Rahul Sharma" course="Computer Science" marks="85" />
          <Student name="Anita Verma" course="Information Technology" marks="92" />
          <Student name="Rohan Gupta" course="Electronics" marks="78" />
        </div>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);
  




/* import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)*/
