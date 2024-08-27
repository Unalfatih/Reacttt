import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios";
import Calculator from './components/Calculator'
import Table from './components/Table';

function App() {
  const [personList, setPersonList] = useState([]);

  const addPerson = (person) => {
    setPersonList([...personList, person]);
  };

  const onDelete = (id) => {
    setPersonList((prevState) => prevState.filter((p) => p.id !== id));
  };

  useEffect(() => {
    axios.get("http://localhost:5001/calculator").then((response) => {
      setPersonList(response.data);
    });
  },[]);

  return (
    
    <div className='container'>
      <Calculator onAddPerson={addPerson}/>
      <Table personList={personList} onDelete={onDelete}/>
    </div>
  )
}

export default App
