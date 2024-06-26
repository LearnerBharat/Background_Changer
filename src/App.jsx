import { useState } from 'react';

function App() {
  const [color, setColor] = useState('olive');

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-purple-200 px-3 py-2 rounded-xl'>
          <button onClick={() => setColor("#DF2E38")} className='outline-none px-4 py-1 rounded text-white shadow-lg' style={{backgroundColor: "#DF2E38"}}>Red</button>
          <button onClick={() => setColor("#1A5D1A")} className='outline-none px-4 py-1 rounded text-white shadow-lg' style={{backgroundColor: "#1A5D1A"}}>Green</button>
          <button onClick={() => setColor("#687EFF")} className='outline-none px-4 py-1 rounded text-white shadow-lg' style={{backgroundColor: "#687EFF"}}>Blue</button>
          <button onClick={() => setColor("#FFB000")} className='outline-none px-4 py-1 rounded text-white shadow-lg' style={{backgroundColor: "#FFB000"}}>Gold</button>
          <button onClick={() => setColor("#7743DB")} className='outline-none px-4 py-1 rounded text-white shadow-lg' style={{backgroundColor: "#7743DB"}}>Violet</button>
          <button onClick={() => setColor("#FF9843")} className='outline-none px-4 py-1 rounded text-white shadow-lg' style={{backgroundColor: "#FF9843"}}>Orange</button>
          <button onClick={() => setColor("#4F6F52")} className='outline-none px-4 py-1 rounded text-white shadow-lg' style={{backgroundColor: "#4F6F52"}}>Army</button>
          <button onClick={() => setColor("#FFA1F5")} className='outline-none px-4 py-1 rounded text-white shadow-lg' style={{backgroundColor: "#FFA1F5"}}>Pink</button>
          <button onClick={() => setColor("#F7DB6A")} className='outline-none px-4 py-1 rounded text-white shadow-lg' style={{backgroundColor: "#F7DB6A"}}>Yellow</button>
        </div>
      </div>
    </div>
  );
}

export default App;
