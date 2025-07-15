import { useEffect, useState } from 'react'
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

import './App.css'


function App() {

  const [contador, setContador] = useState(0)
  const [modo, setModo] = useState(false)


  const incrementarContador = () => {
    setContador(contador + 1)
  }

  const reiniciarContador = () => {
    setContador(0)
  }

  const decrementarContador = () => {
    setContador(contador - 1)
  }

  useEffect(() => {
    if(modo){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }
  }, [modo])

  const cambiarTema = () => {
    setModo(!modo)
  }

  return (
    <>
      <header className='bg-amber-500 py-7 flex justify-between items-center px-5'>
        {/* Espacio vacío para alinear el centro */}
        <div className='w-12'></div>

        <h1 className='font-bold text-white text-4xl uppercase m-0 p-0 text-center'>
          Contador Simple
        </h1>

        <button className='bg-black text-white w-12 h-12 p-2 rounded-full cursor-pointer'
        onClick={cambiarTema}>
          {modo ? <FaSun className='w-full h-full' /> : <FaMoon className='w-full h-full'/>}
        </button>
      </header>

      <main className='pt-20'>

        <h2 className={`text-center text-9xl font-bold ${modo ? 'text-white' : 'text-black'}`}>
          {contador}
        </h2>

        <div className='flex justify-center flex-col md:gap-15 mt-20 md:flex-row'>

        <button className='bg-teal-700 px-8 md:py-4 py-6 text-white font-bold rounded-full cursor-pointer shadow-xl flex justify-center hover:bg-teal-600 mt-3'
          onClick={decrementarContador}> 
          Decrementar
        </button>

        <button className='bg-rose-600 px-8 md:py-4 py-6 text-white font-bold rounded-full cursor-pointer shadow-xl flex justify-center mt-3 hover:bg-rose-400'
          onClick={reiniciarContador}
        > 
            Reiniciar Contador 
        </button>

        <button className='bg-teal-700 px-8 md:py-4 py-6 text-white font-bold rounded-full cursor-pointer shadow-xl flex justify-center hover:bg-teal-600 mt-3'
          onClick={incrementarContador}
        > 
            Incrementar
        </button>

        </div>
      </main>
    </>
  )
}

export default App
