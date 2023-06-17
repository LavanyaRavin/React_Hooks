import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home';
import Hookstate from './components/Hookstate';
import HookEffect from './components/HookEffect';
import ListConditional from './components/ListConditional';
import Hooksref from './components/Hooksref';
import HooksReducer from './components/HookReducer';
import Forms from './components/Forms';
// import HooksContext from './components/HooksContext';
import Child from './components/Child';
import {Countercontext} from './components/HooksContext'
import Table from './components/Table';


function App() {
  const [counter, setCounter] =useState(1);

  const increment=()=>{
    setCounter((prev)=>prev+1);
  }

  const decrement=()=>{
    setCounter((prev)=>prev-1);
  }

  return (
    <>
    <div className='route'>
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="usestate" element={<Hookstate />} />
          <Route path="useeffect" element={<HookEffect />} />
          <Route path="list" element={<ListConditional />} />
          <Route path="useref" element={<Hooksref />} />
          <Route path="usereducer" element={<HooksReducer/>} />
          <Route path="child" element={<Child/>} />
          <Route path="table" element={<Table/>} />
          <Route path="form" element={<Forms/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
    <div className='app'>
      <h2>App Component</h2>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <hr></hr>
      <Countercontext.Provider value={{counter, setCounter}}> 
      <Child counter={counter}/>
      </Countercontext.Provider>
    </div>
    </>
  );
}

export default App;
