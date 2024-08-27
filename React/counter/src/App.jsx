import './App.css'
import Counter from './components/Counter'

function App() {
  const increment = (message) =>{
    console.log(message);
    
  };

  return (
    <>
      <h1>Counter</h1>
      <Counter title="fatih" count ={10}/>
      <Counter title="eren"/>
      <Counter title="berfin" increment={increment}/>
    </>
  )
}

export default App
