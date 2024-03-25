import { star} from "../assets/icons";
import {X} from 'lucide-react'
import * as Dialog from '@radix-ui/react-dialog';
import { useState } from "react";

export  function PopularCard({imgURL, name, price}) {

  const [selectedSize, setSelectedSize] = useState(null)

  const tamanhos = [{numero:36, selected:false},
                    {numero:37, selected:false},
                    {numero:38, selected:false},
                    {numero:39, selected:false},
                    {numero:40, selected:false},
                    {numero:41, selected:false},
                    {numero:42, selected:false},
                    {numero:43, selected:false},
                    {numero:44, selected:false},
                    {numero:45, selected:false},
                    {numero:46, selected:false},
                    {numero:47, selected:false}]

  const handleSizeClick = (tamanho) => {
    setSelectedSize(tamanho.numero); // Update selected size state
      }


  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <div className="flex flex-1 flex-col w-full max-sm:w-full items-start" >
            <img src={imgURL} alt={name} className="w-[280px] h-[280px]:" />
            <div className="mt-8 flex justify-start gap-2.5">
                <img src={star} alt="nota" width={24} height={24}/>
                <p className="font-montserrat leading-normal text-xl text-slate-gray">4.5</p>
            </div>
            <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
            <p className="mt-2 font-semibold font-montserrat text-coral-red text-2lx leading-normal ">{price}</p>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal className='justify-center items-center'>
        <Dialog.Overlay className="inset-0 fixed bg-black/50">
          
          <Dialog.Content className="bg-white w-[50vh] h-[60vh] justify-center p-4 max-sm:flex max-sm:justify-normal max-sm:h-screen ">
            
            <Dialog.Close className="top-0 right-0 absolute m-4 ">
              <X className="flex text-slate-gray size-[32px]"/>
            </Dialog.Close>

              <div className="flex flex-col mt-[30px]">
                
                <h1 className="font-palanquin text-3xl font-semibold mb-2 ml-2  ">{name}</h1>
                
                <img src={imgURL} className="size-[400px] " />

                <div className="flex justify-between items-center mx-4 mt-4 border-b-[1px] border-slate-200">
                  <h1 className="font-semibold text-coral-red text-3xl font-montserrat">{price}</h1>
                  <div className=" flex justify-start gap-2.5">
                    <img src={star} alt="nota" width={24} height={24}/>
                    <p className="font-montserrat leading-normal text-2xl text-slate-gray">4.5</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 grid-flow-row gap-2 mt-8 ml-5  ">

                  {tamanhos.map((tamanho) => (
                    <>
                      <h1 onClick={() => handleSizeClick(tamanho)}  className={`flex  w-[100px] h-[40px] justify-center items-center rounded-lg   ${selectedSize === tamanho.numero ? 'bg-coral-red text-white border-slate-400 border-[2px]' : 'bg-slate-300 text-black ease-in-out-out duration-500'}`}>{tamanho.numero}</h1>
                    </>
                  ))}

                </div>

                  <a href="../sections/Hero.jsx" className="max-sm:w-full bg-coral-red text-3xl text-white font-palanquin max-sm:h-[70px] max-sm:mt-8 flex justify-center font-bold items-center rounded-xl ">
                    <h1>Comprar</h1>
                  </a>
              </div>
            
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
