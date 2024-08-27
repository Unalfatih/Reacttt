import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // 0 olarak verdiğim şey count state'nin initial state'i yani: count'un varsayılan(ilk) değeri
  //count: state'in ismi *state(senkron çalışır)
  //setCount: state'in değerini değiştirme fonksiyonu *setState(asenkron çalışırlar)
  const [count, setCount] = useState(0) //hook

  const onClickButtton = () => {
    // setCount(count + 10); //yanlış (setState içinde state kullanıyorsak böyle kullanmayız çünkü setState asenkron olduğundan bozulmalar olur.)
    setCount((prevState)=> prevState + 10); //doğru
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
        <button onClick={onClickButtton}>Click</button>
      </p>
    </>
  )
}

export default App
