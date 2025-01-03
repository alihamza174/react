import Navbar from './components/Navbar';
import './App.css';
import { useState } from 'react';
import QuestionList from './components/QuestionList'
import { Form } from './components/Form';



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
        <Form/>
      </div>
    </>
  );
}

export default App;

