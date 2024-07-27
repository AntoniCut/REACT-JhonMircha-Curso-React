import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className='app-header'>

                <div className='header-logo'>
                    <a href="https://vitejs.dev" target="_blank">
                        <img src={viteLogo} className="logo" alt="Vite logo" />
                    </a>
                    <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>

                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>


                </div>

                <h1> React Básicos con Vite </h1>
            </div>



            <div className="card">
                
                {/* <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button> */}

            </div>

        </>
    )
}

export default App
