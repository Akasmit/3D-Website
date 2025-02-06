import { useState } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
  <main>
    <Router>
      <Routes>
        <Route path="/" element={'Home'} />
      </Routes>
    </Router>
  </main>  
)
}

export default App
