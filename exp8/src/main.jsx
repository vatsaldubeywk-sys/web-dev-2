function CounterApp() {
  const [count, setCount] = React.useState(0);

  return (
    <div id="container">
      <h1>REACT COUNTER <br /> APPLICATION</h1>
      <div id="display">{count}</div><br />
      <button onClick={() => setCount(count + 1)}>Increment(+)</button><br />
      <button onClick={() => setCount(count - 1)}>Decrement(-)</button><br /><br />
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CounterApp />);


/*import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)*/
