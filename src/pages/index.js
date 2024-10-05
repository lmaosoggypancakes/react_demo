import { useState } from "react";

function num(x) {
  return (
    <li className="list-disc text-3xl">the number is {x}</li>
  )
}


export default function Home() {
  
  const [count, setCount] = useState(1)
  const [numbers, setNumbers] = useState([])
  
  function nextValue() {
    if (count % 2  == 0) {
      numbers.push(count)
    }
    setCount(count * 2) 
  }

  return (
    <div className="w-screen h-screen bg-[#191724] text-[#e0def4]  flex flex-col justify-center items-center gap-4">
      <p className="text-8xl text-white">{count}</p>
      <button className="text-2xl p-4 rounded-md bg-[#ebbcba] text-[#26233a] hover:bg-[#f6c177] transition-all hover:scale-115"
      onClick={nextValue}
      >click me</button>
      <ul>  
        {numbers.map(x => num(x))}
      </ul>
    </div>
  );
}
