import Navbar from './components/Navbar';
import './App.css';
import { useState } from 'react';
import QuestionList from './components/QuestionList'



function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <div className='container'>
        <Navbar name1="ali" about="hamza" />
        <QuestionList/>
      </div>
    </>
  );
}

export default App;

