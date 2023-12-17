import { useState } from 'react';
import './App.css'

function App() {

  const [color,setColor] =useState('black')

  return (
    <div
      className="w-full h-screen duration-500 bg-black"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-0">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
          <button
            onClick={() => {
              setColor("green");
            }}
            style={{backgroundColor:'green'}}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
          >
            Green
          </button>

          <button
            onClick={() => setColor("red")}
            style={{backgroundColor:'red'}}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
          >
            Red
          </button>
          <button
            onClick={() => setColor("pink")}
            style={{backgroundColor:'pink'}}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
          >
            Pink
          </button>
        </div>
      </div>
    </div>
  );
}

export default App
