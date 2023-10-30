import { Card } from "@/components/ui/card"
import { render } from "react-dom"
import Image from 'next/image'
import Berserker from '@/public/Berserker.webp'
const OpcionesPersonajes = () => {
    return(
        <div className="flex flex-col items-center justify-center h-screen">
        <Image
            src={Berserker}
            alt="Imagen de un Berserker"
        />
        <input 
            className="mt-4 p-2 rounded border" 
            type="text" 
            placeholder="Tu input aquí"
        />
    </div>
    )
}

export default OpcionesPersonajes